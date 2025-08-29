#!/usr/bin/env node

/**
 * Development setup script for Tokyo Night Lod theme
 * This script helps new developers get started with the project
 */

import { execSync } from 'child_process'

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
}

type Color = keyof typeof colors

function colorize(text: string, color: Color): string {
  return `${colors[color]}${text}${colors.reset}`
}

function log(message: string, color: Color = 'reset'): void {
  console.log(colorize(message, color))
}

function runCommand(command: string, description: string): boolean {
  log(`\n${colorize('🔧 ' + description, 'cyan')}`)
  log(`   ${colorize(command, 'blue')}`)

  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' })
    if (output.trim()) {
      log(output.trim(), 'green')
    }
    return true
  } catch (error: any) {
    log(`${colorize('❌ Command failed: ' + error.message, 'red')}`)
    if (error.stdout) log(error.stdout, 'yellow')
    if (error.stderr) log(error.stderr, 'red')
    return false
  }
}

function checkPrerequisites(): boolean {
  log(colorize('🔍 Checking prerequisites...', 'bold'))

  // Check Node.js
  try {
    const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim()
    log(colorize(`✅ Node.js: ${nodeVersion}`, 'green'))
  } catch (error) {
    log(
      colorize(
        '❌ Node.js not found. Please install Node.js (version 16 or higher)',
        'red'
      )
    )
    return false
  }

  // Check npm
  try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim()
    log(colorize(`✅ npm: ${npmVersion}`, 'green'))
  } catch (error) {
    log(
      colorize(
        '❌ npm not found. Please install npm (version 7 or higher)',
        'red'
      )
    )
    return false
  }

  return true
}

function setupDevelopmentEnvironment(): boolean {
  log(colorize('\n🚀 Setting up development environment...', 'bold'))

  // Install dependencies
  if (!runCommand('npm install', 'Installing dependencies')) {
    return false
  }

  // Build the theme
  if (!runCommand('npm run build', 'Building the theme')) {
    return false
  }

  // Run tests
  if (!runCommand('npm test', 'Running tests')) {
    return false
  }

  return true
}

function showNextSteps(): void {
  log(colorize('\n🎉 Development environment setup complete!', 'green'))
  log(colorize('\n📋 Next steps:', 'bold'))
  log('1. Open the project in your favorite code editor', 'cyan')
  log('2. Run `npm run test:watch` to start testing in watch mode', 'cyan')
  log('3. Run `npm run build` to rebuild the theme after changes', 'cyan')
  log('4. Check out the documentation in the docs/ folder', 'cyan')

  log(colorize('\n🔧 Useful commands:', 'bold'))
  log('npm run build       - Build the theme', 'blue')
  log('npm test            - Run all tests', 'blue')
  log('npm run test:watch  - Run tests in watch mode', 'blue')
  log('npm run validate    - Validate theme files', 'blue')
  log('npm run validate --fix --all - Auto-fix theme issues', 'blue')

  log(colorize('\n📖 Documentation:', 'bold'))
  log('docs/ARCHITECTURE.md     - Project architecture', 'blue')
  log('docs/COLOR_SYSTEM.md     - Color system', 'blue')
  log('docs/SEMANTIC_TOKENS.md  - Semantic tokens guide', 'blue')
  log('docs/CONTRIBUTING.md     - Contribution guidelines', 'blue')
}

function main(): void {
  log('Tokyo Night Lod Development Setup', 'bold')
  log('=================================\n', 'bold')

  if (!checkPrerequisites()) {
    log(
      colorize(
        '\n❌ Prerequisites check failed. Please fix the issues above.',
        'red'
      )
    )
    process.exit(1)
  }

  if (!setupDevelopmentEnvironment()) {
    log(colorize('\n❌ Setup failed. Please check the errors above.', 'red'))
    process.exit(1)
  }

  showNextSteps()
}

if (require.main === module) {
  main()
}
