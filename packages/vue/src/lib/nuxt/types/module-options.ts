export type Color = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error' | (string & {})
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {})

export interface ModuleOptions {
  prefix?: string
  fonts?: boolean
  colorMode?: boolean
  prose?: boolean
  content?: boolean
  mdc?: boolean
  theme?: {
    colors?: Color[]
    transitions?: boolean
    unstyled?: boolean
    prefix?: string
    defaultVariants?: { color?: Color; size?: Size }
  }
}
