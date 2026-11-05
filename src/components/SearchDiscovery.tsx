import React, { useState, useMemo } from 'react';
import { ALL_PROFILES, searchProfiles } from '../data';
import { EquestrianProfile, ContentDepartment, Continent } from '../types/equestrian';
import { ProfileCard } from './ProfileCard';
import { Search, Filter, X, Compass, Globe, SlidersHorizontal } from 'lucide-react';

interface SearchDiscoveryProps {
  onSelectProfile: (profile: EquestrianProfile) => void;
  initialDepartment?: ContentDepartment | 'all';
}

export const SearchDiscovery: React.FC<SearchDiscoveryProps> = ({
  onSelectProfile,
  initialDepartment = 'all'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<ContentDepartment | 'all'>(initialDepartment);
  const [selectedContinent, setSelectedContinent] = useState<Continent | 'all'>('all');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');

  const continents: Continent[] = ['Europe', 'North America', 'South America', 'Asia', 'Africa', 'Oceania'];

  const periods = [
    'all',
    'Antiquity',
    'Medieval',
    'Renaissance',
    '18th Century',
    '19th Century',
    '20th Century'
  ];

  const filteredResults = useMemo(() => {
    let results = searchProfiles(
      searchQuery,
      selectedDepartment === 'all' ? undefined : selectedDepartment,
      selectedContinent === 'all' ? undefined : selectedContinent
    );

    if (selectedPeriod !== 'all') {
      results = results.filter(p =>
        p.historicalPeriod.toLowerCase().includes(selectedPeriod.toLowerCase())
      );
    }

    return results;
  }, [searchQuery, selectedDepartment, selectedContinent, selectedPeriod]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-black min-h-[80vh]">
      {/* Header & Filter Controls Box */}
      <div className="bg-[#0D0D0D] text-white rounded-xl border border-[#262626] p-6 mb-10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-sans-nav uppercase tracking-widest text-[#C5A870] font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              <span>International Editorial Library</span>
            </div>
            <h2 className="font-headline text-3xl font-bold text-white mt-1">
              Search & Curatorial Discovery
            </h2>
            <p className="font-body text-xs text-stone-300 mt-0.5">
              Faceted filtering across 300 documented equine destinations, landmarks, country guides, and historical archives.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="text-xs font-sans-nav text-stone-300 bg-black px-3.5 py-1.5 rounded border border-[#262626] shrink-0">
            Showing <span className="font-bold text-white">{filteredResults.length}</span> of 300 Articles
          </div>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 text-stone-500 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by breed (e.g., Lipizzaner, Lusitano, Thoroughbred), country, master, or milestone..."
            className="w-full pl-12 pr-10 py-3 bg-[#141414] border border-[#262626] rounded-lg text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A870] transition-colors font-sans-nav"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-stone-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#222222]">
          {/* Department Filter */}
          <div>
            <label className="block text-[11px] font-sans-nav uppercase tracking-wider text-[#C5A870] font-medium mb-1.5">
              Department
            </label>
            <select
              value={selectedDepartment}
              onChange={e => setSelectedDepartment(e.target.value as any)}
              className="w-full bg-[#141414] border border-[#262626] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A870] cursor-pointer"
            >
              <option value="all">All Departments (300 Entries)</option>
              <option value="country">Country Guides (50 Complete)</option>
              <option value="destination">Historic Destinations (100 Complete)</option>
              <option value="landmark">Heritage Landmarks (100 Complete)</option>
              <option value="event">Equestrian History Archive (50 Complete)</option>
            </select>
          </div>

          {/* Continent Filter */}
          <div>
            <label className="block text-[11px] font-sans-nav uppercase tracking-wider text-[#C5A870] font-medium mb-1.5">
              Continent
            </label>
            <select
              value={selectedContinent}
              onChange={e => setSelectedContinent(e.target.value as any)}
              className="w-full bg-[#141414] border border-[#262626] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A870] cursor-pointer"
            >
              <option value="all">All Continents</option>
              {continents.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Historical Era Filter */}
          <div>
            <label className="block text-[11px] font-sans-nav uppercase tracking-wider text-[#C5A870] font-medium mb-1.5">
              Historical Era
            </label>
            <select
              value={selectedPeriod}
              onChange={e => setSelectedPeriod(e.target.value)}
              className="w-full bg-[#141414] border border-[#262626] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A870] cursor-pointer"
            >
              <option value="all">All Historical Eras</option>
              {periods.filter(p => p !== 'all').map(p => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid of Results */}
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map(profile => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onClick={onSelectProfile}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#0D0D0D] rounded-xl border border-[#262626] p-8">
          <Globe className="w-12 h-12 text-stone-500 mx-auto mb-3" />
          <h3 className="font-headline text-2xl font-bold text-white">
            No matching profiles found
          </h3>
          <p className="font-body text-sm text-stone-400 max-w-md mx-auto mt-1">
            Try adjusting your search terms or resetting filters to explore the complete library of 300 documented profiles.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedDepartment('all');
              setSelectedContinent('all');
              setSelectedPeriod('all');
            }}
            className="mt-4 px-4 py-2 bg-[#C5A870] hover:bg-[#D4AF37] text-black text-xs font-sans-nav font-semibold rounded transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
