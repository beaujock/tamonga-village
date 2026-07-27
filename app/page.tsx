import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tamonga-background2.png" // Place your image file in the /public folder
          alt="Tamonga - coucher du soleil"
          fill
          priority // Loads this image immediately since it's above the fold (Hero background)
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ================= DARK OVERLAY ================= */}
      {/* Semi-transparent dark layer for text readability */}
      <div className="absolute inset-0 z-10 bg-savanna-dark/60 backdrop-blur-[2px]" />

      {/* ================= HERO CONTENT ================= */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24 md:py-32 text-center text-white">
        
        {/* Decorative accent bar */}
        <div className="mx-auto w-24 h-1 bg-sun-glow rounded-full mb-8" />

        {/* Main Welcome Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
          Bienvenu à <span className="text-sun-glow">Tamonga</span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-sunset-100 leading-relaxed mb-16 font-light">
          Découvrez notre culture, histoire, services et la beauté de notre village au coeur de la savane Togolaise
        </p>

        {/* ================= CALL TO ACTION BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Primary CTA: Chief's Welcome */}
          <Link
            href="/chief-welcome"
            className="group flex items-center gap-3 bg-sunset-500 hover:bg-sunset-600 text-savanna-dark font-bold px-10 py-5 rounded-xl text-lg transition-all duration-300 shadow-2xl hover:shadow-sunset-500/20 transform hover:-translate-y-1"
          >
            <span>📜</span>
            Un Mot de Notre Chef
          </Link>

          {/* Secondary CTA: Directions */}
          <Link
            href="/directions"
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-10 py-5 rounded-xl text-lg border border-white/20 backdrop-blur-sm transition-all duration-300"
          >
            Itinéraires
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          
        </div>

        {/* Scroll Indicator */}
        {/*
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-70">
          <span className="text-xs uppercase tracking-widest text-sunset-200">Scroll to explore</span>
          <svg className="w-6 h-6 mx-auto mt-2 text-sunset-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        */}

      </section>
    </main>
  );
}