import { palette } from '../palette'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getActivityBarColors = (): Partial<Record<VSCodeColorKey, Hex>> => ({
  // Панель действий (Activity Bar)
  'activityBar.background': palette.bg.elevated, // Фон панели действий
  'activityBar.foreground': palette.fg.primary, // Цвет иконок в панели действий
  'activityBar.activeBorder': palette.accent.blue, // Граница активной иконки
  'activityBar.activeBackground': palette.bg.hover, // Фон активной иконки
  'activityBar.inactiveForeground': palette.fg.subtle, // Цвет неактивных иконок
  'activityBar.border': palette.line.border, // Граница панели действий

  // Значки уведомлений на иконках
  'activityBarBadge.background': palette.ui.badge.base, // Фон значка уведомления
  'activityBarBadge.foreground': palette.ui.badge.fg, // Текст значка уведомления

  // Специальные значки для предупреждений и ошибок
  'activityWarningBadge.foreground': palette.bg.base, // Текст значка предупреждения
  'activityWarningBadge.background': palette.token.warning, // Фон значка предупреждения
  'activityErrorBadge.foreground': palette.bg.base, // Текст значка ошибки
  'activityErrorBadge.background': palette.token.error, // Фон значка ошибки

  // Панель действий в верхней позиции (Activity Bar: Top)
  'activityBarTop.background': palette.bg.base, // Фон верхней панели действий
  'activityBarTop.foreground': palette.fg.muted, // Цвет иконок в верхней панели
})
