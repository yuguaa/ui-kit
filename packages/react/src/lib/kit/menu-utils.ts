/**
 * 菜单类组件的字段读取与过滤工具。
 * 过滤顺序与 Nuxt UI 的 useFilter 一致：完全匹配 > 前缀匹配 > 包含匹配。
 */

/** 按点分路径读取字段（支持嵌套对象） */
export function getField(object: any, path: string | undefined, defaultValue?: any): any {
  if (!path) return defaultValue

  let result = object
  for (const key of path.split(".")) {
    if (result === undefined || result === null) return defaultValue
    result = result[key]
  }

  return result !== undefined ? result : defaultValue
}

/** 值是否为空（null / undefined / 空字符串 / 空数组） */
export function isEmpty(value: unknown): boolean {
  if (value == null) return true
  if (typeof value === "boolean" || typeof value === "number") return false
  if (typeof value === "string") return value === ""
  if (Array.isArray(value)) return value.length === 0
  return false
}

/** 深比较：对象按全部键递归比较 */
export function isEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false
  if (Array.isArray(a) !== Array.isArray(b)) return false

  const aKeys = Object.keys(a as object)
  const bKeys = Object.keys(b as object)
  if (aKeys.length !== bKeys.length) return false

  return aKeys.every(
    (key) => key in (b as object) && isEqual((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key]),
  )
}

/** 相等判断：字符串直接比较，已给 comparator 时用 comparator，其余走深比较 */
export function compare(value?: unknown, currentValue?: unknown, comparator?: string | ((a: any, b: any) => boolean)): boolean {
  if (value === undefined || currentValue === undefined) return false
  if (typeof value === "string") return value === currentValue
  if (typeof comparator === "function") return comparator(value, currentValue)
  if (typeof comparator === "string") return getField(value, comparator) === getField(currentValue, comparator)
  return isEqual(value, currentValue)
}

/** 逐字段打分：0 完全匹配 / 1 前缀匹配 / 2 包含匹配 / null 不匹配 */
function scoreItem(item: unknown, searchTerm: string, fields: string[]): number | null {
  const term = searchTerm.toLowerCase()

  if (typeof item !== "object" || item === null) {
    const text = String(item).toLowerCase()
    if (!text.includes(term)) return null
    if (text === term) return 0
    return text.startsWith(term) ? 1 : 2
  }

  let best: number | null = null
  for (const field of fields) {
    const value = getField(item, field)
    if (value == null) continue

    const values = Array.isArray(value) ? value.map(String) : [String(value)]
    for (const raw of values) {
      const text = raw.toLowerCase()
      if (!text.includes(term)) continue
      const score = text === term ? 0 : text.startsWith(term) ? 1 : 2
      if (best === null || score < best) best = score
      if (best === 0) return 0
    }
  }

  return best
}

/**
 * 按分组过滤并排序：分组标签与分隔线保留原位，命中项不跨过分组结构项，
 * 只含结构项的分组整体移除。
 */
export function filterGroups<T>(
  groups: T[][],
  searchTerm: string,
  options: { fields: string[]; isStructural?: (item: T) => boolean },
): T[][] {
  if (!searchTerm) return groups

  const isStructural = options.isStructural ?? (() => false)

  return groups
    .map((group) => {
      const result: { item: T; score: number }[] = []
      for (const item of group) {
        if (item === undefined || item === null) continue
        if (isStructural(item)) {
          result.push({ item, score: -1 })
          continue
        }
        const score = scoreItem(item, searchTerm, options.fields)
        if (score !== null) result.push({ item, score })
      }

      /* 逐段排序，保证命中项不越过标签与分隔线 */
      let start = 0
      for (let i = 0; i <= result.length; i++) {
        if (i === result.length || result[i]!.score === -1) {
          result.splice(start, i - start, ...result.slice(start, i).sort((a, b) => a.score - b.score))
          start = i + 1
        }
      }

      return result.map(({ item }) => item)
    })
    .filter((group) => group.some((item) => !isStructural(item)))
}

/** 取展示文本：先按 valueKey 命中项，再退回原始值 */
export function getDisplayValue<T>(
  items: T[],
  value: unknown,
  options: { labelKey?: string; valueKey?: string; by?: string | ((a: any, b: any) => boolean) } = {},
): string | undefined {
  const { labelKey, valueKey, by } = options
  const found = items.find((item) => {
    const itemValue = typeof item === "object" && item !== null && valueKey ? getField(item, valueKey) : item
    return compare(itemValue, value, by)
  })

  if (isEmpty(value)) {
    return found && labelKey ? getField(found, labelKey) : undefined
  }

  const source = (found ?? value) as any
  if (source === null || source === undefined) return undefined
  if (typeof source === "object") return labelKey ? getField(source, labelKey) : String(source)
  return String(source)
}

/** 值数组化：多选返回数组，单选为空时返回空数组 */
export function toValueArray(value: unknown, multiple: boolean): unknown[] {
  if (multiple) return Array.isArray(value) ? value : []
  return isEmpty(value) ? [] : [value]
}
