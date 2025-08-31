import { Hex } from '../types'
import { extendedPalette } from '../palette/extended'
import type { PaletteVariant } from '../palette/adapters'

/**
 * Определяет тип темы по имени варианта
 */
export function getThemeType(
  variant: PaletteVariant,
  displayName?: string
): keyof typeof extendedPalette.bg.editor {
  // Проверяем variant первым
  switch (variant) {
    case 'tokyo-light':
      return 'light'
    case 'tokyo-storm':
      return 'storm'
    case 'tokyo-moon':
      return 'moon'
    case 'tokyo-night':
      return 'dark'
  }

  // Если variant не определен, проверяем displayName
  if (displayName) {
    const name = displayName.toLowerCase()

    if (name.includes('light')) {
      return 'light'
    }
    if (name.includes('storm')) {
      return 'storm'
    }
    if (name.includes('moon')) {
      return 'moon'
    }
    if (name.includes('high contrast') || name.includes('contrast')) {
      return 'contrast'
    }
    if (name.includes('pastel')) {
      return 'pastel'
    }
    if (name.includes('neon')) {
      return 'neon'
    }
  }

  // По умолчанию - темная тема
  return 'dark'
}

/**
 * Возвращает адаптивный фон редактора для заданного типа темы
 */
export function getAdaptiveEditorBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  const themeType = getThemeType(variant, displayName)
  const palette = adaptedPalette || extendedPalette

  return palette.bg.editor[themeType]
}

/**
 * Карта соответствия типов тем и фонов
 */
export const themeBackgroundMap = {
  dark: extendedPalette.bg.editor.dark,
  light: extendedPalette.bg.editor.light,
  storm: extendedPalette.bg.editor.storm,
  moon: extendedPalette.bg.editor.moon,
  contrast: extendedPalette.bg.editor.contrast,
  pastel: extendedPalette.bg.editor.pastel,
  neon: extendedPalette.bg.editor.neon,
} as const

/**
 * Проверяет, является ли тема светлой
 */
export function isLightTheme(
  variant: PaletteVariant,
  displayName?: string
): boolean {
  return getThemeType(variant, displayName) === 'light'
}

/**
 * Возвращает контрастный фон для особых элементов в зависимости от типа темы
 */
export function getContrastBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  const themeType = getThemeType(variant, displayName)
  const palette = adaptedPalette || extendedPalette

  // Для светлых тем используем темный контраст, для темных - еще темнее
  switch (themeType) {
    case 'light':
      return '#ffffff' as Hex // Белый фон для контраста
    case 'contrast':
      return '#000000' as Hex // Максимальный контраст
    default:
      return palette.bg.tertiary // Используем самый темный фон
  }
}
