import { getBaseColors } from './base'
import { getButtonColors } from './buttons'
import { getInputColors } from './inputs'
import { getActivityBarColors } from './activityBar'
import { getSideBarColors } from './sideBar'
import { getListColors } from './lists'
import { getEditorColors } from './editor'
import { getTabColors } from './tabs'
import { getStatusBarColors } from './statusBar'
import { getTerminalColors } from './terminal'
import { getGitColors } from './git'
import { getNotificationColors } from './notifications'
import { getMenuColors } from './menus'
import { getPeekViewColors } from './peekView'
import { getDiffEditorColors } from './diffEditor'
import { getMergeColors } from './merge'
import { getChartColors } from './charts'
import { getDebugColors } from './debug'
import { getQuickInputColors } from './quickInput'
import { getMiscColors } from './misc'
import type { ColorMap } from './types'
import { composeColors } from './utils'

// Aggregates all theme color segments into a single flat map
export const buildColors = (): ColorMap => {
  const parts: ColorMap[] = [
    getBaseColors(),
    getButtonColors(),
    getInputColors(),
    getActivityBarColors(),
    getSideBarColors(),
    getListColors(),
    getEditorColors(),
    getTabColors(),
    getStatusBarColors(),
    getTerminalColors(),
    getGitColors(),
    getNotificationColors(),
    getMenuColors(),
    getPeekViewColors(),
    getDiffEditorColors(),
    getMergeColors(),
    getChartColors(),
    getDebugColors(),
    getQuickInputColors(),
    getMiscColors(),
  ]

  // We can enable overlap diagnostics during development if needed:
  // const { colors, overlaps } = composeColors(parts, { checkOverlap: true })
  // if (overlaps && overlaps.length) {
  //   console.warn('Overlapping color keys detected:', overlaps)
  // }
  const { colors } = composeColors(parts)
  return colors
}
