import Image from 'next/image'

const STATS = [
  { value: '300+', label: 'рецептов мороженого' },
  { value: '10 лет', label: 'в кулинарии' },
  { value: '2 500+', label: 'выданных дипломов' },
  { value: '67%', label: 'выпускников зарабатывают' },
]

const CREDENTIALS = [
  'Продал более тонны мороженого и приготовил более 300 различных видов этого лакомства',
  'Нашёл идеальные пропорции ингредиентов, которые делают мороженое нежным, сливочным и вкусным',
  'Прошёл весь путь с 0 до 1000 г молока в день',
  'Обучил онлайн более 1 000 000 человек',
  'Основатель первой в России школы по сыроварению',
  'Эксперт канала «Россия 1» по молочной продукции',
]

export default function SpeakerSection() {
  return (
    <section id="speaker" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-berry-light text-berry text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Спикер
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal text-balance">
            Алексей <span className="text-berry">Сыровер</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Основатель Академии крафтовых продуктов. Эксперт по сыроварению, мороженому, тортам и десертам.
          </p>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* Photo side */}
            <div className="relative min-h-96 lg:min-h-[680px] overflow-hidden">
              <Image
                src="/images/speaker-alexey.webp"
                alt="Алексей Сыровер — основатель Академии крафтовых продуктов"
                fill
                className="object-cover"
                style={{ objectPosition: '50% top' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 glass-card rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-charcoal">ТОП-школа 2024</span>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 lg:p-14 flex flex-col justify-center">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-cream rounded-2xl p-4 text-center">
                    <p className="text-2xl font-extrabold text-berry">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Credentials */}
              <ul className="flex flex-col gap-3 mt-10">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-berry-light text-berry flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Academy stats row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { value: '1 000 000', label: 'человек прошли обучение в нашей школе' },
            { value: '2 500', label: 'выдали дипломов государственного образца и сертификатов' },
            { value: '67%', label: 'выпускников стали зарабатывать на любимом деле' },
          ].map((s) => (
            <div key={s.label} className="bg-berry rounded-2xl p-6 text-center text-white shadow-berry">
              <p className="text-3xl font-extrabold">{s.value}</p>
              <p className="text-white/80 text-sm mt-2 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
