import React from 'react';
import { ASSETS } from '../data/assets';
import { SORENTA_DATA } from '../data/sorenta';
import { Shield, ExternalLink, Globe, Compass, BookOpen, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit }) => {
  return (
    <footer className="bg-[#050505] text-white border-t border-[#222222] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Sponsor & Heritage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#222222]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-headline text-2xl font-bold tracking-wide text-white">
              THE RIDER'S PASSPORT
            </div>
            <div className="text-xs uppercase tracking-widest text-[#C5A870] font-sans-nav font-medium">
              The International Atlas of Equestrian Destinations, Culture & History
            </div>
            <p className="font-editorial text-sm text-stone-300 max-w-md leading-relaxed">
              "Explore the World Through the Eyes of a Rider." A permanent, evergreen international publication dedicated to preserving four millennia of horsemanship heritage, classical riding academies, and scenic equine landscapes.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141414] hover:bg-[#1E1E1E] border border-[#2E2E2E] hover:border-[#C5A870] rounded text-xs font-sans-nav text-[#C5A870] transition-all cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Verified 300 Profiles Audit Manifest</span>
              </button>
            </div>
          </div>

          {/* Research Partner Showcase */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C5A870] font-sans-nav font-semibold">
              Research Partner
            </div>
            <div className="p-4 bg-[#0D0D0D] rounded-xl border border-[#262626] space-y-3">
              <img
                src={ASSETS.sorentaLogo}
                alt="Sorenta Saddlery"
                className="h-10 w-auto object-contain bg-black rounded p-1 border border-[#333333]"
              />
              <div className="font-headline text-base font-semibold text-white">
                Sorenta Saddlery
              </div>
              <p className="text-[11px] font-body text-stone-400 leading-snug">
                Patron of international equine biomechanics, master leather craftsmanship, and responsible knowledge sharing.
              </p>
              <a
                href={SORENTA_DATA.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#C5A870] hover:text-white hover:underline font-sans-nav"
              >
                <span>sorenta-saddlery.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#C5A870] font-sans-nav font-semibold">
              Departments
            </div>
            <ul className="space-y-2 text-xs font-sans-nav text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="hover:text-[#C5A870] transition-colors cursor-pointer"
                >
                  Country Guides (50 Complete)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-[#C5A870] transition-colors cursor-pointer"
                >
                  Historic Destinations (100 Complete)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('landmarks')}
                  className="hover:text-[#C5A870] transition-colors cursor-pointer"
                >
                  Heritage Landmarks (100 Complete)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-[#C5A870] transition-colors cursor-pointer"
                >
                  History Archive (50 Complete)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('atlas')}
                  className="hover:text-[#C5A870] transition-colors cursor-pointer"
                >
                  Interactive World Atlas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sorenta')}
                  className="hover:text-[#C5A870] transition-colors cursor-pointer"
                >
                  Sorenta Saddlery Profile
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsor Transparency Notice */}
        <div className="py-6 border-b border-[#222222] text-[11px] font-sans-nav text-stone-400 leading-relaxed">
          <p>
            <strong className="text-stone-300">Research Partner Disclosure:</strong> {SORENTA_DATA.disclosure}
          </p>
          <p className="mt-2 text-stone-400">
            <strong className="text-stone-300">Evergreen Heritage Notice:</strong> The Rider's Passport functions as a permanent educational atlas and historical publication. Where historic institutions still operate today, visitors are reminded that current access arrangements and schedules should be confirmed through official local sources.
          </p>
        </div>

        {/* Copyright & Colophon */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-sans-nav text-stone-400 gap-4">
          <div>
            © {new Date().getFullYear()} The Rider's Passport. An International Equestrian Publication Supported by Sorenta Saddlery.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">Verified 300 Educational Profiles</span>
            <span>·</span>
            <span className="text-stone-400">English · German · French</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
