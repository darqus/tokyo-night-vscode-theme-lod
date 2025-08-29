import { mix } from '../utils/color'
import { intensity } from './config'
import { basePalette } from './base'
import { generateTokens, coreBlack, coreWhite } from './generator'

// Generate all tokens once
const tokens = generateTokens()

// Recreate generatedGray for core.text.subtle consumers
const generatedGray = mix(coreWhite, coreBlack, intensity.mix.gray)

// Public core object assembled from tokens and base palette
export const core = {
  bg: {
    base: coreBlack,
    elevated: tokens.bgElevated,
    overlay: tokens.bgOverlay,
    input: tokens.bgInput,
    hover: tokens.bgHover,
    active: tokens.bgActive,
    drop: tokens.bgDrop,
    lineHighlight: tokens.bgLineHighlight,
    bracketMatch: tokens.bgBracketMatch,
    tabs: coreBlack,
    selection: {
      active: tokens.editorSelectionBackground,
      inactive: tokens.editorInactiveSelectionBackground,
      focus: tokens.editorSelectionBackground,
      menu: tokens.peekViewResultSelectionBackground,
    },
    stateLabel: tokens.bgStateLabel,
  },
  border: tokens.border,
  text: {
    primary: tokens.textPrimary,
    muted: tokens.textMuted,
    subtle: generatedGray,
    inactive: tokens.textInactive,
    soft: tokens.textSoft,
    selection: coreWhite,
    subtle2: tokens.textSubtle2,
    gray600: tokens.textGray600,
    comment: tokens.textComment,
    commentDoc: tokens.textCommentDoc,
    commentDocEmphasized: tokens.textCommentDocEmphasized,
    preformat: tokens.textPreformat,
    placeholder: tokens.textPlaceholder,
    editorLinkActive: tokens.textEditorLinkActive,
  },
  accent: {
    blue: basePalette.blue,
    cyan: basePalette.cyan,
    teal: basePalette.teal,
    purple: basePalette.purple,
    magenta: basePalette.magenta,
    red: basePalette.red,
    green: basePalette.green,
    yellow: basePalette.yellow,
    orange: basePalette.orange,
  },
  brand: {
    button: {
      primary: tokens.brandButtonPrimary,
      hover: tokens.brandButtonHover,
    },
  },
  ui: {
    shadow: tokens.uiShadow,
    selectionWash: tokens.uiSelectionWash,
    scrollbarBase: tokens.uiScrollbarBase,
    tab: {
      activeModified: basePalette.purple,
      inactiveModified: basePalette.cyan,
      unfocusedActive: tokens.uiTabUnfocusedActive,
    },
    git: {
      ignored: tokens.uiGitIgnored,
      deleted: tokens.uiGitDeleted,
      conflicting: tokens.uiGitConflicting,
      stageDeleted: tokens.uiGitStageDeleted,
      stageModified: tokens.uiGitStageModified,
    },
  },
  // Expose tokens for direct use in theme files if needed
  tokens,
} as const
