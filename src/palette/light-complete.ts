/**
 * Комплексная цветовая палитра для Tokyo Night Light Theme
 * Создана для обеспечения гармоничного внешнего вида и отличной контрастности
 */

import { Hex } from '../types'

/**
 * Базовые цвета для светлой темы Tokyo Night
 * Основаны на принципах дизайна светлых тем и цветовой гармонии
 */
export const lightBasePalette = {
  // === ОСНОВНЫЕ ФОНОВЫЕ ЦВЕТА ===
  background: {
    // Основные фоны
    primary: '#ffffff' as Hex, // Чистый белый для основного фона
    secondary: '#f8f9fa' as Hex, // Очень светло-серый для панелей
    tertiary: '#f1f3f4' as Hex, // Светло-серый для выделений
    elevated: '#ffffff' as Hex, // Для модальных окон и всплывающих элементов

    // Специальные фоны
    subtle: '#fafbfc' as Hex, // Почти белый с лёгким оттенком
    contrast: '#e9ecef' as Hex, // Контрастный фон для разделения
    input: '#ffffff' as Hex, // Фон полей ввода
    code: '#f6f8fa' as Hex, // Фон для блоков кода
  },

  // === ЦВЕТА ТЕКСТА ===
  text: {
    // Основной текст
    primary: '#24292f' as Hex, // Тёмно-серый для основного текста
    secondary: '#57606a' as Hex, // Средний серый для второстепенного текста
    tertiary: '#6e7781' as Hex, // Светлее для менее важного текста
    muted: '#8c959f' as Hex, // Приглушённый для подписей

    // Специальные цвета текста
    inverse: '#ffffff' as Hex, // Белый текст на тёмном фоне
    disabled: '#a8b1bb' as Hex, // Отключенные элементы
    placeholder: '#8c959f' as Hex, // Плейсхолдеры в полях ввода
    selection: '#ffffff' as Hex, // Текст на выделенном фоне
  },

  // === АКЦЕНТНЫЕ ЦВЕТА ===
  accent: {
    // Основные акценты
    primary: '#0969da' as Hex, // Основной синий
    primaryHover: '#0550ae' as Hex, // Синий при наведении
    primaryActive: '#0a3069' as Hex, // Синий при нажатии

    // Семантические цвета
    success: '#1a7f37' as Hex, // Зелёный для успеха
    warning: '#bf8700' as Hex, // Оранжевый для предупреждений
    error: '#cf222e' as Hex, // Красный для ошибок
    info: '#0969da' as Hex, // Синий для информации
  },

  // === ГРАНИЦЫ И РАЗДЕЛИТЕЛИ ===
  border: {
    default: '#d1d9e0' as Hex, // Основная граница
    muted: '#e9ecef' as Hex, // Приглушённая граница
    subtle: '#f1f3f4' as Hex, // Едва заметная граница
    emphasis: '#8c959f' as Hex, // Акцентная граница

    // Специальные границы
    input: '#d1d9e0' as Hex, // Границы полей ввода
    focus: '#0969da' as Hex, // Граница фокуса
    error: '#cf222e' as Hex, // Граница ошибки
    warning: '#bf8700' as Hex, // Граница предупреждения
  },

  // === СОСТОЯНИЯ ИНТЕРАКТИВНЫХ ЭЛЕМЕНТОВ ===
  interactive: {
    // Наведение
    hover: {
      background: '#f3f4f6' as Hex,
      border: '#c7d2fe' as Hex,
    },

    // Активное состояние
    active: {
      background: '#dbeafe' as Hex,
      border: '#93c5fd' as Hex,
    },

    // Выделение
    selected: {
      background: '#dbeafe' as Hex,
      text: '#1e40af' as Hex,
    },

    // Фокус
    focus: {
      ring: '#93c5fd' as Hex,
      background: '#f0f9ff' as Hex,
    },
  },

  // === СПЕЦИАЛЬНЫЕ ЦВЕТА ДЛЯ КОДА ===
  syntax: {
    // Адаптированные цвета для светлой темы
    keyword: '#d73a49' as Hex, // Красный для ключевых слов
    string: '#032f62' as Hex, // Тёмно-синий для строк
    number: '#005cc5' as Hex, // Синий для чисел
    comment: '#6a737d' as Hex, // Серый для комментариев
    function: '#6f42c1' as Hex, // Фиолетовый для функций
    variable: '#e36209' as Hex, // Оранжевый для переменных
    type: '#005cc5' as Hex, // Синий для типов
    constant: '#005cc5' as Hex, // Синий для констант
    operator: '#d73a49' as Hex, // Красный для операторов
    punctuation: '#586069' as Hex, // Серый для пунктуации
  },

  // === GIT ЦВЕТА ===
  git: {
    added: '#28a745' as Hex, // Зелёный для добавленных файлов
    modified: '#dbab09' as Hex, // Жёлтый для изменённых файлов
    deleted: '#d73a49' as Hex, // Красный для удалённых файлов
    ignored: '#959da5' as Hex, // Серый для игнорируемых файлов
    untracked: '#9ca3af' as Hex, // Светлый серый для неотслеживаемых
    conflicted: '#f85149' as Hex, // Ярко-красный для конфликтов
  },

  // === ЦВЕТА ПАНЕЛЕЙ ===
  panel: {
    // Левая боковая панель
    sidebar: {
      background: '#f6f8fa' as Hex,
      foreground: '#24292f' as Hex,
      border: '#e1e4e8' as Hex,
    },

    // Панель активности
    activityBar: {
      background: '#eff2f5' as Hex,
      foreground: '#57606a' as Hex,
      activeForeground: '#0969da' as Hex,
      border: '#e1e4e8' as Hex,
    },

    // Строка состояния
    statusBar: {
      background: '#f3f4f6' as Hex,
      foreground: '#24292f' as Hex,
      border: '#e1e4e8' as Hex,
    },

    // Заголовок окна
    titleBar: {
      background: '#ffffff' as Hex,
      foreground: '#24292f' as Hex,
      border: '#e1e4e8' as Hex,
    },
  },

  // === ТЕНИ И ЭФФЕКТЫ ===
  shadow: {
    small: 'rgba(27, 31, 35, 0.04)' as Hex,
    medium: 'rgba(27, 31, 35, 0.08)' as Hex,
    large: 'rgba(27, 31, 35, 0.12)' as Hex,
    inset: 'inset 0 1px 0 rgba(255, 255, 255, 0.25)' as Hex,
  },
} as const

