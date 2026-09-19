import React from 'react';
import { PageTab } from '../types';
import { MILESTONES } from '../data/milestones';
import { ArrowLeft, Calendar, MapPin, Sparkles } from 'lucide-react';
import { fireCelebrationConfetti } from '../utils/confetti';

interface JourneyViewProps {
  onSelectTab: (tab: PageTab) => void;
}

export const JourneyView: React.FC<JourneyViewProps> = ({ onSelectTab }) => {
  return (
    <div id="journey-view-page" className="w-full">
      {/* ========================================================================= */}
      {/* HERO: The Journey to Freedom (Dark Emerald - matching video 00:42) */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#021811] via-[#04281e] to-[#031d16] text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-900/30 text-emerald-300 text-xs font-bold tracking-[0.28em] uppercase">
            1930 — 1947
          </div>

          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-black tracking-wider text-white">
            The Journey to Freedom
          </h1>

          <p className="text-xs sm:text-sm font-bold tracking-[0.35em] text-emerald-400 uppercase">
            FROM A DREAM TO A NATION
          </p>

          <p className="text-sm sm:text-base text-emerald-100/80 max-w-2xl mx-auto pt-2 leading-relaxed">
            Trace the historic struggle, tireless perseverance, and pivotal turning points that forged
            an independent homeland against all odds.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHRONOLOGICAL TIMELINE MILESTONES (Light Cream - matching video 00:43 to 00:45) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8faf8] text-[#0f241d]">
        <div className="max-w-5xl mx-auto space-y-16">
          {MILESTONES.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={milestone.year}
                id={`milestone-item-${milestone.year}`}
                className="group rounded-2xl bg-white border border-emerald-100/90 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-2 transition-all duration-500 ease-out p-6 sm:p-10 space-y-6"
              >
                {/* Top Badge and Year Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-100 pb-4">
                  <div className="flex items-center gap-4">
                    <span className="font-cinzel text-4xl sm:text-5xl font-black text-emerald-800 group-hover:text-emerald-600 group-hover:scale-105 transition-all duration-300 inline-block origin-left">
                      {milestone.year}
                    </span>
                    <div>
                      <span className="inline-block text-[10px] font-bold tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full uppercase group-hover:bg-emerald-100/80 transition-colors">
                        {milestone.label}
                      </span>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#091f16] group-hover:text-emerald-800 transition-colors">
                        {milestone.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-xs text-[#4b6a5e] flex flex-wrap gap-4">
                    {milestone.date && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{milestone.date}</span>
                      </div>
                    )}
                    {milestone.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{milestone.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Grid layout for image and text */}
                <div className={`grid grid-cols-1 ${milestone.imageUrl ? 'md:grid-cols-12' : ''} gap-8 items-center`}>
                  {milestone.imageUrl && (
                    <div className={`md:col-span-5 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-md group/img cursor-pointer">
                        <img
                          src={milestone.imageUrl}
                          alt={milestone.title}
                          className="w-full h-full object-cover group-hover/img:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover/img:opacity-75 transition-opacity duration-500" />
                        <span className="absolute bottom-3 left-3 px-2 py-1 rounded-md bg-black/60 group-hover/img:bg-black/80 text-emerald-300 text-[11px] font-semibold border border-transparent group-hover/img:border-emerald-400/40 transition-all duration-300">
                          Historical Archives
                        </span>
                      </div>
                    </div>
                  )}

                  <div className={`${milestone.imageUrl ? 'md:col-span-7' : ''} ${isEven ? 'md:order-2' : 'md:order-1'} space-y-4`}>
                    <p className="text-sm sm:text-base text-[#274639] leading-relaxed">
                      {milestone.description}
                    </p>
                    <p className="text-xs sm:text-sm text-[#3e5f51] leading-relaxed">
                      {milestone.significance}
                    </p>

                    {milestone.quote && (
                      <div className="p-4 rounded-xl bg-emerald-50/80 border-l-4 border-emerald-600">
                        <p className="text-xs sm:text-sm text-emerald-900 italic">
                          "{milestone.quote}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINALE: Pakistan Zindabad & Return Home (matching video 00:46) */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#031f18] via-[#021811] to-[#01120c] text-white text-center border-t border-emerald-800/40">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-600/20 border border-emerald-400/40 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-emerald-300" />
          </div>

          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-black tracking-[0.15em] text-white">
            Pakistan Zindabad
          </h2>

          <p className="text-sm sm:text-base text-emerald-200/90 font-serif italic max-w-xl mx-auto">
            "The dream lives on — in every heart, in every flag, in every 14th of August."
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => fireCelebrationConfetti()}
              className="group cursor-pointer px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-emerald-950/60 border border-emerald-400/40 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-300" />
              <span>Celebrate Now 🇵🇰</span>
            </button>

            <button
              id="return-home-btn"
              onClick={() => {
                onSelectTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer px-8 py-3.5 rounded-full border-2 border-emerald-600/70 hover:border-emerald-400 text-emerald-200 hover:text-white font-bold text-xs tracking-widest uppercase hover:bg-emerald-900/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
              <span>RETURN HOME</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
