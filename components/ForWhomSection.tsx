const CARDS = [
  {
    emoji: '🍦',
    title: 'Любите мороженое',
    desc: 'И мечтаете, чтобы оно было не только вкусным, но и полезным — без красителей и консервантов.',
    bg: 'bg-berry-light',
    accent: 'text-berry',
  },
  {
    emoji: '🧪',
    title: 'Хотите знать состав',
    desc: 'Важно понимать, что вы едите. Только натуральные ингредиенты, никакой химии.',
    bg: 'bg-pistachio',
    accent: 'text-green-700',
  },
  {
    emoji: '👨‍👩‍👧',
    title: 'Заботитесь о близких',
    desc: 'Хотите баловать детей и родных десертами, которые не навредят здоровью.',
    bg: 'bg-yellow-50',
    accent: 'text-yellow-700',
  },
  {
    emoji: '💃',
    title: 'Следите за фигурой',
    desc: 'Любите сладкое, но боитесь за калории и самочувствие — научим делать сладкое без сахара.',
    bg: 'bg-purple-50',
    accent: 'text-purple-700',
  },
  {
    emoji: '⚡',
    title: 'Цените своё время',
    desc: 'Не хотите тратить часы на сложные рецепты — нужно быстро, просто и с гарантированным результатом.',
    bg: 'bg-orange-50',
    accent: 'text-orange-700',
  },
  {
    emoji: '🎁',
    title: 'Хотите удивить',
    desc: 'Мечтаете дарить вкусные подарки — мороженые торты и десерты, которых нет в магазине.',
    bg: 'bg-blue-50',
    accent: 'text-blue-700',
  },
]

export default function ForWhomSection() {
  return (
    <section id="for-whom" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-berry-light text-berry text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Для кого этот марафон
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal text-balance">
            Этот <span className="text-berry">марафон</span> для вас, если вы…
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className={`${card.bg} rounded-2xl p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform shadow-card`}
            >
              <span className="text-4xl" role="img" aria-label={card.title}>{card.emoji}</span>
              <h3 className={`font-bold text-lg ${card.accent}`}>{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
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
