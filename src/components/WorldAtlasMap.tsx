import React, { useState, useMemo } from 'react';
import { ALL_PROFILES } from '../data';
import { EquestrianProfile, ContentDepartment, Continent } from '../types/equestrian';
import { ASSETS } from '../data/assets';
import { Globe, Compass, ArrowUpRight, Search, RotateCcw, Moon, Sun } from 'lucide-react';

interface WorldAtlasMapProps {
  onSelectProfile: (profile: EquestrianProfile) => void;
}

// Calibrated viewBox bounds for continents on the 612x334 map
const CONTINENT_VIEWS: Record<Continent | 'All', { x: number; y: number; w: number; h: number; label: string }> = {
  All: { x: 0, y: 0, w: 612, h: 334, label: 'Global World View' },
  Europe: { x: 235, y: 55, w: 150, h: 110, label: 'Europe (High Concentration)' },
  'North America': { x: 45, y: 50, w: 200, h: 145, label: 'North America' },
  'South America': { x: 130, y: 175, w: 130, h: 155, label: 'South America' },
  Asia: { x: 340, y: 50, w: 230, h: 160, label: 'Asia & Middle East' },
  Africa: { x: 250, y: 120, w: 150, h: 170, label: 'Africa' },
  Oceania: { x: 440, y: 200, w: 155, h: 125, label: 'Oceania' }
};

