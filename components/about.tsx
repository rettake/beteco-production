import { CheckCircle2 } from "lucide-react"

export function About() {
  const features = [
    "Индивидуальный дизайн под ваш проект",
    "Экологически чистые материалы",
    "Гарантия качества 10 лет",
    "Доставка до объекта",
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-primary">О студии</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Мастерство в каждой детали</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-normal">
              BetEco Production специализируется на производстве изделий из архитектурного бетона премиум-класса. Мы
              работаем с дизайнерами интерьеров, архитекторами и частными заказчиками, создавая уникальные решения для
              жилых и коммерческих пространств.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-normal">
              Наша команда использует передовые технологии производства и только качественные материалы, что позволяет
              создавать изделия с безупречной геометрией и долговечностью.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-serif text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src="/artisan-crafting-concrete-countertop-in-workshop.jpg"
                alt="Процесс создания"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
