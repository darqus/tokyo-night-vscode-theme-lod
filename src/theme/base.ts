import { palette, core, extendedPalette } from '../palette'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getBaseColors = (): Partial<Record<VSCodeColorKey, Hex>> => ({
  // Верхний уровень и основа - используем централизованную палитру
  foreground: extendedPalette.text.muted, // #787c99
  descriptionForeground: extendedPalette.text.description, // #515670
  disabledForeground: extendedPalette.text.disabled, // #545c7e
  focusBorder: extendedPalette.border.focus, // #545c7e33
  errorForeground: extendedPalette.text.error, // #515670
  'widget.border': extendedPalette.border.widget, // #272a31
  'widget.shadow': extendedPalette.special.transparent, // #ffffff00
  'scrollbar.shadow': extendedPalette.scrollbar.shadow, // #00000033

  // Значки, иконки, настройки
  'badge.background': extendedPalette.badge.background, // #7e83b230
  'badge.foreground': extendedPalette.text.badge, // #acb0d0
  'icon.foreground': extendedPalette.text.muted, // #787c99
  'settings.headerForeground': extendedPalette.text.settings, // #6183bb

  // Окно и разделитель
  'window.activeBorder': extendedPalette.border.window, // #0d0f17
  'window.inactiveBorder': extendedPalette.border.window, // #0d0f17
  'sash.hoverBorder': extendedPalette.border.sash, // #29355a

  // Кнопки/значки расширений
  'extensionButton.prominentBackground':
    extendedPalette.extension.prominentBackground, // #7dcfff
  'extensionButton.prominentHoverBackground':
    extendedPalette.extension.prominentHover, // #222c444d
  'extensionButton.prominentForeground':
    extendedPalette.extension.prominentForeground, // #e5e5e5
  'extensionBadge.remoteBackground': extendedPalette.badge.extension, // #7bb2fa
  'extensionBadge.remoteForeground': extendedPalette.badge.extensionForeground, // #0c0f17

  // Ползунок полосы прокрутки - используем централизованную палитру
  'scrollbarSlider.background': extendedPalette.scrollbar.background, // #868bc415
  'scrollbarSlider.hoverBackground': extendedPalette.scrollbar.hover, // #868bc410
  'scrollbarSlider.activeBackground': extendedPalette.scrollbar.active, // #868bc422

  // Текст
  'walkThrough.embeddedEditorBackground': extendedPalette.special.walkThrough, // #0c0f17
  'textLink.foreground': extendedPalette.special.textLink, // #94acdf
  'textLink.activeForeground': extendedPalette.special.textLinkActive, // #7dcfff
  'textPreformat.foreground': extendedPalette.text.preformat, // #d2e1ea
  'textBlockQuote.background': extendedPalette.special.textBlockQuote, // #0c0f17
  'textCodeBlock.background': extendedPalette.special.textCodeBlock, // #0c0f17
  'textSeparator.foreground': extendedPalette.special.textSeparator, // #7bb0f9

  // Заголовок окна - используем централизованную палитру
  'titleBar.activeForeground': extendedPalette.text.muted, // #787c99
  'titleBar.inactiveForeground': extendedPalette.text.muted, // #787c99
  'titleBar.activeBackground': extendedPalette.bg.secondary, // #16161e
  'titleBar.inactiveBackground': extendedPalette.bg.secondary, // #16161e
  'titleBar.border': extendedPalette.bg.border, // #101014

  // Command Center
  'commandCenter.foreground': extendedPalette.command.foreground, // #bababc
  'commandCenter.activeForeground': extendedPalette.command.activeForeground, // #e5e5e5
  'commandCenter.inactiveForeground':
    extendedPalette.command.inactiveForeground, // #a4a5a7
  'commandCenter.background': extendedPalette.command.background, // #0c0f17
  'commandCenter.activeBackground': extendedPalette.command.activeBackground, // #13151d
  'commandCenter.border': extendedPalette.border.widget, // #272a31
  'commandCenter.inactiveBorder': extendedPalette.border.widget, // #272a31

  // Баннер
  'banner.background': extendedPalette.banner.background, // #0c0f17
  'banner.foreground': extendedPalette.banner.foreground, // #e5e5e5
  'banner.iconForeground': extendedPalette.banner.iconForeground, // #7dcfff

  // Подписи клавиш
  'keybindingLabel.background': extendedPalette.keybinding.background, // #0c0f1799
  'keybindingLabel.foreground': extendedPalette.keybinding.foreground, // #e5e5e5
  'keybindingLabel.border': extendedPalette.border.keybinding, // #272a31
  'keybindingLabel.bottomBorder': extendedPalette.border.keybindingBottom, // #272a31ab
})
