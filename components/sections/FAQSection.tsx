"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Dónde está ubicado Fresquito Brunch & Coffee?",
    answer: "Estamos ubicados en C. Torres Quevedo, 12, 35007 Las Palmas de Gran Canaria, a solo 3 minutos caminando de Playa Chica en Las Canteras."
  },
  {
    question: "¿Cuáles son los horarios de apertura?",
    answer: "Abrimos de lunes a viernes de 9:30 a 15:00, y los fines de semana de 9:00 a 16:00. Cerramos los martes."
  },
  {
    question: "¿Aceptan reservas?",
    answer: "Sí, aceptamos reservas. Puedes llamarnos al +34 928 12 34 56 o contactarnos por Instagram @fresquitobrunch."
  },
  {
    question: "¿Son pet-friendly?",
    answer: "¡Sí! Somos pet-friendly. Tu mascota es bienvenida en nuestra terraza y en el interior del local."
  },
  {
    question: "¿Tienen Wi-Fi para trabajar?",
    answer: "Sí, tenemos Wi-Fi gratuito y un ambiente work-friendly perfecto para trabajar o estudiar mientras disfrutas de nuestro café."
  },
  {
    question: "¿Qué tipo de comida sirven?",
    answer: "Servimos brunch gourmet, desayunos saludables, café premium, tostadas, pancakes, bowls y platos vegetarianos. Todo preparado con ingredientes frescos y de calidad."
  },
  {
    question: "¿Tienen opciones vegetarianas?",
    answer: "Sí, tenemos varias opciones vegetarianas en nuestro menú, incluyendo bowls, tostadas y platos especiales."
  },
  {
    question: "¿Puedo celebrar eventos o cumpleaños?",
    answer: "Sí, organizamos eventos especiales. Contacta con nosotros para más información sobre reservas para grupos y celebraciones."
  },
  {
    question: "¿Tienen terraza?",
    answer: "Sí, tenemos una terraza preciosa donde puedes disfrutar del clima de Las Palmas mientras comes o trabajas."
  },
  {
    question: "¿Cuál es el plato más popular?",
    answer: "Nuestro 'Gran Bikini' es nuestro sándwich estrella, pero también destacan nuestros pancakes y bowls de brunch."
  }
];

export const FAQSection = React.memo(() => {
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item, index) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      {/* Sección FAQ oculta visualmente pero accesible para SEO e IAs */}
      <section 
        className="sr-only" 
        aria-hidden="true"
        itemScope 
        itemType="https://schema.org/FAQPage"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--cobalt-blue)] mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre Fresquito Brunch & Coffee
          </p>
          
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name" className="font-medium text-lg text-[var(--cobalt-blue)]">
                  {item.question}
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data para SEO - Invisible pero accesible para crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
    </>
  );
});
