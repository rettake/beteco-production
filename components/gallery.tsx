export function Gallery() {
  const images = [
    {
      src: "/concrete-kitchen-island-dark-modern.jpg",
      alt: "Кухонный остров",
      span: "md:col-span-2",
    },
    {
      src: "/concrete-bathroom-vanity-minimalist.jpg",
      alt: "Ванная комната",
      span: "md:col-span-1",
    },
    {
      src: "/concrete-dining-table-industrial.jpg",
      alt: "Обеденный стол",
      span: "md:col-span-1",
    },
    {
      src: "/concrete-fireplace-surround-modern.jpg",
      alt: "Камин",
      span: "md:col-span-2",
    },
    {
      src: "/concrete-bar-counter-dark-luxury.jpg",
      alt: "Барная стойка",
      span: "md:col-span-1",
    },
    {
      src: "/concrete-wall-panel-texture-detail.jpg",
      alt: "Стеновая панель",
      span: "md:col-span-1",
    },
  ]

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs text-primary">Галерея</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-normal">
            Реализованные проекты для квартир, домов и коммерческих пространств
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className={`${image.span} aspect-square overflow-hidden group cursor-pointer`}>
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
