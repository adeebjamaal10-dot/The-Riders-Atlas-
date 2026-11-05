import React, { useState } from 'react';
import { TIMELINE_DATA } from '../data/timeline';
import { TimelineMilestone } from '../types/equestrian';
import { History, Calendar, MapPin, ArrowRight, BookOpen } from 'lucide-react';

interface TimelineScrubberProps {
  onSelectMilestoneSlug: (slug: string) => void;
}

export const TimelineScrubber: React.FC<TimelineScrubberProps> = ({ onSelectMilestoneSlug }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone>(TIMELINE_DATA[0]);

  const categories = [
    { id: 'all', label: 'Complete Chronology' },
    { id: 'origins', label: 'Domestication & Ancient' },
    { id: 'classical', label: 'Classical Academies' },
    { id: 'studs', label: 'Royal Studs & Breeds' },
    { id: 'sport', label: 'Historic Competitions' },
    { id: 'olympics', label: 'Olympic Milestones' },
  ];

  const filteredMilestones = TIMELINE_DATA.filter(m => {
    if (activeCategory === 'all') return true;
    return m.category === activeCategory;
  });

  return (
    <section className="bg-[#0D0D0D] text-white rounded-xl border border-[#262626] p-6 lg:p-10 shadow-2xl">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#262626]">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#C5A870] font-sans-nav font-semibold flex items-center gap-2">
            <History className="w-4 h-4 text-[#C5A870]" />
            <span>Chronological Atlas</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white mt-1">
            A Journey Through Equestrian History
          </h2>
          <p className="font-editorial text-sm text-stone-300 mt-1 max-w-2xl">
            From the 3500 BCE Botai steppe excavations to the modern Olympic era: explore verified milestones in horse domestication, classical treatises, and sporting history.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1 p-1 bg-black/60 rounded border border-[#262626] text-xs font-sans-nav">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const matching = TIMELINE_DATA.filter(m => cat.id === 'all' || m.category === cat.id);
                if (matching.length > 0) setSelectedMilestone(matching[0]);
              }}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C5A870] text-black font-semibold shadow'
                  : 'text-stone-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Interactive Timeline Track */}
      <div className="my-8 overflow-x-auto pb-4 scrollbar-thin">
        <div className="flex items-center gap-4 min-w-[900px] px-2 relative py-4">
          {/* Horizontal Track Bar */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#262626] -translate-y-1/2 z-0" />

          {filteredMilestones.map((m) => {
            const isSelected = selectedMilestone.year === m.year && selectedMilestone.title === m.title;

            return (
              <button
                key={`${m.yearNumeric}-${m.title}`}
                onClick={() => setSelectedMilestone(m)}
                className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all cursor-pointer ${
                  isSelected ? 'scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Milestone Node */}
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#C5A870] border-white shadow-lg'
                      : 'bg-black border-[#C5A870] group-hover:border-white'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-black' : 'bg-[#C5A870]'}`} />
                </div>

                {/* Milestone Year Label */}
                <div className="mt-2 text-center whitespace-nowrap">
                  <span
                    className={`text-xs font-sans-nav block font-bold ${
                      isSelected ? 'text-[#C5A870]' : 'text-stone-300'
                    }`}
                  >
                    {m.year}
                  </span>
                  <span className="text-[10px] text-stone-400 font-sans-nav max-w-[120px] truncate block">
                    {m.era}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Milestone Spotlight Card */}
      <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-3 text-xs font-sans-nav text-[#C5A870]">
            <span className="font-bold text-sm bg-white/10 text-white px-2.5 py-0.5 rounded border border-[#333333]">
              {selectedMilestone.year}
            </span>
            <span className="text-stone-600">·</span>
            <span className="uppercase tracking-wider text-stone-300">{selectedMilestone.era}</span>
            <span className="text-stone-600">·</span>
            <span className="flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A870]" />
              {selectedMilestone.location}
            </span>
          </div>

          <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white">
            {selectedMilestone.title}
          </h3>

          <p className="font-body text-base text-stone-300 leading-relaxed">
            {selectedMilestone.summary}
          </p>
        </div>

        {/* CTA to Read Associated Atlas Article */}
        <div className="flex flex-col justify-center items-start md:items-end border-t md:border-t-0 md:border-l border-[#262626] pt-4 md:pt-0 md:pl-6">
          <div className="text-xs text-stone-400 font-sans-nav mb-3">
            Integrated Archive Connection:
          </div>
          <button
            onClick={() => onSelectMilestoneSlug(selectedMilestone.relatedSlug)}
            className="w-full md:w-auto px-5 py-3 bg-[#C5A870] hover:bg-[#D4AF37] text-black font-semibold text-xs tracking-wider uppercase font-sans-nav rounded transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-black" />
            <span>Read Associated Article</span>
          </button>
        </div>
      </div>
    </section>
  );
};
