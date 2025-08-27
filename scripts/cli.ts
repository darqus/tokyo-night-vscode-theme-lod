#!/usr/bin/env node

/**
 * Simple CLI for managing Tokyo Night Lod theme
 * No external dependencies
 */

import { ThemeValidator } from '../src/validation/themeValidator'
import { ThemeBuilder } from '../src/variants/themeBuilder'
import type { ThemeData } from '../src/types/theme'
import * as fs from 'node:fs'
import * as path from 'node:path'

const args = process.argv.slice(2)
const command = args[0]

function showHelp() {
  console.log(
    `\n\n🎨 Tokyo Night Lod CLI v0.4.0\n\nCommands:\n  build                    Build single dark theme\n  validate <file>          Validate theme\n  info                     Theme information\n  help                     Show this help\n\nExamples:\n  node scripts/cli.ts build\n  node scripts/cli.ts validate ./themes/tokyo-night-dark-color-theme.json\n`
  )
}

function buildCommand() {
  console.log('🏗️  Building single dark theme...')
  try {
    const outDir = './themes'
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

    const buildAndWrite = (name: string, theme: ThemeData) => {
      const filename = `tokyo-night-${name}-color-theme.json`
      const outputPath = path.join(outDir, filename)
      fs.writeFileSync(
        outputPath,
        JSON.stringify(theme, null, 2) + '\n',
        'utf8'
      )
      console.log(`✅ Generated: ${outputPath}`)
    }

    // Only one supported theme
    buildAndWrite('dark', ThemeBuilder.buildStandard())
  } catch (error) {
    console.error('❌ Build error:', error)
    process.exit(1)
  }
}

function validateCommand() {
  const file = args[1]
  if (!file) {
    console.error('❌ Please specify file to validate')
    process.exit(1)
  }

  console.log(`🔍 Validating theme: ${file}`)

  try {
    const themeContent = fs.readFileSync(file, 'utf8')
    const theme = JSON.parse(themeContent)

    const validator = new ThemeValidator()
    const result = validator.validateTheme(theme)

    if (result.passed) {
      console.log('✅ Theme passed validation')
    } else {
      console.log('❌ Issues found:')
      result.issues.forEach((issue) => {
        const icon =
          issue.severity === 'error'
            ? '🚨'
            : issue.severity === 'warning'
            ? '⚠️'
            : 'ℹ️'
        console.log(`${icon} [${issue.severity}] ${issue.message}`)
        if (issue.suggestion) {
          console.log(`   💡 ${issue.suggestion}`)
        }
      })

      if (result.issues.some((i) => i.severity === 'error')) {
        process.exit(1)
      }
    }
  } catch (error) {
    console.error('❌ Validation error:', error)
    process.exit(1)
  }
}

// Removed plugins and config commands for simplicity

function infoCommand() {
  console.log('🎨 Tokyo Night Lod — simplified architecture')
  console.log('📦 Version: 0.4.0')
  console.log(
    '🏗️  Architecture: Flat (no configs or plugins), generation via ThemeBuilder'
  )
  console.log('🎯 Features:')
  console.log('  - Single variant: dark')
  console.log('  - Automatic theme validation')
  console.log(
    '  - Colors strictly from palette + color correction (no hardcoding)'
  )
  console.log('  - WCAG 2.1 compatibility (contrast)')
}

// Command handling
switch (command) {
  case 'build':
    buildCommand()
    break
  case 'validate':
    validateCommand()
    break
  case 'info':
    infoCommand()
    break
  case 'help':
  case undefined:
    showHelp()
    break
  default:
    console.error(`❌ Unknown command: ${command}`)
    showHelp()
    process.exit(1)
}
