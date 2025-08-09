import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function LocationSection() {
  return (
    <section id="location" className="w-full py-16 bg-[var(--sand-beige)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-[var(--cobalt-blue)] mb-4">
            Cerca de Las Canteras
          </h2>
          <p className="text-muted-foreground">
            A solo 3 minutos caminando de Playa Chica. El spot perfecto para desayunar antes o después de la playa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[var(--cobalt-blue)]">
                <MapPin className="h-5 w-5" />
                Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-[var(--cobalt-blue)] mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Mapa interactivo de Google Maps
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Calle Principal, 123<br />
                    35008 Las Palmas de Gran Canaria
                  </p>
                </div>
              </div>
              <Button 
                className="w-full bg-[var(--plant-green)] hover:bg-[var(--plant-green)]/90 text-white"
                asChild
              >
                <a href="https://goo.gl/maps" target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4 mr-2" />
                  Cómo llegar
                </a>
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--cobalt-blue)]">
                  <Clock className="h-5 w-5" />
                  Horarios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Lunes</span>
                  <span>9:30 - 15:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-red-500">Martes</span>
                  <span className="text-red-500">Cerrado</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Miércoles - Viernes</span>
                  <span>9:30 - 15:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Sábado - Domingo</span>
                  <span>9:00 - 16:00</span>
                </div>
                <div className="text-sm text-muted-foreground mt-4 p-3 bg-blue-50 rounded-lg">
                  <p><strong>💡 Tip:</strong> Los fines de semana solemos estar más llenos. Te recomendamos venir temprano o llamar para reservar.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[var(--cobalt-blue)]">
                  <Phone className="h-5 w-5" />
                  Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">+34 928 12 34 56</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-sm">hola@fresquito.com</span>
                </div>
                <div className="text-sm text-muted-foreground mt-4 p-3 bg-blue-50 rounded-lg">
                  <p><strong>Para reservar:</strong> Llámanos al teléfono de arriba</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}