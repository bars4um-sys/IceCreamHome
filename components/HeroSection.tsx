import Image from 'next/image'

const BENEFITS = [
  { icon: '🎓', label: 'Бесплатное участие' },
  { icon: '📖', label: 'Пошаговые рецепты + техники' },
  { icon: '🎁', label: 'Подарок после регистрации' },
  { icon: '🏆', label: 'Сертификат + шанс выиграть мороженицу' },
]

const DATES = ['09 августа в 13:00 мск', '09 августа в 19:00 мск']

export default function HeroSection() {
  return (
    <section className="relative min-h-screen gradient-hero pt-24 pb-16 overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFD6DE 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4EDDA 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Date badge */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-card w-fit">
              <span className="w-2 h-2 rounded-full bg-berry animate-pulse" />
              <span className="text-sm font-semibold text-charcoal">
                Бесплатный 2-дневный марафон · 09–10 августа
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight text-balance">
              Домашнее{' '}
              <span className="text-berry relative">
                мороженое
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M2 6C50 2 150 2 198 6" stroke="#FF3B5C" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              за 20 минут
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Научитесь готовить{' '}
              <strong className="text-charcoal">10+ видов натурального мороженого</strong> на своей
              кухне — без мороженицы, без химических добавок и без сложных ингредиентов.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#register"
                className="group bg-berry text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-red-500 transition-all shadow-berry hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                Принять участие бесплатно
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <p className="text-xs text-muted-foreground self-center">
                Более 1 000 000 участников уже обучились
              </p>
            </div>

            {/* Benefit pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {BENEFITS.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-card"
                >
                  <span className="text-xl" role="img" aria-label={b.label}>{b.icon}</span>
                  <span className="text-sm font-medium text-charcoal leading-tight">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-berry opacity-10 blur-3xl scale-75" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-icecream.png"
                  alt="Красочные шарики домашнего мороженого"
                  width={560}
                  height={560}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-berry-light flex items-center justify-center">
                    <span className="text-berry font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-charcoal text-lg leading-none">2 500+</p>
                    <p className="text-xs text-muted-foreground mt-0.5">выданных дипломов</p>
                  </div>
                </div>
              </div>

              {/* Floating date selection */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-card">
                <p className="text-xs font-semibold text-muted-foreground mb-2">Выберите время</p>
                {DATES.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs font-medium text-charcoal mb-1">
                    <div className="w-2 h-2 rounded-full bg-berry" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
