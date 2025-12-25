"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
              <Image src='/logo.png' alt='Логотип сайта' width={500} height={500} className='w-25 h-25' />
            <span className="text-xl font-bold font-heading">BetEco Production</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-normal"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-normal"
            >
              Продукция
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-normal"
            >
              Процесс
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-normal"
            >
              Галерея
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 leading-normal"
            >
              Связаться
            </Button>
          </nav>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors leading-normal"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors leading-normal"
            >
              Продукция
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors leading-normal"
            >
              Процесс
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left text-muted-foreground hover:text-foreground transition-colors leading-normal"
            >
              Галерея
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full leading-normal"
            >
              Связаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
