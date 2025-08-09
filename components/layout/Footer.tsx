import { Clock } from "lucide-react";
import { BUSINESS_INFO, CONTACT_INFO, BUSINESS_HOURS, FOOTER_BADGES, TEXTS, SOCIAL_LINKS } from "../../lib/constants";

export function Footer() {
  return (
    <footer className="w-full bg-[var(--sand-beige)] border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif text-[var(--cobalt-blue)] mb-4">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {TEXTS.footer.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {FOOTER_BADGES.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 bg-white px-3 py-1 rounded-full text-sm">
                  <badge.icon className={`h-4 w-4 ${badge.color}`} />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-[var(--cobalt-blue)] mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <svg className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div className="text-sm">
                  <p>{CONTACT_INFO.address.street}</p>
                  <p className="text-muted-foreground">
                    {CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-sm">{CONTACT_INFO.email}</span>
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
              {BUSINESS_HOURS.map((schedule, index) => (
                <div key={index} className="flex justify-between">
                  <span className={schedule.isClosed ? "text-red-500" : "text-muted-foreground"}>
                    {schedule.day}:
                  </span>
                  <span className={schedule.isClosed ? "text-red-500" : ""}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {TEXTS.footer.copyright}
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href={SOCIAL_LINKS.instagram}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[var(--cobalt-blue)] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.745 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.052 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.897 1.387 2.047 1.387 3.345s-.49 2.448-1.297 3.323c-.875.807-2.025 1.297-3.323 1.297z"/>
              </svg>
            </a>
            <a 
              href="#menu"
              className="text-sm text-muted-foreground hover:text-[var(--cobalt-blue)] transition-colors"
            >
              Carta
            </a>
            <span className="text-sm text-[var(--cobalt-blue)]">
              {CONTACT_INFO.phone}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}