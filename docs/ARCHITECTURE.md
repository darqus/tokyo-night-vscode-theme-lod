# Архитектура (упрощённая)

Цель — единый источник правды для всех цветов и генерация финальной темы без ручного редактирования JSON.

- src/palette.base.ts — базовая палитра (основные тона).
- src/palette.core.ts — производные и альфа‑цвета, UI‑семантика.
- src/palette.ts — финальная палитра для темы: токены, ANSI, UI.
- src/theme/* — разнесённые по доменам сборщики цветов Workbench (editor, tabs, statusBar, terminal и др.).
- src/tokenColors.ts — TextMate токены (tokenColors).
- src/semanticTokenColors.ts — semanticTokenColors (приоритет над TextMate).
- src/variants/themeBuilder.ts — сборка полного объекта темы (одно тёмное издание).
- src/build.ts — сборка и валидация, запись в themes/.
- src/validation/* — проверка допустимых свойств и качества (контраст, консистентность, доступность).

Папка themes/ — только сгенерированные артефакты. Редактирование напрямую запрещено.

## Принципы
- Цвета не хардкодятся в теме: всё через palette.*.
- Никаких сторонних зависимостей в рантайме сборки.
- Валидация JSON по белому списку ключей и качественные проверки (WCAG 2.1).
- Покрытие unit‑тестами утилит и ключевых генераторов.

## Потоки данных
base → core → palette → (theme/*, tokenColors, semanticTokenColors) → ThemeBuilder → build.ts → themes/*.json
