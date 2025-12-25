export function Process() {
  const steps = [
    {
      number: "01",
      title: "Консультация",
      description:
        "Обсуждаем ваш проект, показываем образцы материалов и текстур. Выезжаем на объект для замеров при необходимости.",
    },
    {
      number: "02",
      title: "Дизайн",
      description: "Разрабатываем 3D-визуализацию изделия, согласовываем все детали: форму, цвет, текстура и размеры.",
    },
    {
      number: "03",
      title: "Производство",
      description:
        "Изготавливаем изделие в нашей мастерской с соблюдением всех технологических процессов и контролем качества.",
    },
    {
      number: "04",
      title: "Доставка",
      description: "Надежно упаковываем и организовываем доставку изделия на ваш объект в согласованные сроки.",
    },
  ]

  return (
    <section id="process" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs text-primary">Процесс работы</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">От идеи до реализации</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-normal">
            Прозрачный процесс работы от первой встречи до финальной установки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-6">
                <span className="text-6xl font-bold text-primary/20">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-normal">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
