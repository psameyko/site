# Сайт-открытка к 8 Марта

Нежный одностраничный мини-лендинг на React + Vite с адаптивным интерфейсом, мягкими анимациями и интерактивными блоками.

## Запуск локально

```bash
npm install
npm run dev
```

## Сборка для деплоя

```bash
npm run build
```

Готовые статические файлы будут в папке `dist/`.

## Публикация на GitHub Pages

В проекте уже добавлен workflow:
`.github/workflows/deploy.yml`

Что сделать один раз в GitHub:
- открыть репозиторий `congrats`
- перейти в `Settings` -> `Pages`
- в `Build and deployment` выбрать `Source: GitHub Actions`

После этого каждый `push` в ветку `main` будет автоматически публиковать сайт по адресу:
`https://psameyko.github.io/congrats/`

Важно:
- для адреса `/congrats/` репозиторий на GitHub Pages должен называться `congrats`;
- если репозиторий называется иначе (например, `site`), URL project-site будет использовать имя репозитория.

## Что и где редактировать

- Тексты, карточки, комплименты и случайные пожелания:
  `src/constants/content.js`
- Компоненты секций:
  `src/components/Hero.jsx`
  `src/components/MessageCards.jsx`
  `src/components/ComplimentBouquet.jsx`
  `src/components/FinalWish.jsx`
- Стили и анимации:
  `src/styles.css`
