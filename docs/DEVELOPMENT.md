# 👨‍💻 Руководство разработчика

## 🚀 Быстрый старт

### Установка
```bash
git clone https://github.com/darqus/tokyo-night-vscode-theme-lod.git
cd tokyo-night-vscode-theme-lod
npm install
```

### Основные команды
```bash
npm run build              # Сборка основной темы
npm run generate:all       # Генерация всех 17 вариантов
npm run test              # Запуск тестов
npm run theme-cli         # CLI для кастомных тем
```

## 🎨 Работа с палитрами

### Создание нового цвета
```typescript
// src/palette/extended.ts
export const extendedPalette = {
  // ... существующие цвета
  myNewColor: hsl(240, 50, 60), // HSL формат
}
```

### Адаптивные варианты
```typescript
// Создание сезонного варианта
const autumnPalette = createAdaptedPalette('autumn', {
  hueShift: -30,           // Сдвиг оттенка
  saturationMultiplier: 0.8, // Насыщенность
  lightnessOffset: -5      // Яркость
})
```

## 🤖 Генерация тем

### Создание кастомной темы
```bash
npm run theme-cli -- custom --name=my-theme --hue=60 --saturation=1.3
```

### Программная генерация
```typescript
import { generateTheme } from './src/generators/theme'
import { createAdaptedPalette } from './src/palette/adapters'

const customPalette = createAdaptedPalette('custom', {
  hueShift: 45,
  saturationMultiplier: 1.2
})

const theme = generateTheme(customPalette)
```

## 🧪 Тестирование

### Unit тесты
```bash
npm run test:unit         # Основные тесты
npm run test:watch        # Режим наблюдения
npm run test:coverage     # Покрытие кода
```

### Валидация тем
```bash
npm run validate          # Проверка структуры темы
```

## 📦 Сборка и публикация

### Локальная сборка
```bash
npm run build             # Сборка темы
npm run package           # Создание .vsix пакета
```

### Публикация
```bash
npm run publish           # Публикация в Marketplace
```

## 🔧 Структура кода

### Основные модули
- `src/palette/` - Система цветовых палитр
- `src/generators/` - Генераторы тем
- `src/core/` - Основные компоненты
- `src/types/` - TypeScript определения

### Соглашения
- Используйте HSL формат для цветов
- Следуйте семантическому именованию
- Добавляйте тесты для новой функциональности
- Обновляйте документацию при изменениях

## 🐛 Отладка

### Проверка цветов
```typescript
import { validateColors } from './src/utils/color'

const isValid = validateColors(theme.colors)
```

### Анализ контраста
```bash
npm run theme-cli -- analyze  # Анализ текущей палитры
```

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для функции (`git checkout -b feat/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'feat: add amazing feature'`)
4. Отправьте в ветку (`git push origin feat/amazing-feature`)
5. Откройте Pull Request