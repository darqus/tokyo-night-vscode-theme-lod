import { palette, basePalette, extendedPalette } from '../palette'
import {
  getAdaptiveActivityBarBackground,
  getAdaptiveActivityBarActiveBackground,
} from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getActivityBarColors = (
  context?: ThemeContext
): Partial<Record<VSCodeColorKey, Hex>> => {
  // Получаем адаптивные фоны панели активности
  const activityBarBackground = getAdaptiveActivityBarBackground(context)
  const activityBarActiveBackground =
    getAdaptiveActivityBarActiveBackground(context)

  // Стандартные цвета текста
  const activityBarForeground = extendedPalette.text.muted

  const activityBarInactiveForeground = extendedPalette.activityBar.inactive

  return {
    // Панель действий (Activity Bar) - АДАПТИВНЫЙ фон в зависимости от типа темы
    'activityBar.background': activityBarBackground,
    'activityBar.foreground': activityBarForeground,
    'activityBar.activeBorder': palette.brand.primary, // Активная граница
    'activityBar.activeBackground': activityBarActiveBackground, // АДАПТИВНЫЙ активный фон
    'activityBar.inactiveForeground': activityBarInactiveForeground,
    'activityBar.border': activityBarBackground,

    // Значки уведомлений на иконках - используем централизованную палитру
    'activityBarBadge.background': extendedPalette.badge.activityBar, // #3d59a1
    'activityBarBadge.foreground': extendedPalette.text.white, // #ffffff

    // Панель действий в верхней позиции (Activity Bar: Top) - используем централизованную палитру
    'activityBarTop.background': activityBarBackground,
    'activityBarTop.foreground': activityBarForeground,
    'activityBarTop.inactiveForeground': activityBarInactiveForeground,
  }
}
