import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2d5226] text-[#f5f0e8] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-lines opacity-30" />

      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#c8a84b] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[rgba(200,168,75,0.4)]">
                <Image
                  src="/assets/logo.png"
                  alt="Chenil de la Conque"
                  fill
                  className="object-contain p-1.5 brightness-200 saturate-0"
                />
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] font-700 text-lg leading-tight text-white">
                  Chenil de la Conque
                </p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#c8a84b]">
                  Pension Animale
                </p>
              </div>
            </div>
            <p className="font-[family-name:var(--font-cormorant)] text-base text-[rgba(245,240,232,0.75)] leading-relaxed italic">
              Un domaine de 13 hectares en bordure de rivière, à 20 km de Bordeaux. Un cadre champêtre unique pour le bien-être de vos animaux.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#6a9e5e] animate-pulse" />
              <span className="text-xs tracking-wider uppercase text-[#6a9e5e] font-[family-name:var(--font-raleway)] font-600">
                Ouvert toute l&apos;année
              </span>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="font-[family-name:var(--font-raleway)] text-xs tracking-[0.15em] uppercase text-[#c8a84b] mb-5 font-600">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/tarifs", label: "Tarifs" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-raleway)] text-sm text-[rgba(245,240,232,0.7)] hover:text-[#c8a84b] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-[rgba(200,168,75,0.3)] group-hover:bg-[#c8a84b] group-hover:w-5 transition-all duration-300" />
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="font-[family-name:var(--font-raleway)] text-xs tracking-[0.15em] uppercase text-[#c8a84b] mb-5 font-600 mt-7">
              Nos Services
            </p>
            <div className="flex flex-col gap-2">
              {["Pension Chiens", "Pension Chats", "Élevage Setter Anglais", "Élevage Golden Retriever"].map((s) => (
                <span key={s} className="font-[family-name:var(--font-raleway)] text-sm text-[rgba(245,240,232,0.7)] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#6a9e5e]" />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p className="font-[family-name:var(--font-raleway)] text-xs tracking-[0.15em] uppercase text-[#c8a84b] mb-5 font-600">
              Nous Contacter
            </p>
            <div className="flex flex-col gap-4">
              <a href="tel:0784082666" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[rgba(74,124,63,0.3)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(200,168,75,0.2)] transition-colors">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-[#c8a84b]">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[rgba(245,240,232,0.5)] mb-0.5 font-[family-name:var(--font-raleway)]">Téléphone</p>
                  <p className="text-sm text-white font-[family-name:var(--font-raleway)] font-600 group-hover:text-[#c8a84b] transition-colors">
                    07 84 08 26 66
                  </p>
                </div>
              </a>

              <a href="mailto:chenildelaconque@gmail.com" className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-[rgba(74,124,63,0.3)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(200,168,75,0.2)] transition-colors">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-[#c8a84b]">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[rgba(245,240,232,0.5)] mb-0.5 font-[family-name:var(--font-raleway)]">Email</p>
                  <p className="text-sm text-white font-[family-name:var(--font-raleway)] font-600 group-hover:text-[#c8a84b] transition-colors break-all">
                    chenildelaconque@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[rgba(74,124,63,0.3)] flex items-center justify-center shrink-0">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-[#c8a84b]">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[rgba(245,240,232,0.5)] mb-0.5 font-[family-name:var(--font-raleway)]">Adresse</p>
                  <p className="text-sm text-white font-[family-name:var(--font-raleway)]">
                    Izon (Gironde), France
                  </p>
                  <p className="text-xs text-[rgba(245,240,232,0.5)] font-[family-name:var(--font-raleway)]">
                    20 km de Bordeaux · 12 km de Libourne
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-[rgba(74,124,63,0.2)] border border-[rgba(200,168,75,0.2)]">
              <p className="text-xs text-[#c8a84b] font-[family-name:var(--font-raleway)] font-600 uppercase tracking-wider mb-1">
                Réservations
              </p>
              <p className="text-xs text-[rgba(245,240,232,0.7)] font-[family-name:var(--font-raleway)] leading-relaxed">
                Réservez 2 à 4 mois à l&apos;avance pour les vacances scolaires. Accueil uniquement sur rendez-vous.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(245,240,232,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgba(245,240,232,0.4)] font-[family-name:var(--font-raleway)] text-center sm:text-left">
            © {new Date().getFullYear()} SARL Domaine de La Conque — Tous droits réservés
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[rgba(245,240,232,0.3)] font-[family-name:var(--font-raleway)]">Vétérinaire référent :</span>
            <span className="text-xs text-[rgba(245,240,232,0.5)] font-[family-name:var(--font-raleway)] italic">Clinique vétérinaire de l&apos;isle, Fronsac</span>
          </div>
        </div>
      </div>
    </footer>
  );
}