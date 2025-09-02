/**
 * Новая упрощенная сборка темы
 */
import * as fs from 'node:fs'
import * as path from 'node:path'
import { generateTheme } from './generators/theme'

const root = path.resolve(__dirname, '..')
const themePath = path.join(root, 'themes', 'tokyo-night-dark-color-theme.json')

/**
 * Сборка темы
 */
const buildTheme = () => {
  console.log('🏗️  Сборка новой Tokyo Night темы...')
  
  // Создаем директорию themes если не существует
  const themesDir = path.dirname(themePath)
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir, { recursive: true })
  }
  
  // Генерируем тему
  const theme = generateTheme()
  
  // Сохраняем тему
  const themeJson = JSON.stringify(theme, null, 2) + '\n'
  fs.writeFileSync(themePath, themeJson, 'utf8')
  
  console.log(`✅ Тема создана: ${themePath}`)
  console.log(`📊 Статистика:`)
  console.log(`   - Цветов интерфейса: ${Object.keys(theme.colors).length}`)
  console.log(`   - Токенов подсветки: ${theme.tokenColors.length}`)
  console.log(`   - Семантических токенов: ${Object.keys(theme.semanticTokenColors || {}).length}`)
}

if (require.main === module) {
  buildTheme()
}

export { buildTheme }