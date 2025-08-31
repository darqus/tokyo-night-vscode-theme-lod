import { palette, basePalette, extendedPalette } from '../palette'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getActivityBarColors = (): Partial<
  Record<VSCodeColorKey, Hex>
> => ({
  // Панель действий (Activity Bar) - используем централизованную палитру
  'activityBar.background': extendedPalette.bg.secondary, // #16161e
  'activityBar.foreground': extendedPalette.text.muted, // #787c99
  // activeBorder и activeBackground закомментированы в оригинале
  'activityBar.inactiveForeground': extendedPalette.activityBar.inactive, // #3b3e52
  'activityBar.border': extendedPalette.bg.secondary, // #16161e

  // Значки уведомлений на иконках - используем централизованную палитру
  'activityBarBadge.background': extendedPalette.badge.activityBar, // #3d59a1
  'activityBarBadge.foreground': extendedPalette.text.white, // #ffffff

  // Панель действий в верхней позиции (Activity Bar: Top) - используем централизованную палитру
  'activityBarTop.background': extendedPalette.bg.secondary, // #16161e
  'activityBarTop.foreground': extendedPalette.text.muted, // #787c99
  'activityBarTop.inactiveForeground': extendedPalette.activityBar.inactive, // #3b3e52
})
