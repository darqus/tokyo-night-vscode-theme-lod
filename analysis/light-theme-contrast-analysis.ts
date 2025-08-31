/**
 * Анализ контрастности светлой темы Tokyo Night Light
 * Выявляет проблемы с читаемостью и предлагает решения
 */

import { readFileSync } from 'fs'
import { join } from 'path'

// Типы для анализа
interface ColorPair {
  property: string
  foreground: string
  background: string
  contrast?: number
  issues?: string[]
}

interface ContrastAnalysis {
  critical: ColorPair[] // Критические проблемы (белый на белом)
  poor: ColorPair[] // Плохая контрастность
  acceptable: ColorPair[] // Приемлемая контрастность
  good: ColorPair[] // Хорошая контрастность
}

/**
 * Конвертирует hex в RGB
 */
function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '').substring(0, 6)
  const r = parseInt(cleanHex.substring(0, 2), 16)
  const g = parseInt(cleanHex.substring(2, 4), 16)
  const b = parseInt(cleanHex.substring(4, 6), 16)
  return [r, g, b]
}

/**
 * Вычисляет относительную яркость
 */
function getLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex)

  const rsRGB = r / 255
  const gsRGB = g / 255
  const bsRGB = b / 255

  const rLinear =
    rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
  const gLinear =
    gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
  const bLinear =
    bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)

  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
}

/**
 * Вычисляет контрастное соотношение WCAG
 */
