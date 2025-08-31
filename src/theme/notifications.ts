import { palette } from '../palette'
import { getAdaptiveNotificationBackground } from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'

export const getNotificationColors = (context?: ThemeContext) => {
  const notificationBackground = getAdaptiveNotificationBackground(context)

  return {
    // Уведомления - АДАПТИВНЫЕ фоны
    'notificationCenterHeader.background': notificationBackground, // АДАПТИВНЫЙ фон заголовка центра уведомлений
    'notifications.background': notificationBackground, // АДАПТИВНЫЙ фон уведомлений
    'notificationLink.foreground': palette.ui.semantic.notificationLink, // Ссылки в уведомлениях
    'notificationsErrorIcon.foreground': palette.accent.red, // Иконка ошибки
    'notificationsWarningIcon.foreground': palette.accent.yellow, // Иконка предупреждения
    'notificationsInfoIcon.foreground': palette.accent.blue, // Иконка информации
    'notificationToast.border': palette.line.border, // Граница всплывающих уведомлений
    'notifications.border': palette.line.border, // Граница уведомлений
    'notifications.foreground': palette.fg.primary, // Текст уведомлений
    'notificationCenter.border': palette.line.border, // Граница центра уведомлений
    'notificationCenterHeader.foreground': palette.fg.primary, // Текст заголовка центра уведомлений
  }
}
