"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Mail, Phone, MapPin, MessageCircle} from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.")
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="inline-block mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-primary">Контакты</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Начнём ваш проект</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-normal">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей. Консультация и выезд замерщика — бесплатно.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1 leading-normal">Телефон</div>
                  <a href="tel:+79110190741" className="text-lg hover:text-primary transition-colors leading-normal">
                      +7 911 019 07 41
                  </a>
                </div>
              </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground mb-1 leading-normal">Телеграм</div>
                        <a href="https://t.me/vladislavfrost7" className="text-lg hover:text-primary transition-colors leading-normal">
                            +7 911 019 07 41
                        </a>
                    </div>
                </div>

              {/*<div className="flex items-start gap-4">*/}
              {/*  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">*/}
              {/*    <Mail className="h-5 w-5 text-primary" />*/}
              {/*  </div>*/}
              {/*  <div>*/}
              {/*    <div className="text-sm text-muted-foreground mb-1 leading-normal">Email</div>*/}
              {/*    <a*/}
              {/*      href="mailto:info@beteco.ru"*/}
              {/*      className="text-lg hover:text-primary transition-colors leading-normal"*/}
              {/*    >*/}
              {/*      info@beteco.ru*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</div>*/}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1 leading-normal">Адрес</div>
                  <p className="text-lg leading-normal">Санкт-Петербург, Репищева 14 АП</p>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="bg-card border border-border p-8 lg:p-10">*/}
          {/*  <form onSubmit={handleSubmit} className="space-y-6">*/}
          {/*    <div>*/}
          {/*      <label htmlFor="name" className="block text-sm mb-2 text-foreground leading-normal">*/}
          {/*        Имя **/}
          {/*      </label>*/}
          {/*      <Input*/}
          {/*        id="name"*/}
          {/*        required*/}
          {/*        value={formData.name}*/}
          {/*        onChange={(e) => setFormData({ ...formData, name: e.target.value })}*/}
          {/*        className="bg-background border-border text-foreground"*/}
          {/*        placeholder="Ваше имя"*/}
          {/*      />*/}
          {/*    </div>*/}

          {/*    <div>*/}
          {/*      <label htmlFor="phone" className="block text-sm mb-2 text-foreground leading-normal">*/}
          {/*        Телефон **/}
          {/*      </label>*/}
          {/*      <Input*/}
          {/*        id="phone"*/}
          {/*        type="tel"*/}
          {/*        required*/}
          {/*        value={formData.phone}*/}
          {/*        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}*/}
          {/*        className="bg-background border-border text-foreground"*/}
          {/*        placeholder="+7 (___) ___-__-__"*/}
          {/*      />*/}
          {/*    </div>*/}

          {/*    <div>*/}
          {/*      <label htmlFor="email" className="block text-sm mb-2 text-foreground leading-normal">*/}
          {/*        Email*/}
          {/*      </label>*/}
          {/*      <Input*/}
          {/*        id="email"*/}
          {/*        type="email"*/}
          {/*        value={formData.email}*/}
          {/*        onChange={(e) => setFormData({ ...formData, email: e.target.value })}*/}
          {/*        className="bg-background border-border text-foreground"*/}
          {/*        placeholder="your@email.com"*/}
          {/*      />*/}
          {/*    </div>*/}

          {/*    <div>*/}
          {/*      <label htmlFor="message" className="block text-sm mb-2 text-foreground leading-normal">*/}
          {/*        Сообщение*/}
          {/*      </label>*/}
          {/*      <Textarea*/}
          {/*        id="message"*/}
          {/*        value={formData.message}*/}
          {/*        onChange={(e) => setFormData({ ...formData, message: e.target.value })}*/}
          {/*        className="bg-background border-border text-foreground min-h-32"*/}
          {/*        placeholder="Расскажите о вашем проекте..."*/}
          {/*      />*/}
          {/*    </div>*/}

          {/*    <Button*/}
          {/*      type="submit"*/}
          {/*      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 leading-normal"*/}
          {/*    >*/}
          {/*      Отправить заявку*/}
          {/*    </Button>*/}
          {/*  </form>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  )
}
