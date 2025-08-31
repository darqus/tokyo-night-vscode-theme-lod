#!/usr/bin/env node

/**
 * Анализатор контрастности для светлой темы Tokyo Night Light
 * Проверяет все цветовые пары на соответствие WCAG стандартам
 */

import * as fs from 'fs'
import * as path from 'path'

interface ContrastResult {
  element: string
  foregroundColor: string
  backgroundColor: string
  ratio: number
  passes: boolean
  level: 'AA' | 'AAA' | 'FAIL'
}

class LightThemeContrastAnalyzer {
  private themePath: string
  private theme: any

  constructor() {
    this.themePath = path.join(
      process.cwd(),
      'themes',
      'tokyo-night-light-color-theme.json'
    )
    this.theme = JSON.parse(fs.readFileSync(this.themePath, 'utf8'))
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    // Удаляем альфа канал если есть
    const cleanHex = hex.replace(/^#/, '').substring(0, 6)
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(cleanHex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 }
  }

  private getLuminance(rgb: { r: number; g: number; b: number }): number {
    const { r, g, b } = rgb
    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
  }

  private getContrastRatio(color1: string, color2: string): number {
    const rgb1 = this.hexToRgb(color1)
    const rgb2 = this.hexToRgb(color2)
    const lum1 = this.getLuminance(rgb1)
    const lum2 = this.getLuminance(rgb2)
    const lightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)
    return (lightest + 0.05) / (darkest + 0.05)
  }

  private getContrastLevel(ratio: number): 'AA' | 'AAA' | 'FAIL' {
    if (ratio >= 7) return 'AAA'
    if (ratio >= 4.5) return 'AA'
    return 'FAIL'
  }

  analyzeContrast(): ContrastResult[] {
    const results: ContrastResult[] = []
    const colors = this.theme.colors

    // Основные элементы для проверки
    const elementsToCheck = [
      {
        name: 'Основной текст редактора',
        fg: colors['editor.foreground'] || colors.foreground,
        bg: colors['editor.background'],
      },
      {
        name: 'Текст боковой панели',
        fg: colors['sideBar.foreground'] || colors.foreground,
        bg: colors['sideBar.background'],
      },
      {
        name: 'Текст панели активности',
        fg: colors['activityBar.foreground'] || colors.foreground,
        bg: colors['activityBar.background'],
      },
      {
        name: 'Текст строки состояния',
        fg: colors['statusBar.foreground'] || colors.foreground,
        bg: colors['statusBar.background'],
      },
      {
        name: 'Активная вкладка',
        fg: colors['tab.activeForeground'] || colors.foreground,
        bg: colors['tab.activeBackground'],
      },
      {
        name: 'Неактивная вкладка',
        fg: colors['tab.inactiveForeground'] || colors.foreground,
        bg: colors['tab.inactiveBackground'],
      },
      {
        name: 'Заголовок окна',
        fg: colors['titleBar.activeForeground'] || colors.foreground,
        bg: colors['titleBar.activeBackground'],
      },
      {
        name: 'Кнопка',
        fg: colors['button.foreground'],
        bg: colors['button.background'],
      },
      {
        name: 'Поле ввода',
        fg: colors['input.foreground'] || colors.foreground,
        bg: colors['input.background'],
      },
      {
        name: 'Выпадающий список',
        fg: colors['dropdown.foreground'] || colors.foreground,
        bg: colors['dropdown.background'],
      },
      {
        name: 'Командный центр',
        fg: colors['commandCenter.foreground'] || colors.foreground,
        bg: colors['commandCenter.background'],
      },
      {
        name: 'Настройки заголовок',
        fg: colors['settings.headerForeground'] || colors.foreground,
        bg: colors['editor.background'],
      },
    ]

    elementsToCheck.forEach((element) => {
      if (element.fg && element.bg) {
        const ratio = this.getContrastRatio(element.fg, element.bg)
        const level = this.getContrastLevel(ratio)

        results.push({
          element: element.name,
          foregroundColor: element.fg,
          backgroundColor: element.bg,
          ratio: Math.round(ratio * 100) / 100,
          passes: ratio >= 4.5,
          level,
        })
      }
    })

    return results
  }

  generateReport(): void {
    console.log('🔍 Анализ контрастности Tokyo Night Light Theme')
    console.log('='.repeat(50))

    const results = this.analyzeContrast()
    const failed = results.filter((r) => !r.passes)
    const passed = results.filter((r) => r.passes)

    console.log(`\n📊 Общая статистика:`)
    console.log(`✅ Прошли проверку: ${passed.length}`)
    console.log(`❌ Не прошли проверку: ${failed.length}`)
    console.log(
      `📈 Общий процент прохождения: ${Math.round(
        (passed.length / results.length) * 100
      )}%`
    )

    if (failed.length > 0) {
      console.log(`\n❌ Проблемные элементы:`)
      failed.forEach((result) => {
        console.log(`\n🔴 ${result.element}`)
        console.log(`   Передний план: ${result.foregroundColor}`)
        console.log(`   Задний план: ${result.backgroundColor}`)
        console.log(`   Контрастность: ${result.ratio}:1 (${result.level})`)
        console.log(`   Требуется: ≥4.5:1 для AA`)
      })
    }

    if (passed.length > 0) {
      console.log(`\n✅ Хорошая контрастность:`)
      passed.forEach((result) => {
        const status = result.level === 'AAA' ? '🌟 AAA' : '✅ AA'
        console.log(`   ${status} ${result.element}: ${result.ratio}:1`)
      })
    }

    if (failed.length > 0) {
      console.log(`\n💡 Рекомендации по улучшению:`)
      failed.forEach((result) => {
        const targetRatio = 4.5
        const currentRatio = result.ratio
        const improvement = targetRatio / currentRatio

        if (improvement > 1) {
          console.log(`\n   ${result.element}:`)
          console.log(`   - Увеличить контраст в ${improvement.toFixed(2)} раз`)
          console.log(`   - Сделать текст темнее или фон светлее`)
        }
      })
    }
  }
}

async function main() {
  const analyzer = new LightThemeContrastAnalyzer()
  analyzer.generateReport()
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

export { LightThemeContrastAnalyzer }
