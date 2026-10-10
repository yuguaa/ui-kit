import type { ModuleOptions } from '@/lib/nuxt/types/module-options'

export const moduleOptions: Required<ModuleOptions> = {
  prefix: 'U',
  fonts: false,
  colorMode: true,
  prose: false,
  content: false,
  mdc: false,
  theme: {
    colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error'],
    transitions: true,
    unstyled: false,
    prefix: '',
  },
}
