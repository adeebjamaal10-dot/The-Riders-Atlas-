import React, { useEffect } from 'react';
import { EquestrianProfile } from '../types/equestrian';
import { X, MapPin, Calendar, BookOpen, Shield, Globe, ExternalLink, ArrowRight, Share2 } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { SORENTA_DATA } from '../data/sorenta';

interface ArticleModalProps {
  profile: EquestrianProfile | null;
  onClose: () => void;
  onSelectRelated: (slug: string) => void;
  currentLang: 'en' | 'de' | 'fr';
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  profile,
  onClose,
  onSelectRelated,
  currentLang
}) => {
  useEffect(() => {
    if (profile) {
      window.location.hash = profile.slug;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [profile]);

  if (!profile) return null;

  const translatedTitle = currentLang === 'de' && profile.translations?.de
    ? profile.translations.de.title
    : currentLang === 'fr' && profile.translations?.fr
    ? profile.translations.fr.title
    : profile.title;

  const translatedSummary = currentLang === 'de' && profile.translations?.de
    ? profile.translations.de.summary
    : currentLang === 'fr' && profile.translations?.fr
    ? profile.translations.fr.summary
    : profile.summary;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex justify-center p-2 sm:p-4 lg:p-6 animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0D0D0D] text-white rounded-xl shadow-2xl overflow-hidden my-auto border border-[#2A2A2A]">
        {/* Sticky Article Header Bar */}
        <div className="sticky top-0 z-20 bg-[#000000] text-white px-6 py-3.5 border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-sans-nav">
            <span className="text-[#C5A870] uppercase tracking-wider font-semibold">
              The Rider's Passport
            </span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300 capitalize">{profile.department} Dossier</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-400 font-mono text-[11px]">#{profile.slug}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              title="Copy Permanent Article Link"
              className="p-1.5 text-stone-400 hover:text-[#C5A870] hover:bg-white/10 rounded transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
              aria-label="Close Article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Visual Banner with Scrim & Caption */}
        <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full bg-black overflow-hidden">
          <img
            src={profile.heroImage}
            alt={profile.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = ASSETS.estateRider;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/30 to-transparent" />
          <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-xs text-stone-300">
            <p className="font-body italic drop-shadow-md truncate max-w-xl">
              {profile.imageCaption}
            </p>
            <div className="flex items-center gap-1 font-sans-nav font-medium drop-shadow-md">
              <MapPin className="w-3.5 h-3.5 text-[#C5A870]" />
              <span className="text-white">{profile.country}</span>
            </div>
          </div>
        </div>

        {/* Long-Form Reading Canvas */}
        <div className="px-6 sm:px-10 lg:px-14 py-8 max-w-3xl mx-auto">
          {/* Metadata Kicker */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#C5A870] font-sans-nav font-medium mb-3">
            <span className="uppercase tracking-widest">{profile.continent}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-white">{profile.country}</span>
            {profile.region && (
              <>
                <span aria-hidden="true" className="text-stone-600">·</span>
                <span className="text-stone-300">{profile.region}</span>
              </>
            )}
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-400 font-serif italic">{profile.historicalPeriod}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-400">{profile.wordCount} words</span>
          </div>

          {/* Article Title */}
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {translatedTitle}
          </h1>

          {/* Useful Introduction with Drop Cap */}
          <div className="font-editorial text-lg sm:text-xl text-stone-200 leading-relaxed mb-8 drop-cap">
            {translatedSummary}
          </div>

          {/* Key Facts Definition Grid */}
          <div className="my-8 p-6 bg-[#141414] rounded-xl border border-[#262626]">
            <h3 className="font-headline text-lg font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C5A870]" />
              <span>Documented Heritage Essentials</span>
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm font-sans-nav">
              {profile.keyFacts.map((fact, i) => (
                <div key={i} className="border-b border-[#222222] pb-2">
                  <dt className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                    {fact.label}
                  </dt>
                  <dd className="font-semibold text-white mt-0.5">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Deep Subsections (Substantial Original Educational Content) */}
          <div className="space-y-8 font-body text-base text-stone-300 leading-relaxed">
            {profile.subsections.map((sec, i) => (
              <div key={i} className="pt-4 border-t border-[#222222]">
                <h2 className="font-headline text-2xl font-bold text-white mb-3">
                  {sec.heading}
                </h2>
                <p className="whitespace-pre-line leading-loose text-stone-300">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* Verified Bibliography & References */}
          <div className="mt-12 pt-8 border-t border-[#262626]">
            <h3 className="font-headline text-xl font-bold text-white flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-[#C5A870]" />
              <span>Verified Archival Sources & References</span>
            </h3>
            <ul className="space-y-3 font-sans-nav text-xs text-stone-300">
              {profile.sources.map((src, i) => (
                <li key={i} className="p-3 bg-[#141414] rounded-lg border border-[#262626] flex items-start justify-between gap-4">
                  <div>
                    <span className="font-semibold text-white block text-sm">
                      {src.title}
                    </span>
                    <span className="text-stone-400 block mt-0.5">
                      {src.authorOrOrg} — {src.yearOrType}
                    </span>
                  </div>
                  {src.url && (
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C5A870] hover:text-white hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>Archive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Related Articles Navigation */}
          {profile.relatedSlugs && profile.relatedSlugs.length > 0 && (
            <div className="mt-10 pt-6 border-t border-[#222222]">
              <h4 className="font-headline text-lg font-bold text-white mb-3">
                Related Atlas Explorations
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.relatedSlugs.map((slug) => (
                  <button
                    key={slug}
                    onClick={() => onSelectRelated(slug)}
                    className="px-3.5 py-1.5 bg-[#141414] hover:bg-[#222222] text-white border border-[#2A2A2A] text-xs font-sans-nav rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="capitalize">{slug.replace(/-/g, ' ')}</span>
                    <ArrowRight className="w-3 h-3 text-[#C5A870]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Research Partner Endorsement & Welfare Patronage */}
          <div className="mt-12 p-6 bg-[#000000] text-white rounded-xl border border-[#C5A870]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <img
                src={ASSETS.sorentaLogo}
                alt="Sorenta Saddlery"
                className="h-12 w-auto object-contain bg-black rounded p-1 border border-[#333333]"
              />
              <div>
                <div className="text-xs font-sans-nav uppercase tracking-wider text-[#C5A870] font-semibold">
                  Official Research Partner
                </div>
                <div className="font-headline text-lg font-bold text-white">
                  Sorenta Saddlery
                </div>
                <p className="text-xs text-stone-400 font-body max-w-md">
                  Preserving centuries of leather craftsmanship, equine biomechanics, and global equestrian education.
                </p>
              </div>
            </div>

            <a
              href={SORENTA_DATA.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#C5A870] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider font-sans-nav rounded transition-colors whitespace-nowrap cursor-pointer"
            >
              Visit Sorenta Saddlery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
