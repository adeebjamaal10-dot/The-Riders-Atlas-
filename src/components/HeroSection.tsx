import React from 'react';
import { Compass, BookOpen, Shield, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { SORENTA_DATA } from '../data/sorenta';

interface HeroSectionProps {
  onExploreWorld: () => void;
  onExploreHistory: () => void;
  onOpenSorenta: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWorld,
  onExploreHistory,
  onOpenSorenta
}) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-black overflow-hidden text-white">
      {/* Background Cinematic Visual with Black Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.royalWindsorParade}
          alt="Equestrian heritage landscape"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-[0.45] contrast-[1.15]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = ASSETS.estateRider;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
      </div>

      {/* Hero Content Frame */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Curatorial Header Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#333333] mb-8 text-xs tracking-widest uppercase font-sans-nav text-stone-200">
          <span className="text-[#C5A870] font-semibold">The International Atlas</span>
          <span className="text-stone-600">·</span>
          <span>50 Countries</span>
          <span className="text-stone-600">·</span>
          <span>300 Documented Profiles</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none mb-6 text-balance drop-shadow-xl">
          THE WORLD IS A RIDER'S STORY.
        </h1>

        {/* Supporting Headline */}
        <p className="font-editorial text-lg sm:text-2xl text-stone-200 max-w-3xl mx-auto leading-relaxed mb-10 text-balance font-light">
          Discover the destinations, traditions and remarkable history of equestrian life across the world.
        </p>

        {/* Primary Navigation Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onExploreWorld}
            className="w-full sm:w-auto px-8 py-4 bg-[#C5A870] hover:bg-[#D4AF37] text-black font-semibold text-sm tracking-wider uppercase font-sans-nav rounded transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Compass className="w-4 h-4 text-black group-hover:rotate-45 transition-transform" />
            <span>Explore the World</span>
          </button>

          <button
            onClick={onExploreHistory}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-[#444444] hover:border-white font-semibold text-sm tracking-wider uppercase font-sans-nav rounded transition-all backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#C5A870]" />
            <span>Discover Equestrian History</span>
          </button>
        </div>

        {/* Research Partner Highlight Strip */}
        <div className="pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-sans-nav text-stone-300">
          <div className="flex items-center gap-2">
            <span className="text-stone-400">Supported by Research Partner:</span>
            <button
              onClick={onOpenSorenta}
              className="flex items-center gap-2 px-3 py-1 bg-black/80 hover:bg-black border border-[#333333] hover:border-[#C5A870] rounded text-white transition-all group cursor-pointer"
            >
              <img
                src={ASSETS.sorentaLogo}
                alt="Sorenta Saddlery"
                className="h-5 w-auto object-contain"
              />
              <span className="font-semibold tracking-wide text-white group-hover:text-[#C5A870]">SORENTA SADDLERY</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A870] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          <span className="hidden sm:inline text-stone-600">|</span>
          <span className="text-stone-300 italic font-body">"Supporting the World of Equestrian Knowledge."</span>
        </div>
      </div>
    </section>
  );
};
