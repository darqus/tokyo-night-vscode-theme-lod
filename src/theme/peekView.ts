import { palette, core } from '../palette'
import { getAdaptiveWidgetBackground } from '../utils/adaptive-background'
import type { ThemeContext } from '../generators/adaptive-theme-generator'

export const getPeekViewColors = (context?: ThemeContext) => {
  const widgetBackground = getAdaptiveWidgetBackground(context)

  return {
    // Окно быстрого просмотра (Peek view) - АДАПТИВНЫЕ фоны
    'peekView.border': palette.line.border,
    'peekViewEditor.background': widgetBackground, // АДАПТИВНЫЙ фон редактора peek view
    'peekViewEditor.matchHighlightBackground':
      core.tokens.peekViewEditorMatchHighlightBackground,
    'peekViewTitle.background': palette.line.border,
    'peekViewTitleLabel.foreground': palette.fg.primary,
    'peekViewTitleDescription.foreground': palette.fg.muted,
    'peekViewResult.background': widgetBackground, // АДАПТИВНЫЙ фон результатов peek view
    'peekViewResult.selectionForeground': palette.fg.primary,
    'peekViewResult.selectionBackground':
      core.tokens.peekViewResultSelectionBackground,
    'peekViewResult.lineForeground': palette.fg.primary,
    'peekViewResult.fileForeground': palette.fg.muted,
    'peekViewResult.matchHighlightBackground':
      core.tokens.peekViewResultMatchHighlightBackground,
  }
}
