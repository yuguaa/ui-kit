import type { AppConfig } from '@/lib/nuxt/types/app-config'
import icons from '@/lib/nuxt/theme/icons'

export default {
  ui: {
    colors: {
      primary: 'green',
      secondary: 'blue',
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
      neutral: 'slate',
    },
    icons,
    prefix: undefined,
    tv: { twMergeConfig: {} },
  },
} as AppConfig & { ui: Record<string, any> }
