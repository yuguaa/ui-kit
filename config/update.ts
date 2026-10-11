// The blue "recently updated" dot: the docs sidebar and the components sidebar.
//
// ── The rule ──
// These lists describe the CURRENT release and nothing else. They answer "what
// is new since I was last here", so an entry that outlives its release stops
// being news and starts being noise - the dot means nothing once everything
// wears one. When a release ships, clear these out and write the new one from
// `content/docs/(root)/changelog.mdx`, which is the source of truth for what
// shipped and when.
//
// Membership is the signal. The value is the tooltip and the screen-reader
// label, so it has to read as a sentence on its own.
//
// CURRENTLY REFLECTING: v2.8.0 - 11 October, 2026.
//   New Color Picker, Emoji Picker and File Type primitives, with 15, 8 and 14
//   examples per base: each carries the dot in the docs sidebar and in the
//   components sidebar. Stepper gained 29 examples, so it carries both as
//   well. Data Grid gained grouped and spanning headers and scrolling fixes but
//   no new examples, so it carries the docs dot only.
//   Everything the previous release marked is cleared, per the rule above.

/** Which DOCS pages carry the dot. Keys are doc slugs. */
export const DOCS_MENU_UPDATES = {
  "color-picker": "New Color Picker docs",
  "emoji-picker": "New Emoji Picker docs",
  "file-type": "New File Type docs",
  stepper: "Added 29 new Stepper examples, 44 in all",
  "data-grid":
    "Data Grid adds grouped and spanning headers, scrolls faster, and its scrollbar stops above a sticky footer",
} as const

/** Which COMPONENT categories carry the dot. Keys are category slugs. */
export const COMPONENTS_MENU_UPDATES = {
  "color-picker": "New Color Picker category with 15 examples",
  "emoji-picker": "New Emoji Picker category with 8 examples",
  "file-type": "New File Type category with 14 examples",
  stepper: "Added 29 new Stepper examples, 44 in all",
} as const

/**
 * Which BLOCK categories carry the dot upstream. Blocks are not part of the
 * open-source surface, so this stays empty here.
 *
 * EMPTY IS A VALID STATE. Clearing this list means emptying the object, never
 * deleting the export: nothing in this repo imports it today, but a synced
 * file that does would fail the production build with "Export
 * BLOCKS_MENU_UPDATES doesn't exist in target module". `next build` catches
 * that; `next dev` does not.
 */
export const BLOCKS_MENU_UPDATES = {} as const
