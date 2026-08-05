# IceCreamHome 🍦

Лендинг бесплатного 2-дневного марафона по приготовлению домашнего мороженого.

## О проекте

Одностраничный лендинг (Next.js + TypeScript + Tailwind CSS) для марафона
«Домашнее мороженое за 20 минут». Сайт содержит секции:

- Hero — оффер и даты проведения
- Для кого — целевая аудитория
- Программа — план марафона
- Почему мы — преимущества
- Спикер — презентация автора
- Результаты — примеры работ
- Отзывы — социальные доказательства
- Регистрация — форма записи
- Footer + липкая CTA-панель

## Технологии

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5.7
- [Tailwind CSS](https://tailwindcss.com/) 4
- [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/)
- [lucide-react](https://lucide.dev/) — иконки
- [react-countup](https://github.com/glennreyes/react-countup) — анимация счётчиков

## Установка

```bash
pnpm install
```

## Запуск в режиме разработки

```bash
pnpm dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
pnpm build
pnpm start
```

## Структура проекта

```
app/            # App Router: layout, page, globals.css
components/     # Секции лендинга и UI-компоненты
  ui/           # shadcn/ui компоненты
lib/            # Утилиты (cn и др.)
public/images/  # Изображения
```

## Лицензия

Частный проект. Все права защищены.