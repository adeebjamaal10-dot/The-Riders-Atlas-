/**
 * The Rider's Passport
 * The International Atlas of Equestrian Destinations, Culture & History
 * Official Research Partner: Sorenta Saddlery (https://sorenta-saddlery.com/)
 */

import React, { useState, useEffect } from 'react';
import {
  ALL_PROFILES,
  COUNTRIES_DATA,
  DESTINATIONS_DATA,
  LANDMARKS_DATA,
  EVENTS_DATA,
  getProfileBySlug
} from './data';
import { EquestrianProfile, ContentDepartment, Continent } from './types/equestrian';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorldAtlasMap } from './components/WorldAtlasMap';
import { TimelineScrubber } from './components/TimelineScrubber';
import { ProfileCard } from './components/ProfileCard';
import { ArticleModal } from './components/ArticleModal';
import { SorentaSpotlight } from './components/SorentaSpotlight';
import { AuditManifestModal } from './components/AuditManifestModal';
import { SearchDiscovery } from './components/SearchDiscovery';
import { Footer } from './components/Footer';
import { ASSETS } from './data/assets';
import { SORENTA_DATA } from './data/sorenta';
import {
  Compass,
  BookOpen,
  MapPin,
  Landmark,
  History,
  Shield,
  ArrowRight,
  Globe,
  Award,
  Sparkles
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProfile, setSelectedProfile] = useState<EquestrianProfile | null>(null);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'en' | 'de' | 'fr'>('en');

  // Handle URL hash changes for permanent URLs
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) return;

      if (hash === 'sorenta') {
        setCurrentView('sorenta');
        return;
      }
      if (hash === 'atlas') {
        setCurrentView('atlas');
        return;
      }
      if (hash === 'audit') {
        setIsAuditOpen(true);
        return;
      }

      const match = getProfileBySlug(hash);
      if (match) {
        setSelectedProfile(match);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenArticle = (profile: EquestrianProfile) => {
    setSelectedProfile(profile);
  };

  const handleCloseArticle = () => {
    setSelectedProfile(null);
    history.pushState('', document.title, window.location.pathname + window.location.search);
  };

  const handleSelectRelatedSlug = (slug: string) => {
    const match = getProfileBySlug(slug);
    if (match) {
      setSelectedProfile(match);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => {
          setCurrentView('search');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAudit={() => setIsAuditOpen(true)}
        currentLang={currentLang}
        onChangeLang={setCurrentLang}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div>
            {/* 1. Cinematic Hero */}
            <HeroSection
              onExploreWorld={() => {
                const el = document.getElementById('destinations-spotlight');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onExploreHistory={() => {
                const el = document.getElementById('timeline-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenSorenta={() => {
                setCurrentView('sorenta');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Explore by Continent Strip */}
            <section className="bg-[#0A0A0A] text-white py-10 border-b border-[#222222]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-[11px] font-sans-nav uppercase tracking-widest text-[#C5A870] font-semibold block">
                      Geographical Division
                    </span>
                    <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
                      Explore the World by Continent
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {(['Europe', 'North America', 'South America', 'Asia', 'Africa', 'Oceania'] as Continent[]).map((c) => {
                      const count = ALL_PROFILES.filter((p) => p.continent === c).length;
                      return (
                        <button
                          key={c}
                          onClick={() => {
                            setCurrentView('search');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="px-4 py-2 bg-[#141414] hover:bg-[#C5A870] hover:text-black border border-[#2A2A2A] rounded transition-all text-xs font-sans-nav flex items-center gap-2 group cursor-pointer text-white"
                        >
                          <span className="font-medium">{c}</span>
                          <span className="text-[10px] opacity-75 font-mono">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Extraordinary Equestrian Destinations */}
            <section id="destinations-spotlight" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#262626]">
                <div>
                  <div className="text-xs font-sans-nav uppercase tracking-widest text-[#C5A870] font-semibold flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#C5A870]" />
                    <span>Department II · 100 Complete Profiles</span>
                  </div>
                  <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white mt-1">
                    Extraordinary Equestrian Destinations
                  </h2>
                  <p className="font-body text-sm text-stone-300 mt-1 max-w-2xl">
                    Remarkable geographic regions shaped by equine life, from the saltwater surf of the French Camargue to the high volcanic plains of Iceland.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCurrentView('destinations');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold font-sans-nav text-[#C5A870] hover:text-white transition-colors cursor-pointer"
                >
                  <span>View All 100 Destinations</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A870]" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DESTINATIONS_DATA.slice(0, 6).map((dest) => (
                  <ProfileCard
                    key={dest.id}
                    profile={dest}
                    onClick={handleOpenArticle}
                  />
                ))}
              </div>
            </section>

            {/* 4. Historic Equestrian Landmarks */}
            <section className="py-20 bg-[#0A0A0A] border-y border-[#222222]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#262626]">
                  <div>
                    <div className="text-xs font-sans-nav uppercase tracking-widest text-[#C5A870] font-semibold flex items-center gap-1.5">
                      <Landmark className="w-4 h-4 text-[#C5A870]" />
                      <span>Department III · 100 Complete Profiles</span>
                    </div>
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white mt-1">
                      Historic Equestrian Landmarks & Institutions
                    </h2>
                    <p className="font-body text-sm text-stone-300 mt-1 max-w-2xl">
                      Centuries of imperial academies, royal stud farms, and historic architectural arenas that preserved classical equitation through wars and revolutions.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentView('landmarks');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold font-sans-nav text-[#C5A870] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View All 100 Landmarks</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A870]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {LANDMARKS_DATA.slice(0, 6).map((lmk) => (
                    <ProfileCard
                      key={lmk.id}
                      profile={lmk}
                      onClick={handleOpenArticle}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 5. The World Equestrian Atlas (Interactive Map) */}
            <section id="atlas-map-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
              <div className="mb-8">
                <WorldAtlasMap onSelectProfile={handleOpenArticle} />
              </div>
            </section>

            {/* 6. Moments That Shaped Equestrian History (The History Archive) */}
            <section className="py-20 bg-[#080808] text-white border-y border-[#222222]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#262626]">
                  <div>
                    <div className="text-xs font-sans-nav uppercase tracking-widest text-[#C5A870] font-semibold flex items-center gap-1.5">
                      <History className="w-4 h-4 text-[#C5A870]" />
                      <span>Department IV · The Equestrian History Archive (50 Articles)</span>
                    </div>
                    <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white mt-1">
                      Moments That Shaped Equestrian History
                    </h2>
                    <p className="font-body text-sm text-stone-300 mt-1 max-w-2xl">
                      Evergreen documentary chronicles of landmark Olympic editions, historic championship origins, and milestones in horsemanship doctrine.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setCurrentView('events');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold font-sans-nav text-[#C5A870] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View All 50 History Articles</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A870]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {EVENTS_DATA.slice(0, 4).map((evt) => (
                    <ProfileCard
                      key={evt.id}
                      profile={evt}
                      onClick={handleOpenArticle}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 7. Interactive Timeline Feature */}
            <section id="timeline-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
              <TimelineScrubber onSelectMilestoneSlug={handleSelectRelatedSlug} />
            </section>

            {/* 8. Research Partner Sorenta Saddlery Spotlight Banner */}
            <section className="py-16 bg-[#0A0A0A] text-white border-t border-[#222222]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#121212] rounded-2xl border border-[#C5A870]/40 p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                    <img
                      src={ASSETS.sorentaLogo}
                      alt="Sorenta Saddlery"
                      className="w-36 h-auto object-contain bg-black p-3 rounded-lg border border-[#C5A870]/40"
                    />
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-widest text-[#C5A870] font-sans-nav font-semibold">
                        Official Research Partner & Educational Sponsor
                      </div>
                      <h3 className="font-headline text-3xl font-bold text-white">
                        SORENTA SADDLERY
                      </h3>
                      <p className="font-editorial text-sm text-stone-300 max-w-xl italic">
                        "{SORENTA_DATA.headline}"
                      </p>
                      <p className="font-body text-xs text-stone-400 max-w-xl leading-relaxed">
                        Supporting international equestrian heritage, anatomical saddle tree innovation, and equine welfare across the world.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <button
                      onClick={() => {
                        setCurrentView('sorenta');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-[#C5A870] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider font-sans-nav rounded transition-all shadow cursor-pointer"
                    >
                      Read Sponsor Dossier
                    </button>
                    <a
                      href={SORENTA_DATA.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-[#C5A870]/60 font-semibold text-xs uppercase tracking-wider font-sans-nav rounded transition-all text-center"
                    >
                      Official Website
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Dedicated Country Guides View */}
        {currentView === 'countries' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-sans-nav uppercase tracking-widest text-[#C5A870] font-semibold">
                Department I · Complete National Monograph Library
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mt-2">
                International Equestrian Country Guides (50 Complete)
              </h1>
              <p className="font-editorial text-base text-stone-300 mt-2">
                Comprehensive historical studies exploring the development of horsemanship, indigenous breeds, state studs, and cultural craftsmanship across 50 nations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COUNTRIES_DATA.map((cnt) => (
                <ProfileCard
                  key={cnt.id}
                  profile={cnt}
                  onClick={handleOpenArticle}
                />
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Destinations View */}
        {currentView === 'destinations' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-sans-nav uppercase tracking-widest text-[#C5A870] font-semibold">
                Department II · Landscape & Heritage Regions
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mt-2">
                Historic & Scenic Equestrian Destinations (100 Complete)
              </h1>
              <p className="font-editorial text-base text-stone-300 mt-2">
                Permanent geographic guides exploring the relationship between landscape, indigenous horse breeds, and enduring riding traditions worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DESTINATIONS_DATA.map((dest) => (
                <ProfileCard
                  key={dest.id}
                  profile={dest}
                  onClick={handleOpenArticle}
                />
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Landmarks View */}
        {currentView === 'landmarks' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-sans-nav uppercase tracking-widest text-[#C5A870] font-semibold">
                Department III · Architectural & Institutional Heritage
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mt-2">
                Equestrian Heritage Landmarks & Institutions (100 Complete)
              </h1>
              <p className="font-editorial text-base text-stone-300 mt-2">
                Documented profiles of classical riding schools, imperial state studs, historic racecourses, and living equestrian museums across continents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LANDMARKS_DATA.map((lmk) => (
                <ProfileCard
                  key={lmk.id}
                  profile={lmk}
                  onClick={handleOpenArticle}
                />
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Events View (The Equestrian History Archive) */}
        {currentView === 'events' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-sans-nav uppercase tracking-widest text-[#C5A870] font-semibold">
                Department IV · Permanent Historical Archive
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white mt-2">
                The Equestrian History Archive (50 Complete)
              </h1>
              <p className="font-editorial text-base text-stone-300 mt-2">
                Purely historical archive covering Olympic milestones, classical championship origins, and documented achievements without transient live listings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {EVENTS_DATA.map((evt) => (
                <ProfileCard
                  key={evt.id}
                  profile={evt}
                  onClick={handleOpenArticle}
                />
              ))}
            </div>
          </div>
        )}

        {/* Dedicated Atlas Map View */}
        {currentView === 'atlas' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black">
            <WorldAtlasMap onSelectProfile={handleOpenArticle} />
          </div>
        )}

        {/* Dedicated Sorenta Saddlery Page */}
        {currentView === 'sorenta' && <SorentaSpotlight />}

        {/* Dedicated Search & Library View */}
        {currentView === 'search' && (
          <SearchDiscovery onSelectProfile={handleOpenArticle} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAudit={() => setIsAuditOpen(true)}
      />

      {/* Full Long-Form Article Modal */}
      <ArticleModal
        profile={selectedProfile}
        onClose={handleCloseArticle}
        onSelectRelated={handleSelectRelatedSlug}
        currentLang={currentLang}
      />

      {/* Verified Content Audit Modal */}
      <AuditManifestModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        onSelectProfile={handleOpenArticle}
      />
    </div>
  );
}
