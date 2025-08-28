# Правила контрибуции

## Изменение цветов
- Меняйте только в src/palette.*.ts, производные цвета через utils/color.
- Ручные правки themes/*.json запрещены — файл перегенерируется.
- Новые UI‑цвета добавляйте в соответствующий модуль src/theme/<segment>.ts.

## Токены
- TextMate: добавляйте правила группами в src/tokenColors.ts через фабрики/группы.
- Semantic: расширяйте src/semanticTokenColors.ts, при конфликте — приоритет за semantic.

## Проверки
- npm run build — сборка тем.
- npm run validate:all — валидация тем.
- npm test — unit‑тесты.
- npm run analyze — анализ размеров и структуры тем.
- npm run lint:hex — поиск жёстко прошитых HEX вне палитры.

## Стиль
- TypeScript strict.
- ESLint + Prettier.
- PR должен проходить CI: build, validate, test.

## Релизы
- Семантическое версионирование через standard‑version (scripts/smart-version.ts).
- .vsix не коммитим, публикуем через CI.
