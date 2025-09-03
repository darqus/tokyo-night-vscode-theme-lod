import { withAlpha, mix, lightenToward, darkenToward } from '../../src/utils/color'
import { Hex } from '../../src/types/palette'
import { basePalette } from '../../src/palette/base'

describe('Color Utilities', () => {
  describe('withAlpha', () => {
    it('should add alpha channel as number correctly', () => {
      const result = withAlpha(basePalette.red, 0.5)
      expect(result).toBe(`${basePalette.red}80`)
    })

    it('should add alpha channel as string correctly', () => {
      const result = withAlpha(basePalette.red, '80')
      expect(result).toBe(`${basePalette.red}80`)
    })

    it('should handle edge cases', () => {
      expect(withAlpha(basePalette.white, 0)).toBe(`${basePalette.white}00`)
      expect(withAlpha(basePalette.black, 1)).toBe(`${basePalette.black}ff`)
    })

    it('should throw error for invalid hex', () => {
      expect(() => withAlpha('invalid' as Hex, 0.5)).toThrow()
    })

    it('should throw error for invalid alpha', () => {
      expect(() => withAlpha(basePalette.red, 1.5)).toThrow()
      expect(() => withAlpha(basePalette.red, -0.5)).toThrow()
    })
  })

  describe('mix', () => {
    it('should mix two colors correctly', () => {
      const result = mix(basePalette.red, basePalette.blue, 0.5)
      expect(result).toMatchInlineSnapshot(`"#b98cc3"`)
    })

    it('should handle edge weights', () => {
      expect(mix(basePalette.red, basePalette.blue, 0)).toBe(basePalette.red)
      expect(mix(basePalette.red, basePalette.blue, 1)).toBe(basePalette.blue)
    })

    it('should clamp weights', () => {
      expect(mix(basePalette.red, basePalette.blue, -0.5)).toBe(basePalette.red)
      expect(mix(basePalette.red, basePalette.blue, 1.5)).toBe(basePalette.blue)
    })
  })

  describe('lightenToward', () => {
    it('should lighten color toward another color', () => {
      const result = lightenToward(basePalette.gray4, basePalette.white, 0.5)
      expect(result).toMatchInlineSnapshot(`"#9ca3c7"`)
    })
  })

  describe('darkenToward', () => {
    it('should darken color toward another color', () => {
      const result = darkenToward(basePalette.gray4, basePalette.black, 0.5)
      expect(result).toMatchInlineSnapshot(`"#494c60"`)
    })
  })
})