/**
 * Анализ цвета placeholder и предложение холодных альтернатив
 */

// Функция для конвертации hex в RGB
function hexToRgb(hex) {
  hex = hex.replace('#', '')
  if (hex.length === 8) {
    hex = hex.substring(0, 6)
  }
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) throw new Error(`Неверный hex цвет: ${hex}`)

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

// Функция для конвертации RGB в HSL
function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0 // ахроматический
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

// Функция для определения цветовой температуры
function getColorTemperature(hex) {
  const rgb = hexToRgb(hex)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  if ((hsl.h >= 0 && hsl.h <= 60) || (hsl.h >= 300 && hsl.h <= 360)) {
    return 'теплый'
  } else if (hsl.h >= 180 && hsl.h <= 300) {
    return 'холодный'
  } else {
    return 'нейтральный'
  }
}

// Функция для генерации холодного аналога
function generateColdAnalog(hex, hueShift = 0, saturationBoost = 0) {
  const rgb = hexToRgb(hex)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)

  // Сдвигаем в холодную область (210-270 градусов - синий-фиолетовый спектр)
  let newHue = 220 + hueShift // Базовый холодный оттенок
  let newSat = Math.min(100, hsl.s + saturationBoost) // Слегка увеличиваем насыщенность
  let newLight = hsl.l // Сохраняем яркость

  // Конвертируем обратно в RGB
  const hslToRgb = (h, s, l) => {
    s /= 100
    l /= 100
    h /= 360

    const c = (1 - Math.abs(2 * l - 1)) * s
    const x = c * (1 - Math.abs((h * 6) % 2 - 1))
    const m = l - c / 2

    let r, g, b

    if (h < 1/6) {
      r = c; g = x; b = 0
    } else if (h < 2/6) {
      r = x; g = c; b = 0
    } else if (h < 3/6) {
      r = 0; g = c; b = x
    } else if (h < 4/6) {
      r = 0; g = x; b = c
    } else if (h < 5/6) {
      r = x; g = 0; b = c
    } else {
      r = c; g = 0; b = x
    }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255)
    }
  }

  const newRgb = hslToRgb(newHue, newSat, newLight)

  // Конвертируем в hex
  const toHex = (n) => n.toString(16).padStart(2, '0')
  return `#${toHex(newRgb.r)}${toHex(newRgb.g)}${toHex(newRgb.b)}`
}

// Текущий цвет placeholder
const currentPlaceholder = '#999a9d'
console.log('=== АНАЛИЗ ЦВЕТА PLACEHOLDER ===')
console.log('Текущий цвет:', currentPlaceholder)

const rgb = hexToRgb(currentPlaceholder)
const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
const temp = getColorTemperature(currentPlaceholder)

console.log('RGB:', rgb)
console.log('HSL: H=' + hsl.h + '° S=' + hsl.s + '% L=' + hsl.l + '%')
console.log('Температура:', temp)

console.log('\n=== ПРОБЛЕМА ===')
if (temp === 'нейтральный') {
  console.log('⚠️  Текущий цвет нейтральный (H=' + hsl.h + '°) - может быть недостаточно холодным для Tokyo Night')
  console.log('Рекомендуется сдвинуть в холодную область (180-300°)')
}

console.log('\n=== ПРЕДЛАГАЕМЫЕ ХОЛОДНЫЕ АЛЬТЕРНАТИВЫ ===')

// Ручной список холодных альтернатив с правильной яркостью
const alternatives = [
  { color: '#8891b5', name: 'Холодный серо-синий (основная рекомендация)' },
  { color: '#7b87a3', name: 'Приглушенный холодный серый' },
  { color: '#6d7ea0', name: 'Темный холодный серый' },
  { color: '#8a95b8', name: 'Светлый холодный серо-синий' },
  { color: '#7488a8', name: 'Сбалансированный холодный' },
  { color: '#858fb5', name: 'Фиолетово-синий холодный' },
]

alternatives.forEach((alt, i) => {
  const altRgb = hexToRgb(alt.color)
  const altHsl = rgbToHsl(altRgb.r, altRgb.g, altRgb.b)
  const altTemp = getColorTemperature(alt.color)

  console.log(`${i + 1}. ${alt.color} - ${alt.name}`)
  console.log(`   HSL: H=${altHsl.h}° S=${altHsl.s}% L=${altHsl.l}% - ${altTemp}`)
  console.log(`   RGB: r=${altRgb.r} g=${altRgb.g} b=${altRgb.b}`)
  console.log('')
})

console.log('=== РЕКОМЕНДАЦИЯ ===')
console.log('Лучший выбор: #8891b5')
console.log('Причины:')
console.log('- Холодная температура (H=220° - синий спектр)')
console.log('- Сохраняет читаемость (яркость ~60%)')
console.log('- Гармонирует с основной палитрой Tokyo Night')
console.log('- Подходит для всех видов placeholder текста')
