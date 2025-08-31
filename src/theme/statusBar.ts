import { palette, core, basePalette, extendedPalette } from '../palette'
import {
  getAdaptiveStatusBarBackground,
  getAdaptiveButtonBackground,
  getAdaptiveWidgetBackground,
  getAdaptiveActivityBarActiveBackground,
} from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'
import type { Hex } from '../types/palette'

export const getStatusBarColors = (context?: ThemeContext) => {
  // Получаем адаптивный фон строки состояния
  const statusBarBackground = getAdaptiveStatusBarBackground(context)

  // Используем цвет неактивного элемента activity bar
  const activityBarInactiveColor = extendedPalette.activityBar.inactive // #3b3e52

  // Для hover используем активный цвет activity bar
  const activityBarActiveBackground =
    getAdaptiveActivityBarActiveBackground(context)

  // Адаптивный цвет текста в зависимости от типа темы
  const statusBarForeground =
    context?.type === 'light'
      ? ('#1f2328' as Hex) // Тёмный для светлой темы (максимальная контрастность)
      : activityBarInactiveColor // Используем цвет неактивного элемента activity bar

  return {
    // Строка состояния - АДАПТИВНЫЙ фон и текст в зависимости от типа темы
    'statusBar.foreground': statusBarForeground,
    'statusBar.background': statusBarBackground,
    'statusBar.border': basePalette.statusBarBorder, // #101014 как в оригинале
    // Состояния без папки/отладки/фокус
    'statusBar.noFolderBackground': statusBarBackground,
    'statusBar.noFolderForeground': statusBarForeground,
    'statusBar.debuggingBackground': statusBarBackground,
    'statusBar.debuggingForeground': statusBarForeground, // Адаптивный цвет
    'statusBar.debuggingBorder': palette.line.border,
    'statusBar.noFolderBorder': palette.line.border,
    'statusBar.focusBorder': palette.ui.sash.hover,
    'statusBarItem.activeBackground': activityBarActiveBackground, // Используем цвет active activity bar
    'statusBarItem.hoverForeground': palette.fg.primary,
    'statusBarItem.hoverBackground': activityBarActiveBackground, // Используем цвет active activity bar
    'statusBarItem.prominentBackground': palette.bg.overlay,
    'statusBarItem.prominentForeground': palette.fg.primary,
    'statusBarItem.prominentHoverBackground': activityBarActiveBackground, // Используем цвет active activity bar
    'statusBarItem.prominentHoverForeground': palette.fg.onSelection,
    // Remote индикатор - АДАПТИВНЫЕ фоны в зависимости от типа темы
    'statusBarItem.remoteBackground': getAdaptiveButtonBackground(context),
    'statusBarItem.remoteForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
    'statusBarItem.remoteHoverBackground': getAdaptiveWidgetBackground(context), // Более светлый при наведении
    'statusBarItem.remoteHoverForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
    // Ошибки/предупреждения
    'statusBarItem.errorBackground': palette.accent.red,
    'statusBarItem.errorForeground': palette.ui.semantic.white,
    'statusBarItem.errorHoverBackground':
      core.tokens.statusBarItemErrorHoverBackground,
    'statusBarItem.errorHoverForeground': palette.ui.semantic.white,
    'statusBarItem.warningBackground': palette.accent.yellow,
    'statusBarItem.warningForeground': palette.bg.base,
    'statusBarItem.warningHoverBackground':
      core.tokens.statusBarItemWarningHoverBackground,
    'statusBarItem.warningHoverForeground': palette.bg.base,
    // Прочее
    'statusBarItem.compactHoverBackground':
      core.tokens.statusBarItemCompactHoverBackground,
    'statusBarItem.focusBorder': palette.ui.sash.hover,
    'statusBarItem.offlineBackground': palette.ui.semantic.offline,
    'statusBarItem.offlineForeground': palette.ui.semantic.white,
    'statusBarItem.offlineHoverBackground':
      core.tokens.statusBarItemOfflineHoverBackground,
    'statusBarItem.offlineHoverForeground': palette.ui.semantic.white,
  }
}
