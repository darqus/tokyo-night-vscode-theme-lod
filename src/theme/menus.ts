import { palette, extendedPalette } from '../palette'
import {
  getAdaptiveMenuBackground,
  getAdaptiveActivityBarActiveBackground,
} from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getMenuColors = (
  context?: ThemeContext
): Partial<Record<VSCodeColorKey, Hex>> => {
  // Получаем адаптивный фон меню
  const menuBackground = getAdaptiveMenuBackground(context)

  // Используем цвет неактивного элемента activity bar
  const activityBarInactiveColor = extendedPalette.activityBar.inactive // #3b3e52

  // Для hover используем активный цвет activity bar
  const activityBarActiveBackground =
    getAdaptiveActivityBarActiveBackground(context)

  return {
    // Панель меню (menubar) - используем цвет неактивного элемента activity bar
    'menubar.selectionForeground': palette.fg.primary, // При выделении - основной цвет текста
    'menubar.selectionBackground': activityBarActiveBackground, // При выделении - активный цвет activity bar
    'menubar.selectionBorder': activityBarActiveBackground, // Граница при выделении

    // Выпадающие меню - используем цвет неактивного элемента activity bar
    'menu.foreground': activityBarInactiveColor, // #3b3e52 - цвет неактивного элемента activity bar
    'menu.background': menuBackground,
    'menu.selectionForeground': palette.fg.primary, // При выделении - основной цвет текста
    'menu.selectionBackground': activityBarActiveBackground, // При выделении - активный цвет activity bar
    'menu.separatorBackground': extendedPalette.bg.border, // #101014
    'menu.border': extendedPalette.bg.border, // #101014
  }
}
