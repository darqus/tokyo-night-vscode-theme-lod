#!/usr/bin/env node

/**
 * Bundle analysis tool for theme files
 * Analyzes theme file sizes and structure
 */

import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)
const stat = promisify(fs.stat)

interface Theme {
  colors?: Record<string, string>
  tokenColors?: any[]
  semanticTokenColors?: Record<string, any>
  [key: string]: any
}

class ThemeBundleAnalyzer {
  private themesDir: string

  constructor() {
    this.themesDir = path.join(process.cwd(), 'themes')
  }

  async analyzeThemes(): Promise<void> {
    if (!fs.existsSync(this.themesDir)) {
      console.error('❌ Themes directory not found')
      return
    }

    const themeFiles = fs
      .readdirSync(this.themesDir)
      .filter((file) => file.endsWith('.json'))

    if (themeFiles.length === 0) {
      console.log('No theme files found')
      return
    }

    console.log('📦 Theme Bundle Analysis')
    console.log('======================\n')

    for (const file of themeFiles) {
      await this.analyzeThemeFile(file)
    }

    console.log('\n📈 Summary')
    console.log('=========')
    console.log(`Total themes analyzed: ${themeFiles.length}`)
  }

  private async analyzeThemeFile(fileName: string): Promise<void> {
    const filePath = path.join(this.themesDir, fileName)
    try {
      const stats = await stat(filePath)
      const content = await readFile(filePath, 'utf8')
      const theme: Theme = JSON.parse(content)

      const sizeKB = (stats.size / 1024).toFixed(2)
      const lineCount = content.split('\n').length
      const propertyCount = this.countProperties(theme)

      console.log(`📁 ${fileName}`)
      console.log(`   Size: ${sizeKB}KB (${stats.size} bytes)`)
      console.log(`   Lines: ${lineCount}`)
      console.log(`   Properties: ${propertyCount}`)

      // Analyze theme structure
      this.analyzeThemeStructure(theme)

      // Check for optimization opportunities
      this.checkOptimizationOpportunities(theme)
    } catch (error: any) {
      console.error(`❌ Error analyzing ${fileName}: ${error.message}`)
    }
  }

  private countProperties(obj: any): number {
    if (typeof obj !== 'object' || obj === null) {
      return 0
    }

    let count = 0
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        count++
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          count += this.countProperties(obj[key])
        }
      }
    }
    return count
  }

  private analyzeThemeStructure(theme: Theme): void {
    const sections = {
      'UI Colors': theme.colors ? Object.keys(theme.colors).length : 0,
      'Token Colors': theme.tokenColors ? theme.tokenColors.length : 0,
      'Semantic Tokens': theme.semanticTokenColors
        ? Object.keys(theme.semanticTokenColors).length
        : 0,
    }

    console.log('   Structure:')
    for (const [section, count] of Object.entries(sections)) {
      if (count > 0) {
        console.log(`     ${section}: ${count}`)
      }
    }
  }

  private checkOptimizationOpportunities(theme: Theme): void {
    const opportunities: string[] = []

    // Check for duplicate colors
    if (theme.colors) {
      const colorCounts: Record<string, number> = {}
      for (const value of Object.values(theme.colors)) {
        if (typeof value === 'string') {
          colorCounts[value] = (colorCounts[value] || 0) + 1
        }
      }

      const duplicates = Object.entries(colorCounts)
        .filter(([, count]) => count > 1)
        .map(([color, count]) => `${color} (${count} times)`)

      if (duplicates.length > 0) {
        opportunities.push(`Found ${duplicates.length} duplicate colors`)
      }
    }

    // Check for overly specific token colors
    if (theme.tokenColors && theme.tokenColors.length > 500) {
      opportunities.push(
        `Large number of token colors (${theme.tokenColors.length})`
      )
    }

    // Check for unused semantic tokens
    if (theme.semanticTokenColors) {
      const semanticCount = Object.keys(theme.semanticTokenColors).length
      if (semanticCount > 200) {
        opportunities.push(`Large number of semantic tokens (${semanticCount})`)
      }
    }

    if (opportunities.length > 0) {
      console.log('   🔧 Optimization opportunities:')
      opportunities.forEach((opp) => {
        console.log(`     • ${opp}`)
      })
    }
  }
}

async function main() {
  const analyzer = new ThemeBundleAnalyzer()
  await analyzer.analyzeThemes()
}

if (require.main === module) {
  main().catch((error: any) => {
    console.error('❌ Analysis failed:', error)
    process.exit(1)
  })
}

export { ThemeBundleAnalyzer }
