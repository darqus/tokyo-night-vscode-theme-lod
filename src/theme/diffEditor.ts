import { core } from '../palette'

export const getDiffEditorColors = () => ({
  // Редактор сравнения (Diff)
  'diffEditor.insertedTextBackground':
    core.tokens.diffEditorInsertedTextBackground,
  'diffEditor.removedTextBackground':
    core.tokens.diffEditorRemovedTextBackground,
  'diffEditor.insertedTextBorder': core.tokens.diffEditorInsertedTextBorder,
  'diffEditor.removedTextBorder': core.tokens.diffEditorRemovedTextBorder,
  'diffEditor.insertedLineBackground':
    core.tokens.diffEditorInsertedLineBackground,
  'diffEditor.removedLineBackground':
    core.tokens.diffEditorRemovedLineBackground,
  'diffEditor.diagonalFill': core.tokens.diffEditorDiagonalFill,
})
