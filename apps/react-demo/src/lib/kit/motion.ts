export const kitMotion = {
  tokens: {
    fast: { duration: 0.12, ease: "easeOut" },
    base: { duration: 0.2, ease: "easeInOut" },
    slow: { duration: 0.3, type: "spring" },
  },
} as const

export type KitMotionToken = keyof typeof kitMotion.tokens