/**
 * Создаёт полную палитру для светлой темы
 * Включает все необходимые цвета для VS Code
 */
export function createLightThemeCompletePalette() {
  const base = lightBasePalette

  return {
    // Основные системные цвета
    foreground: base.text.primary,
    'editor.background': base.background.primary,
    'editor.foreground': base.text.primary,

    // === РЕДАКТОР ===
    'editor.selectionBackground': base.interactive.selected.background,
    'editor.selectionHighlightBackground': '#f0f9ff',
    'editor.findMatchBackground': '#ffdf5d',
    'editor.findMatchHighlightBackground': '#ffdf5d66',
    'editor.lineHighlightBackground': base.background.subtle,
    'editor.hoverHighlightBackground': base.interactive.hover.background,

    // === ПАНЕЛИ ===
    'sideBar.background': base.panel.sidebar.background,
    'sideBar.foreground': base.panel.sidebar.foreground,
    'sideBar.border': base.panel.sidebar.border,

    'activityBar.background': base.panel.activityBar.background,
    'activityBar.foreground': base.panel.activityBar.foreground,
    'activityBar.activeForeground': base.panel.activityBar.activeForeground,
    'activityBar.border': base.panel.activityBar.border,

    'statusBar.background': base.panel.statusBar.background,
    'statusBar.foreground': base.panel.statusBar.foreground,
    'statusBar.border': base.panel.statusBar.border,

    'titleBar.activeBackground': base.panel.titleBar.background,
    'titleBar.activeForeground': base.panel.titleBar.foreground,
    'titleBar.border': base.panel.titleBar.border,

    // === ВКЛАДКИ ===
    'tab.activeBackground': base.background.primary,
    'tab.activeForeground': base.text.primary,
    'tab.inactiveBackground': base.background.secondary,
    'tab.inactiveForeground': base.text.secondary,
    'tab.border': base.border.muted,
    'tab.activeBorder': base.accent.primary,

    // === КНОПКИ ===
    'button.background': base.accent.primary,
    'button.foreground': base.text.inverse,
    'button.hoverBackground': base.accent.primaryHover,
    'button.border': base.accent.primary,

    'button.secondaryBackground': base.background.tertiary,
    'button.secondaryForeground': base.text.primary,
    'button.secondaryHoverBackground': base.interactive.hover.background,

    // === ПОЛЯ ВВОДА ===
    'input.background': base.background.input,
    'input.foreground': base.text.primary,
    'input.border': base.border.input,
    'input.placeholderForeground': base.text.placeholder,
    'input.focusBorder': base.border.focus,

    // === ВЫПАДАЮЩИЕ СПИСКИ ===
    'dropdown.background': base.background.primary,
    'dropdown.foreground': base.text.primary,
    'dropdown.border': base.border.default,
    'dropdown.listBackground': base.background.primary,

    // === СПИСКИ ===
    'list.activeSelectionBackground': base.interactive.selected.background,
    'list.activeSelectionForeground': base.interactive.selected.text,
    'list.hoverBackground': base.interactive.hover.background,
    'list.focusBackground': base.interactive.focus.background,
    'list.highlightForeground': base.accent.primary,

    // === ГРАНИЦЫ И ВИДЖЕТЫ ===
    'widget.border': base.border.default,
    'widget.shadow': base.shadow.medium,
    focusBorder: base.border.focus,

    // === ПРОКРУТКА ===
    'scrollbar.shadow': base.shadow.small,
    'scrollbarSlider.background': 'rgba(100, 116, 139, 0.2)',
    'scrollbarSlider.hoverBackground': 'rgba(100, 116, 139, 0.3)',
    'scrollbarSlider.activeBackground': 'rgba(100, 116, 139, 0.4)',

    // === ССЫЛКИ ===
    'textLink.foreground': base.accent.primary,
    'textLink.activeForeground': base.accent.primaryHover,

    // === УВЕДОМЛЕНИЯ ===
    'notificationCenter.border': base.border.default,
    'notificationCenterHeader.background': base.background.secondary,
    'notificationCenterHeader.foreground': base.text.primary,
    'notificationToast.border': base.border.default,
    'notifications.background': base.background.primary,
    'notifications.foreground': base.text.primary,
    'notifications.border': base.border.default,

    // === КОМАНДНАЯ ПАЛИТРА ===
    'quickInput.background': base.background.primary,
    'quickInput.foreground': base.text.primary,
    'quickInputTitle.background': base.background.secondary,

    // === ТЕРМИНАЛ ===
    'terminal.background': base.background.primary,
    'terminal.foreground': base.text.primary,
    'terminal.border': base.border.default,
  }
}

