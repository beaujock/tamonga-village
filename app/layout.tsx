import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bienvenu(e) à Tamonga - Village dans la savane Togolaise",
  description:
    "Découvrez notre culture, histoire, services et la beauté de notre village au couer de la savane Togolaise",
};

const navLinks = [
  { name: "Accueil", path: "/" },
  { name: "Mot du Chef", path: "/chief-welcome" },
  { name: "Directions", path: "/directions" },
  { name: "Histoire", path: "/history" },
  { name: "Santé", path: "/health" },
  { name: "Education", path: "/education" },
  { name: "Gouvernance", path: "/governance" },
  { name: "Images", path: "/gallery" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-sand-light text-savanna-dark flex flex-col min-h-screen antialiased">
        {/* ================= HEADER AREA ================= */}
        <header className="w-full shadow-md z-50">
          
          {/* 1. TOP BAR: Link to National Togo Portal */}
          <div className="bg-terracotta-700 text-sunset-50 text-xs py-2 px-4 border-b border-sunset-500/20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <span className="font-medium tracking-wide">
                République du Togo
              </span>
              <a
                href="https://www.republicoftogo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sun-glow hover:underline font-semibold flex items-center gap-1 transition-colors"
              >
                <span>🇹🇬</span> Site officiel &rarr;
              </a>
            </div>
          </div>

          {/* 2. ADMINISTRATIVE HIERARCHY BAR (Vertical Layout) */}
          <div className="bg-savanna-dark text-sunset-100 py-3 px-4 border-b border-sunset-500/20">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="text-[11px] uppercase tracking-widest text-sun-glow font-bold pt-1">
                Division Territoriale
              </div>
              
              {/* Vertical Links Stack */}
              <nav className="flex flex-col space-y-1 text-xs">
                <a 
                  href="/governance#region" 
                  className="hover:text-sun-glow text-sunset-100/90 transition-colors flex items-center gap-2"
                >
                  <span className="text-sunset-500 font-bold">└ Region:</span> 
                  <span>Savanes</span>
                </a>
                <a 
                  href="/governance#prefecture" 
                  className="hover:text-sun-glow text-sunset-100/90 transition-colors flex items-center gap-2 pl-3"
                >
                  <span className="text-sunset-500 font-bold">└ Prefecture:</span> 
                  <span>Oti</span>
                </a>
                <a 
                  href="/governance#commune" 
                  className="hover:text-sun-glow text-sunset-100/90 transition-colors flex items-center gap-2 pl-6"
                >
                  <span className="text-sunset-500 font-bold">└ Commune:</span> 
                  <span>Oti 2</span>
                </a>
                <a 
                  href="/governance#canton" 
                  className="hover:text-sun-glow text-sunset-100/90 transition-colors flex items-center gap-2 pl-9"
                >
                  <span className="text-sunset-500 font-bold">└ Canton:</span> 
                  <span>Nagbéni</span>
                </a>
              </nav>
            </div>
          </div>

          {/* 3. MAIN NAVIGATION BAR */}
          <nav className="bg-savanna-card text-white border-b border-sunset-500/30 sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                
                {/* Brand / Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                  <span className="font-serif font-bold text-lg md:text-xl text-sun-glow group-hover:text-white transition-colors">
                    TAMONGA
                  </span>
                </Link>

                {/* Nav Links (Desktop) */}
                <div className="hidden lg:flex items-center space-x-1 xl:space-x-3 text-xs xl:text-sm font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="px-3 py-2 rounded-lg text-sunset-100 hover:text-sun-glow hover:bg-white/5 transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Nav Links (Mobile / Scrollable Horizontal Bar for smaller screens) */}
                <div className="flex lg:hidden overflow-x-auto py-2 space-x-2 text-xs no-scrollbar">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="whitespace-nowrap px-2.5 py-1.5 rounded-md bg-white/5 text-sunset-100 hover:text-sun-glow"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </nav>
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex-grow">
          {children}
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="bg-savanna-dark text-sunset-100 border-t border-sunset-500/20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8">
              
              <div className="text-center md:text-left">
                <h2 className="text-xl font-serif font-bold text-sun-glow mb-1">
                  Tamonga
                </h2>
                <p className="text-xs text-sunset-100/70">
                  Togo Savanes • Afrique de l&apos;Ouest
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-xs font-medium">
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="hover:text-sun-glow transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Copyright & Attributions */}
            <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-sunset-100/60 gap-3">
              <p>
                © {new Date().getFullYear()} Village de Tamonga, tous droits réservés.
              </p>
              <p className="text-[11px]">
                Construit avec NextJs and Tailwind
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}