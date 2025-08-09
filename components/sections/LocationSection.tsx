"use client";

import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { CONTACT_INFO, BUSINESS_HOURS, TEXTS, SOCIAL_LINKS } from "../../lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "../../lib/utils";

export function LocationSection() {
  return (
    <section id="location" className="w-full py-16 bg-[var(--sand-beige)]">
      <div id="contact" className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif text-[var(--cobalt-blue)] mb-4">
            {TEXTS.location.title}
          </h2>
          <p className="text-muted-foreground">
            {TEXTS.location.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-md backdrop-blur-sm bg-white/80">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--cobalt-blue)]">
                  <MapPin className="h-5 w-5" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.1234567890123!2d-15.4321!3d28.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40951c1234567%3A0xabcdef1234567890!2sC.+Torres+Quevedo%2C+12%2C+35007+Las+Palmas+de+Gran+Canaria%2C+Las+Palmas!5e0!3m2!1ses!2ses!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Fresquito Brunch & Coffee - C. Torres Quevedo, 12, Las Palmas de Gran Canaria"
                    className="w-full h-full"
                  />
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>{CONTACT_INFO.address.street}</strong><br />
                    {CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    🏖️ A 3 minutos de Playa Chica, Las Canteras
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <Card className="shadow-md backdrop-blur-sm bg-white/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[var(--cobalt-blue)]">
                    <Clock className="h-5 w-5" />
                    Horarios
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {BUSINESS_HOURS.map((schedule, index) => (
                    <motion.div 
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className={schedule.isClosed ? "text-red-500" : "text-muted-foreground"}>
                        {schedule.day}
                      </span>
                      <span className={schedule.isClosed ? "text-red-500" : ""}>
                        {schedule.hours}
                      </span>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="text-sm text-muted-foreground mt-4 p-3 bg-blue-50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p><strong>{TEXTS.location.tip}</strong></p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="shadow-md backdrop-blur-sm bg-white/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[var(--cobalt-blue)]">
                    <Phone className="h-5 w-5" />
                    Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{CONTACT_INFO.phone}</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-sm">{CONTACT_INFO.email}</span>
                  </motion.div>
                  <motion.div 
                    className="text-sm text-muted-foreground mt-4 p-3 bg-blue-50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p><strong>{TEXTS.location.reservationNote}</strong></p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}