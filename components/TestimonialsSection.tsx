'use client'

import { useState } from 'react'

const REVIEWS = [
  {
    name: 'Любовь К.',
    date: '5 августа 2024',
    avatar: 'ЛК',
    color: 'bg-pink-100 text-pink-700',
    text: 'Спасибо за подробное и качественное изложение урока. Теперь это очень удобный формат для выполнения работы — творческой и вкусной. Очень рекомендую всем!',
    stars: 5,
  },
  {
    name: 'Анна С.',
    date: '21 мая 2024',
    avatar: 'АС',
    color: 'bg-purple-100 text-purple-700',
    text: 'Всё отлично. Очень нравится готовить мороженое по вашим урокам. Всё четко и понятно. Огромное спасибо за ваши уроки, которые вы разрабатываете. Однозначно всегда позитивно.',
    stars: 5,
  },
  {
    name: 'Елена Б.',
    date: '3 июня 2024',
    avatar: 'ЕБ',
    color: 'bg-blue-100 text-blue-700',
    text: 'Это пока единственное фото, что успела сделать. Очень быстро мороженое съедается. Дети в восторге, муж тоже. Буду готовить ещё и ещё!',
    stars: 5,
  },
  {
    name: 'Марина Д.',
    date: '10 июля 2024',
    avatar: 'МД',
    color: 'bg-green-100 text-green-700',
    text: 'Наконец-то нашла рецепт без непонятных добавок. Готовлю уже третью неделю подряд, вся семья очень довольна. Особенно понравилось жареное мороженое — нереально вкусно!',
    stars: 5,
  },
  {
    name: 'Ольга Т.',
    date: '18 июля 2024',
    avatar: 'ОТ',
    color: 'bg-yellow-100 text-yellow-700',
    text: 'Прошла первый день и уже влюбилась! Всё так доступно и понятно объяснено. Мороженое получилось с первого раза, что меня очень удивило. Жду второй день с нетерпением!',
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Рейтинг ${count} из 5`}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length)

  const visible = [
    REVIEWS[current],
    REVIEWS[(current + 1) % REVIEWS.length],
    REVIEWS[(current + 2) % REVIEWS.length],
  ]

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-berry-light text-berry text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal text-balance">
            Отзывы <span className="text-berry">участников</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visible.map((review, i) => (
              <div
                key={`${review.name}-${current}-${i}`}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-card"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center font-bold text-sm flex-shrink-0`}
                    aria-hidden="true"
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                <Stars count={review.stars} />

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-charcoal hover:bg-berry hover:text-white transition-colors"
              aria-label="Предыдущий отзыв"
            >
              ←
            </button>

            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-berry' : 'w-2 bg-border'}`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-charcoal hover:bg-berry hover:text-white transition-colors"
              aria-label="Следующий отзыв"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
