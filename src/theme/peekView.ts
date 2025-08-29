import { palette, core } from '../palette'

export const getPeekViewColors = () => ({
  // Окно быстрого просмотра (Peek view)
  'peekView.border': palette.line.border,
  'peekViewEditor.background': palette.bg.base,
  'peekViewEditor.matchHighlightBackground':
    core.tokens.peekViewEditorMatchHighlightBackground,
  'peekViewTitle.background': palette.line.border,
  'peekViewTitleLabel.foreground': palette.fg.primary,
  'peekViewTitleDescription.foreground': palette.fg.muted,
  'peekViewResult.background': palette.bg.base,
  'peekViewResult.selectionForeground': palette.fg.primary,
  'peekViewResult.selectionBackground':
    core.tokens.peekViewResultSelectionBackground,
  'peekViewResult.lineForeground': palette.fg.primary,
  'peekViewResult.fileForeground': palette.fg.muted,
  'peekViewResult.matchHighlightBackground':
    core.tokens.peekViewResultMatchHighlightBackground,
})
