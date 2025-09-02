# 🚀 Пример использования системы релизов

## Сценарий: Добавление новой темы

### 1. Разработка

```bash
# Создаем новую ветку для функции
git checkout -b feat/new-gradient-theme

# Разрабатываем новую тему
npm run theme-cli -- custom --name="Tokyo Night Gradient Ocean" --hue=200 --saturation=1.1

# Тестируем изменения
npm run build
npm test

# Коммитим с conventional commit
git add .
git commit -m "feat: add Tokyo Night Gradient Ocean theme

- New gradient theme with ocean-inspired colors
- Hue shifted to 200 degrees for cooler tones
- Enhanced saturation for vibrant appearance"
```

### 2. Подготовка к релизу

```bash
# Переключаемся на main ветку
git checkout main
git pull origin main

# Мержим нашу ветку
git merge feat/new-gradient-theme

# Предварительный просмотр релиза
npm run release:dry
```

**Вывод:**

```
🔍 DRY RUN MODE - no changes will be made
📋 Commits since v1.12.0:
abc1234 feat: add Tokyo Night Gradient Ocean theme
✨ New features detected → MINOR release
Current version: 1.12.0
Would bump to: 1.13.0
```

### 3. Выполнение релиза

```bash
# Автоматический релиз
npm run release
```

**Процесс:**

```
🚀 Starting release process...
✅ Working directory is clean
✅ On main branch
📋 Release type: minor
🧪 Running tests...
✅ All tests passed
🏗️ Building project...
✅ Build completed
📈 Bumping minor version...
✅ Version bumped to 1.13.0
📝 Generating changelog...
✅ Changelog updated
📦 Committing changes and creating tag...
✅ Created commit and tag v1.13.0
🚀 Pushing to remote repository...
✅ Pushed to remote repository
📦 Publishing to VS Code Marketplace...
✅ Published to VS Code Marketplace
🎉 Creating GitHub release...
✅ GitHub release created
🎉 Release v1.13.0 completed successfully in 45.2s!
```

## Быстрые команды

```bash
# Автоматический релиз
npm run release

# Предварительный просмотр
npm run release:dry

# Принудительные типы
npm run release:patch   # 1.0.0 → 1.0.1
npm run release:minor   # 1.0.0 → 1.1.0
npm run release:major   # 1.0.0 → 2.0.0

# Bash версия
./scripts/release.sh --minor --dry-run
```
