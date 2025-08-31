import { palette, extendedPalette } from '../palette'
import { getAdaptiveWidgetBackground } from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'
import type { VSCodeColorKey } from '../validation/allowedProperties'
import type { Hex } from '../types/palette'

export const getGitColors = (
  context?: ThemeContext
): Partial<Record<VSCodeColorKey, Hex>> => {
  const widgetBackground = getAdaptiveWidgetBackground(context)

  return {
    // Git декорации - используем централизованную палитру
    'gitDecoration.modifiedResourceForeground': extendedPalette.git.modified, // #6183bb
    'gitDecoration.ignoredResourceForeground': extendedPalette.git.ignored, // #515670
    'gitDecoration.deletedResourceForeground': extendedPalette.git.deleted, // #914c54
    'gitDecoration.renamedResourceForeground': extendedPalette.git.renamed, // #449dab
    'gitDecoration.addedResourceForeground': extendedPalette.git.added, // #449dab
    'gitDecoration.untrackedResourceForeground': extendedPalette.git.untracked, // #449dab
    'gitDecoration.conflictingResourceForeground':
      extendedPalette.git.conflicting, // #e0af68cc
    'gitDecoration.stageDeletedResourceForeground':
      extendedPalette.git.stageDeleted, // #914c54
    'gitDecoration.stageModifiedResourceForeground':
      extendedPalette.git.stageModified, // #6183bb

    // SCM Graph - используем централизованную палитру
    'scmGraph.historyItemHoverLabelForeground':
      extendedPalette.scmGraph.hoverLabel, // #1b1e2e
    'scmGraph.foreground1': extendedPalette.scmGraph.foreground1, // #ff9e64
    'scmGraph.foreground2': extendedPalette.scmGraph.foreground2, // #e0af68
    'scmGraph.foreground3': extendedPalette.scmGraph.foreground3, // #41a6b5
    'scmGraph.foreground4': extendedPalette.scmGraph.foreground4, // #7aa2f7
    'scmGraph.foreground5': extendedPalette.scmGraph.foreground5, // #bb9af7
    'scmGraph.historyItemHoverAdditionsForeground':
      extendedPalette.scmGraph.hoverAdditions, // #41a6b5
    'scmGraph.historyItemHoverDeletionsForeground':
      extendedPalette.scmGraph.hoverDeletions, // #f7768e
    'scmGraph.historyItemRefColor': extendedPalette.scmGraph.refColor, // #506FCA
    'scmGraph.historyItemRemoteRefColor':
      extendedPalette.scmGraph.remoteRefColor, // #41a6b5
    'scmGraph.historyItemBaseRefColor': extendedPalette.scmGraph.baseRefColor, // #9d7cd8
    'scmGraph.historyItemHoverDefaultLabelForeground':
      extendedPalette.scmGraph.hoverDefault, // #a9b1d6
  }
}
