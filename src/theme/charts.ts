import { palette } from '../palette'
import { getAdaptiveBaseBackground } from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'

export const getChartColors = (context?: ThemeContext) => {
  const baseBackground = getAdaptiveBaseBackground(context)

  return {
    // Диаграммы - АДАПТИВНЫЕ фоны
    'charts.red': palette.accent.red, // Красные элементы диаграмм
    'charts.blue': palette.accent.blue, // Синие элементы диаграмм
    'charts.yellow': palette.accent.yellow, // Желтые элементы диаграмм
    'charts.orange': palette.accent.orange, // Оранжевые элементы диаграмм
    'charts.green': palette.accent.teal, // Зеленые элементы диаграмм
    'charts.purple': palette.accent.purple, // Пурпурные элементы диаграмм
    'charts.foreground': palette.ui.charts.foreground, // Основной текст диаграмм
    'charts.lines': palette.line.border, // Линии диаграмм
  }
}
