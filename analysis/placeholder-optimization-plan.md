/**

* План оптимизации цветов placeholder для более холодной палитры
 */

# Анализ и план оптимизации цветов placeholder

## Текущее состояние

**Основной цвет placeholder:** `#999a9d`

* HSL: H=225° S=2% L=61%
* Температура: холодный
* Проблема: очень низкая насыщенность (S=2%), выглядит блеклым

## Места использования placeholder

1. **`extendedPalette.text.placeholder`** (`#999a9d`)
   * Используется в `input.placeholderForeground`
   * Используется через `palette.ui.input.placeholder` в `editor.placeholder.foreground`

2. **Отсутствующие placeholder свойства:**
   * `editor.foldPlaceholderForeground` - не определено
   * `inlineChatInput.placeholderForeground` - не определено

## Рекомендуемые изменения

### 1. Обновить основной цвет placeholder

**Новый цвет:** `#8891b5`

* HSL: H=228° S=23% L=62%
* Улучшения:
  * Сохраняет холодную температуру
  * Увеличивает насыщенность с 2% до 23%
  * Сохраняет читаемость (яркость 62%)
  * Гармонирует с Tokyo Night palette

### 2. Добавить специализированные placeholder цвета

**Для свернутых блоков кода (`editor.foldPlaceholderForeground`):**

* Цвет: `#7b87a3` (более приглушенный)
* HSL: H=222° S=18% L=56%
* Обоснование: менее навязчивый для collapsed code

**Для inline chat (`inlineChatInput.placeholderForeground`):**

* Цвет: `#8a95b8` (более светлый)
* HSL: H=226° S=24% L=63%
* Обоснование: лучше видим в chat интерфейсе

### 3. Обновить генератор палитры

Обновить `textPlaceholderGray` в config.ts:

* Изменить mix ratio для более насыщенного результата
* Или создать отдельную формула для холодного placeholder

## Ожидаемые результаты

* ✅ Более четкие и различимые placeholder тексты
* ✅ Сохранение холодной цветовой температуры
* ✅ Лучшая интеграция с общей палитрой Tokyo Night
* ✅ Поддержка всех видов placeholder интерфейсов

## Файлы для изменения

1. `src/palette/extended.ts` - обновить основной цвет
2. `src/theme/editor.ts` - добавить foldPlaceholderForeground
3. `src/theme/inputs.ts` - добавить inlineChatInput.placeholderForeground
4. `src/palette/generator.ts` - рассмотреть улучшение формулы (опционально)
