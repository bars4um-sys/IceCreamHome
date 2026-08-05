const TOP_REASONS = [
  {
    icon: '🌿',
    title: 'Натуральный состав',
    desc: 'Никаких усилителей, дешёвых жиров и консервантов — только то, что вы знаете.',
    bg: 'bg-pistachio',
  },
  {
    icon: '❄️',
    title: 'Без мороженицы',
    desc: 'Научим добиваться нежной, сливочной текстуры даже без специального оборудования.',
    bg: 'bg-berry-light',
  },
]

const BOTTOM_REASONS = [
  {
    icon: '🔄',
    title: 'Гибкость рецептов',
    desc: 'Покажем, как адаптировать рецепты под любой рацион: без сахара, веганским и ПП-версиям.',
    bg: 'bg-purple-50',
  },
  {
    icon: '🏡',
    title: 'Правильное хранение',
    desc: 'Расскажем, как хранить домашнее мороженое, чтобы оно не теряло вкус и консистенцию.',
    bg: 'bg-yellow-50',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Подходит всей семье',
    desc: 'От детей до взрослых с чувствительным пищеварением — каждый найдёт свой вкус.',
    bg: 'bg-blue-50',
  },
]

export default function WhySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-berry-light text-berry text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Наши отличия
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal text-balance">
            Почему это <span className="text-berry">мороженое</span> — не как остальные
          </h2>
        </div>

        {/* Row 1: 2 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {TOP_REASONS.map((r) => (
            <div
              key={r.title}
              className={`${r.bg} rounded-2xl p-7 flex flex-col gap-3 hover:scale-[1.02] transition-transform shadow-card`}
            >
              <span className="text-4xl w-12 h-12 flex items-center justify-center" role="img" aria-label={r.title}>
                {r.icon}
              </span>
              <h3 className="font-bold text-xl text-charcoal">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2: 3 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {BOTTOM_REASONS.map((r) => (
            <div
              key={r.title}
              className={`${r.bg} rounded-2xl p-7 flex flex-col gap-3 hover:scale-[1.02] transition-transform shadow-card`}
            >
              <span className="text-4xl w-12 h-12 flex items-center justify-center" role="img" aria-label={r.title}>
                {r.icon}
              </span>
              <h3 className="font-bold text-xl text-charcoal">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#register"
            className="inline-block bg-berry text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-red-500 transition-all shadow-berry hover:shadow-xl hover:-translate-y-0.5"
          >
            Зарегистрироваться бесплатно
          </a>
        </div>
      </div>
    </section>
  )
}
