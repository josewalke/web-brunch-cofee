import { MapPin, Phone, Clock, Instagram, Mail, Wifi, Heart, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--sand-beige)] border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif text-[var(--cobalt-blue)] mb-4">
              Fresquito Brunch & Coffee
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Tu café de barrio cerca de Las Canteras. Brunch sin prisas, Wi-Fi listo 
              y café serio para empezar el día como debe ser.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                <Wifi className="h-4 w-4 text-[var(--plant-green)]" />
                Work-friendly
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                <Heart className="h-4 w-4 text-[var(--cobalt-blue)]" />
                Pet-friendly
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                <Briefcase className="h-4 w-4 text-[var(--stone-gray)]" />
                Terraza
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-[var(--cobalt-blue)] mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>Calle Principal, 123</p>
                  <p className="text-muted-foreground">35008 Las Palmas de Gran Canaria</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+34 928 12 34 56</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">hola@fresquito.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-medium text-[var(--cobalt-blue)] mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Horarios
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lun, Mié-Vie:</span>
                <span>9:30-15:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-500">Martes:</span>
                <span className="text-red-500">Cerrado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sáb-Dom:</span>
                <span>9:00-16:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Fresquito Brunch & Coffee. A 3 min de Las Canteras, Gran Canaria.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/fresquitobrunch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[var(--cobalt-blue)] transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#menu"
              className="text-sm text-muted-foreground hover:text-[var(--cobalt-blue)] transition-colors"
            >
              Carta
            </a>
            <span className="text-sm text-[var(--cobalt-blue)]">
              +34 928 12 34 56
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}