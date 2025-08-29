import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

// Shared type alias for color maps produced by theme sections
export type ColorMap = Partial<Record<VSCodeColorKey, Hex>>