/**
 * Цветовая схема для подсветки синтаксиса в светлой теме
 */
export function createLightThemeTokenColors() {
  const syntax = lightBasePalette.syntax

  return [
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: syntax.comment,
        fontStyle: 'italic',
      },
    },
    {
      name: 'String',
      scope: ['string', 'constant.other.symbol'],
      settings: {
        foreground: syntax.string,
      },
    },
    {
      name: 'Number',
      scope: ['constant.numeric'],
      settings: {
        foreground: syntax.number,
      },
    },
    {
      name: 'Keyword',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: {
        foreground: syntax.keyword,
        fontStyle: 'bold',
      },
    },
    {
      name: 'Function',
      scope: ['entity.name.function', 'meta.function-call', 'support.function'],
      settings: {
        foreground: syntax.function,
      },
    },
    {
      name: 'Variable',
      scope: ['variable.parameter', 'meta.definition.variable'],
      settings: {
        foreground: syntax.variable,
      },
    },
    {
      name: 'Type',
      scope: ['entity.name.type', 'support.type', 'support.class'],
      settings: {
        foreground: syntax.type,
      },
    },
    {
      name: 'Constant',
      scope: ['constant.language', 'support.constant'],
      settings: {
        foreground: syntax.constant,
      },
    },
    {
      name: 'Operator',
      scope: ['keyword.operator'],
      settings: {
        foreground: syntax.operator,
      },
    },
    {
      name: 'Punctuation',
      scope: ['punctuation'],
      settings: {
        foreground: syntax.punctuation,
      },
    },
  ]
}

export type LightThemeCompletePalette = ReturnType<
  typeof createLightThemeCompletePalette
>
export type LightThemeTokenColors = ReturnType<
  typeof createLightThemeTokenColors
>
