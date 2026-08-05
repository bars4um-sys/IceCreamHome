export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-berry flex items-center justify-center">
                <span className="text-white text-xs font-bold">АС</span>
              </div>
              <span className="font-bold text-white">
                Академия <span className="text-berry">Сыровера</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Академия крафтовых продуктов Алексея Сыровера. Наши направления: сыроварение, кисломолочная продукция, мороженое, торты, сырные конфеты, шоколадные изделия, хлебобулочные изделия, ПП-десерты.
            </p>
            <p className="text-white/40 text-xs">
              ИП Сальников Алексей Сергеевич<br />
              ИНН 505047899850
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-sm uppercase tracking-wide text-white/60">Контакты</h3>
            <a href="tel:88006007228" className="text-sm text-white/80 hover:text-berry transition-colors">
              8 (800) 600-72-28 — узнать про обучение сыроварению
            </a>
            <a href="tel:88006004781" className="text-sm text-white/80 hover:text-berry transition-colors">
              8 (800) 600-47-81 — заказать товары в интернет-магазине
            </a>
            <a href="mailto:info@syrover.com" className="text-sm text-white/80 hover:text-berry transition-colors">
              info@syrover.com
            </a>
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-sm uppercase tracking-wide text-white/60">Документы</h3>
            {[
              'Политика конфиденциальности',
              'Соглашение на обработку персональных данных',
              'Политика обработки персональных данных',
              'Согласие на получение рекламной рассылки',
              'Положение об образовательной деятельности',
              'Уведомление об использовании сookies',
            ].map((link) => (
              <a key={link} href="#" className="text-xs text-white/50 hover:text-white/80 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2024 Академия крафтовых продуктов Алексея Сыровера. Все права защищены.
          </p>
          <p className="text-xs text-white/40">
            Сайт является публичной офертой
          </p>
        </div>
      </div>
    </footer>
  )
}
