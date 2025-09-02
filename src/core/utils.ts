/**
 * Цветовые утилиты для генерации производных цветов
 */

type Hex = `#${string}`

/**
 * Парсинг hex цвета в RGB
 */
const parseHex = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) throw new Error(`Invalid hex color: ${hex}`)
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

/**
 * Конвертация RGB в hex
 */
const rgbToHex = (r: number, g: number, b: number): Hex => {
  const toHex = (n: number) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}` as Hex
}

/**
 * Смешивание двух цветов
 */
export const mix = (color1: string, color2: string, ratio: number): Hex => {
  const c1 = parseHex(color1)
  const c2 = parseHex(color2)
  const r = c1.r * (1 - ratio) + c2.r * ratio
  const g = c1.g * (1 - ratio) + c2.g * ratio
  const b = c1.b * (1 - ratio) + c2.b * ratio
  return rgbToHex(r, g, b)
}

/**
 * Добавление прозрачности к цвету
 */
export const withAlpha = (color: string, alpha: number): Hex => {
  const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0')
  return `${color}${alphaHex}` as Hex
}

/**
 * Осветление цвета
 */
export const lighten = (color: string, amount: number): Hex => {
  return mix(color, '#ffffff', amount)
}

/**
 * Затемнение цвета
 */
export const darken = (color: string, amount: number): Hex => {
  return mix(color, '#000000', amount)
}