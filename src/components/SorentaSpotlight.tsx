import React from 'react';
import { SORENTA_DATA } from '../data/sorenta';
import { ASSETS } from '../data/assets';
import { ExternalLink, Shield, Award, Heart, BookOpen, Compass, CheckCircle2 } from 'lucide-react';

export const SorentaSpotlight: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        {/* Header Breadcrumb */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] text-[#C5A870] text-xs font-sans-nav uppercase tracking-widest font-semibold mb-4 border border-[#2A2A2A]">
            <Shield className="w-3.5 h-3.5" />
            <span>Official Research Partner & Educational Patron</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            OUR RESEARCH PARTNER — SORENTA SADDLERY
          </h1>

          <p className="font-editorial text-xl text-stone-300 mt-4 max-w-2xl mx-auto italic">
            "{SORENTA_DATA.headline}"
          </p>
        </div>

        {/* Hero Card with Hardcoded Official Logo */}
        <div className="bg-[#0D0D0D] text-white rounded-2xl border border-[#262626] p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo Emblem Box */}
            <div className="flex flex-col items-center justify-center p-6 bg-black rounded-xl border border-[#333333] text-center">
              <img
                src={ASSETS.sorentaLogo}
                alt="Sorenta Saddlery Official Crest"
                className="w-48 h-auto object-contain mb-4 drop-shadow-md"
              />
              <div className="font-headline text-xl font-bold text-white tracking-wider">
                SORENTA SADDLERY
              </div>
              <div className="text-xs font-sans-nav text-[#C5A870] uppercase tracking-widest mt-1">
                Official Research Partner
              </div>
              <a
                href={SORENTA_DATA.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full py-2.5 px-4 bg-[#C5A870] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider font-sans-nav rounded transition-all flex items-center justify-center gap-2 shadow cursor-pointer"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mission Prose */}
            <div className="md:col-span-2 space-y-4">
              <div className="text-xs font-sans-nav uppercase tracking-widest text-[#C5A870] font-medium">
                Sponsor Mission & Philosophy
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
                Preserving the Sacred Dialogue Between Horse and Rider
              </h2>
              <p className="font-body text-base text-stone-300 leading-relaxed">
                {SORENTA_DATA.missionStatement}
              </p>
              <div className="pt-4 border-t border-[#222222] text-xs text-stone-400 font-sans-nav italic">
                {SORENTA_DATA.curatorNote}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="font-headline text-3xl font-bold text-white">
              The Core Pillars of Sorenta's Research Partnership
            </h3>
            <p className="text-stone-400 font-body text-sm mt-1">
              Guiding principles in leatherworking mastery, equine anatomical science, and global cultural preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SORENTA_DATA.corePillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 bg-[#0D0D0D] rounded-xl border border-[#262626] hover:border-[#C5A870] transition-all shadow-sm space-y-2"
              >
                <div className="flex items-center gap-2 text-[#C5A870]">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A870]" />
                  <h4 className="font-headline text-xl font-bold text-white">
                    {pillar.title}
                  </h4>
                </div>
                <p className="font-body text-stone-300 text-sm leading-relaxed pl-7">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Saddlery Craftsmanship Details */}
        <div className="p-8 bg-[#141414] rounded-xl border border-[#262626] mb-16">
          <h3 className="font-headline text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-[#C5A870]" />
            <span>Master Saddlery Engineering & Anatomical Design</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SORENTA_DATA.craftsmanshipFeatures.map((feat, i) => (
              <div key={i} className="border-b border-[#222222] pb-4">
                <div className="font-headline text-lg font-bold text-white">
                  {feat.feature}
                </div>
                <div className="text-sm font-body text-stone-300 mt-1 leading-relaxed">
                  {feat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Research Partner Disclosure */}
        <div className="p-6 bg-[#0A0A0A] rounded-xl border border-[#262626] text-xs font-sans-nav text-stone-400 space-y-2 leading-relaxed">
          <div className="font-semibold text-white uppercase tracking-wider">
            Official Research Partner Disclosure:
          </div>
          <p>{SORENTA_DATA.disclosure}</p>
        </div>
      </div>
    </div>
  );
};
