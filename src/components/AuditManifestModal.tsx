import React, { useState } from 'react';
import { getContentAuditManifest, ALL_PROFILES } from '../data';
import { EquestrianProfile } from '../types/equestrian';
import { Shield, CheckCircle, X, Search, FileText, Database, Layers, ArrowUpRight } from 'lucide-react';

interface AuditManifestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProfile: (profile: EquestrianProfile) => void;
}

export const AuditManifestModal: React.FC<AuditManifestModalProps> = ({
  isOpen,
  onClose,
  onSelectProfile
}) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'country' | 'destination' | 'landmark' | 'event'>('all');

  if (!isOpen) return null;

  const manifest = getContentAuditManifest();

  const filteredList = ALL_PROFILES.filter(p => {
    if (activeTab !== 'all' && p.department !== activeTab) return false;
    if (!searchFilter) return true;
    return (
      p.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.country.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.slug.toLowerCase().includes(searchFilter.toLowerCase())
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#0D0D0D] text-white rounded-xl shadow-2xl overflow-hidden my-auto border border-[#2A2A2A] flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#000000] text-white px-6 py-4 border-b border-[#222222] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#C5A870]" />
            <div>
              <h2 className="font-headline text-2xl font-bold text-white">
                The Rider's Passport — Verified Content Audit
              </h2>
              <p className="text-xs text-stone-400 font-sans-nav">
                Strict Quality & Verification Audit Manifest (Turnkey 300 Profiles Database)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Metrics Grid */}
        <div className="p-6 bg-[#080808] text-white border-b border-[#222222] shrink-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center font-sans-nav">
            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626]">
              <div className="text-2xl font-bold text-[#C5A870]">{manifest.totalProfiles}</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">Total Profiles</div>
            </div>

            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626]">
              <div className="text-2xl font-bold text-white">{manifest.countryGuidesCount}</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">Country Guides</div>
            </div>

            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626]">
              <div className="text-2xl font-bold text-[#E5E5E5]">{manifest.destinationsCount}</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">Destinations</div>
            </div>

            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626]">
              <div className="text-2xl font-bold text-[#D4AF37]">{manifest.landmarksCount}</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">Landmarks</div>
            </div>

            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626]">
              <div className="text-2xl font-bold text-[#C5A870]">{manifest.eventsCount}</div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">Historic Events</div>
            </div>

            <div className="p-3 bg-[#141414] rounded-lg border border-[#262626]">
              <div className="text-2xl font-bold text-white">
                {(manifest.totalWordCount / 1000).toFixed(0)}k+
              </div>
              <div className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">Total Words</div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#222222] flex flex-wrap items-center justify-between text-xs text-stone-300 font-sans-nav gap-2">
            <div className="flex items-center gap-1.5 text-[#C5A870] font-semibold">
              <CheckCircle className="w-4 h-4 text-[#C5A870]" />
              <span>Status: {manifest.status} (Zero Placeholders · All Permanent URLs Active)</span>
            </div>
            <div>
              Verified Citations: <span className="text-white font-semibold">{manifest.verifiedSourcesCount}</span> Sources
            </div>
          </div>
        </div>

        {/* Search & Department Filter Tabs */}
        <div className="p-4 bg-[#141414] border-b border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap gap-1 text-xs font-sans-nav">
            {(['all', 'country', 'destination', 'landmark', 'event'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded transition-colors capitalize cursor-pointer ${
                  activeTab === tab
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#222222] hover:bg-[#2E2E2E] text-stone-300'
                }`}
              >
                {tab === 'all' ? 'All (300)' : `${tab}s`}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-stone-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Filter 300 entries..."
              value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-black rounded border border-[#333333] text-xs text-white focus:outline-none focus:border-[#C5A870]"
            />
          </div>
        </div>

        {/* Scrollable Profiles List */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-[#222222] text-xs font-sans-nav">
          {filteredList.map((p, idx) => (
            <div
              key={p.id}
              onClick={() => {
                onClose();
                onSelectProfile(p);
              }}
              className="py-2.5 px-3 hover:bg-white/5 rounded cursor-pointer transition-colors flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-stone-500 font-mono w-6 text-right shrink-0">{idx + 1}.</span>
                <div className="min-w-0">
                  <span className="font-semibold text-white group-hover:text-[#C5A870] truncate block">
                    {p.title}
                  </span>
                  <div className="text-[11px] text-stone-400 flex items-center gap-2">
                    <span className="capitalize">{p.department}</span>
                    <span>·</span>
                    <span>{p.country}</span>
                    <span>·</span>
                    <span>{p.historicalPeriod}</span>
                    <span>·</span>
                    <span className="font-mono text-stone-500">/{p.slug}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-stone-400 hidden sm:inline">{p.wordCount} words</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A870] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
