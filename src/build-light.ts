import { getAdaptedPalette } from './palette/adapters'
import { buildColorsWithContext } from './theme/colors'
import { getTokenColors } from './tokenColors'
import { semanticTokenColors } from './semanticTokenColors'
import { writeFileSync } from 'fs'
import { join } from 'path'

/**
 * Генерирует светлую тему с использованием адаптированной палитры
 */
function buildLightTheme() {
  console.log('🌞 Building Tokyo Night Light Theme...')

  // Получаем адаптированную палитру для светлой темы
  const lightPalette = getAdaptedPalette('tokyo-light')

  // Создаем контекст для светлой темы
  const context = {
    type: 'light' as const,
    adaptedPalette: lightPalette,
    variant: 'tokyo-light' as const,
    displayName: 'Tokyo Night Light',
  }

  // Строим цвета темы
  const colors = buildColorsWithContext(context)

  // Получаем цвета токенов
  const tokenColors = getTokenColors()

  // Создаем объект темы
  const lightTheme = {
    name: 'Tokyo Night Light',
    type: 'light' as const,
    colors,
    tokenColors,
    semanticTokenColors,
    semanticHighlighting: true,
  }

  // Сохраняем тему
  const outputPath = join(
    __dirname,
    '..',
    'themes',
    'tokyo-night-light-color-theme.json'
  )
  writeFileSync(outputPath, JSON.stringify(lightTheme, null, 2))

  console.log('✅ Tokyo Night Light Theme built successfully!')
  console.log(`📁 Saved to: ${outputPath}`)

  return lightTheme
}

// Запускаем если файл выполняется напрямую
if (require.main === module) {
  buildLightTheme()
}

export { buildLightTheme }
