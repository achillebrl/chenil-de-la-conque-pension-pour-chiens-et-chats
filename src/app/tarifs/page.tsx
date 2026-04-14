import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tarifs | Chenil de la Conque",
  description:
    "Consultez les tarifs de la pension animale Chenil de la Conque à Izon, Gironde — pension chiens, pension chats, option box chauffé.",
};

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3]">
      <Navigation activePage="tarifs" />

      {/* ═══════════════════════════════════════════════════
          PAGE HERO BAND
      ═══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 px-6 text-center bg-[#2d5226] overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-lines opacity-10" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 120%, rgba(200,168,75,0.15) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(200,168,75,0.15)] border border-[rgba(200,168,75,0.35)] text-[#c8a84b] text-[10px] tracking-[0.18em] uppercase font-[family-name:var(--font-raleway)] mb-5">
            Chenil de la Conque
          </span>
          <h1
            className="font-[family-name:var(--font-playfair)] font-800 text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Nos Tarifs
          </h1>
          <div className="w-16 h-px bg-[#c8a84b] mx-auto mb-5" />
          <p className="font-[family-name:var(--font-cormorant)] text-lg text-[rgba(245,240,232,0.8)] italic leading-relaxed">
            Tous nos tarifs sont <strong className="text-white not-italic">TTC et à la nuitée</strong>.
            La nourriture, les matelas, couvertures, jouets et gamelles sont inclus dans le prix.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BILLING NOTE
      ═══════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-2">
        <div className="bg-white border-l-4 border-[#c8a84b] rounded-r-xl px-6 py-5 shadow-sm">
          <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed">
            <strong className="text-[#3d2f1a]">Facturation à la nuitée</strong> — Pour un animal
            entrant le matin et sortant l&apos;après-midi, comptez le nombre de nuits{" "}
            <em>plus</em> la dernière journée.
          </p>
        </div>
        <p className="font-[family-name:var(--font-raleway)] text-[#9e9888] text-xs italic text-center mt-3">
          Tarifs en vigueur à partir du{" "}
          <strong className="text-[#5a4a3a]">1er février 2026</strong>
        </p>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRICING CARDS
      ═══════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pension Chat */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(74,124,63,0.15)] p-7 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <span className="text-4xl mb-4">🐱</span>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-700 text-[#3d2f1a] mb-3">
            Pension Chat
          </h3>
          <p className="font-[family-name:var(--font-playfair)] text-5xl font-800 text-[#4a7c3f] leading-none mb-1">
            14 €
          </p>
          <p className="font-[family-name:var(--font-raleway)] text-[#9e9888] text-xs uppercase tracking-wider mb-5">
            par nuit
          </p>
          <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed">
            Chatterie avec parc extérieur. Vaccinations obligatoires requises.
          </p>
        </div>

        {/* Pension Chien */}
        <div className="bg-white rounded-2xl shadow-sm border-2 border-[rgba(74,124,63,0.35)] p-7 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-block bg-[#4a7c3f] text-white text-[10px] font-[family-name:var(--font-raleway)] font-600 tracking-wider uppercase px-3 py-1 rounded-full">
              Le plus demandé
            </span>
          </div>
          <span className="text-4xl mb-4">🐶</span>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-700 text-[#3d2f1a] mb-3">
            Pension Chien
          </h3>
          <p className="font-[family-name:var(--font-playfair)] text-5xl font-800 text-[#4a7c3f] leading-none mb-1">
            20 €
          </p>
          <p className="font-[family-name:var(--font-raleway)] text-[#9e9888] text-xs uppercase tracking-wider mb-5">
            par nuit
          </p>
          <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed">
            Installations dédiées et soins attentionnés. CHPPIL + vaccin toux du chenil requis.
          </p>
        </div>

        {/* 2 Chiens ou plus */}
        <div className="bg-white rounded-2xl shadow-sm border border-[rgba(74,124,63,0.15)] p-7 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <span className="text-4xl mb-4">🐕‍🦺</span>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl font-700 text-[#3d2f1a] mb-3">
            2 Chiens ou plus
          </h3>
          <p className="font-[family-name:var(--font-playfair)] text-5xl font-800 text-[#4a7c3f] leading-none mb-1">
            18 €
          </p>
          <p className="font-[family-name:var(--font-raleway)] text-[#9e9888] text-xs uppercase tracking-wider mb-5">
            par chien / par nuit
          </p>
          <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed">
            Tarif dégressif pour plusieurs chiens d&apos;une même famille.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          OPTION BOX CHAUFFÉ
      ═══════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-10">
        <div className="bg-[#2d5226] text-[#f5f0e8] rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🔥</span>
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-lg font-700 text-white">
                Option Box Chauffé
              </p>
              <p className="font-[family-name:var(--font-raleway)] text-[rgba(245,240,232,0.7)] text-sm">
                Confort supplémentaire pour les chiens
              </p>
            </div>
          </div>
          <p className="font-[family-name:var(--font-playfair)] text-3xl font-800 text-[#c8a84b] whitespace-nowrap">
            + 5 € <span className="text-base font-400 text-[rgba(245,240,232,0.6)]">/ jour</span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRACTICAL INFO
      ═══════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl p-7 border border-[rgba(74,124,63,0.12)] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#4a7c3f] rounded-l-2xl" />

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-700 text-[#3d2f1a] mb-5 flex items-center gap-2 pl-2">
            <span>📋</span> Informations pratiques
          </h2>

          <ul className="space-y-4 pl-2">
            {[
              {
                icon: "✔",
                color: "text-[#4a7c3f]",
                text: (
                  <>
                    Nourriture <strong className="text-[#3d2f1a]">PROPLAN PROFESSIONELLE</strong>{" "}
                    incluse — ou apportez la vôtre en cas d&apos;allergie ou régime spécifique.
                  </>
                ),
              },
              {
                icon: "✔",
                color: "text-[#4a7c3f]",
                text: "Matelas, couvertures, jouets et gamelles fournis pour chaque pensionnaire.",
              },
              {
                icon: "⚠",
                color: "text-[#c8a84b]",
                text: (
                  <>
                    <strong className="text-[#3d2f1a]">
                      Carnet de vaccination à jour obligatoire
                    </strong>{" "}
                    (CHPPiL + toux du chenil) à présenter à l&apos;arrivée.
                  </>
                ),
              },
              {
                icon: "✔",
                color: "text-[#4a7c3f]",
                text: (
                  <>
                    Ouvert toute l&apos;année,{" "}
                    <strong className="text-[#3d2f1a]">du lundi au samedi</strong> — 9h à 12h et
                    14h à 18h30. Fermé les dimanches et jours fériés.
                  </>
                ),
              },
              {
                icon: "✔",
                color: "text-[#4a7c3f]",
                text: (
                  <>
                    Accueil{" "}
                    <strong className="text-[#3d2f1a]">uniquement sur rendez-vous</strong> —
                    pensez à réserver 2 à 4 mois à l&apos;avance pour les vacances scolaires.
                  </>
                ),
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed"
              >
                <span className={`${item.color} mt-0.5 shrink-0 font-700`}>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          {/* Vet info */}
          <div className="mt-6 p-4 bg-[rgba(74,124,63,0.05)] rounded-xl border border-[rgba(74,124,63,0.1)] flex items-start gap-3">
            <span className="text-2xl shrink-0">🩺</span>
            <p className="font-[family-name:var(--font-raleway)] text-sm text-[#5a4a3a] leading-relaxed">
              Vétérinaire référent :{" "}
              <strong className="text-[#4a7c3f]">Clinique vétérinaire de l&apos;isle</strong> à
              Fronsac — partenaire de confiance pour la santé de vos compagnons.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#f0ece2] py-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(74,124,63,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-[#4a7c3f] italic text-lg mb-3">
            Prêt à réserver ?
          </p>
          <h2
            className="font-[family-name:var(--font-playfair)] font-700 text-[#3d2f1a] leading-tight mb-4"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
          >
            Contactez-nous pour réserver votre séjour
          </h2>
          <p className="font-[family-name:var(--font-raleway)] text-[#9e9888] text-sm mb-8">
            Pensez à anticiper pour les vacances scolaires — nos places partent vite !
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0784082666"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4a7c3f] hover:bg-[#2d5226] text-white text-sm font-[family-name:var(--font-raleway)] font-600 tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(74,124,63,0.3)] hover:-translate-y-0.5"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              07 84 08 26 66
            </a>
            <a
              href="mailto:chenildelaconque@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-[rgba(74,124,63,0.4)] hover:border-[#4a7c3f] text-[#4a7c3f] text-sm font-[family-name:var(--font-raleway)] font-600 tracking-wide rounded-full transition-all duration-300"
            >
              Nous écrire
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
