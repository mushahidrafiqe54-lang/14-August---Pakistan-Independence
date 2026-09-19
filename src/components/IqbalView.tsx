import React from 'react';
import { PageTab } from '../types';
import { POETRY_VERSES } from '../data/poetry';
import { APP_IMAGES } from '../data/images';
import { ArrowLeft, ArrowRight, BookOpen, Feather, Sparkles } from 'lucide-react';
import { fireCelebrationConfetti } from '../utils/confetti';

interface IqbalViewProps {
  onSelectTab: (tab: PageTab) => void;
}

export const IqbalView: React.FC<IqbalViewProps> = ({ onSelectTab }) => {
  return (
    <div id="iqbal-view-page" className="w-full">
      {/* ========================================================================= */}
      {/* HERO: Allama Iqbal (Dark Emerald Background - matching video 00:35) */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#021811] via-[#04281e] to-[#031d16] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Arched Framed Portrait */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-3 rounded-t-[140px] rounded-b-3xl bg-emerald-500/20 blur-2xl group-hover:blur-3xl group-hover:bg-emerald-400/35 transition-all duration-500" />
              <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[400px] rounded-t-[140px] md:rounded-t-[160px] rounded-b-3xl overflow-hidden border-2 border-emerald-500/50 group-hover:border-emerald-300 group-hover:ring-4 group-hover:ring-emerald-400/30 p-1 bg-[#021811] shadow-2xl transition-all duration-500">
                <img
                  src={APP_IMAGES.iqbal}
                  alt="Allama Muhammad Iqbal"
                  className="w-full h-full object-cover object-top rounded-t-[136px] md:rounded-t-[156px] rounded-b-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-block px-3.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-900/30 text-emerald-300 text-xs font-bold tracking-[0.25em] uppercase">
              SHAYIR-E-MASHRIQ • THE POET OF THE EAST
            </div>

            <div className="space-y-2">
              <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-white leading-tight">
                Allama Muhammad Iqbal
              </h1>
              <p className="text-xs sm:text-sm font-bold tracking-[0.3em] text-emerald-400 uppercase">
                THE PHILOSOPHER & POET OF THE EAST
              </p>
            </div>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
              The philosopher who conceived the philosophical and spiritual blueprint of Pakistan.
              Through immortal poetry in Urdu and Persian, he rekindled the flame of dignity, self-reliance,
              and divine aspiration in a captive people.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => fireCelebrationConfetti()}
                className="group cursor-pointer px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 border border-emerald-400/40 hover:border-emerald-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-45 transition-transform duration-300" />
                <span>Celebrate Iqbal's Vision</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* THE VISION & THE DREAM (Light Cream Background - matching video 00:36) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8faf8] text-[#0f241d]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.28em] text-emerald-700 uppercase">
              — THE VISION & THE DREAM —
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#091f16]">
              Awakening a Slumbering Nation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 01 Poetry & The Spiritual Call */}
            <div className="group cursor-pointer rounded-2xl bg-white border border-emerald-100/90 hover:border-emerald-400/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-2.5 transition-all duration-500 ease-out overflow-hidden flex flex-col">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={APP_IMAGES.badshahiMosque}
                  alt="Badshahi Mosque & Tomb of Allama Iqbal, Lahore"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-75 transition-opacity duration-500" />
                <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md bg-black/60 group-hover:bg-black/80 backdrop-blur-md text-[11px] font-semibold text-emerald-300 uppercase tracking-wider border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all duration-300">
                  Lahore • Resting Place at Hazuri Bagh
                </span>
              </div>
              <div className="p-8 space-y-4 flex-1">
                <div className="flex items-center gap-3 border-b border-emerald-100 pb-3">
                  <span className="font-cinzel text-2xl font-black text-emerald-800 group-hover:text-emerald-600 transition-colors">01</span>
                  <Feather className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-cinzel text-xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">Poetry of Awakening</h3>
                </div>
                <p className="text-sm text-[#274639] leading-relaxed">
                  Verses that awakened a slumbering nation — revitalizing self-dignity, moral
                  elevation, and the sacred obligation of collective purpose. His words pierced
                  complacency and sparked the intellectual renaissance that made Pakistan possible.
                </p>
              </div>
            </div>

            {/* 02 Philosophy & Allahabad Address */}
            <div className="group cursor-pointer rounded-2xl bg-white border border-emerald-100/90 hover:border-emerald-400/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-2.5 transition-all duration-500 ease-out overflow-hidden flex flex-col">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={APP_IMAGES.allahabad1930}
                  alt="Historic 1930 Allahabad Address"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-75 transition-opacity duration-500" />
                <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md bg-black/60 group-hover:bg-black/80 backdrop-blur-md text-[11px] font-semibold text-emerald-300 uppercase tracking-wider border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all duration-300">
                  Archival 1930 • The Allahabad Address
                </span>
              </div>
              <div className="p-8 space-y-4 flex-1">
                <div className="flex items-center gap-3 border-b border-emerald-100 pb-3">
                  <span className="font-cinzel text-2xl font-black text-emerald-800 group-hover:text-emerald-600 transition-colors">02</span>
                  <BookOpen className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-cinzel text-xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">Philosophy of Khudi</h3>
                </div>
                <p className="text-sm text-[#274639] leading-relaxed">
                  Khudi (Selfhood) — spiritual revival and active consciousness. He taught generations that
                  man was not created to kneel before despair or imperialism, but to realize his divine
                  potential and shape his own sovereign destiny through spiritual conviction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* VERSES THAT AWAKENED A NATION (Dark Emerald - matching video 00:38) */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#031d16] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.28em] text-emerald-400 uppercase">
              — WORDS OF AWAKENING —
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Verses that Awakened a Nation
            </h2>
            <p className="text-xs sm:text-sm text-emerald-300/80 max-w-lg mx-auto">
              Timeless couplets composed by Allama Muhammad Iqbal that became the philosophical heartbeat of the Pakistan Movement.
            </p>
          </div>

          {/* Poetry Display Cards */}
          <div className="space-y-8">
            {POETRY_VERSES.map((verse) => (
              <div
                key={verse.id}
                id={`poetry-card-${verse.id}`}
                className="group cursor-pointer rounded-2xl p-6 sm:p-8 bg-[#021811] border border-emerald-800/50 hover:border-emerald-400/90 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-400 ease-out space-y-6"
              >
                {/* Header info */}
                <div className="flex items-center justify-between text-xs text-emerald-400/80 border-b border-emerald-900/60 pb-3">
                  <span className="tracking-widest uppercase font-semibold group-hover:text-emerald-300 transition-colors">
                    {verse.theme}
                  </span>
                  <span className="italic text-emerald-300/70">{verse.book}</span>
                </div>

                {/* Urdu Calligraphy text */}
                <div className="text-center py-4 space-y-3">
                  {verse.urduLines.map((line, lIdx) => (
                    <p
                      key={lIdx}
                      className="urdu-text text-2xl sm:text-3xl md:text-4xl font-normal text-emerald-100 group-hover:text-white tracking-normal drop-shadow transition-colors duration-300"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* English Translation */}
                <div className="text-center border-t border-emerald-900/60 pt-4">
                  <p className="font-garamond italic text-base sm:text-lg text-emerald-200/90 group-hover:text-emerald-100 max-w-2xl mx-auto transition-colors duration-300">
                    {verse.englishTranslation}
                  </p>
                  <span className="block text-[11px] font-bold tracking-widest text-emerald-400 mt-2 uppercase group-hover:text-emerald-300 transition-colors">
                    — ALLAMA IQBAL
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HISTORICAL ALLAHABAD ADDRESS (Light/Dark Quote - matching video 00:40) */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#021811] to-[#04281e] text-white text-center border-t border-emerald-800/40">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-serif text-6xl text-emerald-400/40 select-none">“</span>
          <blockquote className="font-cinzel text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-emerald-50 max-w-3xl mx-auto">
            I would like to see the Punjab, North-West Frontier Province, Sind and Baluchistan
            amalgamated into a single state. Self-government within the British Empire, or without the
            British Empire, the formation of a consolidated North-West Indian Muslim State appears to
            me to be the final destiny of the Muslims.
          </blockquote>
          <p className="text-xs sm:text-sm tracking-[0.25em] text-emerald-400 uppercase font-semibold">
            — ALLAMA IQBAL • ALLAHABAD ADDRESS, 1930
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Bottom Page Navigation Bar (matching video 00:41) */}
      {/* ========================================================================= */}
      <nav className="py-6 px-4 sm:px-8 bg-[#021811] border-t border-emerald-900/50 flex items-center justify-between text-xs tracking-widest uppercase font-semibold text-emerald-300">
        <button
          onClick={() => {
            onSelectTab('quaid-e-azam');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group cursor-pointer flex items-center gap-2 hover:text-white px-3 py-1.5 rounded-lg hover:bg-emerald-900/40 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
          <span>QUAID-E-AZAM</span>
        </button>

        <button
          onClick={() => {
            onSelectTab('independence-journey');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group cursor-pointer flex items-center gap-2 hover:text-white px-3 py-1.5 rounded-lg hover:bg-emerald-900/40 transition-all duration-300"
        >
          <span>INDEPENDENCE JOURNEY</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
        </button>
      </nav>
    </div>
  );
};
