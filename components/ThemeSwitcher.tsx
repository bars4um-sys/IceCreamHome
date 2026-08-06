'use client'

import { useEffect, useState } from 'react'

type Theme = 'berry' | 'ocean' | 'pistachio'

const THEMES: { id: Theme; label: string; accent: string; bg: string }[] = [
  { id: 'berry',     label: 'Berry',     accent: '#FF3B5C', bg: '#FAF9F6' },
  { id: 'ocean',     label: 'Ocean',     accent: '#0066CC', bg: '#F5F8FF' },
  { id: 'pistachio', label: 'Pistachio', accent: '#2D8C5E', bg: '#F7FAF5' },
]

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<Theme>('berry')

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) || 'berry'
    setActive(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  function applyTheme(id: Theme) {
    setActive(id)
    document.documentElement.setAttribute('data-theme', id)
    // also update bg class on html for scroll area
    document.documentElement.style.backgroundColor = THEMES.find(t => t.id === id)!.bg
    localStorage.setItem('theme', id)
    setOpen(false)
  }

  const current = THEMES.find(t => t.id === active)!

  return (
    <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-2">
      {/* Palette options */}
      {open && (
        <div className="flex flex-col gap-2 items-end">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => applyTheme(t.id)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl shadow-card text-sm font-semibold transition-all hover:scale-105"
              style={{
                background: t.bg,
                color: t.accent,
                border: `2px solid ${active === t.id ? t.accent : 'transparent'}`,
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              }}
              aria-label={`Тема ${t.label}`}
            >
              <span
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ background: t.accent }}
              />
              {t.label}
              {active === t.id && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
        style={{
          background: current.accent,
          boxShadow: `0 6px 20px color-mix(in srgb, ${current.accent} 40%, transparent)`,
        }}
        aria-label="Переключить цветовую тему"
        title="Цветовые темы"
      >
        <span className="text-xl" role="img" aria-hidden="true">😊</span>
        <span className="text-white font-bold text-sm whitespace-nowrap">Нажми меня</span>
      </button>
    </div>
  )
}
