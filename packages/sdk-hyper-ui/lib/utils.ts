import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Extend tailwind-merge to understand custom text-font-size-* classes.
// Without this, tailwind-merge treats them as text-color utilities (same "text-" prefix)
// and incorrectly drops one when combined with color classes like `text-badge-position-text`.
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Register text-font-size-{value} (e.g. text-font-size-12) as font-size utilities,
      // not text-color utilities, so they don't conflict with text-* color classes.
      'font-size': [{ 'text-font-size': [(v: string) => !!v] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
