'use client'

import { useState } from 'react'

const TIMES = ['13:00 мск', '19:00 мск']

export default function RegisterSection() {
  const [time, setTime] = useState(TIMES[0])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    setSubmitted(true)
  }

  return (
    <section id="register" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(255, 59, 92, 0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-berry-light text-berry text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Регистрация
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal text-balance">
            Не упустите возможность{' '}
            <span className="text-berry">присоединиться</span> к нашему эфиру
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Научитесь готовить вкусное домашнее мороженое всего за 20 минут — бесплатно, онлайн, без регистрации на сайте.
          </p>
        </div>

        {submitted ? (
          <div className="bg-pistachio rounded-3xl p-12 text-center">
            <span className="text-6xl block mb-4" role="img" aria-label="Отлично">🎉</span>
            <h3 className="text-2xl font-extrabold text-charcoal mb-2">Вы зарегистрированы!</h3>
            <p className="text-muted-foreground">
              Проверьте почту — мы отправили подробности участия на {email}
            </p>
          </div>
        ) : (
          <div className="bg-cream rounded-3xl p-8 sm:p-10 shadow-card">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Time selector */}
              <div>
                <p className="text-sm font-semibold text-charcoal mb-3">Выберите удобное время</p>
                <div className="flex gap-4">
                  {TIMES.map((t) => (
                    <label key={t} className="flex items-center gap-2 cursor-pointer">
                      <div
                        onClick={() => setTime(t)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors ${
                          time === t ? 'border-berry bg-berry' : 'border-border bg-white'
                        }`}
                        role="radio"
                        aria-checked={time === t}
                        aria-label={t}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setTime(t)}
                      >
                        {time === t && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm font-medium text-charcoal">{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Введите ваш e-mail"
                  className="w-full bg-white border border-border rounded-xl px-4 py-3.5 text-sm text-charcoal placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-berry transition"
                />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="fullname" className="sr-only">Имя</label>
                <input
                  id="fullname"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите ваше имя"
                  className="w-full bg-white border border-border rounded-xl px-4 py-3.5 text-sm text-charcoal placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-berry transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="sr-only">Телефон</label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-white border border-border rounded-xl px-4 py-3.5 text-sm text-charcoal placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-berry transition"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!agreed}
                className="w-full bg-berry text-white font-bold text-base py-4 rounded-2xl hover:bg-red-500 transition-all shadow-berry hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                Принять участие
              </button>

              {/* Checkboxes */}
              <div className="flex flex-col gap-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-berry flex-shrink-0"
                  />
                  <span className="text-xs text-muted-foreground">
                    Я согласен(а) на обработку персональных данных в соответствии с{' '}
                    <a href="#" className="text-berry underline hover:no-underline">условиями Политики</a>
                  </span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 accent-berry flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">
                    Я согласен(а) с{' '}
                    <a href="#" className="text-berry underline hover:no-underline">условиями оферты</a>
                  </span>
                </label>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 accent-berry flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">
                    Я согласен(а) на получение информации рекламного характера
                  </span>
                </label>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
