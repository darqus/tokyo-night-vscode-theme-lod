import type { ColorMap } from './types'

/**
 * Compose multiple color maps into one.
 * If checkOverlap is true, later keys that overwrite previous ones are collected and returned for diagnostics.
 */
export function composeColors(
  parts: Array<ColorMap>,
  options: { checkOverlap?: boolean } = {}
): {
  colors: ColorMap
  overlaps?: Array<{ key: string; fromIndex: number; toIndex: number }>
} {
  const { checkOverlap } = options
  const colors: ColorMap = {}
  const seenIndex: Record<string, number> = {}
  const overlaps: Array<{ key: string; fromIndex: number; toIndex: number }> =
    []

  parts.forEach((part, idx) => {
    Object.entries(part).forEach(([key, value]) => {
      if (checkOverlap && key in seenIndex) {
        overlaps.push({ key, fromIndex: seenIndex[key], toIndex: idx })
      }
      seenIndex[key] = idx
      // Assign, preserving undefined values semantics from Partial<Record<...>>
      ;(colors as any)[key] = value
    })
  })

  return { colors, overlaps: checkOverlap ? overlaps : undefined }
}
