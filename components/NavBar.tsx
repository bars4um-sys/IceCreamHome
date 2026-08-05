'use client'

import { useState, useEffect } from 'react'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card shadow-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-berry flex items-center justify-center">
            <span className="text-white text-xs font-bold">АС</span>
          </div>
          <span className="font-bold text-charcoal text-sm sm:text-base">
            Академия <span className="text-berry">Сыровера</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#for-whom" className="text-sm text-muted-foreground hover:text-berry transition-colors font-medium">
            Для кого
          </a>
          <a href="#program" className="text-sm text-muted-foreground hover:text-berry transition-colors font-medium">
            Программа
          </a>
          <a href="#speaker" className="text-sm text-muted-foreground hover:text-berry transition-colors font-medium">
            Спикер
          </a>
          <a href="#results" className="text-sm text-muted-foreground hover:text-berry transition-colors font-medium">
            Результаты
          </a>
        </nav>

        <a
          href="#register"
          className="bg-berry text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-red-500 transition-colors shadow-berry"
        >
          Записаться бесплатно
        </a>
      </div>
    </header>
  )
}
