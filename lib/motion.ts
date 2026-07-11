export const motionTokens = {
  duration: {
    fast: 0.2,
    medium: 0.35,
  },
  stagger: {
    itemDelay: 0.08,
  },
  offset: {
    small: 16,
    medium: 20,
  },
  easing: {
    standard: [0.22, 0.61, 0.36, 1] as const,
  },
} as const;
