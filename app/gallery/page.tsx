"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Placeholder data - replace the src paths with your actual image filenames
const galleryImages = [
  { id: 2, src: "/gallery/image-2.JPG", alt: "Local community market", caption: "" },
  { id: 3, src: "/gallery/image-3.JPG", alt: "Traditional village festival", caption: "" },
  { id: 4, src: "/gallery/image-4.JPG", alt: "Children at the village school", caption: "" },
  { id: 5, src: "/gallery/image-5.JPG", alt: "New solar water pump", caption: "" },
  { id: 6, src: "/gallery/image-6.JPG", alt: "Sunset over the savanna", caption: "" },
  { id: 7, src: "/gallery/image-7.JPG", alt: "Local community market", caption: "" },
  { id: 8, src: "/gallery/image-8.JPG", alt: "Traditional village festival", caption: "" },
  { id: 9, src: "/gallery/image-9.JPG", alt: "Children at the village school", caption: "" },
  { id: 10, src: "/gallery/image-10.JPG", alt: "New solar water pump", caption: "" },
  { id: 11, src: "/gallery/image-11.JPG", alt: "New solar water pump", caption: "" },
  { id: 12, src: "/gallery/image-12.JPG", alt: "New solar water pump", caption: "" },
  { id: 13, src: "/gallery/image-13.JPG", alt: "New solar water pump", caption: "" },
  { id: 14, src: "/gallery/image-14.JPG", alt: "New solar water pump", caption: "" },
  { id: 15, src: "/gallery/image-15.jpeg", alt: "New solar water pump", caption: "" },
];

export default function GalleryPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll function for desktop buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth, scrollLeft } = scrollContainerRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  // Update active dot when user swipes on mobile
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / width);
      setActiveIndex(newIndex);
    }
  };

  return (
    <main className="min-h-screen py-12 md:py-20 bg-sand-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-terracotta-700 mb-4">
            Gallerie d&apos;images
          </h1>
          <p className="text-gray-700">
            Parcourez des moments et images de notre village
          </p>
        </div>

        {/* ================= SWIPEABLE CAROUSEL ================= */}
        <div className="relative group">
          
          {/* Left Arrow (Desktop only) */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-savanna-dark/50 hover:bg-sunset-500 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Previous image"
          >
            &larr;
          </button>

          {/* Swipe Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl shadow-lg border border-sunset-500/20 no-scrollbar relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className="w-full flex-none snap-center relative aspect-[4/3] md:aspect-[16/9] bg-savanna-card"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority={index === 0} // Only preload the first image
                />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-savanna-dark/90 via-savanna-dark/50 to-transparent p-6 md:p-8 pt-20">
                  <p className="text-white font-medium text-lg md:text-xl drop-shadow-md">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow (Desktop only) */}
          <button 
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-savanna-dark/50 hover:bg-sunset-500 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next image"
          >
            &rarr;
          </button>
        </div>

        {/* ================= SWIPE INDICATORS (Dots) ================= */}
        <div className="flex justify-center gap-2 mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const width = scrollContainerRef.current.clientWidth;
                  scrollContainerRef.current.scrollTo({
                    left: width * index,
                    behavior: "smooth"
                  });
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "bg-sunset-500 w-8" 
                  : "bg-sunset-500/30 hover:bg-sunset-500/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </main>
  );
}