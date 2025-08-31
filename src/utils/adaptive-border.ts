import { Hex } from '../types'
import { extendedPalette } from '../palette/extended'
import type { ThemeContext } from '../generators/adaptive-theme-generator'

export type BorderType = 'button' | 'focus'
export type ThemeType =
  | 'dark'
  | 'light'
  | 'storm'
  | 'moon'
  | 'contrast'
  | 'pastel'
  | 'neon'

/**
 * Получает адаптивную границу кнопки на основе контекста темы.
 * Использует существующие цвета палитры для автоматической адаптации.
 */
export function getAdaptiveButtonBorder(context?: ThemeContext): Hex {
  if (!context) {
    return extendedPalette.button.border // Возвращаем стандартную границу
  }

  // Используем адаптированную палитру из контекста
  if (context.adaptedPalette?.button?.border) {
    return context.adaptedPalette.button.border
  }

  // Fallback к статической палитре
  return extendedPalette.button.border
}

/**
 * Получает адаптивную границу фокуса на основе контекста темы.
 * Использует границу фокуса из адаптированной палитры или стандартную.
 */
export function getAdaptiveFocusBorder(context?: ThemeContext): Hex {
  if (!context) {
    return extendedPalette.border.focus // Возвращаем стандартную границу фокуса
  }

  // Используем адаптированную палитру из контекста
  if (context.adaptedPalette?.border?.focus) {
    return context.adaptedPalette.border.focus
  }

  // Fallback к статической палитре
  return extendedPalette.border.focus
}
