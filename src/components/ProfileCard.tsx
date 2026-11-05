import React from 'react';
import { EquestrianProfile } from '../types/equestrian';
import { MapPin, ArrowUpRight, BookOpen } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface ProfileCardProps {
  profile: EquestrianProfile;
  onClick: (profile: EquestrianProfile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onClick }) => {
  const getDepartmentLabel = (dept: string) => {
    switch (dept) {
      case 'country': return 'Country Guide';
      case 'destination': return 'Historic Destination';
      case 'landmark': return 'Heritage Landmark';
      case 'event': return 'History Archive';
      default: return 'Educational Profile';
    }
  };

  return (
    <article
      onClick={() => onClick(profile)}
      className="group cursor-pointer bg-[#0D0D0D] border border-[#262626] hover:border-[#C5A870] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
    >
      <div>
        {/* Visual Media with subtle contrast scrim */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <img
            src={profile.heroImage}
            alt={profile.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = ASSETS.estateRider;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-85" />

          {/* Quiet unboxed location watermark */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white drop-shadow-md">
            <span className="flex items-center gap-1 font-sans-nav font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C5A870]" />
              <span className="text-white">{profile.country}</span>
              {profile.region && <span className="text-stone-300 hidden sm:inline">· {profile.region}</span>}
            </span>
            <span className="text-[11px] font-sans-nav text-[#C5A870] font-medium">
              {profile.continent}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5">
          {/* Unboxed Metadata Line (Zero-Pill compliant) */}
          <div className="flex items-center gap-2 text-xs text-[#C5A870] font-sans-nav font-medium mb-2">
            <span>{getDepartmentLabel(profile.department)}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-300">{profile.historicalPeriod}</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span className="text-stone-400">{profile.wordCount} words</span>
          </div>

          {/* Primary Title */}
          <h3 className="font-headline text-xl sm:text-2xl font-bold text-white group-hover:text-[#C5A870] transition-colors line-clamp-2 leading-snug">
            {profile.title}
          </h3>

          {/* Summary Prose */}
          <p className="font-body text-sm text-stone-300 line-clamp-3 mt-2.5 leading-relaxed">
            {profile.summary}
          </p>
        </div>
      </div>

      {/* Footer Read Action */}
      <div className="px-5 pb-5 pt-3 border-t border-[#222222] flex items-center justify-between text-xs font-sans-nav">
        <span className="text-stone-400 group-hover:text-stone-200 transition-colors flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-[#C5A870]" />
          <span>Verified Sources ({profile.sources.length})</span>
        </span>
        <span className="text-[#C5A870] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          <span>Read Dossier</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