function getContrastRatio(foreground: string, background: string): number {
  const l1 = getLuminance(foreground)
  const l2 = getLuminance(background)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Анализирует тему на контрастность
 */
function analyzeThemeContrast(): ContrastAnalysis {
  const themePath = join(
    process.cwd(),
    'themes',
    'tokyo-night-light-color-theme.json'
  )
  const themeData = JSON.parse(readFileSync(themePath, 'utf8'))
  const colors = themeData.colors

  const analysis: ContrastAnalysis = {
    critical: [],
    poor: [],
    acceptable: [],
    good: [],
  }

  // Критические комбинации для проверки
  const criticalChecks: Array<{ name: string; fg: string; bg: string }> = [
    // Основные элементы интерфейса
    {
      name: 'Main Foreground',
      fg: colors.foreground,
      bg: colors['editor.background'],
    },
    {
      name: 'Title Bar Text',
      fg: colors['titleBar.activeForeground'],
      bg: colors['titleBar.activeBackground'],
    },
    {
      name: 'Command Center Text',
      fg: colors['commandCenter.foreground'],
      bg: colors['commandCenter.background'],
    },
    {
      name: 'Banner Text',
      fg: colors['banner.foreground'],
      bg: colors['banner.background'],
    },
    {
      name: 'Text Link',
      fg: colors['textLink.foreground'],
      bg: colors['editor.background'],
    },
    {
      name: 'Settings Header',
      fg: colors['settings.headerForeground'],
      bg: colors['editor.background'],
    },

    // Кнопки и элементы управления
    {
      name: 'Button Text',
      fg: colors['button.foreground'],
      bg: colors['button.background'],
    },
    {
      name: 'Extension Button Text',
      fg: colors['extensionButton.prominentForeground'],
      bg: colors['extensionButton.prominentBackground'],
    },

    // Панели
    {
      name: 'Side Bar Text',
      fg: colors['sideBar.foreground'],
      bg: colors['sideBar.background'],
    },
    {
      name: 'Activity Bar Text',
      fg: colors['activityBar.foreground'],
      bg: colors['activityBar.background'],
    },
    {
      name: 'Status Bar Text',
      fg: colors['statusBar.foreground'],
      bg: colors['statusBar.background'],
    },

    // Вкладки
    {
      name: 'Active Tab Text',
      fg: colors['tab.activeForeground'],
      bg: colors['tab.activeBackground'],
    },
    {
      name: 'Inactive Tab Text',
      fg: colors['tab.inactiveForeground'],
      bg: colors['tab.inactiveBackground'],
    },
  ]

  for (const check of criticalChecks) {
    if (!check.fg || !check.bg) continue

    const issues: string[] = []

    // Проверка на одинаковые цвета
    if (check.fg === check.bg) {
      issues.push('Identical colors - invisible text!')
    }

    // Проверка на белый текст на белом фоне
    if (check.fg === '#ffffff' && check.bg === '#ffffff') {
      issues.push('White on white - completely invisible!')
    }

    const contrast = getContrastRatio(check.fg, check.bg)

    const pair: ColorPair = {
      property: check.name,
      foreground: check.fg,
      background: check.bg,
      contrast,
      issues,
    }

    if (issues.length > 0 || contrast < 2) {
      analysis.critical.push(pair)
    } else if (contrast < 3) {
      analysis.poor.push(pair)
    } else if (contrast < 4.5) {
      analysis.acceptable.push(pair)
    } else {
      analysis.good.push(pair)
    }
  }

  return analysis
}

/**
 * Генерирует рекомендации для улучшения
 */
function generateRecommendations(analysis: ContrastAnalysis): string[] {
  const recommendations: string[] = []

  if (analysis.critical.length > 0) {
    recommendations.push('🚨 КРИТИЧЕСКИЕ ПРОБЛЕМЫ:')
    analysis.critical.forEach((pair) => {
      recommendations.push(
        `  - ${pair.property}: ${pair.foreground} на ${pair.background}`
      )
      if (pair.issues) {
        pair.issues.forEach((issue) => recommendations.push(`    ⚠️ ${issue}`))
      }
      if (pair.contrast) {
        recommendations.push(`    📊 Контраст: ${pair.contrast.toFixed(2)}:1`)
      }
    })
    recommendations.push('')
  }

  if (analysis.poor.length > 0) {
    recommendations.push('🔴 ПЛОХАЯ КОНТРАСТНОСТЬ (< 3:1):')
    analysis.poor.forEach((pair) => {
      recommendations.push(
        `  - ${pair.property}: ${pair.contrast?.toFixed(2)}:1`
      )
    })
    recommendations.push('')
  }

  if (analysis.acceptable.length > 0) {
    recommendations.push('🟡 ТРЕБУЕТ УЛУЧШЕНИЯ (< 4.5:1):')
    analysis.acceptable.forEach((pair) => {
      recommendations.push(
        `  - ${pair.property}: ${pair.contrast?.toFixed(2)}:1`
      )
    })
    recommendations.push('')
  }

  // Конкретные рекомендации
  recommendations.push('💡 РЕКОМЕНДАЦИИ ПО ИСПРАВЛЕНИЮ:')
  recommendations.push('1. Создать специализированную палитру для светлой темы')
  recommendations.push('2. Использовать темные цвета текста на светлых фонах')
  recommendations.push('3. Адаптировать систему text.* цветов для светлой темы')
  recommendations.push('4. Добавить условную логику в адаптеры палитр')
  recommendations.push(
    '5. Создать отдельные цветовые схемы для light/dark режимов'
  )

  return recommendations
}

// Запуск анализа
const analysis = analyzeThemeContrast()
const recommendations = generateRecommendations(analysis)

console.log('🔍 АНАЛИЗ КОНТРАСТНОСТИ СВЕТЛОЙ ТЕМЫ')
console.log('='.repeat(50))
console.log('')

recommendations.forEach((rec) => console.log(rec))

console.log('')
console.log('📊 СТАТИСТИКА:')
console.log(`Критические проблемы: ${analysis.critical.length}`)
console.log(`Плохая контрастность: ${analysis.poor.length}`)
console.log(`Требует улучшения: ${analysis.acceptable.length}`)
console.log(`Хорошая контрастность: ${analysis.good.length}`)

export { analyzeThemeContrast, generateRecommendations }
