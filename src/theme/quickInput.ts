import { palette } from '../palette'
import { getAdaptiveWidgetBackground } from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'

export const getQuickInputColors = (context?: ThemeContext) => {
  const widgetBackground = getAdaptiveWidgetBackground(context)

  return {
    // Быстрый ввод (Палитра команд, выборщик быстрых исправлений) - АДАПТИВНЫЕ фоны
    'quickInput.background': widgetBackground, // АДАПТИВНЫЙ фон палитры команд
    'quickInput.foreground': palette.fg.primary, // Текст палитры команд
    'quickInputTitle.background': widgetBackground, // АДАПТИВНЫЙ фон заголовка палитры команд
    'quickInputList.focusBackground': palette.bg.selection.focus, // Фон выбранного элемента в палитре команд
    'quickInputList.focusForeground': palette.fg.onSelection, // Текст выбранного элемента в палитре команд
    'quickInputList.focusIconForeground': palette.fg.onSelection, // Иконка выбранного элемента в палитре команд
  }
}
