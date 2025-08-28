# Быстрый старт

1) Установка зависимостей
- npm ci

2) Сборка темы
- npm run build
- Результат: themes/tokyo-night-dark-color-theme.json

3) Проверки
- npm run validate:all — валидация свойств и качества
- npm test — unit‑тесты
- npm run analyze — анализ размера и структуры

4) Локальный предпросмотр
- Откройте VS Code → F5 для запуска Extension Development Host и установите тему из themes/.

5) Релиз
- Запускается из CI workflow_dispatch (release job) с автоматической версией и публикацией (после настройки токенов).
