import { Hex } from '../types'
import { extendedPalette } from './extended'
import { createLightThemePalette } from './light-theme'
import { createLightThemeCompletePalette } from './light-complete'

/**
 * Система адаптации палитр для генерации вариантов тем
 */

export type PaletteModification = {
  hueShift?: number // Сдвиг оттенка (-180 до 180)
  saturationMultiplier?: number // Множитель насыщенности (0.0 - 2.0)
  lightnessOffset?: number // Смещение яркости (-50 до 50)
  contrastBoost?: number // Увеличение контраста (0.0 - 2.0)
  warmth?: number // Теплота цветов (-50 до 50, отрицательные = холоднее)
}

export type PaletteVariant =
  | 'tokyo-night'
  | 'tokyo-light'
  | 'tokyo-storm'
  | 'tokyo-autumn'
  | 'tokyo-winter'
  | 'gradient-0'
  | 'gradient-1'
  | 'gradient-2'
  | 'high-contrast'
  | 'deuteranopia-friendly'

/**
 * Создает специализированную адаптированную палитру для светлой темы
 * Использует комплексную палитру для гармоничного внешнего вида
 */
function createLightThemeAdaptedPalette(): typeof extendedPalette {
  const lightComplete = createLightThemeCompletePalette()
  const lightPalette = createLightThemePalette()

  // Создаем новую палитру на основе комплексной светлой палитры
  return {
    ...extendedPalette,

    // Обновляем основные текстовые цвета из комплексной палитры
    text: {
      ...extendedPalette.text,
      primary: '#24292f' as Hex, // Основной тёмный текст
      muted: '#57606a' as Hex, // Приглушённый серый
      disabled: '#a8b1bb' as Hex, // Отключенные элементы
      description: '#6e7781' as Hex, // Описания
      settings: '#24292f' as Hex, // Заголовки настроек
      white: '#ffffff' as Hex, // Белый для тёмных фонов
      light: '#8c959f' as Hex, // Светлый текст
      placeholder: '#8c959f' as Hex, // Плейсхолдеры
    },

    // Обновляем фоновые цвета из комплексной палитры
    bg: {
      ...extendedPalette.bg,
      adaptive: {
        ...extendedPalette.bg.adaptive,
        editor: {
          ...extendedPalette.bg.adaptive.editor,
          light: '#ffffff' as Hex, // Чистый белый фон редактора
        },
        sideBar: {
          ...extendedPalette.bg.adaptive.sideBar,
          light: '#f6f8fa' as Hex, // Светло-серый для боковой панели
        },
        activityBar: {
          ...extendedPalette.bg.adaptive.activityBar,
          light: '#eff2f5' as Hex, // Контрастный серый для панели активности
        },
        statusBar: {
          ...extendedPalette.bg.adaptive.statusBar,
          light: '#f3f4f6' as Hex, // Нейтральный серый для строки состояния
        },
        base: {
          ...extendedPalette.bg.adaptive.base,
          light: '#ffffff' as Hex, // Белый базовый фон
        },
        widget: {
          ...extendedPalette.bg.adaptive.widget,
          light: '#ffffff' as Hex, // Белый для виджетов
        },
        list: {
          ...extendedPalette.bg.adaptive.list,
          light: '#ffffff' as Hex, // Белый для списков
        },
        button: {
          ...extendedPalette.bg.adaptive.button,
          light: '#f1f3f4' as Hex, // Светлый для кнопок
        },
        terminal: {
          ...extendedPalette.bg.adaptive.terminal,
          light: '#ffffff' as Hex, // Белый для терминала
        },
        tabBar: {
          ...extendedPalette.bg.adaptive.tabBar,
          light: '#ffffff' as Hex, // Белый для табов
        },
        menu: {
          ...extendedPalette.bg.adaptive.menu,
          light: '#ffffff' as Hex, // Белый для меню
        },
        notification: {
          ...extendedPalette.bg.adaptive.notification,
          light: '#ffffff' as Hex, // Белый для уведомлений
        },
        selection: {
          ...extendedPalette.bg.adaptive.selection,
          listActive: {
            ...extendedPalette.bg.adaptive.selection.listActive,
            light: '#dbeafe' as Hex, // Мягкий синий для выделения
          },
          listInactive: {
            ...extendedPalette.bg.adaptive.selection.listInactive,
            light: '#f3f4f6' as Hex, // Нейтральный для неактивного выделения
          },
        },
      },
    },

    // Обновляем границы
    border: {
      ...extendedPalette.border,
      input: '#d1d9e0' as Hex, // Мягкие границы для полей ввода
      dropdown: '#d1d9e0' as Hex, // Границы выпадающих списков
      checkbox: '#d1d9e0' as Hex, // Границы чекбоксов
      radio: '#d1d9e0' as Hex, // Границы радиокнопок
      widget: '#e1e4e8' as Hex, // Границы виджетов
    },

    // Git цвета адаптированные для светлой темы
    git: {
      ...extendedPalette.git,
      added: '#28a745' as Hex, // Яркий зелёный
      modified: '#dbab09' as Hex, // Жёлтый
      deleted: '#d73a49' as Hex, // Красный
      ignored: '#959da5' as Hex, // Серый
      untracked: '#6a737d' as Hex, // Тёмно-серый
      conflicting: '#f85149' as Hex, // Ярко-красный для конфликтов
    },

    // Специальные цвета
    special: {
      ...extendedPalette.special,
      textLink: '#0969da' as Hex, // Синий для ссылок
      textLinkActive: '#0550ae' as Hex, // Тёмно-синий для активных ссылок
    },
  }
}

/**
 * Адаптирует палитру для различных вариантов темы
 * @param variant - Вариант темы для которого создается адаптация
 * @param modifications - Опциональные модификации цветов
 * @returns Адаптированная палитра
 */
export function adaptPalette(
  variant: PaletteVariant,
  modifications?: PaletteModification
): typeof extendedPalette {
  switch (variant) {
    case 'tokyo-light':
      return createLightThemeAdaptedPalette()

    case 'tokyo-night':
    default:
      return extendedPalette
  }
}

/**
 * Применяет цветовые модификации к палитре
 * @param palette - Исходная палитра
 * @param modifications - Модификации для применения
 * @returns Модифицированная палитра
 */
export function applyPaletteModifications(
  palette: typeof extendedPalette,
  modifications: PaletteModification
): typeof extendedPalette {
  // TODO: Реализовать применение модификаций цветов
  // Это может включать изменение HSL значений, контраста и т.д.
  return palette
}

/**
 * Получает адаптированную палитру для заданного варианта темы
 * Основная функция экспорта для использования в генераторах тем
 */
export function getAdaptedPalette(
  variant: PaletteVariant
): typeof extendedPalette {
  return adaptPalette(variant)
}
