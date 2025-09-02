/**
 * Генератор токенов подсветки синтаксиса
 */
import { syntaxPalette } from '../core/syntax'
import type { TokenColor, SemanticTokenStyle } from '../types/theme'

/**
 * Генерация tokenColors для подсветки синтаксиса
 */
export const generateTokenColors = (): TokenColor[] => [
  // Комментарии
  {
    name: 'Comment',
    scope: ['comment', 'punctuation.definition.comment'],
    settings: { foreground: syntaxPalette.comment, fontStyle: 'italic' }
  },
  
  // Ключевые слова
  {
    name: 'Keyword',
    scope: ['keyword', 'storage.type', 'storage.modifier'],
    settings: { foreground: syntaxPalette.keyword }
  },
  
  // Строки
  {
    name: 'String',
    scope: ['string', 'constant.other.symbol'],
    settings: { foreground: syntaxPalette.string }
  },
  
  // Числа
  {
    name: 'Number',
    scope: ['constant.numeric', 'constant.language'],
    settings: { foreground: syntaxPalette.number }
  },
  
  // Функции
  {
    name: 'Function',
    scope: ['entity.name.function', 'meta.function-call', 'variable.function'],
    settings: { foreground: syntaxPalette.function }
  },
  
  // Переменные
  {
    name: 'Variable',
    scope: ['variable', 'support.variable'],
    settings: { foreground: syntaxPalette.variable }
  },
  
  // Классы и типы
  {
    name: 'Class',
    scope: ['entity.name.class', 'entity.name.type', 'support.class'],
    settings: { foreground: syntaxPalette.class }
  },
  
  // Свойства
  {
    name: 'Property',
    scope: ['variable.other.property', 'meta.object-literal.key'],
    settings: { foreground: syntaxPalette.property }
  },
  
  // HTML теги
  {
    name: 'Tag',
    scope: ['entity.name.tag'],
    settings: { foreground: syntaxPalette.tag }
  },
  
  // HTML атрибуты
  {
    name: 'Attribute',
    scope: ['entity.other.attribute-name'],
    settings: { foreground: syntaxPalette.attribute }
  },
  
  // Операторы
  {
    name: 'Operator',
    scope: ['keyword.operator'],
    settings: { foreground: syntaxPalette.operator }
  },
  
  // Пунктуация
  {
    name: 'Punctuation',
    scope: ['punctuation'],
    settings: { foreground: syntaxPalette.punctuation }
  },
  
  // Недопустимый код
  {
    name: 'Invalid',
    scope: ['invalid', 'invalid.illegal'],
    settings: { foreground: syntaxPalette.invalid }
  }
]

/**
 * Генерация семантических токенов
 */
export const generateSemanticTokens = (): Record<string, SemanticTokenStyle> => ({
  // Переменные
  'variable': { foreground: syntaxPalette.variable },
  'variable.readonly': { foreground: syntaxPalette.constant },
  
  // Функции
  'function': { foreground: syntaxPalette.function },
  'method': { foreground: syntaxPalette.function },
  
  // Типы
  'class': { foreground: syntaxPalette.class },
  'type': { foreground: syntaxPalette.type },
  'interface': { foreground: syntaxPalette.type },
  
  // Свойства
  'property': { foreground: syntaxPalette.property },
  'parameter': { foreground: syntaxPalette.variable },
  
  // Ключевые слова
  'keyword': { foreground: syntaxPalette.keyword },
  
  // Комментарии
  'comment': { foreground: syntaxPalette.comment, italic: true },
  
  // Строки и числа
  'string': { foreground: syntaxPalette.string },
  'number': { foreground: syntaxPalette.number },
  
  // Состояния
  'deprecated': { foreground: syntaxPalette.deprecated, strikethrough: true },
})