// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-20 text-center">
      <div className="max-w-lg mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-sunset-100">
        
        {/* Accent Banner / Icon */}


        <h1 className="text-2xl md:text-3xl font-serif font-bold text-savanna-dark mb-4">
          Page en construction
        </h1>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
          Nous sommes en plein mise à jour de notre site. Revenez plus tard
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto bg-sunset-500 hover:bg-sunset-600 text-savanna-dark font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md"
          >
            Retournez a l&apos;accueil
          </Link>

        </div>

      </div>
    </main>
  );
}