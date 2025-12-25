"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-architectural-concrete-countertop-in-dark-l.jpg"
          alt="Architectural concrete"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-primary border border-primary/30 px-4 py-2 rounded-sm">
              Архитектурный бетон
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            Искусство бетона в вашем интерьере
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-normal">
            Создаём уникальные изделия из архитектурного бетона для современных интерьеров. Столешницы, раковины, мебель
            и декор, которые служат десятилетиями.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 leading-normal"
              onClick={scrollToContact}
            >
              Заказать консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 border-border hover:bg-secondary bg-transparent leading-normal"
              onClick={() => {
                const element = document.getElementById("products")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Смотреть работы
            </Button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-8 animate-bounce z-50">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
