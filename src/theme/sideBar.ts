import { palette, basePalette, extendedPalette } from '../palette'
import { getAdaptiveSideBarBackground } from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getSideBarColors = (
  context?: ThemeContext
): Partial<Record<VSCodeColorKey, Hex>> => {
  // Получаем адаптивный фон боковой панели
  const sideBarBackground = getAdaptiveSideBarBackground(context)

  // Адаптивный текст для боковой панели
  const sideBarForeground =
    context?.type === 'light'
      ? ('#57606a' as Hex) // Тёмно-серый для светлой темы
      : extendedPalette.text.muted

  const sideBarTitleForeground =
    context?.type === 'light'
      ? ('#24292f' as Hex) // Основной тёмный текст для светлой темы
      : extendedPalette.text.primary

  return {
    // Боковая панель - АДАПТИВНЫЙ фон в зависимости от типа темы
    'tree.indentGuidesStroke': extendedPalette.bg.tree, // #2b2b3b
    'sideBar.foreground': sideBarForeground,
    'sideBar.background': sideBarBackground,
    'sideBar.border': extendedPalette.bg.border, // #101014
    'sideBarTitle.foreground': sideBarTitleForeground,
    'sideBarSectionHeader.background': sideBarBackground,
    'sideBarSectionHeader.foreground': sideBarTitleForeground,
    'sideBarSectionHeader.border': extendedPalette.bg.border, // #101014
    'sideBar.dropBackground': extendedPalette.selection.listDrop, // #1e202e
  }
}
