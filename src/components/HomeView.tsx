import React, { useState } from 'react';
import { PageTab, Landmark } from '../types';
import { LANDMARKS } from '../data/landmarks';
import { APP_IMAGES } from '../data/images';
import { LandmarkModal } from './LandmarkModal';
import { fireCelebrationConfetti } from '../utils/confetti';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: PageTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab }) => {
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null);

  const handleCelebrate = () => {
    fireCelebrationConfetti();
  };

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Dark Emerald Background) */}
      {/* ========================================================================= */}
      <section
        id="hero-section"
        className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#021811] via-[#04281e] to-[#031d16] text-white overflow-hidden"
      >
        {/* Subtle decorative background watermark */}
        <div className="absolute right-0 top-1/4 -mr-24 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-1/4 -ml-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        {/* Large watermark crescent & star */}
        <div className="absolute right-6 top-1/3 opacity-[0.04] pointer-events-none hidden md:block">
          <svg className="w-[500px] h-[500px]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M 68 18 A 38 38 0 1 0 68 82 A 32 32 0 1 1 68 18 Z" />
            <polygon points="76,32 80,42 90,44 82,51 85,61 76,55 67,61 70,51 62,44 72,42" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Typography & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top eyebrow tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-900/30 text-emerald-300 text-xs font-semibold tracking-[0.25em]">
              <span>YOUTH & HOPE</span>
              <span className="text-emerald-500">•</span>
              <span>14 AUGUST 1947</span>
            </div>

            {/* Main title */}
            <div className="space-y-2">
              <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.2em] text-white leading-none drop-shadow-lg">
                14 <span className="text-emerald-300">AUGUST</span>
              </h1>
              <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-[0.35em] text-emerald-400 uppercase">
                Pakistan Independence Day
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-emerald-100/80 font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A story of courage, sacrifice, unity and the dream of a free nation.
            </p>

            {/* CTA Button */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-celebrate-btn"
                onClick={handleCelebrate}
                className="group cursor-pointer px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 hover:from-emerald-500 hover:to-emerald-700 text-white font-semibold text-xs sm:text-sm tracking-[0.16em] uppercase flex items-center gap-2.5 shadow-xl shadow-emerald-950/60 border border-emerald-400/40 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-45 transition-transform duration-300" />
                <span>Celebrate Pakistan 🇵🇰</span>
              </button>

              <button
                onClick={() => onSelectTab('independence-journey')}
                className="group cursor-pointer px-6 py-3.5 rounded-full border border-emerald-600/60 hover:border-emerald-400 text-emerald-200 hover:text-white text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase hover:bg-emerald-900/50 hover:shadow-lg hover:shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <span>The Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Framed Flag & Monument Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-md w-full cursor-pointer">
              {/* Outer decorative emerald halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/30 to-emerald-300/10 rounded-2xl blur-xl group-hover:blur-2xl group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 opacity-70" />

              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 group-hover:border-emerald-400/60 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 bg-[#021811] shadow-2xl transition-all duration-500 group-hover:-translate-y-1.5">
                {/* Visual Image */}
                <div className="relative h-72 sm:h-96 w-full">
                  <img
                    src={APP_IMAGES.flagHero}
                    alt="Pakistan Independence Celebration - Flag & Minarets"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021811] via-black/20 to-transparent group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Flag Ribbon Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 group-hover:border-emerald-400/50 group-hover:bg-black/75 text-white text-xs font-semibold transition-all duration-300">
                    <span className="text-base group-hover:scale-110 transition-transform duration-300 inline-block">🇵🇰</span>
                    <span className="tracking-wider group-hover:text-emerald-300 transition-colors">ZINDABAD</span>
                  </div>

                  {/* Image bottom tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#021811]/90 backdrop-blur-md border border-emerald-700/40 group-hover:border-emerald-500/60 group-hover:bg-[#021811]/95 transition-all duration-300">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold tracking-wider mb-1">
                      <Star className="w-3.5 h-3.5 fill-emerald-400 group-hover:rotate-45 transition-transform duration-300" />
                      <span>14 AUGUST 1947</span>
                    </div>
                    <p className="text-xs text-emerald-100 font-medium">
                      Minar-e-Pakistan & The Dawn of Freedom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE BIRTH OF FREEDOM (Light Background - matching video 00:07) */}
      {/* ========================================================================= */}
      <section
        id="birth-of-freedom-section"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8faf8] text-[#0f241d]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow and Headline */}
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold tracking-[0.28em] text-emerald-700 uppercase">
              — THE BIRTH OF FREEDOM —
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-[#091f16]">
              A Nation Born from a Dream
            </h2>
          </div>

          {/* 2-Column Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Left text block */}
            <div className="md:col-span-7 space-y-6 text-[#1e3a2f] text-sm sm:text-base leading-relaxed">
              <p>
                Pakistan did not emerge by chance. It was dreamed by poets, argued by thinkers, and
                won by a people who refused to surrender their destiny. On the 14th of August 1947,
                that dream became reality as a sovereign nation.
              </p>
              <p className="text-emerald-900/90 font-medium italic border-l-4 border-emerald-600 pl-4 py-1">
                "This is a story of faith, courage and sacrifice — carved into the hearts of millions
                and created on the world map with pride."
              </p>
              <p className="text-xs sm:text-sm text-[#3b554b]">
                Led by Quaid-e-Azam Muhammad Ali Jinnah and inspired by the spiritual philosophy of
                Allama Muhammad Iqbal, Muslims of the subcontinent united under the green and white
                flag to claim their fundamental right to self-determination.
              </p>
            </div>

            {/* Right photo with caption */}
            <div className="md:col-span-5">
              <div className="group cursor-pointer bg-white p-3 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-emerald-950/15 border border-emerald-100 hover:border-emerald-300 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={APP_IMAGES.minarPakistan}
                    alt="Minar-e-Pakistan Lahore"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="inline-block px-3 py-1 rounded bg-black/60 group-hover:bg-black/80 backdrop-blur-md text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-300 uppercase border border-transparent group-hover:border-emerald-400/40 transition-all duration-300">
                      MINAR-E-PAKISTAN • WHERE THE RESOLUTION WAS BORN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE FOUNDERS (Dark Emerald Background - matching video 00:10) */}
      {/* ========================================================================= */}
      <section
        id="founders-section"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#031d16] text-white relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.28em] text-emerald-400 uppercase">
              — THE FOUNDERS —
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-white">
              Two Lights of One Dawn
            </h2>
            <p className="text-sm sm:text-base text-emerald-200/80 max-w-xl mx-auto">
              The dreamer and the builder — without either, Pakistan would not be.
            </p>
          </div>

          {/* 2 Cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Quaid-e-Azam (Arched Dome Window Card matching reference screenshot) */}
            <div
              id="founder-card-quaid"
              onClick={() => onSelectTab('quaid-e-azam')}
              className="group cursor-pointer rounded-t-[140px] sm:rounded-t-[180px] lg:rounded-t-[210px] rounded-b-3xl bg-[#021811] border border-emerald-800/50 hover:border-emerald-400/90 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 ease-out hover:-translate-y-2.5 overflow-hidden flex flex-col justify-between"
            >
              {/* Arched Top Image with atmospheric gradient overlay */}
              <div className="relative w-full h-80 sm:h-96 md:h-[410px] overflow-hidden bg-[#021811]">
                <img
                  src={APP_IMAGES.jinnah}
                  alt="Quaid-e-Azam Muhammad Ali Jinnah"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Seamless dark gradient fade towards the card text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021811] via-[#021811]/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#021811] via-[#021811]/90 to-transparent" />
              </div>

              {/* Typography & Discover Button */}
              <div className="px-6 sm:px-8 pb-8 pt-2 text-center space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-emerald-400 uppercase">
                    — QUAID-E-AZAM —
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-200 transition-colors duration-300">
                    Muhammad Ali Jinnah
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed max-w-sm mx-auto">
                    The unwavering leader who turned a dream into a nation.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    id="discover-quaid-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTab('quaid-e-azam');
                    }}
                    className="w-full sm:w-auto px-7 py-2.5 rounded-lg border border-emerald-600/70 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-600/40 text-emerald-300 text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 mx-auto cursor-pointer"
                  >
                    <span>Discover Quaid-e-Azam</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Allama Iqbal (Arched Dome Window Card matching reference screenshot) */}
            <div
              id="founder-card-iqbal"
              onClick={() => onSelectTab('allama-iqbal')}
              className="group cursor-pointer rounded-t-[140px] sm:rounded-t-[180px] lg:rounded-t-[210px] rounded-b-3xl bg-[#021811] border border-emerald-800/50 hover:border-emerald-400/90 shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 ease-out hover:-translate-y-2.5 overflow-hidden flex flex-col justify-between"
            >
              {/* Arched Top Image with atmospheric gradient overlay */}
              <div className="relative w-full h-80 sm:h-96 md:h-[410px] overflow-hidden bg-[#021811]">
                <img
                  src={APP_IMAGES.iqbal}
                  alt="Allama Muhammad Iqbal"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Seamless dark gradient fade towards the card text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021811] via-[#021811]/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#021811] via-[#021811]/90 to-transparent" />
              </div>

              {/* Typography & Discover Button */}
              <div className="px-6 sm:px-8 pb-8 pt-2 text-center space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-emerald-400 uppercase">
                    — THE POET OF THE EAST —
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-200 transition-colors duration-300">
                    Allama Muhammad Iqbal
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed max-w-sm mx-auto">
                    The philosopher who dreamed the dream before the dawn.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    id="discover-iqbal-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectTab('allama-iqbal');
                    }}
                    className="w-full sm:w-auto px-7 py-2.5 rounded-lg border border-emerald-600/70 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-400 group-hover:shadow-lg group-hover:shadow-emerald-600/40 text-emerald-300 text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 mx-auto cursor-pointer"
                  >
                    <span>Discover Allama Iqbal</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MOMENTS THAT MADE A NATION (Light Background - matching video 00:13) */}
      {/* ========================================================================= */}
      <section
        id="moments-section"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8faf8] text-[#0f241d]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.28em] text-emerald-700 uppercase">
              — THE ROAD TO 1947 —
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-[#091f16]">
              Moments that Made a Nation
            </h2>
          </div>

          {/* 3 Milestone Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* 1930 */}
            <div
              onClick={() => onSelectTab('independence-journey')}
              className="group cursor-pointer p-7 rounded-2xl bg-white border border-emerald-100/90 hover:border-emerald-400 hover:bg-emerald-50/40 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-2.5 transition-all duration-500 ease-out flex flex-col justify-between"
            >
              <div>
                <span className="font-cinzel text-4xl sm:text-5xl font-black text-emerald-800 group-hover:text-emerald-600 group-hover:scale-105 transition-all duration-300 inline-block origin-left">
                  1930
                </span>
                <h4 className="text-xs font-bold tracking-widest text-emerald-700 group-hover:text-emerald-800 uppercase mt-2 mb-3 transition-colors">
                  VISION
                </h4>
                <p className="text-sm text-[#274639] leading-relaxed">
                  Allama Iqbal outlines the philosophical and territorial vision for an independent Muslim
                  state in his historic Allahabad Address.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                <span>View historical milestone</span>
                <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </div>

            {/* 1940 */}
            <div
              onClick={() => onSelectTab('independence-journey')}
              className="group cursor-pointer p-7 rounded-2xl bg-white border border-emerald-100/90 hover:border-emerald-400 hover:bg-emerald-50/40 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-2.5 transition-all duration-500 ease-out flex flex-col justify-between"
            >
              <div>
                <span className="font-cinzel text-4xl sm:text-5xl font-black text-emerald-800 group-hover:text-emerald-600 group-hover:scale-105 transition-all duration-300 inline-block origin-left">
                  1940
                </span>
                <h4 className="text-xs font-bold tracking-widest text-emerald-700 group-hover:text-emerald-800 uppercase mt-2 mb-3 transition-colors">
                  LAHORE RESOLUTION
                </h4>
                <p className="text-sm text-[#274639] leading-relaxed">
                  The resolution to create an independent homeland is overwhelmingly passed at Minto
                  Park, Lahore on 23 March 1940.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                <span>View historical milestone</span>
                <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </div>

            {/* 1947 */}
            <div
              onClick={() => onSelectTab('independence-journey')}
              className="group cursor-pointer p-7 rounded-2xl bg-white border border-emerald-100/90 hover:border-emerald-400 hover:bg-emerald-50/40 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/10 hover:-translate-y-2.5 transition-all duration-500 ease-out flex flex-col justify-between"
            >
              <div>
                <span className="font-cinzel text-4xl sm:text-5xl font-black text-emerald-800 group-hover:text-emerald-600 group-hover:scale-105 transition-all duration-300 inline-block origin-left">
                  1947
                </span>
                <h4 className="text-xs font-bold tracking-widest text-emerald-700 group-hover:text-emerald-800 uppercase mt-2 mb-3 transition-colors">
                  INDEPENDENCE
                </h4>
                <p className="text-sm text-[#274639] leading-relaxed">
                  The dream becomes a sovereign reality on 14 August 1947 as the green and white flag
                  rises over the newborn state.
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-semibold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                <span>View historical milestone</span>
                <span className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>

          {/* Centered Outline Button */}
          <div className="text-center pt-4">
            <button
              id="explore-journey-btn"
              onClick={() => onSelectTab('independence-journey')}
              className="group cursor-pointer px-8 py-3.5 rounded-full border-2 border-emerald-800 text-emerald-900 hover:bg-emerald-800 hover:text-white hover:border-emerald-800 hover:scale-105 hover:shadow-xl hover:shadow-emerald-800/30 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              <span>EXPLORE THE JOURNEY</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300 font-bold">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CELEBRATORY BANNER (Dark Emerald - matching video 00:15) */}
      {/* ========================================================================= */}
      <section
        id="banner-pakistan-zindabad"
        className="py-16 px-4 bg-gradient-to-r from-[#021811] via-[#042d20] to-[#021811] text-center text-white border-y border-emerald-800/40 relative overflow-hidden group"
      >
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-600/20 border border-emerald-400/40 group-hover:border-emerald-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/30 flex items-center justify-center transition-all duration-300">
            <svg className="w-8 h-8 text-emerald-300 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 100 100" fill="currentColor">
              <path d="M 68 18 A 38 38 0 1 0 68 82 A 32 32 0 1 1 68 18 Z" />
              <polygon points="76,32 80,42 90,44 82,51 85,61 76,55 67,61 70,51 62,44 72,42" />
            </svg>
          </div>
          <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.15em] text-white group-hover:text-emerald-100 transition-colors duration-300">
            Pakistan Zindabad
          </h2>
          <p className="text-emerald-300/80 text-xs sm:text-sm tracking-widest uppercase">
            Faith • Unity • Discipline — Long Live Pakistan
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. THE BEAUTY OF PAKISTAN (Landmark Cards Gallery - matching video 00:16) */}
      {/* ========================================================================= */}
      <section
        id="landmarks-section"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8faf8] text-[#0f241d]"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.28em] text-emerald-700 uppercase">
              — LAND & LANDMARKS —
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-[#091f16]">
              The Beauty of Pakistan
            </h2>
            <p className="text-xs sm:text-sm text-[#3b554b] max-w-lg mx-auto">
              From historic Mughal courtyards to contemporary architectural marvels and soaring northern peaks.
            </p>
          </div>

          {/* Grid of 6 Landmark Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LANDMARKS.map((landmark) => (
              <div
                key={landmark.id}
                id={`landmark-card-${landmark.id}`}
                onClick={() => setSelectedLandmark(landmark)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-emerald-100/90 hover:border-emerald-400/90 hover:shadow-2xl hover:shadow-emerald-950/20 hover:-translate-y-2.5 transition-all duration-500 ease-out flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={landmark.imageUrl}
                    alt={landmark.name}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-[0.5deg] transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 group-hover:bg-black/80 backdrop-blur-sm text-[10px] font-semibold text-emerald-300 tracking-wider border border-white/10 group-hover:border-emerald-400/40 transition-all duration-300">
                    {landmark.city}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-[#0e271e] group-hover:text-emerald-700 transition-colors duration-300">
                      {landmark.name}
                    </h3>
                    <p className="text-xs text-[#3b554b] line-clamp-2 mt-1 leading-relaxed">
                      {landmark.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] text-emerald-700 group-hover:text-emerald-900 font-semibold transition-colors duration-300">
                    <span>Explore details</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 font-bold">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM CTA & FOOTER (Dark Emerald - matching video 00:24) */}
      {/* ========================================================================= */}
      <footer
        id="main-footer"
        className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#031f18] to-[#02150f] text-white border-t border-emerald-900/50"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main CTA */}
          <div className="space-y-4">
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-white">
              Pakistan Zindabad PK
            </h2>
            <p className="text-xs sm:text-sm text-emerald-300/80 max-w-md mx-auto">
              May our beloved homeland prosper in peace, freedom, and timeless dignity.
            </p>
            <div className="pt-2">
              <button
                id="footer-celebrate-btn"
                onClick={handleCelebrate}
                className="group px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-widest uppercase shadow-lg shadow-emerald-950/60 border border-emerald-400/40 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Celebrate Pakistan 🇵🇰
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="pt-6 border-t border-emerald-800/40 flex flex-wrap justify-center gap-6 text-xs tracking-widest text-emerald-200/70 font-semibold">
            <button
              onClick={() => onSelectTab('home')}
              className="hover:text-emerald-300 hover:-translate-y-0.5 transition-all duration-200 uppercase cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onSelectTab('quaid-e-azam')}
              className="hover:text-emerald-300 hover:-translate-y-0.5 transition-all duration-200 uppercase cursor-pointer"
            >
              Quaid-e-Azam
            </button>
            <button
              onClick={() => onSelectTab('allama-iqbal')}
              className="hover:text-emerald-300 hover:-translate-y-0.5 transition-all duration-200 uppercase cursor-pointer"
            >
              Allama Iqbal
            </button>
            <button
              onClick={() => onSelectTab('independence-journey')}
              className="hover:text-emerald-300 hover:-translate-y-0.5 transition-all duration-200 uppercase cursor-pointer"
            >
              Independence Journey
            </button>
          </div>

          {/* Copyright Note */}
          <div className="pt-4 text-xs text-emerald-400/60">
            © 2024 14 August - Pakistan Zindabad. All rights reserved. Made with love for Pakistan 🇵🇰
          </div>
        </div>
      </footer>

      {/* Interactive Landmark Detail Modal */}
      <LandmarkModal
        landmark={selectedLandmark}
        onClose={() => setSelectedLandmark(null)}
      />
    </div>
  );
};
