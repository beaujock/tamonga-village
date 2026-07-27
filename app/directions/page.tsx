"use client";

import { useState } from "react";
import Image from "next/image";

export default function DirectionsPage() {
  // State to manage which static map image is currently displayed
  const [activeMap, setActiveMap] = useState<"dapaong" | "mango" | null>("dapaong");

  // Google Maps URL targeting the exact village coordinates
  const destinationCoords = "10.589122,0.381062";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationCoords}`;

  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-terracotta-700 mb-6">
            Bon Voyage vers Tamonga
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Situé dans la région des Savanes, notre village est accessible via la Nationale 1 en venant de Dapaong ou de Mango
          </p>
        </div>

        {/* ================= NAVIGATION OPTIONS ================= */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Action Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Link 1: Live Google Maps Directions */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-sunset-500 hover:bg-sunset-600 text-savanna-dark transition-colors shadow-md group flex flex-col items-start text-left w-full border border-sunset-600/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📍</span>
                <h3 className="font-bold text-lg">Utilisez Google Map</h3>
              </div>
              <p className="text-sm font-medium opacity-90">
                Obtenez des indications GPS en temps réel depuis votre position actuelle jusqu&apos;au centre du village
              </p>
            </a>

            <div className="my-4 flex items-center gap-4">
              <div className="flex-1 h-px bg-sunset-500/30"></div>
              <span className="text-xs uppercase tracking-widest text-terracotta-700 font-bold">Or View Local Routes</span>
              <div className="flex-1 h-px bg-sunset-500/30"></div>
            </div>

            {/* Link 2: Map from Dapaong */}
            <button
              onClick={() => setActiveMap("dapaong")}
              className={`p-6 rounded-2xl text-left transition-all border ${
                activeMap === "dapaong"
                  ? "bg-savanna-dark text-white shadow-lg border-savanna-dark"
                  : "bg-white text-savanna-dark hover:bg-sunset-50 border-sunset-100 shadow-sm"
              }`}
            >
              <h3 className="font-bold text-lg mb-1 flex items-center justify-between">
                Route à partir de Dapaong
                {activeMap === "dapaong" && <span className="text-sun-glow text-xl">•</span>}
              </h3>
              <p className={`text-sm ${activeMap === "dapaong" ? "text-sunset-100" : "text-gray-500"}`}>
                Visualisez l&apos;itinéraire vers le sud au départ de Dapaong
              </p>
            </button>

            {/* Link 3: Map from Mango */}
            <button
              onClick={() => setActiveMap("mango")}
              className={`p-6 rounded-2xl text-left transition-all border ${
                activeMap === "mango"
                  ? "bg-savanna-dark text-white shadow-lg border-savanna-dark"
                  : "bg-white text-savanna-dark hover:bg-sunset-50 border-sunset-100 shadow-sm"
              }`}
            >
              <h3 className="font-bold text-lg mb-1 flex items-center justify-between">
                Route à partir de Mango
                {activeMap === "mango" && <span className="text-sun-glow text-xl">•</span>}
              </h3>
              <p className={`text-sm ${activeMap === "mango" ? "text-sunset-100" : "text-gray-500"}`}>
                Visualisez l&apos;itinéraire vers le nord au départ de Mango
              </p>
            </button>

          </div>

          {/* Right Column: Dynamic Image Viewer */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-sunset-100 h-full min-h-[400px] flex flex-col">
              
              <div className="mb-4 flex justify-between items-center px-2">
                <h2 className="font-serif font-bold text-xl text-savanna-dark">
                  {activeMap === "dapaong" ? "Partir de Dapaong" : "Partir de Mango"}
                </h2>

              </div>

              {/* Image Container */}
              <div className="relative w-full  bg-sand-light rounded-2xl overflow-hidden border border-sunset-500/20">
                {activeMap === "dapaong" ? (
                  <Image
                    src="/map-dapaong.png" // Ensure this file exists in /public
                    alt="Carte montrant le trajet de Dapaong à Tamonga"
                    width={459}
                    height={678}
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src="/map-mango.png" // Ensure this file exists in /public
                    alt="Carte montrant le trajet de Mango à Tamonga"
                    width={492}
                    height={738}
                    className="object-cover"
                  />
                )}
                
                {/* Fallback overlay (Useful during dev if images aren't added yet) */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-sunset-50">
                   <p className="text-terracotta-700/50 font-medium">Please add {activeMap}.jpg to your /public folder</p>
                </div>
              </div>



            </div>
          </div>

        </div>
      </div>
    </main>
  );
}