import { basePalette, extendedPalette } from '../palette'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getButtonColors = (): Partial<Record<VSCodeColorKey, Hex>> => ({
  // Кнопки / индикатор выполнения - используем централизованную палитру
  'button.background': basePalette.buttonBg, // #3d59a1dd
  'button.hoverBackground': extendedPalette.button.primaryHover, // #2d3b5a
  'button.foreground': extendedPalette.button.foreground, // #ffffff
  'button.border': extendedPalette.button.border, // #7aa2f780
  'button.separator': extendedPalette.button.separator, // #7aa2f766
  'button.secondaryBackground': extendedPalette.button.secondary, // #222c44
  'button.secondaryHoverBackground': extendedPalette.button.secondaryHover, // #2d3b5a
  'button.secondaryForeground': extendedPalette.button.foreground, // #ffffff
  'progressBar.background': extendedPalette.special.progressBar, // #7dcfff
})