export const WorldAtlasMap: React.FC<WorldAtlasMapProps> = ({ onSelectProfile }) => {
  const [selectedContinent, setSelectedContinent] = useState<Continent | 'All'>('All');
  const [selectedDepartment, setSelectedDepartment] = useState<ContentDepartment | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mapTheme, setMapTheme] = useState<'nocturne' | 'parchment'>('nocturne');
  const [hoveredProfile, setHoveredProfile] = useState<EquestrianProfile | null>(null);
  const [activeProfile, setActiveProfile] = useState<EquestrianProfile | null>(ALL_PROFILES[0]);

  // Calibrated projection formula mapping (lat, lng) to pixel coordinates on user outline map (612 x 334)
  const projectCoordinates = (lat: number, lng: number) => {
    const x = lng * 1.6144 + 280.58;
    const y = lat * -1.9524 + 211.48;
    return {
      x: Math.max(8, Math.min(604, x)),
      y: Math.max(8, Math.min(326, y))
    };
  };

  const filteredProfiles = useMemo(() => {
    return ALL_PROFILES.filter(p => {
      if (selectedContinent !== 'All' && p.continent !== selectedContinent) return false;
      if (selectedDepartment !== 'all' && p.department !== selectedDepartment) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesCountry = p.country.toLowerCase().includes(q);
        const matchesRegion = p.region?.toLowerCase().includes(q) || false;
        if (!matchesTitle && !matchesCountry && !matchesRegion) return false;
      }
      return true;
    });
  }, [selectedContinent, selectedDepartment, searchQuery]);

  const getPinColor = (department: ContentDepartment) => {
    switch (department) {
      case 'country':
        return '#C5A870'; // Antique Gold
      case 'destination':
        return '#38BDF8'; // Sky Blue
      case 'landmark':
        return '#4ADE80'; // Emerald Green
      case 'event':
        return '#F43F5E'; // Historic Rose
      default:
        return '#C5A870';
    }
  };

  const activeView = CONTINENT_VIEWS[selectedContinent];

  return (
    <div className="bg-[#0D0D0D] text-white rounded-xl border border-[#262626] overflow-hidden shadow-2xl">
      {/* Map Control Bar */}
      <div className="px-6 py-4 bg-[#050505] border-b border-[#222222] flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#C5A870]" />
            <h3 className="font-headline text-2xl font-semibold text-white">
              Interactive World Equestrian Atlas
            </h3>
            <span className="text-[11px] font-sans-nav uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-stone-200 border border-[#333333]">
              Calibrated Map Grid
            </span>
          </div>
          <p className="text-xs text-stone-400 font-body mt-0.5">
            Geographic exploration of 300 documented equine destinations, classical academies, and historic traditions placed on the official cartographic outline.
          </p>
        </div>

        {/* Search & Style Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Quick Search on Map */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter pins by name or country..."
              className="pl-8 pr-3 py-1.5 bg-[#141414] border border-[#2A2A2A] rounded text-xs font-sans-nav text-white placeholder:text-stone-500 focus:outline-none focus:border-[#C5A870] w-48 sm:w-60"
            />
          </div>

          {/* Map Cartography Style Toggle */}
          <div className="flex items-center bg-[#141414] p-1 rounded border border-[#2A2A2A] text-xs font-sans-nav">
            <button
              onClick={() => setMapTheme('nocturne')}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                mapTheme === 'nocturne'
                  ? 'bg-[#C5A870] text-black font-semibold'
                  : 'text-stone-400 hover:text-white'
              }`}
              title="Midnight Cartography (Jet Black & Gold)"
            >
              <Moon className="w-3 h-3" />
              <span>Nocturne</span>
            </button>
            <button
              onClick={() => setMapTheme('parchment')}
              className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                mapTheme === 'parchment'
                  ? 'bg-white text-black font-semibold'
                  : 'text-stone-400 hover:text-white'
              }`}
              title="Parchment Cartography (Ivory Paper)"
            >
              <Sun className="w-3 h-3" />
              <span>Parchment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Ribbon: Continents & Content Departments */}
      <div className="px-6 py-2.5 bg-[#0A0A0A] border-b border-[#222222] flex flex-wrap items-center justify-between gap-3 text-xs font-sans-nav">
        {/* Continent Zoom Tabs */}
        <div className="flex flex-wrap items-center gap-1">
          <span className="text-stone-500 mr-1 text-[11px] uppercase tracking-wider">Region:</span>
          {(['All', 'Europe', 'North America', 'South America', 'Asia', 'Africa', 'Oceania'] as const).map(c => (
            <button
              key={c}
              onClick={() => setSelectedContinent(c)}
              className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                selectedContinent === c
                  ? 'bg-[#C5A870] text-black font-semibold shadow'
                  : 'text-stone-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
          {selectedContinent !== 'All' && (
            <button
              onClick={() => setSelectedContinent('All')}
              className="p-1 text-stone-400 hover:text-white transition-colors ml-1 cursor-pointer"
              title="Reset to World View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Department Filter Badges */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSelectedDepartment('all')}
            className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
              selectedDepartment === 'all'
                ? 'bg-white text-black font-semibold'
                : 'text-stone-300 hover:text-white bg-[#141414] border border-[#2A2A2A]'
            }`}
          >
            All Pins ({filteredProfiles.length})
          </button>
          <button
            onClick={() => setSelectedDepartment('country')}
            className={`px-2 py-1 rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              selectedDepartment === 'country'
                ? 'bg-[#C5A870] text-black font-semibold'
                : 'text-stone-300 hover:text-white bg-[#141414] border border-[#2A2A2A]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#C5A870]" />
            <span>50 Countries</span>
          </button>
          <button
            onClick={() => setSelectedDepartment('destination')}
            className={`px-2 py-1 rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              selectedDepartment === 'destination'
                ? 'bg-[#38BDF8] text-black font-semibold'
                : 'text-stone-300 hover:text-white bg-[#141414] border border-[#2A2A2A]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span>100 Destinations</span>
          </button>
          <button
            onClick={() => setSelectedDepartment('landmark')}
            className={`px-2 py-1 rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              selectedDepartment === 'landmark'
                ? 'bg-[#4ADE80] text-black font-semibold'
                : 'text-stone-300 hover:text-white bg-[#141414] border border-[#2A2A2A]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
            <span>100 Landmarks</span>
          </button>
          <button
            onClick={() => setSelectedDepartment('event')}
            className={`px-2 py-1 rounded transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              selectedDepartment === 'event'
                ? 'bg-[#F43F5E] text-black font-semibold'
                : 'text-stone-300 hover:text-white bg-[#141414] border border-[#2A2A2A]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#F43F5E]" />
            <span>50 Events</span>
          </button>
        </div>
      </div>

      {/* Main Map View & Active Drawer Split */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {/* Interactive SVG Canvas with user map (3 Cols) */}
        <div className={`lg:col-span-3 relative min-h-[500px] overflow-hidden flex items-center justify-center p-3 select-none transition-colors duration-500 ${
          mapTheme === 'nocturne' ? 'bg-[#000000]' : 'bg-[#F4F1EA]'
        }`}>
          {/* Graticule Info */}
          <div className="absolute top-2 left-3 text-[10px] font-sans-nav uppercase tracking-wider pointer-events-none opacity-50 z-10 flex items-center gap-2 text-stone-400">
            <span>Projection: Calibrated Equirectangular</span>
            <span>·</span>
            <span>Scale: 1:35,000,000</span>
            <span>·</span>
            <span>{activeView.label}</span>
          </div>

          <svg
            viewBox={`${activeView.x} ${activeView.y} ${activeView.w} ${activeView.h}`}
            className="w-full h-auto max-h-[620px] transition-all duration-700 ease-out"
            style={{ filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.5))' }}
          >
            <defs>
              <pattern id="oceanGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1A1A1A" strokeWidth="0.3" />
              </pattern>
            </defs>

            {/* Ocean Backdrop */}
            {mapTheme === 'nocturne' ? (
              <>
                <rect x="0" y="0" width="612" height="334" fill="#050505" />
                <rect x="0" y="0" width="612" height="334" fill="url(#oceanGrid)" />
              </>
            ) : (
              <rect x="0" y="0" width="612" height="334" fill="#F4EFE6" />
            )}

            {/* The Official User-Provided World Outline Map Image */}
            <image
              href={ASSETS.worldMapOutline}
              x="0"
              y="0"
              width="612"
              height="334"
              preserveAspectRatio="none"
              style={{
                filter: mapTheme === 'nocturne'
                  ? 'invert(1) contrast(1.25) brightness(0.95)'
                  : 'sepia(0.25) contrast(1.1) brightness(0.98)',
                mixBlendMode: mapTheme === 'nocturne' ? 'screen' : 'multiply',
                opacity: mapTheme === 'nocturne' ? 0.95 : 0.88
              }}
            />

            {/* Reference Lines */}
            <line
              x1="0"
              y1="211.5"
              x2="612"
              y2="211.5"
              stroke="#555555"
              strokeWidth="0.4"
              strokeDasharray="2 3"
              opacity={0.5}
            />
            <line
              x1="280.6"
              y1="0"
              x2="280.6"
              y2="334"
              stroke="#555555"
              strokeWidth="0.4"
              strokeDasharray="2 3"
              opacity={0.5}
            />

            {/* Profile Pins */}
            {filteredProfiles.map(profile => {
              const { x, y } = projectCoordinates(profile.coordinates.lat, profile.coordinates.lng);
              const isSelected = activeProfile?.id === profile.id;
              const isHovered = hoveredProfile?.id === profile.id;
              const color = getPinColor(profile.department);

              const isZoomed = selectedContinent !== 'All';
              const baseRadius = isZoomed ? 2.5 : 3.2;
              const hoverRadius = isZoomed ? 4.5 : 5.8;
              const strokeWidth = isZoomed ? 0.8 : 1.2;

              return (
                <g
                  key={profile.id}
                  transform={`translate(${x}, ${y})`}
                  className="cursor-pointer transition-transform duration-150"
                  onClick={() => setActiveProfile(profile)}
                  onMouseEnter={() => setHoveredProfile(profile)}
                  onMouseLeave={() => setHoveredProfile(null)}
                >
                  {isSelected && (
                    <circle
                      r={hoverRadius * 2.2}
                      fill="none"
                      stroke={color}
                      strokeWidth={strokeWidth}
                      opacity="0.8"
                      className="animate-ping"
                    />
                  )}

                  <circle
                    r={isSelected || isHovered ? hoverRadius + 2 : baseRadius + 1}
                    fill={mapTheme === 'nocturne' ? '#000' : '#FFF'}
                    opacity="0.6"
                  />

                  <circle
                    r={isSelected || isHovered ? hoverRadius : baseRadius}
                    fill={color}
                    stroke={mapTheme === 'nocturne' ? '#000000' : '#FFFFFF'}
                    strokeWidth={strokeWidth}
                  />

                  <circle
                    r={isSelected || isHovered ? (isZoomed ? 1.6 : 2.2) : (isZoomed ? 0.9 : 1.2)}
                    fill={mapTheme === 'nocturne' ? '#000000' : '#FFFFFF'}
                  />
                </g>
              );
            })}
          </svg>

          {/* Floating Hover Card */}
          {hoveredProfile && (
            <div className="absolute top-6 left-6 pointer-events-none bg-black/95 backdrop-blur-md border border-[#333333] p-3.5 rounded-lg shadow-2xl max-w-xs transition-opacity z-20">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#C5A870] font-sans-nav font-medium mb-1">
                <span>{hoveredProfile.department} · {hoveredProfile.country}</span>
                <span>{hoveredProfile.continent}</span>
              </div>
              <div className="font-editorial text-sm font-semibold text-white line-clamp-1">
                {hoveredProfile.title}
              </div>
              <div className="text-xs text-stone-300 font-body line-clamp-2 mt-1">
                {hoveredProfile.summary}
              </div>
              <div className="mt-2 text-[10px] text-stone-400 font-sans-nav flex items-center gap-2">
                <span>{hoveredProfile.coordinates.lat.toFixed(2)}°N, {hoveredProfile.coordinates.lng.toFixed(2)}°E</span>
                <span>·</span>
                <span className="text-[#C5A870]">Click to inspect</span>
              </div>
            </div>
          )}

          {/* Compass & Scale Watermark */}
          <div className="absolute bottom-4 right-4 pointer-events-none opacity-50 flex items-center gap-2 text-[11px] font-sans-nav tracking-widest text-[#C5A870]">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>N · THE RIDER'S PASSPORT ATLAS</span>
          </div>

          {/* Map stats badge */}
          <div className="absolute bottom-4 left-4 pointer-events-none bg-black/85 backdrop-blur-sm px-3 py-1.5 rounded border border-[#262626] text-[11px] font-sans-nav text-stone-300">
            Showing <span className="text-white font-semibold">{filteredProfiles.length}</span> of 300 Documented Points
          </div>
        </div>

        {/* Selected Profile Detail Sidebar (1 Col) */}
        <div className="lg:col-span-1 p-6 bg-[#080808] border-t lg:border-t-0 lg:border-l border-[#222222] flex flex-col justify-between">
          {activeProfile ? (
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs font-sans-nav text-stone-400">
                  <span className="uppercase tracking-widest text-[#C5A870] font-semibold">
                    {activeProfile.department.toUpperCase()}
                  </span>
                  <span>{activeProfile.continent}</span>
                </div>
                <h4 className="font-headline text-2xl font-bold text-white mt-1 leading-snug">
                  {activeProfile.title}
                </h4>
                <div className="text-xs text-stone-400 font-sans-nav mt-1">
                  Location: <span className="text-white font-medium">{activeProfile.country}</span>
                  {activeProfile.region && ` (${activeProfile.region})`}
                </div>
              </div>

              {/* Thumbnail */}
              <div className="relative aspect-video rounded overflow-hidden border border-[#262626]">
                <img
                  src={activeProfile.heroImage}
                  alt={activeProfile.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/90 to-transparent text-[11px] text-stone-300 font-body italic truncate">
                  {activeProfile.imageCaption}
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-stone-300 font-body leading-relaxed line-clamp-4">
                {activeProfile.summary}
              </p>

              {/* Key Highlights defined */}
              <div className="pt-2 border-t border-[#262626] text-xs font-sans-nav space-y-1">
                <div className="flex justify-between text-stone-400">
                  <span>Historical Period:</span>
                  <span className="text-stone-200">{activeProfile.historicalPeriod}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Exact Coordinates:</span>
                  <span className="text-stone-200">
                    {activeProfile.coordinates.lat.toFixed(2)}°, {activeProfile.coordinates.lng.toFixed(2)}°
                  </span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Documented Length:</span>
                  <span className="text-stone-200">{activeProfile.wordCount} words</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Department Catalog:</span>
                  <span className="text-[#C5A870] capitalize">{activeProfile.department}</span>
                </div>
              </div>

              {/* Open Full Profile CTA */}
              <button
                onClick={() => onSelectProfile(activeProfile)}
                className="w-full mt-4 py-2.5 px-4 bg-[#C5A870] hover:bg-[#D4AF37] text-black font-semibold text-xs tracking-wider uppercase font-sans-nav rounded transition-colors flex items-center justify-center gap-1.5 shadow cursor-pointer"
              >
                <span>Read Complete Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-center p-6 text-stone-400 text-xs font-sans-nav">
              Select any marker on the map to inspect its educational dossier.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
