import { palette, basePalette, extendedPalette } from '../palette'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getInputColors = (): Partial<Record<VSCodeColorKey, Hex>> => ({
  // Поля ввода - используем централизованную палитру
  'input.background': basePalette.inputBg, // #14141b
  'input.foreground': basePalette.inputFg, // #a9b1d6
  'input.border': extendedPalette.border.input, // #272a31
  'input.placeholderForeground': extendedPalette.text.placeholder, // #999a9d
  'inputOption.activeForeground': extendedPalette.text.light, // #e5e5e5
  'inputOption.activeBackground': extendedPalette.input.optionActive, // #7aa2f733
  'inputOption.activeBorder': extendedPalette.border.input, // #272a31
  'inputOption.hoverBackground': extendedPalette.input.optionHover, // #13151d
  'inputValidation.infoForeground': extendedPalette.text.light, // #e5e5e5
  'inputValidation.infoBackground': extendedPalette.input.validationInfo, // #7aa2f721
  'inputValidation.infoBorder': extendedPalette.input.validationInfoBorder, // #7dcfff
  'inputValidation.warningForeground': extendedPalette.text.light, // #e5e5e5
  'inputValidation.warningBackground': extendedPalette.input.validationWarning, // #e0af6821
  'inputValidation.warningBorder':
    extendedPalette.input.validationWarningBorder, // #e0af68
  'inputValidation.errorForeground': extendedPalette.text.light, // #e5e5e5
  'inputValidation.errorBackground': extendedPalette.input.validationError, // #e4687621
  'inputValidation.errorBorder': extendedPalette.input.validationErrorBorder, // #e46876

  // Выпадающие списки
  'dropdown.foreground': extendedPalette.dropdown.foreground, // #bababc
  'dropdown.background': extendedPalette.dropdown.background, // #0c0f17
  'dropdown.listBackground': extendedPalette.dropdown.listBackground, // #0c0f17
  'dropdown.border': extendedPalette.border.dropdown, // #272a31

  // Переключатели (checkbox / radio)
  'checkbox.background': extendedPalette.checkbox.background, // #0c0f17
  'checkbox.foreground': extendedPalette.checkbox.foreground, // #e5e5e5
  'checkbox.border': extendedPalette.border.checkbox, // #272a31
  'checkbox.selectBackground': extendedPalette.checkbox.selectBackground, // #7aa2f733
  'checkbox.selectBorder': extendedPalette.border.checkbox, // #272a31
  'radio.activeForeground': extendedPalette.radio.activeForeground, // #e5e5e5
  'radio.activeBackground': extendedPalette.radio.activeBackground, // #0c0f17
  'radio.activeBorder': extendedPalette.border.radio, // #272a31
  'radio.inactiveForeground': extendedPalette.radio.inactiveForeground, // #e5e5e5
  'radio.inactiveBackground': extendedPalette.radio.inactiveBackground, // #0c0f17
  'radio.inactiveBorder': extendedPalette.border.radio, // #272a31
  'radio.inactiveHoverBackground': extendedPalette.radio.inactiveHover, // #13151d
})
