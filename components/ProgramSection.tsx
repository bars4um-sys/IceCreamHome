import Image from 'next/image'

const DAYS = [
  {
    day: 'День 1',
    title: 'Ванильный экспресс',
    subtitle: 'Домашнее мороженое за 10 минут',
    image: '/images/day1-vanilla.webp',
    imageAlt: 'Нежное ванильное мороженое',
    steps: [
      'Приготовите нежное и натуральное мороженое',
      'Научитесь готовить мороженое тремя способами',
      'Поймёте, как сделать его полезным, используя натуральные ингредиенты',
      'Выясните, как экспериментировать со вкусами',
    ],
    gift: 'Гид «Как выбрать ингредиенты для идеального мороженого»',
    accent: 'bg-berry',
    giftBg: 'bg-berry-light',
    giftText: 'text-berry',
  },
  {
    day: 'День 2',
    title: 'Жареное мороженое',
    subtitle: 'Горячее снаружи, холодное внутри',
    image: '/images/day2-fried.webp',
    imageAlt: 'Жареное мороженое в хрустящей панировке',
    steps: [
      'Приготовите эффектный десерт с хрустящей корочкой',
      'Научитесь варить мороженое на расстоянии',
      'Освоите лайфхаки — как заменить дорогие ингредиенты',
      'Получите советы по хранению и подаче',
    ],
    gift: 'Именной сертификат участника всего марафона',
    accent: 'bg-pistachio text-green-800',
    giftBg: 'bg-pistachio',
    giftText: 'text-green-700',
  },
]

export default function ProgramSection() {
  return (
    <section id="program" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-berry-light text-berry text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Программа
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal text-balance">
            Что будет на <span className="text-berry">марафоне</span>
          </h2>
        </div>

        {/* Day cards */}
        <div className="flex flex-col gap-8">
          {DAYS.map((day, i) => (
            <div
              key={day.day}
              className={`grid lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-card`}
            >
              {/* Image side */}
              <div className={`relative h-72 lg:h-full min-h-72 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={day.image}
                  alt={day.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Day badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-berry text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-berry">
                    {day.day}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className={`p-8 flex flex-col gap-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    {day.subtitle}
                  </p>
                  <h3 className="text-2xl font-extrabold text-charcoal">{day.title}</h3>
                </div>

                <ul className="flex flex-col gap-3">
                  {day.steps.map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-berry text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>

                {/* Gift */}
                <div className={`${day.giftBg} rounded-xl px-4 py-3 flex items-start gap-3`}>
                  <span className="text-xl" role="img" aria-label="Подарок">🎁</span>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wide ${day.giftText} mb-0.5`}>Подарок</p>
                    <p className="text-sm text-charcoal font-medium">{day.gift}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Raffle banner */}
        <div className="mt-10 bg-berry-light border border-berry/20 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <span className="text-5xl" role="img" aria-label="Подарок">🍨</span>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-lg text-charcoal">Участники марафона смогут принять участие</p>
            <p className="text-muted-foreground mt-1">в розыгрыше мороженицы в прямом эфире!</p>
          </div>
          <a
            href="#register"
            className="bg-berry text-white font-bold px-6 py-3 rounded-xl hover:bg-red-500 transition-colors shadow-berry whitespace-nowrap"
          >
            Зарегистрироваться
          </a>
        </div>
      </div>
    </section>
  )
}
