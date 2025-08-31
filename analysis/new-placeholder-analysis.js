/**
 * Анализ новых цветов placeholder после оптимизации
 */

// Функции анализа
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
    h = s = 0
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

// Новые цвета placeholder
const newColors = {
  old: '#999a9d',
  inputPlaceholder: '#8891b5',
  editorPlaceholder: '#868dad', // из сгенерированной темы
  foldPlaceholder: '#7b87a3',
  chatPlaceholder: '#8a95b8'
}

console.log('=== АНАЛИЗ ОПТИМИЗИРОВАННЫХ ЦВЕТОВ PLACEHOLDER ===\n')

for (const [name, color] of Object.entries(newColors)) {
  const rgb = hexToRgb(color)
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
  const temp = getColorTemperature(color)

  let description = ''
  switch (name) {
    case 'old':
      description = 'Старый цвет (до оптимизации)'
      break
    case 'inputPlaceholder':
      description = 'input.placeholderForeground'
      break
    case 'editorPlaceholder':
      description = 'editor.placeholder.foreground (автоматический)'
      break
    case 'foldPlaceholder':
      description = 'editor.foldPlaceholderForeground'
      break
    case 'chatPlaceholder':
      description = 'inlineChatInput.placeholderForeground'
      break
  }

  console.log(`${description}:`)
  console.log(`  Цвет: ${color}`)
  console.log(`  HSL: H=${hsl.h}° S=${hsl.s}% L=${hsl.l}%`)
  console.log(`  RGB: r=${rgb.r} g=${rgb.g} b=${rgb.b}`)
  console.log(`  Температура: ${temp}`)

  if (name !== 'old') {
    const oldRgb = hexToRgb(newColors.old)
    const oldHsl = rgbToHsl(oldRgb.r, oldRgb.g, oldRgb.b)

    const saturationDiff = hsl.s - oldHsl.s
    const lightnessDiff = hsl.l - oldHsl.l

    console.log(`  🔄 Изменения от старого:`)
    console.log(`     Насыщенность: ${oldHsl.s}% → ${hsl.s}% (${saturationDiff > 0 ? '+' : ''}${saturationDiff}%)`)
    console.log(`     Яркость: ${oldHsl.l}% → ${hsl.l}% (${lightnessDiff > 0 ? '+' : ''}${lightnessDiff}%)`)
  }

  console.log('')
}

console.log('=== СВОДКА УЛУЧШЕНИЙ ===')
console.log('✅ Все новые цвета остаются холодными (H=220-230°)')
console.log('✅ Значительно увеличена насыщенность для лучшей видимости')
console.log('✅ Сохранена оптимальная яркость для читаемости')
console.log('✅ Созданы специализированные варианты для разных контекстов')
console.log('')

console.log('📊 СТАТИСТИКА НАСЫЩЕННОСТИ:')
const oldSat = rgbToHsl(...Object.values(hexToRgb(newColors.old))).s
const newSaturations = Object.entries(newColors)
  .filter(([name]) => name !== 'old')
  .map(([name, color]) => {
    const hsl = rgbToHsl(...Object.values(hexToRgb(color)))
    return { name, saturation: hsl.s }
  })

const avgNewSat = newSaturations.reduce((acc, curr) => acc + curr.saturation, 0) / newSaturations.length

console.log(`Старая насыщенность: ${oldSat}%`)
console.log(`Средняя новая насыщенность: ${Math.round(avgNewSat)}%`)
console.log(`Улучшение: +${Math.round(avgNewSat - oldSat)}%`)
