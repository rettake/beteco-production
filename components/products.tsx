import { Card, CardContent } from "@/components/ui/card"

export function Products() {
  const products = [
    {
      title: "Столешницы",
      description:
        "Кухонные и ванные столешницы из архитектурного бетона. Устойчивы к влаге, температурам и механическим воздействиям. Индивидуальные размеры и формы.",
      image: "/modern-concrete-kitchen-countertop-dark-grey.jpg",
    },
    {
      title: "Раковины",
      description:
        "Интегрированные и накладные раковины из бетона. Бесшовное соединение со столешницей. Различные формы и размеры под ваш проект.",
      image: "/concrete-integrated-sink-minimalist-bathroom-dark.jpg",
    },
    {
      title: "Мебель",
      description:
        "Обеденные столы, журнальные столики, тумбы из бетона. Возможно комбинирование с деревом, металлом и стеклом для создания уникального дизайна.",
      image: "/concrete-dining-table-with-wood-modern-interior.jpg",
    },
    {
      title: "Декор",
      description:
        "Декоративные панели, облицовка каминов, подоконники. Архитектурные элементы, которые создают характер интерьера и подчёркивают индивидуальность пространства.",
      image: "/concrete-wall-panel-texture-architectural-detail.jpg",
    },
  ]

  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs text-primary">Продукция</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Что мы создаём</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-normal">
            Каждое изделие изготавливается по индивидуальному проекту с учётом особенностей вашего интерьера
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-muted-foreground leading-normal">{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
