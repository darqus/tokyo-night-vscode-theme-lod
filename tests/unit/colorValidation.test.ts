/**
 * Тесты валидации цветов
 */
import { mix, withAlpha } from '../../src/core/utils'
import { createHex } from '../../src/types/palette'

describe('Color Validation', () => {
  describe('createHex', () => {
    test('should accept valid hex colors', () => {
      expect(() => createHex('#ff0000')).not.toThrow()
      expect(() => createHex('#000000')).not.toThrow()
      expect(() => createHex('#FFFFFF')).not.toThrow()
    })

    test('should reject invalid hex colors', () => {
      expect(() => createHex('invalid')).toThrow('Invalid hex color format')
      expect(() => createHex('#xyz')).toThrow('Invalid hex color format')
      expect(() => createHex('#12345')).toThrow('Invalid hex color format')
      expect(() => createHex('ff0000')).toThrow('Invalid hex color format')
    })
  })

  describe('mix function', () => {
    test('should validate hex colors', () => {
      expect(() => mix('invalid', '#ff0000', 0.5)).toThrow('Invalid hex color')
      expect(() => mix('#ff0000', 'invalid', 0.5)).toThrow('Invalid hex color')
    })

    test('should clamp ratio to 0-1 range', () => {
      const result1 = mix('#000000', '#ffffff', 1.5)
      const result2 = mix('#000000', '#ffffff', 1.0)
      expect(result1).toBe(result2)

      const result3 = mix('#000000', '#ffffff', -0.5)
      const result4 = mix('#000000', '#ffffff', 0.0)
      expect(result3).toBe(result4)
    })

    test('should mix colors correctly', () => {
      expect(mix('#000000', '#ffffff', 0.5)).toBe('#808080')
      expect(mix('#ff0000', '#0000ff', 0.5)).toBe('#800080')
    })
  })

  describe('withAlpha function', () => {
    test('should validate hex colors', () => {
      expect(() => withAlpha('invalid', 0.5)).toThrow('Invalid hex color')
    })

    test('should clamp alpha to 0-1 range', () => {
      const result1 = withAlpha('#ff0000', 1.5)
      const result2 = withAlpha('#ff0000', 1.0)
      expect(result1).toBe(result2)

      const result3 = withAlpha('#ff0000', -0.5)
      const result4 = withAlpha('#ff0000', 0.0)
      expect(result3).toBe(result4)
    })

    test('should add alpha correctly', () => {
      expect(withAlpha('#ff0000', 0.5)).toBe('#ff000080')
      expect(withAlpha('#000000', 1.0)).toBe('#000000ff')
    })
  })
})