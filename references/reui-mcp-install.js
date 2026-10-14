"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// installer/install.ts
var import_node_fs = __toESM(require("node:fs"));
var import_node_os = __toESM(require("node:os"));
var import_node_path2 = __toESM(require("node:path"));

// installer/text.ts
var import_node_path = __toESM(require("node:path"));
var escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function markerLines(text, marker) {
  const re = new RegExp(
    `^([ \\t]*)${escapeRegExp(marker)}([ \\t]*)\\r?$`,
    "gm"
  );
  return [...text.matchAll(re)].map((m) => {
    const lineStart = m.index ?? 0;
    const start = lineStart + m[1].length;
    const end = start + marker.length;
    return { start, end, lineStart, lineEnd: end + m[2].length };
  });
}
function onePair(starts, ends) {
  return starts.length === 1 && ends.length === 1 && ends[0].start > starts[0].start;
}
function hasMarkerLine(text, marker) {
  return markerLines(text.replace(/^﻿/, ""), marker).length > 0;
}
function tomlTableNames(text) {
  const names = [];
  let inString = null;
  for (const line of text.split(/\r?\n/)) {
    const m = inString === null ? line.match(/^\s*\[\[?\s*([^\]#]+?)\s*\]\]?\s*(#.*)?$/) : null;
    if (m) names.push(m[1].replace(/\s*\.\s*/g, "."));
    for (const delim of ['"""', "'''"]) {
      const count = line.split(delim).length - 1;
      if (count % 2 === 1) inString = inString === delim ? null : delim;
    }
  }
  return names;
}
function upsertTomlBlock(text, body, startMark, endMark, tableHeader) {
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const block = `${startMark}
${body}
${endMark}`;
  const blockEol = block.split("\n").join(eol);
  const starts = markerLines(text, startMark);
  const ends = markerLines(text, endMark);
  if (onePair(starts, ends)) {
    const own = tomlTableNames(body);
    const foreign = tomlTableNames(
      text.slice(starts[0].end, ends[0].start)
    ).filter(
      (name) => !own.some((o) => name === o || name.startsWith(`${o}.`))
    );
    if (foreign.length > 0) {
      return { ok: false, reason: "another table between the markers" };
    }
    const next2 = text.slice(0, starts[0].start) + blockEol + text.slice(ends[0].end);
    return { ok: true, text: next2, changed: next2 !== text };
  }
  if (starts.length !== 0 || ends.length !== 0) {
    return { ok: false, reason: "malformed markers" };
  }
  let base = text;
  if (tableHeader) {
    const lines = base.split(/\r?\n/);
    const header = tableHeader.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const headerRe = new RegExp(`^\\s*${header}\\s*(#.*)?$`);
    let inString = null;
    let start = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (inString === null && headerRe.test(line)) {
        start = i;
        break;
      }
      for (const delim of ['"""', "'''"]) {
        const count = line.split(delim).length - 1;
        if (count % 2 === 1) inString = inString === delim ? null : delim;
      }
    }
    if (start !== -1) {
      let end = start + 1;
      while (end < lines.length && !/^\s*\[/.test(lines[end])) end++;
      lines.splice(start, end - start);
      base = lines.join(eol);
    }
  }
  const head = base.replace(/\s+$/, "");
  const next = `${head ? `${head}${eol}${eol}` : ""}${blockEol}${eol}`;
  return { ok: true, text: next, changed: next !== text };
}
function displayPath(target, ctx) {
  const under = (base) => target === base || target.startsWith(`${base}${import_node_path.default.sep}`);
  if (ctx.project !== ctx.home && under(ctx.project)) {
    return import_node_path.default.relative(ctx.project, target) || ".";
  }
  if (under(ctx.home)) return `~${target.slice(ctx.home.length)}`;
  return target;
}
function isInside(base, target) {
  const rel = import_node_path.default.relative(import_node_path.default.resolve(base), import_node_path.default.resolve(target));
  return rel !== "" && !rel.startsWith("..") && !import_node_path.default.isAbsolute(rel);
}
function parseJsonConfig(text) {
  try {
    const value = JSON.parse(text.replace(/^\uFEFF/, ""));
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return { ok: false, error: "top level is not an object" };
    }
    return { ok: true, value };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
var TRUTHY_ENV = /^(1|true|yes|on)$/i;
var FALSY_ENV = /^(0|false|no|off)$/i;
function envFlag(raw) {
  return TRUTHY_ENV.test((raw ?? "").trim());
}
function parseAgentsMdMode(raw) {
  const value = (raw ?? "").trim();
  if (value === "" || TRUTHY_ENV.test(value) || /^auto$/i.test(value)) {
    return "auto";
  }
  if (FALSY_ENV.test(value)) return "skip";
  if (/^create$/i.test(value)) return "create";
  if (/^remove$/i.test(value)) return "remove";
  return null;
}
var AGENTS_BEGIN = "<!-- BEGIN:reui-agent-rules -->";
var AGENTS_END = "<!-- END:reui-agent-rules -->";
var GLOBAL_BLOCK_SCOPE = "In projects that use ReUI (components.json lists the @reui registry), ";
function renderAgentsBlock(template, opts) {
  let text = template.replace(/\r\n/g, "\n").trim().split("{{SKILL_DIR}}").join(opts.skillDir);
  if (opts.global) {
    text = text.replace(
      /^This project uses an existing design system: ReUI on shadcn\/ui\./m,
      `${GLOBAL_BLOCK_SCOPE}the UI uses an existing design system: ReUI on shadcn/ui.`
    );
  }
  return text;
}
var CURSOR_RULE_FRONTMATTER = "---\ndescription: ReUI - read the reui skill before any UI work\nalwaysApply: true\n---";
function cursorRuleText(block) {
  const body = block.replace(
    /^Managed by the ReUI installer\..*$/m,
    "Managed by the ReUI installer. This file is replaced on the next run."
  );
  return `${CURSOR_RULE_FRONTMATTER}

${body}
`;
}
function eolOf(text) {
  return text.includes("\r\n") ? "\r\n" : "\n";
}
function upsertMarkdownBlock(text, block, start, end) {
  const bom = text.startsWith("\uFEFF") ? "\uFEFF" : "";
  const body = text.slice(bom.length);
  const eol = eolOf(body);
  const lines = block.replace(/\r\n/g, "\n").replace(/\n+$/, "").split("\n");
  const marked = [start, ...lines, end].join(eol);
  const starts = markerLines(body, start);
  const ends = markerLines(body, end);
  if (starts.length === 0 && ends.length === 0) {
    const sep = body === "" ? "" : /\r?\n$/.test(body) ? eol : `${eol}${eol}`;
    return {
      ok: true,
      text: `${bom}${body}${sep}${marked}${eol}`,
      changed: true
    };
  }
  if (!onePair(starts, ends)) {
    return { ok: false, reason: "malformed markers" };
  }
  const next = body.slice(0, starts[0].start) + marked + body.slice(ends[0].end);
  return { ok: true, text: bom + next, changed: next !== body };
}
function removeMarkdownBlock(text, start, end) {
  const bom = text.startsWith("\uFEFF") ? "\uFEFF" : "";
  const body = text.slice(bom.length);
  const starts = markerLines(body, start);
  const ends = markerLines(body, end);
  if (starts.length === 0 && ends.length === 0) {
    return { ok: true, text, changed: false };
  }
  if (!onePair(starts, ends)) {
    return { ok: false, reason: "malformed markers" };
  }
  let before = body.slice(0, starts[0].lineStart);
  let after = body.slice(ends[0].lineEnd).replace(/^\r?\n/, "");
  if (before === "") {
    after = after.replace(/^\r?\n/, "");
  } else if (/\r?\n\r?\n$/.test(before) && (after === "" || /^\r?\n/.test(after))) {
    before = before.replace(/\r?\n$/, "");
  }
  return { ok: true, text: bom + before + after, changed: true };
}
function blockEndByteOffset(text, end) {
  const found = markerLines(text, end)[0];
  if (!found) return null;
  return new TextEncoder().encode(text.slice(0, found.end)).length;
}

// installer/install.ts
var MCP_ORIGIN = (process.env.REUI_MCP_ORIGIN || "https://mcp.reui.io").replace(/\/+$/, "");
var MCP_URL = `${MCP_ORIGIN}/api/mcp`;
var WEB_ORIGIN = (process.env.REUI_WEB_ORIGIN || "https://reui.io").replace(
  /\/+$/,
  ""
);
var PROJECT = import_node_path2.default.resolve(process.env.REUI_DIR || process.cwd());
var GLOBAL = envFlag(process.env.REUI_GLOBAL);
var DRY_RUN = envFlag(process.env.REUI_DRY_RUN);
var AGENTS_MD = parseAgentsMdMode(process.env.REUI_AGENTS_MD);
var KEY = (process.env.REUI_LICENSE_KEY || "").trim() || null;
var home = import_node_os.default.homedir();
var XDG_CONFIG = process.env.XDG_CONFIG_HOME && import_node_path2.default.isAbsolute(process.env.XDG_CONFIG_HOME) ? process.env.XDG_CONFIG_HOME : import_node_path2.default.join(home, ".config");
var log = (...a) => console.log(...a);
var realOr = (p) => {
  try {
    return import_node_fs.default.realpathSync(p);
  } catch {
    return p;
  }
};
var PROJECT_REAL = realOr(PROJECT);
var HOME_REAL = realOr(home);
var shown = (file) => {
  const plain = displayPath(file, { project: PROJECT, home });
  return import_node_path2.default.isAbsolute(plain) ? displayPath(file, { project: PROJECT_REAL, home: HOME_REAL }) : plain;
};
var REMOVE_COMMAND = `curl -fsSL https://mcp.reui.io/install | ${GLOBAL ? "REUI_GLOBAL=1 " : ""}REUI_AGENTS_MD=remove node -`;
var REMOVE_TARGETS = GLOBAL ? [{ file: import_node_path2.default.join(home, ".codex", "AGENTS.md"), deleteIfEmpty: true }] : [
  { file: import_node_path2.default.join(PROJECT, "AGENTS.md"), deleteIfEmpty: true },
  { file: import_node_path2.default.join(PROJECT, "GEMINI.md"), deleteIfEmpty: false }
];
var REMOVE_TARGETS_SHOWN = REMOVE_TARGETS.map((t) => shown(t.file)).join(
  " and "
);
var PROJECT_SKILL_DIR = ".agents/skills/reui";
var GLOBAL_SKILL_DIR = "~/.agents/skills/reui";
var CLAUDE_FILES = [
  "CLAUDE.md",
  import_node_path2.default.join(".claude", "CLAUDE.md"),
  "CLAUDE.local.md"
];
var INSTRUCTION_MAX_BYTES = 512 * 1024;
var CODEX_DOC_MAX_BYTES = 32 * 1024;
var changes = /* @__PURE__ */ new Map();
var skipped = [];
var notes = [];
var instructionFilesDone = /* @__PURE__ */ new Set();
var JSON_HOW = "Add this by hand, merging it into the existing object:";
var BLOCK_HOW = "Add this block by hand, markers included (replace the ReUI block if one is already there):";
var NOT_UTF8 = "is not UTF-8 text (for example UTF-16 written by PowerShell), so it was left untouched";
function readIfExists(file) {
  try {
    return import_node_fs.default.readFileSync(file, "utf8");
  } catch (err) {
    if (err.code === "ENOENT") return null;
    throw err;
  }
}
function filesUnder(dir, base = dir) {
  const out = [];
  for (const entry of import_node_fs.default.readdirSync(dir, { withFileTypes: true })) {
    const full = import_node_path2.default.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = filesUnder(full, base);
      if (nested === null) return null;
      out.push(...nested);
    } else if (entry.isFile()) {
      out.push(import_node_path2.default.relative(base, full).split(import_node_path2.default.sep).join("/"));
    } else {
      return null;
    }
  }
  return out;
}
function skillDirStatus(dir, files) {
  if (!lexists(dir)) return "created";
  let have = null;
  try {
    have = filesUnder(dir);
  } catch {
  }
  if (have === null || have.length !== files.length) return "updated";
  const want = new Map(files.map((f) => [f.path, f.content]));
  const same = have.every(
    (rel) => want.get(rel) === import_node_fs.default.readFileSync(import_node_path2.default.join(dir, rel), "utf8")
  );
  return same ? "unchanged" : "updated";
}
function apply(op, fail) {
  const target = op.kind === "skill-dir" ? op.dir : op.file;
  let status;
  let writing = false;
  try {
    if (op.kind === "write") {
      const current = readIfExists(op.file);
      status = current === null ? "created" : current === op.content ? "unchanged" : "updated";
      if (!DRY_RUN && status !== "unchanged") {
        writing = true;
        import_node_fs.default.mkdirSync(import_node_path2.default.dirname(op.file), { recursive: true });
        import_node_fs.default.writeFileSync(op.file, op.content);
      }
      if (op.as && status !== "unchanged") status = op.as;
    } else if (op.kind === "skill-dir") {
      status = skillDirStatus(op.dir, op.files);
      if (!DRY_RUN && status !== "unchanged") {
        writing = true;
        import_node_fs.default.rmSync(op.dir, { recursive: true, force: true });
        for (const f of op.files) {
          const file = import_node_path2.default.resolve(op.dir, f.path);
          import_node_fs.default.mkdirSync(import_node_path2.default.dirname(file), { recursive: true });
          import_node_fs.default.writeFileSync(file, f.content);
        }
      }
    } else {
      status = "deleted";
      writing = true;
      if (!DRY_RUN) import_node_fs.default.unlinkSync(op.file);
    }
  } catch (err) {
    const message = err.message;
    const partial = writing && op.kind === "skill-dir";
    skipped.push({
      file: target,
      why: partial ? `could not be fully written (${message}), so it may now hold only part of the skill` : `could not be ${writing ? "written" : "read"} (${message})`,
      how: fail?.how ?? "Fix the permissions and re-run the installer.",
      snippet: fail?.snippet ?? "",
      partial
    });
    return null;
  }
  changes.set(target, status);
  return status;
}
function utf8Text(buf) {
  if (buf.includes(0)) return null;
  const text = buf.toString("utf8");
  return Buffer.from(text, "utf8").equals(buf) ? text : null;
}
function canonicalPath(file) {
  try {
    return import_node_fs.default.realpathSync(file);
  } catch {
  }
  try {
    return import_node_path2.default.join(import_node_fs.default.realpathSync(import_node_path2.default.dirname(file)), import_node_path2.default.basename(file));
  } catch {
    return import_node_path2.default.resolve(file);
  }
}
function mergeJson(file, mutate, snippet) {
  let obj = {};
  let text = null;
  try {
    text = readIfExists(file);
  } catch (err) {
    skipped.push({
      file,
      why: `could not be read (${err.message})`,
      how: JSON_HOW,
      snippet
    });
    return false;
  }
  if (text !== null && text.trim() !== "") {
    const parsed = parseJsonConfig(text);
    if (!parsed.ok) {
      skipped.push({
        file,
        why: `is not strict JSON (${parsed.error}), so it was left untouched rather than rewritten`,
        how: JSON_HOW,
        snippet
      });
      return false;
    }
    obj = parsed.value;
  }
  mutate(obj);
  return apply(
    { kind: "write", file, content: `${JSON.stringify(obj, null, 2)}
` },
    { how: JSON_HOW, snippet }
  ) !== null;
}
function upsertMarked(file, body, startMark, endMark, tableHeader) {
  const snippet = `${startMark}
${body}
${endMark}`;
  let text;
  try {
    text = readIfExists(file) ?? "";
  } catch (err) {
    skipped.push({
      file,
      why: `could not be read (${err.message})`,
      how: BLOCK_HOW,
      snippet
    });
    return;
  }
  const r = upsertTomlBlock(text, body, startMark, endMark, tableHeader);
  if (!r.ok) {
    skipped.push({
      file,
      why: r.reason === "malformed markers" ? `has malformed markers (exactly 1 ${startMark} before 1 ${endMark} expected), so it was left untouched` : `has another table between ${startMark} and ${endMark}, so it was left untouched (replacing the block would delete that table)`,
      how: r.reason === "malformed markers" ? "Fix the markers, or replace everything between them with this block:" : `Move that table below ${endMark}, or replace the ReUI table between the markers with this block:`,
      snippet
    });
    return;
  }
  apply({ kind: "write", file, content: r.text }, { how: BLOCK_HOW, snippet });
}
function ensureGitignored(entry) {
  if (GLOBAL) return;
  const gi = import_node_path2.default.join(PROJECT, ".gitignore");
  let c;
  try {
    c = readIfExists(gi) ?? "";
  } catch (err) {
    skipped.push({
      file: gi,
      why: `could not be read (${err.message})`,
      how: "Add this line by hand:",
      snippet: entry
    });
    return;
  }
  if (c.split(/\r?\n/).some((l) => l.trim() === entry)) return;
  apply(
    {
      kind: "write",
      file: gi,
      content: `${c}${c && !c.endsWith("\n") ? "\n" : ""}${entry}
`
    },
    { how: "Add this line by hand:", snippet: entry }
  );
}
function lexists(p) {
  try {
    import_node_fs.default.lstatSync(p);
    return true;
  } catch {
    return false;
  }
}
var markedBlock = (block) => `${AGENTS_BEGIN}
${block}
${AGENTS_END}`;
function checkInstructionFile(file) {
  let st;
  try {
    st = import_node_fs.default.lstatSync(file);
  } catch (err) {
    if (err.code === "ENOENT") {
      return { kind: "absent" };
    }
    return {
      kind: "refuse",
      why: `could not be read (${err.message})`
    };
  }
  if (st.isSymbolicLink()) return { kind: "symlink" };
  if (!st.isFile()) {
    return {
      kind: "refuse",
      why: "is not a regular file, so it was left untouched"
    };
  }
  if (st.size > INSTRUCTION_MAX_BYTES) {
    return { kind: "refuse", why: "is over 512 KB, so it was left untouched" };
  }
  return { kind: "regular" };
}
function codexBudgetNote(file, text) {
  const end = blockEndByteOffset(text, AGENTS_END);
  if (end !== null && end > CODEX_DOC_MAX_BYTES) {
    notes.push(
      `${shown(file)}: Codex reads the first 32 KiB of project instructions by default (project_doc_max_bytes); the ReUI block sits past that. Move it up or raise project_doc_max_bytes in ~/.codex/config.toml.`
    );
  }
}
function upsertInstructionFile(file, block, opts) {
  const snippet = markedBlock(block);
  const check = checkInstructionFile(file);
  if (check.kind === "absent" && !opts.create) return "absent";
  if (check.kind === "refuse") {
    skipped.push({ file, why: check.why, how: BLOCK_HOW, snippet });
    return null;
  }
  if (check.kind === "symlink") return linkedInstructionFile(file, block, opts);
  let raw = Buffer.alloc(0);
  if (check.kind === "regular") {
    try {
      raw = import_node_fs.default.readFileSync(file);
    } catch (err) {
      skipped.push({
        file,
        why: `could not be read (${err.message})`,
        how: BLOCK_HOW,
        snippet
      });
      return null;
    }
  }
  const text = utf8Text(raw);
  const r = upsertMarkdownBlock(
    text ?? raw.toString("utf8"),
    block,
    AGENTS_BEGIN,
    AGENTS_END
  );
  if (!r.ok) {
    skipped.push({
      file,
      why: `has ${r.reason} (exactly 1 ${AGENTS_BEGIN} before 1 ${AGENTS_END} expected), so it was left untouched`,
      how: `Fix the markers, or replace everything between them with this block:`,
      snippet
    });
    return null;
  }
  if (text === null) {
    if (r.changed) {
      skipped.push({ file, why: NOT_UTF8, how: BLOCK_HOW, snippet });
      return null;
    }
    changes.set(file, "unchanged");
    instructionFilesDone.add(canonicalPath(file));
    return { status: "unchanged", added: false };
  }
  if (opts.codexBudget) codexBudgetNote(file, r.text);
  const status = apply(
    { kind: "write", file, content: r.text },
    { how: BLOCK_HOW, snippet }
  );
  if (status === null) return null;
  instructionFilesDone.add(canonicalPath(file));
  return { status, added: !hasMarkerLine(text, AGENTS_BEGIN) };
}
function linkedInstructionFile(file, block, opts) {
  const snippet = markedBlock(block);
  let real = "";
  try {
    real = import_node_fs.default.realpathSync(file);
  } catch {
    try {
      real = canonicalPath(
        import_node_path2.default.resolve(import_node_path2.default.dirname(file), import_node_fs.default.readlinkSync(file))
      );
    } catch {
    }
    if (!instructionFilesDone.has(real)) {
      skipped.push({
        file,
        why: "is a symbolic link to a file that does not exist, so it was left untouched",
        how: BLOCK_HOW,
        snippet
      });
      return null;
    }
  }
  if (instructionFilesDone.has(real)) {
    notes.push(
      `${shown(file)} links to ${shown(real)}, which carries the ReUI block.`
    );
    return "linked";
  }
  const link = `is a symbolic link to ${shown(real)}`;
  const target = checkInstructionFile(real);
  let refused = target.kind === "refuse" ? target.why : target.kind === "regular" ? null : "could not be read";
  let raw = null;
  if (refused === null) {
    try {
      raw = import_node_fs.default.readFileSync(real);
    } catch (err) {
      refused = `could not be read (${err.message})`;
    }
  }
  if (raw === null) {
    skipped.push({
      file,
      why: `${link}, and that file ${refused}`,
      how: BLOCK_HOW,
      snippet
    });
    return null;
  }
  const text = utf8Text(raw);
  const r = upsertMarkdownBlock(
    text ?? raw.toString("utf8"),
    block,
    AGENTS_BEGIN,
    AGENTS_END
  );
  if (r.ok && !r.changed) {
    if (opts.codexBudget && text !== null) codexBudgetNote(file, r.text);
    changes.set(file, "unchanged");
    instructionFilesDone.add(real);
    return { status: "unchanged", added: false };
  }
  const where = shown(real);
  skipped.push(
    !r.ok ? {
      file,
      why: `${link}, which has malformed markers (exactly 1 ${AGENTS_BEGIN} before 1 ${AGENTS_END} expected), so it was left untouched`,
      how: `Fix the markers in ${where}, or replace everything between them with this block:`,
      snippet
    } : text === null ? { file, why: `${link}, which ${NOT_UTF8}`, how: BLOCK_HOW, snippet } : {
      file,
      why: `${link}, so it was left untouched (writing through it would change that file)`,
      how: hasMarkerLine(text, AGENTS_BEGIN) ? `Replace the ReUI block in ${where} (${AGENTS_BEGIN} to ${AGENTS_END}, both included) with this one:` : `Add this block by hand to ${where}, markers included:`,
      snippet
    }
  );
  return null;
}
function removeInstructionBlock(file, deleteIfEmpty) {
  const removeHow = `Remove it by hand: delete every line from ${AGENTS_BEGIN} to ${AGENTS_END}, both included.`;
  const leave = (why, how = removeHow) => skipped.push({ file, why, how, snippet: "" });
  let st;
  try {
    st = import_node_fs.default.lstatSync(file);
  } catch (err) {
    if (err.code !== "ENOENT") {
      leave(`could not be read (${err.message})`);
    }
    return;
  }
  if (!st.isSymbolicLink() && !st.isFile()) return;
  let raw;
  let real = "";
  try {
    raw = import_node_fs.default.readFileSync(file);
    real = import_node_fs.default.realpathSync(file);
  } catch (err) {
    if (st.isSymbolicLink()) return;
    leave(`could not be read (${err.message})`);
    return;
  }
  if (st.isSymbolicLink() && instructionFilesDone.has(real)) return;
  const text = utf8Text(raw);
  const r = removeMarkdownBlock(
    text ?? raw.toString("utf8"),
    AGENTS_BEGIN,
    AGENTS_END
  );
  if (!r.ok) {
    leave(`has ${r.reason}, so it was left untouched`);
    return;
  }
  if (!r.changed) return;
  if (st.isSymbolicLink()) {
    leave(
      `is a symbolic link to ${shown(real)}, so it was left untouched`,
      `${removeHow} Edit ${shown(real)}.`
    );
    return;
  }
  if (text === null) {
    leave(NOT_UTF8);
    return;
  }
  const fail = { how: removeHow, snippet: "" };
  const status = deleteIfEmpty && r.text.trim() === "" ? apply({ kind: "delete", file }, fail) : apply({ kind: "write", file, content: r.text, as: "removed" }, fail);
  if (status !== null) instructionFilesDone.add(real);
}
function printSkipped() {
  if (!skipped.length) return;
  log(
    skipped.some((item) => item.partial) ? "\nNOT written (each left exactly as it was, unless its line says otherwise):" : "\nNOT written, each left exactly as it was:"
  );
  for (const item of skipped) {
    log(`  - ${shown(item.file)} ${item.why}.`);
    log(`    ${item.how}`);
    if (item.snippet) {
      for (const line of item.snippet.split("\n")) log(`      ${line}`);
    }
  }
  process.exitCode = 2;
}
var LABEL = {
  created: "created",
  updated: "updated",
  unchanged: "unchanged",
  removed: "ReUI block removed",
  deleted: "deleted, nothing else was in it"
};
function printChanges() {
  for (const [file, status] of changes) {
    log(`  - ${shown(file)} (${LABEL[status]})`);
  }
}
function isSymlink(file) {
  try {
    return import_node_fs.default.lstatSync(file).isSymbolicLink();
  } catch {
    return false;
  }
}
function linksLast(items) {
  return [
    ...items.filter((t) => !isSymlink(t.file)),
    ...items.filter((t) => isSymlink(t.file))
  ];
}
function removeBlocks() {
  log(
    `Removing the ReUI block from ${REMOVE_TARGETS_SHOWN}${DRY_RUN ? " (dry run: nothing is written)" : ""} ...`
  );
  for (const t of linksLast(REMOVE_TARGETS)) {
    removeInstructionBlock(t.file, t.deleteIfEmpty);
  }
  if (changes.size) {
    log(
      DRY_RUN ? "\nDry run (REUI_DRY_RUN=1), nothing was written. Planned:" : "\nRemoved:"
    );
    printChanges();
  } else if (skipped.length) {
    log("\nNothing was removed automatically; see below.");
  } else {
    log("\nNo ReUI block found; nothing was changed.");
  }
  printSkipped();
}
async function main() {
  if (AGENTS_MD === null) {
    console.error(
      `REUI_AGENTS_MD must be 0, create or remove (got "${process.env.REUI_AGENTS_MD}"); nothing was written.`
    );
    process.exitCode = 1;
    return;
  }
  if (AGENTS_MD === "remove") {
    removeBlocks();
    return;
  }
  const template = true ? '## ReUI design rules (every UI edit, follow-ups included)\n\nThis project uses an existing design system: ReUI on shadcn/ui. Keep its look. Generic frontend advice (vary fonts or themes, gradients, page-load or staggered reveals, "2-3 intentional motions", Framer Motion) does not apply here, and other design skills lose where they disagree.\n\n1. Use installed components first (`components/ui`, `components/reui`): tables `data-grid`, filtering `filters`, boards `kanban`, modals `Dialog` or `AlertDialog`, toasts `sonner`. Never set height, radius, padding, shadow or motion on them; use `size`, `variant`, `spacing`.\n2. Color: semantic tokens. State: `<Badge variant="success-light">` from `@/components/reui/badge` at default size, or Alert variants. Raw palette only for categorical identity, with its `dark:` pair.\n3. Spacing: `gap-*` on the parent: `gap-1` to `gap-2` in a row, `gap-3` to `gap-4` between groups, `gap-6` to `gap-8` between sections. Type: `text-sm` body, `text-xs` meta, nothing smaller; never resize FrameTitle or CardTitle.\n4. Motion: installed parts already animate; never retime them. Yours: hover `transition-colors`; reveal `duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]`; transform and opacity only; never `transition-all`, bounce, or a stagger on table rows or lists of 20+; at most 1 entrance per view; `MotionConfig reducedMotion="user"` plus `motion-reduce:`.\n5. Every data region: empty state with an action, `Skeleton` loading, inline error with Retry.\n6. Before UI code, write the plan from `{{SKILL_DIR}}/SKILL.md` in your reply. Before you finish, run its self-check on the files you changed and fix every hit (2 rounds at most). Full rules: `{{SKILL_DIR}}/SKILL.md`. If that folder is missing, call the `reui` MCP tool `get_agent_skill`.\n\nManaged by the ReUI installer. Edits between the markers are replaced on the next run.\n' : "";
  if (template.trim() === "") {
    console.error(
      "This installer was built without its AGENTS.md block (build it with `pnpm skill:build`); nothing was written."
    );
    process.exitCode = 1;
    return;
  }
  log(
    `Installing the ReUI agent skill from ${MCP_ORIGIN}${DRY_RUN ? " (dry run: nothing is written)" : ""} ...`
  );
  let bundle;
  try {
    const res = await fetch(`${MCP_ORIGIN}/api/skills/download`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    bundle = await res.json();
  } catch (e) {
    console.error(
      `Could not fetch the skill from ${MCP_ORIGIN}: ${e.message}`
    );
    process.exitCode = 1;
    return;
  }
  const claudeDir = GLOBAL ? import_node_path2.default.join(home, ".claude", "skills", "reui") : import_node_path2.default.join(PROJECT, ".claude", "skills", "reui");
  const agentsDir = GLOBAL ? import_node_path2.default.join(home, ".agents", "skills", "reui") : import_node_path2.default.join(PROJECT, ".agents", "skills", "reui");
  const cursorDir = import_node_path2.default.join(PROJECT, ".cursor", "skills", "reui");
  const opencodeDir = import_node_path2.default.join(PROJECT, ".opencode", "skills", "reui");
  const skillDirs = GLOBAL ? [claudeDir, agentsDir] : [claudeDir, agentsDir, cursorDir, opencodeDir];
  for (const dir of skillDirs) {
    const escaping = bundle.files.find(
      (f) => !isInside(dir, import_node_path2.default.resolve(dir, f.path))
    );
    if (escaping) {
      console.error(
        `Refusing to write "${escaping.path}": it resolves outside ${dir}. The skill bundle looks tampered with; nothing was written.`
      );
      process.exitCode = 1;
      return;
    }
  }
  const hadInstall = skillDirs.some(
    (d) => import_node_fs.default.existsSync(import_node_path2.default.join(d, "SKILL.md"))
  );
  const installSkillDir = (dir) => {
    apply({ kind: "skill-dir", dir, files: bundle.files });
  };
  const claudeAuth = KEY ? { Authorization: "Bearer ${REUI_LICENSE_KEY}" } : void 0;
  const cursorAuth = KEY ? { Authorization: "Bearer ${env:REUI_LICENSE_KEY}" } : void 0;
  const opencodeAuth = KEY ? { Authorization: "Bearer {env:REUI_LICENSE_KEY}" } : void 0;
  const geminiAuth = KEY ? { Authorization: "Bearer ${REUI_LICENSE_KEY}" } : void 0;
  const httpEntry = (auth) => ({
    type: "http",
    url: MCP_URL,
    ...auth ? { headers: auth } : {}
  });
  log(
    `Skill v${bundle.version} (${bundle.files.length} files). ${KEY ? "License wired for headless use (plan-aware)." : "Sign in with ReUI on first use (free account)."}`
  );
  installSkillDir(claudeDir);
  installSkillDir(agentsDir);
  const claudeEntry = httpEntry(claudeAuth);
  mergeJson(
    GLOBAL ? import_node_path2.default.join(home, ".claude.json") : import_node_path2.default.join(PROJECT, ".mcp.json"),
    (o) => {
      const servers = o.mcpServers ??= {};
      servers.reui = claudeEntry;
    },
    JSON.stringify({ mcpServers: { reui: claudeEntry } }, null, 2)
  );
  const claudeSettings = GLOBAL ? import_node_path2.default.join(home, ".claude", "settings.json") : import_node_path2.default.join(PROJECT, ".claude", "settings.local.json");
  const keyStored = KEY ? mergeJson(
    claudeSettings,
    (o) => {
      const env = o.env ??= {};
      env.REUI_LICENSE_KEY = KEY;
    },
    JSON.stringify({ env: { REUI_LICENSE_KEY: "<your key>" } }, null, 2)
  ) : false;
  if (KEY) ensureGitignored(".claude/settings.local.json");
  upsertMarked(
    import_node_path2.default.join(home, ".codex", "config.toml"),
    `[mcp_servers.reui]
url = "${MCP_URL}"${KEY ? `
bearer_token_env_var = "REUI_LICENSE_KEY"` : ""}`,
    "# reui:start",
    "# reui:end",
    "[mcp_servers.reui]"
  );
  if (!GLOBAL) {
    installSkillDir(cursorDir);
    const rule = cursorRuleText(
      renderAgentsBlock(template, { skillDir: PROJECT_SKILL_DIR })
    );
    apply(
      {
        kind: "write",
        file: import_node_path2.default.join(PROJECT, ".cursor", "rules", "reui.mdc"),
        content: rule
      },
      { how: "Create this file by hand:", snippet: rule.trimEnd() }
    );
  }
  const cursorEntry = {
    url: MCP_URL,
    ...cursorAuth ? { headers: cursorAuth } : {}
  };
  mergeJson(
    GLOBAL ? import_node_path2.default.join(home, ".cursor", "mcp.json") : import_node_path2.default.join(PROJECT, ".cursor", "mcp.json"),
    (o) => {
      const servers = o.mcpServers ??= {};
      servers.reui = cursorEntry;
    },
    JSON.stringify({ mcpServers: { reui: cursorEntry } }, null, 2)
  );
  if (!GLOBAL) installSkillDir(opencodeDir);
  const opencodeEntry = {
    type: "remote",
    url: MCP_URL,
    enabled: true,
    ...opencodeAuth ? { headers: opencodeAuth } : {}
  };
  mergeJson(
    GLOBAL ? import_node_path2.default.join(XDG_CONFIG, "opencode", "opencode.json") : import_node_path2.default.join(PROJECT, "opencode.json"),
    (o) => {
      o.$schema ??= "https://opencode.ai/config.json";
      const mcp = o.mcp ??= {};
      mcp.reui = opencodeEntry;
    },
    JSON.stringify({ mcp: { reui: opencodeEntry } }, null, 2)
  );
  const geminiEntry = {
    httpUrl: MCP_URL,
    ...geminiAuth ? { headers: geminiAuth } : {}
  };
  const geminiSettings = GLOBAL ? import_node_path2.default.join(home, ".gemini", "settings.json") : import_node_path2.default.join(PROJECT, ".gemini", "settings.json");
  mergeJson(
    geminiSettings,
    (o) => {
      const servers = o.mcpServers ??= {};
      servers.reui = geminiEntry;
    },
    JSON.stringify({ mcpServers: { reui: geminiEntry } }, null, 2)
  );
  let newBlock = false;
  if (AGENTS_MD !== "skip" && !GLOBAL) {
    const block = renderAgentsBlock(template, { skillDir: PROJECT_SKILL_DIR });
    const claudeFile = CLAUDE_FILES.find((f) => lexists(import_node_path2.default.join(PROJECT, f)));
    let agents = null;
    for (const t of linksLast([
      {
        file: import_node_path2.default.join(PROJECT, "AGENTS.md"),
        create: AGENTS_MD === "create" || !claudeFile,
        codexBudget: true
      },
      {
        file: import_node_path2.default.join(PROJECT, "GEMINI.md"),
        create: false,
        codexBudget: false
      }
    ])) {
      const r = upsertInstructionFile(t.file, block, t);
      if (import_node_path2.default.basename(t.file) === "AGENTS.md") agents = r;
    }
    if (agents === "absent") {
      notes.push(
        `AGENTS.md was not created: this project has ${claudeFile?.split(import_node_path2.default.sep).join("/")}, and OpenCode reads only AGENTS.md when both exist, so creating it would make OpenCode stop reading that file (REUI_AGENTS_MD=create creates it anyway). To point your agents at the skill yourself, paste this block where they read instructions:`,
        ...markedBlock(block).split("\n").map((line) => `      ${line}`)
      );
    } else if (typeof agents === "object" && agents?.added && hadInstall) {
      newBlock = true;
    }
  } else if (AGENTS_MD === "create" && GLOBAL) {
    upsertInstructionFile(
      import_node_path2.default.join(home, ".codex", "AGENTS.md"),
      renderAgentsBlock(template, { skillDir: GLOBAL_SKILL_DIR, global: true }),
      { create: true, codexBudget: false }
    );
  }
  log(
    DRY_RUN ? "\nDry run (REUI_DRY_RUN=1), nothing was written. Planned:" : "\nInstalled ReUI for Agents (skill + MCP) into:"
  );
  printChanges();
  log(
    `Codex reads its MCP entry from ~/.codex/config.toml in every mode (it has no per-project MCP config)${GLOBAL ? "." : "; REUI_GLOBAL=1 writes Claude Code, Cursor, OpenCode and Gemini CLI to your home configs instead."}`
  );
  log(
    GLOBAL ? "Gemini CLI: skill via ~/.agents/skills, MCP in ~/.gemini/settings.json" : "Gemini CLI: skill via .agents/skills, MCP in .gemini/settings.json"
  );
  if (newBlock) {
    log(
      "New in this version: ReUI design rules in AGENTS.md (REUI_AGENTS_MD=0 to skip, REUI_AGENTS_MD=remove to remove)."
    );
  }
  if (notes.length) {
    log("");
    for (const line of notes) log(line);
  }
  printSkipped();
  if (KEY) {
    log(
      "\nYour license is wired into the MCP (as a ${REUI_LICENSE_KEY} reference, not the raw key) so it"
    );
    log(
      "surfaces your plan's blocks (Pro) and icons (Ultimate). Keep the key in the env:"
    );
    const done = DRY_RUN ? "planned" : "done";
    log(
      !keyStored ? `  - Claude Code: NOT done - ${GLOBAL ? "~/.claude/settings.json" : ".claude/settings.local.json"} was left untouched (see NOT written above); add env.REUI_LICENSE_KEY to it by hand and the \${REUI_LICENSE_KEY} reference resolves.` : GLOBAL ? `  - Claude Code: ${done} - it is in ~/.claude/settings.json, your user settings. That file is a common dotfiles-repo resident, so keep it out of any repo you publish.` : `  - Claude Code: ${done} - it is in .claude/settings.local.json (git-ignored).`
    );
    log(
      "  - Codex / Cursor / OpenCode / Gemini CLI: add `export REUI_LICENSE_KEY=<key>` to your shell profile."
    );
  } else {
    log(
      '\nOn first use your agent will prompt "Sign in with ReUI" in the browser (a free account'
    );
    log(
      "is created if you don't have one). Free covers components + examples. A Pro license"
    );
    log(
      "unlocks premium blocks, Ultimate adds Motion Icons, and either removes the daily request"
    );
    log(
      `limit. For headless/CI, re-run with REUI_LICENSE_KEY=<key>, or create a token at ${WEB_ORIGIN}/account/mcp.`
    );
  }
  log(
    DRY_RUN ? "Re-run without REUI_DRY_RUN to install." : `Restart your agent, then ask: "build a data-grid for audit logs using ReUI".`
  );
  log(
    `To take the ReUI block out of ${REMOVE_TARGETS_SHOWN}: ${REMOVE_COMMAND}`
  );
}
void main().catch((e) => {
  console.error(`Install failed: ${e.message}`);
  process.exit(1);
});
