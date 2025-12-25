import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
                <Image src='/logo.png' alt='Логотип сайта' width={500} height={500} className='w-15 h-15' />
              <span className="text-xl font-bold tracking-tight">BetEco Production</span>
            </div>
            <p className="text-sm text-muted-foreground leading-normal">
              Производство изделий из архитектурного бетона премиум-класса
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm">Навигация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-normal">
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-foreground transition-colors">
                  Продукция
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-foreground transition-colors">
                  Процесс
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-foreground transition-colors">
                  Галерея
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-sm">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-normal">
              <li>+7 911 019 07 41</li>
              {/*<li>info@beteco.ru</li>*/}
              <li>Санкт-Петербург, Репищева 14 АП</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground leading-normal">
          <p>© {new Date().getFullYear()} BetEco Production. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
