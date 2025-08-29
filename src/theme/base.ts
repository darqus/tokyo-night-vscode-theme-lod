import { palette, core } from '../palette'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getBaseColors = (): Partial<Record<VSCodeColorKey, Hex>> => ({
  // Верхний уровень и основа
  foreground: palette.fg.primary,
  descriptionForeground: palette.fg.muted,
  disabledForeground: palette.fg.inactive,
  focusBorder: core.tokens.focusBorder, // Используем цвет бейджа для фокуса
  errorForeground: palette.accent.red,
  'widget.border': palette.line.border, // Граница для виджетов поиска/замены
  'widget.shadow': palette.ui.shadow.widget,
  'scrollbar.shadow': palette.ui.shadow.scrollbar,

  // Значки, иконки, настройки - улучшенная видимость
  'badge.background': palette.ui.badge.base,
  'badge.foreground': palette.ui.badge.fg,
  'icon.foreground': palette.fg.muted,
  'settings.headerForeground': palette.fg.primary,

  // Окно и разделитель
  'window.activeBorder': palette.ui.window.border,
  'window.inactiveBorder': palette.ui.window.border,
  'sash.hoverBorder': palette.ui.sash.hover,

  // Кнопки/значки расширений - стандартизация с VS Code
  'extensionButton.prominentBackground': palette.brand.primary,
  'extensionButton.prominentHoverBackground':
    core.tokens.extensionButtonProminentHoverBackground,
  'extensionButton.prominentForeground': palette.fg.selectionText,
  'extensionBadge.remoteBackground': palette.ui.badge.base,
  'extensionBadge.remoteForeground': palette.ui.badge.fg,

  // Ползунок полосы прокрутки - улучшенная видимость
  'scrollbarSlider.background': core.tokens.scrollbarSliderBackground,
  'scrollbarSlider.hoverBackground': core.tokens.scrollbarSliderHoverBackground,
  'scrollbarSlider.activeBackground':
    core.tokens.scrollbarSliderActiveBackground,

  // Текст
  'walkThrough.embeddedEditorBackground': palette.bg.base,
  'textLink.foreground': palette.ui.settingsHeader,
  'textLink.activeForeground': palette.accent.cyan,
  'textPreformat.foreground': palette.ui.text.preformat,
  'textBlockQuote.background': palette.bg.base,
  'textCodeBlock.background': palette.bg.base,
  'textSeparator.foreground': palette.ui.text.separator,

  // Заголовок окна
  'titleBar.activeForeground': palette.fg.muted,
  'titleBar.inactiveForeground': palette.fg.inactive,
  'titleBar.activeBackground': palette.bg.elevated,
  'titleBar.inactiveBackground': palette.bg.elevated,
  'titleBar.border': palette.line.border,

  // Command Center (новое меню в заголовке окна)
  'commandCenter.foreground': palette.fg.muted,
  'commandCenter.activeForeground': palette.fg.primary,
  'commandCenter.inactiveForeground': palette.fg.inactive,
  'commandCenter.background': palette.bg.base,
  'commandCenter.activeBackground': palette.bg.hover,
  'commandCenter.border': palette.line.border,
  'commandCenter.inactiveBorder': palette.line.border,

  // Баннер
  'banner.background': palette.bg.elevated, // Фон баннера
  'banner.foreground': palette.fg.primary, // Текст баннера
  'banner.iconForeground': palette.brand.primary, // Иконка баннера

  // Подписи клавиш
  'keybindingLabel.background': core.tokens.keybindingLabelBackground, // Фон подписи клавиш
  'keybindingLabel.foreground': palette.fg.primary, // Текст подписи клавиш
  'keybindingLabel.border': palette.line.border, // Граница подписи клавиш
  'keybindingLabel.bottomBorder': core.tokens.keybindingLabelBottomBorder, // Нижняя граница подписи клавиш
})
