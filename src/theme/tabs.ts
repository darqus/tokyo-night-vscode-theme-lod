import { palette, core, basePalette, extendedPalette } from '../palette'
import {
  getAdaptiveTabBarBackground,
  getAdaptiveWidgetBackground,
} from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getTabColors = (
  context?: ThemeContext
): Partial<Record<VSCodeColorKey, Hex>> => {
  // Получаем адаптивные фоны для вкладок
  const tabBarBackground = getAdaptiveTabBarBackground(context)
  const widgetBackground = getAdaptiveWidgetBackground(context)

  return {
    // Вкладки - АДАПТИВНЫЕ фоны в зависимости от типа темы
    'tab.activeBackground': tabBarBackground, // АДАПТИВНЫЙ фон активной вкладки
    'tab.inactiveBackground': widgetBackground, // АДАПТИВНЫЙ фон неактивной вкладки
    'tab.activeForeground': extendedPalette.text.primary, // #a9b1d6
    'tab.hoverForeground': palette.fg.activeTitle, // Текст при наведении - максимальная контрастность
    'tab.activeBorder': extendedPalette.tabs.activeBorder, // #3d59a1
    'tab.inactiveForeground': palette.fg.muted, // Текст неактивной вкладки - более контрастный
    'tab.border': palette.line.border,
    'tab.unfocusedActiveForeground': palette.fg.primary, // Текст активной вкладки в неактивном окне
    'tab.unfocusedInactiveForeground': palette.fg.muted, // Текст неактивной вкладки в неактивном окне
    'tab.unfocusedHoverForeground': palette.fg.primary, // Текст при наведении в неактивном окне
    'tab.activeModifiedBorder': palette.ui.tab.activeModifiedBorder,
    'tab.inactiveModifiedBorder': palette.ui.tab.inactiveModifiedBorder,
    'tab.unfocusedActiveBorder': palette.ui.badge.base, // Синхронизация с бейджами
    'tab.lastPinnedBorder': core.tokens.tabLastPinnedBorder, // Более заметная граница
    'tab.selectedBackground': tabBarBackground, // АДАПТИВНЫЙ фон выбранной вкладки
    'tab.selectedForeground': core.tokens.tabSelectedForeground, // Текст выбранной вкладки
  }
}
