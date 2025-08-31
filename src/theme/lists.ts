import { palette, extendedPalette } from '../palette'
import { getAdaptiveWidgetBackground } from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getListColors = (
  context?: ThemeContext
): Partial<Record<VSCodeColorKey, Hex>> => {
  const widgetBackground = getAdaptiveWidgetBackground(context)

  return {
    // Списки - используем централизованную палитру
    'list.dropBackground': extendedPalette.selection.listDrop, // #1e202e
    'list.deemphasizedForeground': extendedPalette.text.muted, // #787c99
    'list.activeSelectionBackground': extendedPalette.selection.listActive, // #202330
    'list.activeSelectionForeground': extendedPalette.text.primary, // #a9b1d6
    'list.inactiveSelectionBackground': extendedPalette.selection.listInactive, // #1c1d29
    'list.inactiveSelectionForeground': extendedPalette.text.primary, // #a9b1d6
    'list.focusBackground': extendedPalette.selection.listInactive, // #1c1d29
    'list.focusForeground': extendedPalette.text.primary, // #a9b1d6
    'list.hoverBackground': extendedPalette.selection.listHover, // #13131a
    'list.hoverForeground': extendedPalette.text.primary, // #a9b1d6
    'list.highlightForeground': extendedPalette.list.highlight, // #668ac4
    'list.invalidItemForeground': extendedPalette.list.invalid, // #c97018
    'list.errorForeground': extendedPalette.list.error, // #bb616b
    'list.warningForeground': extendedPalette.list.warning, // #c49a5a

    // Дополнительные свойства, которых нет в оригинале, оставляем совместимыми
    'list.activeSelectionIconForeground': extendedPalette.text.primary, // #a9b1d6
    'list.inactiveFocusBackground': extendedPalette.selection.listInactive, // #1c1d29

    'listFilterWidget.background': widgetBackground, // АДАПТИВНЫЙ фон виджета поиска в списках
    'listFilterWidget.outline': palette.brand.primary,
    'listFilterWidget.noMatchesOutline': palette.ui.noMatches,
  }
}
