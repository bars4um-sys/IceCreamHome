'use client'

import { useState } from 'react'
import Image from 'next/image'

const RESULTS = [
  { src: '/images/result1.png', alt: 'Клубничное мороженое ученицы Марины', name: 'Марина К.', dish: 'Клубничный сорбет' },
  { src: '/images/result2.png', alt: 'Шоколадный эскимо ученика Дмитрия', name: 'Дмитрий В.', dish: 'Шоколадный эскимо' },
  { src: '/images/result3.png', alt: 'Фисташковое мороженое ученицы Елены', name: 'Елена С.', dish: 'Фисташковый рожок' },
  { src: '/images/result4.png', alt: 'Ягодный сорбет ученицы Анны', name: 'Анна П.', dish: 'Ягодный сорбет' },
  { src: '/images/result5.png', alt: 'Ванильное мороженое с карамелью ученицы Ольги', name: 'Ольга М.', dish: 'Ванильная карамель' },
  { src: '/images/result6.png', alt: 'Матча мороженое ученика Сергея', name: 'Сергей Т.', dish: 'Матча мороженое' },
]

export default function ResultsSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-berry-light text-berry text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Работы учеников
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal text-balance">
            <span className="text-berry">Результаты</span> учеников
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            Всё это приготовлено обычными людьми — дома, без профессионального оборудования, после нашего марафона.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {RESULTS.map((r, i) => (
            <button
              key={r.src}
              onClick={() => setActive(active === i ? null : i)}
              className="relative group rounded-2xl overflow-hidden aspect-square shadow-card focus:outline-none focus:ring-2 focus:ring-berry"
              aria-label={`Посмотреть работу: ${r.dish} — ${r.name}`}
            >
              <Image
                src={r.src}
                alt={r.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-4">
                <p className="text-white font-bold text-sm">{r.dish}</p>
                <p className="text-white/70 text-xs mt-0.5">{r.name}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {active !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр работы ученика"
          >
            <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative aspect-square">
                <Image
                  src={RESULTS[active].src}
                  alt={RESULTS[active].alt}
                  fill
                  className="object-cover"
                  sizes="500px"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-charcoal">{RESULTS[active].dish}</p>
                  <p className="text-sm text-muted-foreground">{RESULTS[active].name}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="text-muted-foreground hover:text-charcoal text-2xl font-bold"
                  aria-label="Закрыть"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
