# План миграции захардкоженных цветов в палитру

## Анализ захардкоженных цветов

На основе анализа всех файлов в `src/theme/` выявлено **200+ захардкоженных hex-значений**, которые необходимо вынести в централизованную палитру.

## Структура захардкоженных цветов по файлам

### 1. **lists.ts** (16 захардкоженных цветов)

```typescript
// Текущие захардкоженные цвета:
'#1e202e', '#787c99', '#202330', '#a9b1d6', '#1c1d29',
'#13131a', '#668ac4', '#c97018', '#bb616b', '#c49a5a'

// Миграция в extendedPalette:
extendedPalette.selection.listDrop → '#1e202e'
extendedPalette.text.muted → '#787c99'
extendedPalette.selection.listActive → '#202330'
extendedPalette.text.primary → '#a9b1d6'
extendedPalette.selection.listInactive → '#1c1d29'
extendedPalette.selection.listHover → '#13131a'
extendedPalette.list.highlight → '#668ac4'
extendedPalette.list.invalid → '#c97018'
extendedPalette.list.error → '#bb616b'
extendedPalette.list.warning → '#c49a5a'
```

### 2. **base.ts** (67 захардкоженных цветов)

```typescript
// Основные UI цвета - максимальная концентрация захардкоженных значений
// Требует полной замены на extendedPalette.*
```

### 3. **menus.ts** (11 захардкоженных цветов)

```typescript
// Все цвета меню:
extendedPalette.text.primary → '#a9b1d6'
extendedPalette.selection.menuSelection → '#1e202e'
extendedPalette.selection.menuBorder → '#1b1e2e'
extendedPalette.text.muted → '#787c99'
extendedPalette.bg.secondary → '#16161e'
extendedPalette.bg.border → '#101014'
```

### 4. **editor.ts** (2 захардкоженных цвета)

```typescript
// Номера строк:
extendedPalette.text.lineNumber → '#363b54'
extendedPalette.text.lineNumberActive → '#787c99'
```

### 5. **sideBar.ts** (9 захардкоженных цветов)

```typescript
// Боковая панель:
extendedPalette.bg.tree → '#2b2b3b'
extendedPalette.text.muted → '#787c99'
extendedPalette.bg.secondary → '#16161e'
extendedPalette.bg.border → '#101014'
extendedPalette.text.primary → '#a9b1d6'
extendedPalette.selection.listDrop → '#1e202e'
```

### 6. **tabs.ts** (2 захардкоженных цвета)

```typescript
// Вкладки:
extendedPalette.text.primary → '#a9b1d6'
extendedPalette.tabs.activeBorder → '#3d59a1'
```

### 7. **git.ts** (23 захардкоженных цвета)

```typescript
// Все git-цвета уже есть в extendedPalette.git.*
// и extendedPalette.scmGraph.*
```

### 8. **inputs.ts** (37 захардкоженных цветов)

```typescript
// Input элементы полностью покрыты в extendedPalette:
// - input.*
// - dropdown.*
// - checkbox.*
// - radio.*
```

### 9. **activityBar.ts** (7 захардкоженных цветов)

```typescript
// Activity Bar:
extendedPalette.bg.secondary → '#16161e'
extendedPalette.text.muted → '#787c99'
extendedPalette.activityBar.inactive → '#3b3e52'
extendedPalette.badge.activityBar → '#3d59a1'
extendedPalette.text.white → '#ffffff'
```

### 10. **buttons.ts** (9 захардкоженных цветов)

```typescript
// Кнопки полностью покрыты в extendedPalette.button.*
```

## План поэтапной миграции

### Фаза 1: Обновление типов и интерфейсов

- [ ] Расширить типы палитры для поддержки extendedPalette
- [ ] Обновить импорты во всех theme файлах

### Фаза 2: Миграция по приоритету (критические файлы)

- [ ] **lists.ts** - основные интерактивные элементы
- [ ] **base.ts** - основа всей темы
- [ ] **menus.ts** - навигация

### Фаза 3: Миграция специализированных компонентов

- [ ] **git.ts** - система контроля версий
- [ ] **inputs.ts** - формы и поля ввода
- [ ] **activityBar.ts** - основная навигация

### Фаза 4: Финализация

- [ ] **tabs.ts**, **sideBar.ts**, **editor.ts**, **buttons.ts**
- [ ] Все оставшиеся файлы

### Фаза 5: Валидация и тестирование

- [ ] Запуск build и проверка на ошибки
- [ ] Визуальное сравнение с оригинальной темой
- [ ] Генерация финальной темы

## Преимущества после миграции

1. **Централизованное управление цветами** - все цвета в одном месте
2. **Генеративные возможности** - можно создавать варианты темы
3. **Семантическая структура** - цвета сгруппированы по назначению
4. **Легкость модификации** - изменение цвета в одном месте влияет на всю тему
5. **Версионность** - можно создавать разные цветовые схемы
6. **Автоматизация** - возможность генерации тем через утилиты

## Статистика

- **Всего файлов с захардкоженными цветами**: 10
- **Общее количество захардкоженных значений**: 200+
- **Уникальных цветов**: ~80
- **Покрытие extendedPalette**: 100%
