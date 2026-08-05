'use client'

import { useEffect, useState } from 'react'

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="glass-card border-t border-border shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-charcoal text-sm">
              Бесплатный онлайн-марафон по домашнему мороженому
            </p>
            <p className="text-xs text-muted-foreground">09–10 августа · 13:00 или 19:00 мск</p>
          </div>
          <a
            href="#register"
            className="bg-berry text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-red-500 transition-all shadow-berry whitespace-nowrap"
          >
            Зарегистрироваться бесплатно →
          </a>
        </div>
      </div>
    </div>
  )
}
