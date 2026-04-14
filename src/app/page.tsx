import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navigation activePage="/" />

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
        {/* Hero image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Chenil de la Conque — Domaine champêtre"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Multi-layer overlays for drama */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2d15]/90 via-[#1a2d15]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2d15]/40 to-transparent" />
        </div>

        {/* Floating badge */}
        <div
          className="absolute top-32 right-8 md:right-16 badge-pill bg-[rgba(200,168,75,0.15)] border border-[rgba(200,168,75,0.4)] text-[#c8a84b] animate-fade-in"
          style={{ animationDelay: "1.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b] animate-pulse" />
          13 hectares · Bord de rivière
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-3xl">
            {/* Location chip */}
            <div
              className="inline-flex items-center gap-2 mb-6 animate-fade-in-down"
              style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
            >
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" className="text-[#c8a84b]">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              <span className="text-xs tracking-[0.2em] uppercase text-[rgba(255,255,255,0.7)] font-[family-name:var(--font-raleway)]">
                Izon, Gironde · 20 km de Bordeaux
              </span>
            </div>

            {/* Main title */}
            <h1
              className="font-[family-name:var(--font-playfair)] font-800 text-white leading-[1.05] mb-6 animate-fade-in-up"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                animationDelay: "0.4s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              Chenil de
              <br />
              <em className="text-[#c8a84b] not-italic">la Conque</em>
            </h1>

            {/* Tagline */}
            <p
              className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[rgba(245,240,232,0.85)] leading-relaxed mb-8 max-w-xl animate-fade-in-up italic"
              style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
            >
              Pension animale familiale pour chiens et chats, dans un domaine champêtre de 13 hectares en bordure de rivière.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}
            >
              <a
                href="tel:0784082666"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4a7c3f] hover:bg-[#2d5226] text-white text-sm font-[family-name:var(--font-raleway)] font-600 tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(74,124,63,0.3)] hover:-translate-y-0.5"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Réserver par téléphone
              </a>
              <a
                href="mailto:chenildelaconque@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-white/50 hover:border-[#c8a84b] text-white hover:text-[#c8a84b] text-sm font-[family-name:var(--font-raleway)] font-600 tracking-wide rounded-full transition-all duration-300"
              >
                Nous écrire
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
          style={{ animationDelay: "1.4s", opacity: 0, animationFillMode: "forwards" }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-[family-name:var(--font-raleway)]">
            Découvrir
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent float-gentle" />
        </div>

        {/* Bottom wave shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full river-wave">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 42 1080 40C1200 38 1320 28 1380 23L1440 18V60H0Z" fill="#faf8f3" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INTRO / IDENTITY BAND
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#faf8f3] py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { icon: "🌿", label: "13 hectares champêtres" },
              { icon: "🌊", label: "Bord de rivière" },
              { icon: "📅", label: "Ouvert toute l'année" },
              { icon: "🐕", label: "Chiens & Chats" },
              { icon: "🏡", label: "Accueil familial" },
            ].map((item, i) => (
              <div
                key={item.label}
                data-animate="fade-up"
                data-delay={String(i * 100 + 100)}
                className="flex items-center gap-3"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-[family-name:var(--font-raleway)] text-sm text-[#3d2f1a] tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#faf8f3] py-20 md:py-32 relative overflow-hidden">
        {/* Background number */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 section-number select-none -translate-x-8">01</div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div data-animate="fade-left" className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl img-reveal">
                <Image
                  src="/assets/about.jpg"
                  alt="Le domaine de la Conque"
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2d15]/30 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 max-w-[200px] border border-[rgba(74,124,63,0.15)]">
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-800 text-[#4a7c3f] leading-none mb-1">13 ha</p>
                <p className="font-[family-name:var(--font-raleway)] text-xs text-[#9e9888] leading-tight">
                  Domaine champêtre en bordure de rivière
                </p>
              </div>

              {/* Decoration square */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[rgba(74,124,63,0.2)] rounded-lg -z-10" />
            </div>

            {/* Text side */}
            <div className="flex flex-col gap-7">
              <div data-animate="fade-right">
                <span className="badge-pill bg-[rgba(74,124,63,0.1)] border border-[rgba(74,124,63,0.25)] text-[#4a7c3f] text-[10px] mb-4 inline-flex">
                  À propos
                </span>
                <h2
                  className="font-[family-name:var(--font-playfair)] font-700 text-[#3d2f1a] leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                >
                  Un refuge naturel pour vos compagnons
                </h2>
              </div>

              <div data-animate="fade-right" data-delay="200">
                <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#4a7c3f] italic leading-relaxed mb-4">
                  Une pension familiale ouverte toute l&apos;année, niché dans la campagne girondine.
                </p>
                <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] leading-relaxed text-base">
                  Le Chenil de la Conque vous accueille sur un domaine exceptionnel de 13 hectares en bordure de rivière, à seulement 20 km de Bordeaux et 12 km de Libourne. Vos chiens et chats y séjournent dans un cadre verdoyant et calme, loin de l&apos;agitation urbaine.
                </p>
              </div>

              <div data-animate="fade-right" data-delay="300">
                <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] leading-relaxed text-base">
                  L&apos;accueil se fait uniquement sur rendez-vous, garantissant une attention personnalisée pour chaque pensionnaire. Pour les périodes de vacances scolaires, nous recommandons de réserver <strong className="text-[#4a7c3f]">2 à 4 mois à l&apos;avance</strong> — ces périodes affichent complet rapidement.
                </p>
              </div>

              {/* Stats row */}
              <div data-animate="fade-right" data-delay="400" className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: "20 km", label: "de Bordeaux" },
                  { value: "12 km", label: "de Libourne" },
                  { value: "∞", label: "Amour animal" },
                ].map((stat) => (
                  <div key={stat.label} className="botanical-border p-4 rounded-lg text-center bg-[rgba(74,124,63,0.04)]">
                    <p className="font-[family-name:var(--font-playfair)] font-700 text-2xl text-[#4a7c3f] leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="font-[family-name:var(--font-raleway)] text-[10px] tracking-wider uppercase text-[#9e9888]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div data-animate="fade-right" data-delay="500">
                <a
                  href="tel:0784082666"
                  className="inline-flex items-center gap-2 text-[#4a7c3f] font-[family-name:var(--font-raleway)] font-600 text-sm group hover:gap-3 transition-all"
                >
                  Prendre rendez-vous
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#f0ece2] py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-60" />
        <div className="absolute top-0 left-0 right-0 section-number text-center leading-none -translate-y-8 opacity-30">02</div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <div data-animate="fade-up">
              <span className="badge-pill bg-[rgba(74,124,63,0.1)] border border-[rgba(74,124,63,0.25)] text-[#4a7c3f] text-[10px] mb-4 inline-flex">
                Nos services
              </span>
              <h2
                className="font-[family-name:var(--font-playfair)] font-700 text-[#3d2f1a] leading-tight max-w-2xl mx-auto"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Pension &amp; Élevage au cœur de la nature
              </h2>
            </div>
            <div data-animate="fade-up" data-delay="200" className="leaf-divider max-w-xs mx-auto mt-6">
              <span className="text-[#4a7c3f] text-lg">❧</span>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pension Chiens */}
            <div
              data-animate="fade-up"
              data-delay="100"
              className="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-[rgba(74,124,63,0.1)] group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/assets/gallery1.jpg"
                  alt="Pension chiens"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d5226]/70 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-white text-2xl font-700">
                    Pension Chiens
                  </h3>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-3xl">🐕</span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed mb-4">
                  Hébergement de chiens avec installations dédiées et soins attentionnés au sein de notre domaine de 13 hectares. Un espace de vie adapté, en pleine nature.
                </p>
                <div className="flex items-start gap-2 p-3 bg-[rgba(74,124,63,0.06)] rounded-lg border border-[rgba(74,124,63,0.1)]">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-[#4a7c3f] mt-0.5 shrink-0">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <p className="font-[family-name:var(--font-raleway)] text-[#4a7c3f] text-xs">
                    Vaccinations obligatoires : CHPPIL + toux du chenil
                  </p>
                </div>
              </div>
            </div>

            {/* Pension Chats */}
            <div
              data-animate="fade-up"
              data-delay="200"
              className="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-[rgba(74,124,63,0.1)] group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/assets/gallery2.jpg"
                  alt="Pension chats"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d5226]/70 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-white text-2xl font-700">
                    Pension Chats
                  </h3>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="text-3xl">🐈</span>
                </div>
              </div>
              <div className="p-6">
                <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed mb-4">
                  Chatterie avec parc extérieur dédié, pour que vos félins profitent de l&apos;air frais et de la nature environnante dans un cadre sécurisé.
                </p>
                <div className="flex items-start gap-2 p-3 bg-[rgba(74,124,63,0.06)] rounded-lg border border-[rgba(74,124,63,0.1)]">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="text-[#4a7c3f] mt-0.5 shrink-0">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <p className="font-[family-name:var(--font-raleway)] text-[#4a7c3f] text-xs">
                    Vaccinations obligatoires requises · Parc extérieur inclus
                  </p>
                </div>
              </div>
            </div>

            {/* Élevage Setter */}
            <div
              data-animate="fade-up"
              data-delay="300"
              className="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-[rgba(74,124,63,0.1)] group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/assets/gallery3.jpg"
                  alt="Élevage Setter Anglais"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8b6914]/70 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-white text-2xl font-700">
                    Élevage Setter Anglais
                  </h3>
                </div>
                <div className="absolute top-4 right-4 badge-pill bg-[rgba(200,168,75,0.2)] border border-[rgba(200,168,75,0.5)] text-[#c8a84b]">
                  Élevage
                </div>
              </div>
              <div className="p-6">
                <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed">
                  Notre élevage de Setter Anglais s&apos;épanouit au sein du domaine de la Conque. Une race élégante, élevée avec passion dans un environnement naturel exceptionnel.
                </p>
              </div>
            </div>

            {/* Élevage Golden */}
            <div
              data-animate="fade-up"
              data-delay="400"
              className="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-[rgba(74,124,63,0.1)] group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/assets/gallery4.jpg"
                  alt="Élevage Golden Retriever"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8b6914]/70 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <h3 className="font-[family-name:var(--font-playfair)] text-white text-2xl font-700">
                    Élevage Golden Retriever
                  </h3>
                </div>
                <div className="absolute top-4 right-4 badge-pill bg-[rgba(200,168,75,0.2)] border border-[rgba(200,168,75,0.5)] text-[#c8a84b]">
                  Élevage
                </div>
              </div>
              <div className="p-6">
                <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed">
                  Nos Golden Retrievers sont élevés en liberté sur le domaine. Une race reconnue pour sa douceur et sa sociabilité, dans un cadre idéal de 13 hectares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          UNIQUE SELLING POINTS
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#4a7c3f] py-20 md:py-28 relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 bg-lines opacity-20" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{
            background: "radial-gradient(ellipse at 80% 50%, rgba(200,168,75,0.5) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div data-animate="fade-right">
                <span className="badge-pill bg-[rgba(200,168,75,0.2)] border border-[rgba(200,168,75,0.4)] text-[#c8a84b] mb-4 inline-flex">
                  Pourquoi nous choisir
                </span>
                <h2
                  className="font-[family-name:var(--font-playfair)] font-700 text-white leading-tight mb-8"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                >
                  Un cadre unique pour le bien-être de vos animaux
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: "🌿",
                    title: "13 hectares de nature",
                    text: "Un domaine champêtre exceptionnel en bordure de rivière, à 20 km seulement de Bordeaux.",
                    delay: "100",
                  },
                  {
                    icon: "🤝",
                    title: "Accueil personnalisé",
                    text: "Pension ouverte toute l'année, avec accueil uniquement sur rendez-vous pour garantir votre attention.",
                    delay: "200",
                  },
                  {
                    icon: "🐾",
                    title: "Pension & Élevage réunis",
                    text: "Activité combinée pension et élevage de Setter Anglais et Golden Retriever sur le même domaine.",
                    delay: "300",
                  },
                  {
                    icon: "🩺",
                    title: "Vétérinaire référent",
                    text: "Partenariat avec la Clinique vétérinaire de l'isle à Fronsac pour la santé de vos compagnons.",
                    delay: "400",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    data-animate="fade-right"
                    data-delay={item.delay}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.12)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(200,168,75,0.2)] transition-colors">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-[family-name:var(--font-raleway)] font-700 text-white text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="font-[family-name:var(--font-raleway)] text-[rgba(245,240,232,0.7)] text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual right side */}
            <div data-animate="fade-left" className="relative">
              <div className="relative aspect-square rounded-full overflow-hidden max-w-md mx-auto shadow-2xl">
                <Image
                  src="/assets/gallery5.jpg"
                  alt="Le domaine naturel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(74,124,63,0.2)]" />
              </div>
              {/* Ring decoration */}
              <div className="absolute inset-0 m-auto w-full max-w-md aspect-square rounded-full border-2 border-[rgba(200,168,75,0.3)] scale-110" />
              <div className="absolute inset-0 m-auto w-full max-w-md aspect-square rounded-full border border-[rgba(200,168,75,0.15)] scale-125" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          GALLERY SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#faf8f3] py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div data-animate="fade-right">
              <span className="badge-pill bg-[rgba(74,124,63,0.1)] border border-[rgba(74,124,63,0.25)] text-[#4a7c3f] text-[10px] mb-3 inline-flex">
                Notre domaine
              </span>
              <h2
                className="font-[family-name:var(--font-playfair)] font-700 text-[#3d2f1a] leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                La vie au Chenil
                <br />
                <em className="text-[#4a7c3f]">de la Conque</em>
              </h2>
            </div>
            <div data-animate="fade-left">
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#9e9888] italic max-w-xs text-right">
                Un aperçu du quotidien de vos compagnons dans notre domaine champêtre
              </p>
            </div>
          </div>

          <div data-animate="fade-up" data-delay="200">
            <GalleryCarousel />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          VACCINATIONS INFO
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#f0ece2] py-16 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div
            data-animate="scale-up"
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[rgba(74,124,63,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#4a7c3f] rounded-l-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[rgba(74,124,63,0.05)] translate-x-8 translate-y-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <span className="badge-pill bg-[rgba(200,168,75,0.1)] border border-[rgba(200,168,75,0.3)] text-[#c8a84b] text-[10px] mb-4 inline-flex">
                  Important
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-700 text-[#3d2f1a] mb-4">
                  Vaccinations obligatoires
                </h3>
                <p className="font-[family-name:var(--font-raleway)] text-[#5a4a3a] text-sm leading-relaxed mb-6">
                  Pour garantir la sécurité et la santé de tous nos pensionnaires, des vaccinations à jour sont obligatoires pour accéder à notre pension.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[rgba(74,124,63,0.05)] rounded-xl border border-[rgba(74,124,63,0.1)]">
                    <p className="font-[family-name:var(--font-raleway)] font-700 text-[#4a7c3f] text-sm mb-2 flex items-center gap-2">
                      <span>🐕</span> Chiens
                    </p>
                    <p className="font-[family-name:var(--font-raleway)] text-xs text-[#5a4a3a] leading-relaxed">
                      CHPPIL (Carré du chien) + vaccin contre la toux du chenil (Bordetella)
                    </p>
                  </div>
                  <div className="p-4 bg-[rgba(74,124,63,0.05)] rounded-xl border border-[rgba(74,124,63,0.1)]">
                    <p className="font-[family-name:var(--font-raleway)] font-700 text-[#4a7c3f] text-sm mb-2 flex items-center gap-2">
                      <span>🐈</span> Chats
                    </p>
                    <p className="font-[family-name:var(--font-raleway)] text-xs text-[#5a4a3a] leading-relaxed">
                      Vaccinations à jour obligatoires. Carnet de santé à présenter lors de l&apos;admission.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="p-5 bg-[rgba(74,124,63,0.08)] rounded-xl text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl font-700 text-[#4a7c3f] mb-1">🩺</p>
                  <p className="font-[family-name:var(--font-raleway)] text-xs text-[#5a4a3a] leading-relaxed">
                    Vétérinaire référent :<br />
                    <strong className="text-[#4a7c3f]">Clinique vétérinaire de l&apos;isle</strong><br />
                    Fronsac
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT / CTA SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#faf8f3] py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(74,124,63,0.06) 0%, transparent 70%)" }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <div data-animate="fade-right">
                <span className="badge-pill bg-[rgba(74,124,63,0.1)] border border-[rgba(74,124,63,0.25)] text-[#4a7c3f] text-[10px] mb-4 inline-flex">
                  Contact
                </span>
                <h2
                  className="font-[family-name:var(--font-playfair)] font-700 text-[#3d2f1a] leading-tight mb-4"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                >
                  Réservez votre séjour
                </h2>
                <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#4a7c3f] italic leading-relaxed mb-8">
                  Accueil sur rendez-vous uniquement. Pensez à réserver 2 à 4 mois à l&apos;avance pour les périodes de vacances.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: (
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    ),
                    label: "Téléphone",
                    value: "07 84 08 26 66",
                    href: "tel:0784082666",
                    delay: "100",
                  },
                  {
                    icon: (
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: "chenildelaconque@gmail.com",
                    href: "mailto:chenildelaconque@gmail.com",
                    delay: "200",
                  },
                  {
                    icon: (
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    ),
                    label: "Localisation",
                    value: "Izon (Gironde) · 20 km de Bordeaux · 12 km de Libourne",
                    href: "https://maps.google.com/?q=Izon+Gironde+France",
                    delay: "300",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    data-animate="fade-right"
                    data-delay={item.delay}
                    className="contact-item flex items-start gap-4 group p-4 rounded-xl hover:bg-[rgba(74,124,63,0.05)] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-full bg-[rgba(74,124,63,0.1)] flex items-center justify-center shrink-0 text-[#4a7c3f] group-hover:bg-[rgba(74,124,63,0.18)] transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-[family-name:var(--font-raleway)] text-xs tracking-wider uppercase text-[#9e9888] mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-[family-name:var(--font-raleway)] font-600 text-[#3d2f1a] text-sm group-hover:text-[#4a7c3f] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map / visual placeholder */}
            <div data-animate="fade-left" className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto shadow-xl img-reveal">
                <Image
                  src="/assets/gallery6.jpg"
                  alt="Chenil de la Conque — Paysage"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2d15]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#4a7c3f] flex items-center justify-center">
                        <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-playfair)] font-700 text-[#3d2f1a] text-sm">
                          Chenil de la Conque
                        </p>
                        <p className="font-[family-name:var(--font-raleway)] text-xs text-[#9e9888]">
                          Izon, Gironde (33)
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 text-xs font-[family-name:var(--font-raleway)] text-[#5a4a3a]">
                      <span className="px-2 py-0.5 bg-[rgba(74,124,63,0.1)] rounded-full text-[#4a7c3f]">20 km Bordeaux</span>
                      <span className="px-2 py-0.5 bg-[rgba(74,124,63,0.1)] rounded-full text-[#4a7c3f]">12 km Libourne</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#3d2f1a] py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-lines opacity-10" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(74,124,63,0.2) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div data-animate="scale-up">
            <p className="font-[family-name:var(--font-cormorant)] text-[#c8a84b] italic text-lg mb-4">
              Pension ouverte toute l&apos;année
            </p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-800 text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Confiez vos compagnons à des mains expertes et passionnées
            </h2>
            <p className="font-[family-name:var(--font-raleway)] text-[rgba(245,240,232,0.7)] text-base mb-10 max-w-xl mx-auto">
              Réservez dès maintenant — pensez à anticiper pour les vacances scolaires, nos places partent vite !
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:0784082666"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4a7c3f] hover:bg-[#2d5226] text-white font-[family-name:var(--font-raleway)] font-600 text-sm tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(74,124,63,0.4)] hover:-translate-y-0.5"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                07 84 08 26 66
              </a>
              <a
                href="mailto:chenildelaconque@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[rgba(245,240,232,0.3)] hover:border-[#c8a84b] text-[rgba(245,240,232,0.8)] hover:text-[#c8a84b] font-[family-name:var(--font-raleway)] font-600 text-sm tracking-wide rounded-full transition-all duration-300"
              >
                Nous écrire
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}