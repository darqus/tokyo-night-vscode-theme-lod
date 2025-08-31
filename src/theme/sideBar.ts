import { palette, basePalette, extendedPalette } from '../palette'

import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getSideBarColors = (): Partial<Record<VSCodeColorKey, Hex>> => ({
  // Боковая панель - используем централизованную палитру
  'tree.indentGuidesStroke': extendedPalette.bg.tree, // #2b2b3b
  'sideBar.foreground': extendedPalette.text.muted, // #787c99
  'sideBar.background': extendedPalette.bg.secondary, // #16161e
  'sideBar.border': extendedPalette.bg.border, // #101014
  'sideBarTitle.foreground': extendedPalette.text.muted, // #787c99
  'sideBarSectionHeader.background': extendedPalette.bg.secondary, // #16161e
  'sideBarSectionHeader.foreground': extendedPalette.text.primary, // #a9b1d6
  'sideBarSectionHeader.border': extendedPalette.bg.border, // #101014
  'sideBar.dropBackground': extendedPalette.selection.listDrop, // #1e202e
})
