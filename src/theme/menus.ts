import { palette, extendedPalette } from '../palette'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getMenuColors = (): Partial<Record<VSCodeColorKey, Hex>> => ({
  // Панель меню (menubar) - используем централизованную палитру
  'menubar.selectionForeground': extendedPalette.text.primary, // #a9b1d6
  'menubar.selectionBackground': extendedPalette.selection.menuSelection, // #1e202e
  'menubar.selectionBorder': extendedPalette.selection.menuBorder, // #1b1e2e

  // Выпадающие меню - используем централизованную палитру
  'menu.foreground': extendedPalette.text.muted, // #787c99
  'menu.background': extendedPalette.bg.secondary, // #16161e
  'menu.selectionForeground': extendedPalette.text.primary, // #a9b1d6
  'menu.selectionBackground': extendedPalette.selection.menuSelection, // #1e202e
  'menu.separatorBackground': extendedPalette.bg.border, // #101014
  'menu.border': extendedPalette.bg.border, // #101014
})
