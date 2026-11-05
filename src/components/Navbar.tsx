import React from 'react';
import { Compass, BookOpen, MapPin, Landmark, History, Shield, Globe, Search } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { SORENTA_DATA } from '../data/sorenta';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenSearch: () => void;
  onOpenAudit: () => void;
  currentLang: 'en' | 'de' | 'fr';
  onChangeLang: (lang: 'en' | 'de' | 'fr') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenSearch,
  onOpenAudit,
  currentLang,
  onChangeLang
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#000000] text-white border-b border-[#222222] shadow-xl">
      {/* Sponsor Top Ribbon */}
      <div className="bg-[#080808] px-4 py-1.5 text-xs border-b border-[#1A1A1A] flex items-center justify-between text-stone-300">
        <div className="flex items-center gap-2">
          <span className="text-[#C5A870] font-medium tracking-wide">Research Partner</span>
          <span className="text-stone-600">·</span>
          <a
            href={SORENTA_DATA.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#C5A870] transition-colors flex items-center gap-1.5 font-medium"
          >
            <img
              src={ASSETS.sorentaLogo}
              alt="Sorenta Saddlery"
              className="h-3.5 w-auto object-contain inline-block bg-black rounded px-1 border border-[#333333]"
            />
            <span>Sorenta Saddlery</span>
          </a>
          <span className="text-stone-600">·</span>
          <span className="text-stone-400 hidden sm:inline">Supporting International Equestrian Heritage & Education</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center text-[11px] font-sans-nav font-medium gap-1 text-stone-400">
            <button
              onClick={() => onChangeLang('en')}
              className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${currentLang === 'en' ? 'text-[#C5A870] font-semibold' : 'hover:text-white'}`}
            >
              EN
            </button>
            <span>/</span>
            <button
              onClick={() => onChangeLang('de')}
              className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${currentLang === 'de' ? 'text-[#C5A870] font-semibold' : 'hover:text-white'}`}
            >
              DE
            </button>
            <span>/</span>
            <button
              onClick={() => onChangeLang('fr')}
              className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${currentLang === 'fr' ? 'text-[#C5A870] font-semibold' : 'hover:text-white'}`}
            >
              FR
            </button>
          </div>

          <span className="text-stone-700">|</span>

          {/* Audit Link */}
          <button
            onClick={onOpenAudit}
            className="text-[11px] text-[#C5A870] hover:text-white hover:underline flex items-center gap-1 font-sans-nav cursor-pointer"
            title="View 300 Verified Profiles Content Audit"
          >
            <Shield className="w-3 h-3 text-[#C5A870]" />
            <span className="hidden md:inline">300 Profiles Audit</span>
          </button>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark, single line */}
        <button
          onClick={() => onNavigate('home')}
          className="text-left group shrink-0 focus:outline-none cursor-pointer"
        >
          <div className="font-headline text-2xl sm:text-3xl font-semibold tracking-wide text-white group-hover:text-[#C5A870] transition-colors whitespace-nowrap">
            The Rider's Passport
          </div>
          <div className="text-[10px] tracking-widest uppercase font-sans-nav text-[#C5A870] opacity-90 hidden sm:block">
            International Atlas of Equestrian Heritage
          </div>
        </button>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-sans-nav tracking-wide text-stone-300">
          <button
            onClick={() => onNavigate('countries')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
              currentView === 'countries' ? 'text-[#C5A870] border-b-2 border-[#C5A870] pb-0.5' : ''
            }`}
          >
            Country Guides
          </button>
          <button
            onClick={() => onNavigate('destinations')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
              currentView === 'destinations' ? 'text-[#C5A870] border-b-2 border-[#C5A870] pb-0.5' : ''
            }`}
          >
            Historic Destinations
          </button>
          <button
            onClick={() => onNavigate('landmarks')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
              currentView === 'landmarks' ? 'text-[#C5A870] border-b-2 border-[#C5A870] pb-0.5' : ''
            }`}
          >
            Heritage Landmarks
          </button>
          <button
            onClick={() => onNavigate('events')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
              currentView === 'events' ? 'text-[#C5A870] border-b-2 border-[#C5A870] pb-0.5' : ''
            }`}
          >
            History Archive
          </button>
          <button
            onClick={() => onNavigate('atlas')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white cursor-pointer ${
              currentView === 'atlas' ? 'text-[#C5A870] border-b-2 border-[#C5A870] pb-0.5' : ''
            }`}
          >
            World Atlas
          </button>
          <button
            onClick={() => onNavigate('sorenta')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white flex items-center gap-1.5 cursor-pointer ${
              currentView === 'sorenta' ? 'text-[#C5A870] border-b-2 border-[#C5A870] pb-0.5' : ''
            }`}
          >
            <span>Sorenta Saddlery</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="p-2 text-stone-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Search Library"
            title="Search the 300 equestrian profiles"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('atlas')}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#C5A870] hover:bg-[#D4AF37] rounded transition-colors whitespace-nowrap shadow font-sans-nav cursor-pointer"
          >
            Explore Atlas
          </button>
        </div>
      </div>
    </header>
  );
};
