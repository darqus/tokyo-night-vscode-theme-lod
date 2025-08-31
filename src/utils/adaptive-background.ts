import { Hex } from '../types'
import { extendedPalette } from '../palette/extended'
import type { PaletteVariant } from '../palette/adapters'

/**
 * Типы компонентов интерфейса для адаптивных фонов
 */
export type UIComponent =
  | 'editor'
  | 'terminal'
  | 'sideBar'
  | 'activityBar'
  | 'statusBar'
  | 'tabBar'
  | 'menu'
  | 'notification'

/**
 * Определяет тип темы по имени варианта
 */
export function getThemeType(
  variant: PaletteVariant,
  displayName?: string
): keyof typeof extendedPalette.bg.adaptive.editor {
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
 * Возвращает адаптивный фон для заданного компонента и типа темы
 */
export function getAdaptiveBackground(
  component: UIComponent,
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  const themeType = getThemeType(variant, displayName)
  const palette = adaptedPalette || extendedPalette

  return palette.bg.adaptive[component][themeType]
}

/**
 * Возвращает адаптивный фон редактора для заданного типа темы
 */
export function getAdaptiveEditorBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  return getAdaptiveBackground('editor', variant, displayName, adaptedPalette)
}

/**
 * Возвращает адаптивный фон терминала
 */
export function getAdaptiveTerminalBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  return getAdaptiveBackground('terminal', variant, displayName, adaptedPalette)
}

/**
 * Возвращает адаптивный фон боковой панели
 */
export function getAdaptiveSideBarBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  return getAdaptiveBackground('sideBar', variant, displayName, adaptedPalette)
}

/**
 * Возвращает адаптивный фон панели активности
 */
export function getAdaptiveActivityBarBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  return getAdaptiveBackground(
    'activityBar',
    variant,
    displayName,
    adaptedPalette
  )
}

/**
 * Возвращает адаптивный фон строки состояния
 */
export function getAdaptiveStatusBarBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  return getAdaptiveBackground(
    'statusBar',
    variant,
    displayName,
    adaptedPalette
  )
}

/**
 * Возвращает адаптивный фон панели вкладок
 */
export function getAdaptiveTabBarBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  return getAdaptiveBackground('tabBar', variant, displayName, adaptedPalette)
}

/**
 * Возвращает адаптивный фон меню
 */
export function getAdaptiveMenuBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  return getAdaptiveBackground('menu', variant, displayName, adaptedPalette)
}

/**
 * Возвращает адаптивный фон уведомлений
 */
export function getAdaptiveNotificationBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  return getAdaptiveBackground(
    'notification',
    variant,
    displayName,
    adaptedPalette
  )
}

/**
 * Возвращает все адаптивные фоны для темы
 */
export function getAllAdaptiveBackgrounds(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
) {
  return {
    editor: getAdaptiveBackground(
      'editor',
      variant,
      displayName,
      adaptedPalette
    ),
    terminal: getAdaptiveBackground(
      'terminal',
      variant,
      displayName,
      adaptedPalette
    ),
    sideBar: getAdaptiveBackground(
      'sideBar',
      variant,
      displayName,
      adaptedPalette
    ),
    activityBar: getAdaptiveBackground(
      'activityBar',
      variant,
      displayName,
      adaptedPalette
    ),
    statusBar: getAdaptiveBackground(
      'statusBar',
      variant,
      displayName,
      adaptedPalette
    ),
    tabBar: getAdaptiveBackground(
      'tabBar',
      variant,
      displayName,
      adaptedPalette
    ),
    menu: getAdaptiveBackground('menu', variant, displayName, adaptedPalette),
    notification: getAdaptiveBackground(
      'notification',
      variant,
      displayName,
      adaptedPalette
    ),
  }
}

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
 * Возвращает контрастный фон для особых элементов
 */
export function getContrastBackground(
  variant: PaletteVariant,
  displayName?: string,
  adaptedPalette?: typeof extendedPalette
): Hex {
  const themeType = getThemeType(variant, displayName)
  const palette = adaptedPalette || extendedPalette

  switch (themeType) {
    case 'light':
      return '#ffffff' as Hex
    case 'contrast':
      return '#000000' as Hex
    default:
      return palette.bg.tertiary
  }
}
