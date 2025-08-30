import { palette } from '../palette'

export const getListColors = () => ({
  // Списки
  'list.dropBackground': palette.bg.drop,
  // Менее контрастный текст для деэмфазы
  'list.deemphasizedForeground': palette.fg.muted,
  'list.activeSelectionBackground': palette.bg.selection.active,
  'list.activeSelectionForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
  'list.activeSelectionIconForeground': palette.fg.selectionText, // Белые иконки для выбранных элементов
  'list.inactiveSelectionBackground': palette.bg.selection.inactive,
  'list.inactiveSelectionForeground': palette.fg.primary, // Более контрастный текст для неактивного выделения
  'list.focusBackground': palette.bg.selection.focus,
  'list.focusForeground': palette.fg.selectionText, // Белый текст для максимальной контрастности
  // Когда контейнер списка не в фокусе, но элемент в фокусе
  'list.inactiveFocusBackground': palette.bg.selection.inactive,
  'list.hoverBackground': palette.ui.list.hoverBg, // используем обновленный hover цвет для списков
  'list.hoverForeground': palette.fg.primary,
  'list.highlightForeground': palette.fg.primary, // Нейтральная подсветка текста
  'list.invalidItemForeground': palette.accent.yellow,
  'list.errorForeground': palette.accent.red,
  'list.warningForeground': palette.accent.yellow,

  'listFilterWidget.background': palette.line.border,
  'listFilterWidget.outline': palette.brand.primary,
  'listFilterWidget.noMatchesOutline': palette.ui.noMatches,
})
