import React from 'react';
import { PageTab } from '../types';
import { APP_IMAGES } from '../data/images';
import { ArrowLeft, ArrowRight, Shield, Heart, Scale, Sparkles } from 'lucide-react';
import { fireCelebrationConfetti } from '../utils/confetti';

interface QuaidViewProps {
  onSelectTab: (tab: PageTab) => void;
}

export const QuaidView: React.FC<QuaidViewProps> = ({ onSelectTab }) => {
  return (
    <div id="quaid-view-page" className="w-full">
      {/* ========================================================================= */}
      {/* HERO: Quaid-e-Azam (Dark Emerald Background - matching video 00:30) */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#021811] via-[#04281e] to-[#031d16] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-900/30 text-emerald-300 text-xs font-bold tracking-[0.25em] uppercase">
              QUAID-E-AZAM • THE GREAT LEADER
            </div>

            <div className="space-y-2">
              <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide text-white leading-tight">
                Muhammad Ali Jinnah
              </h1>
              <p className="text-xs sm:text-sm font-bold tracking-[0.3em] text-emerald-400 uppercase">
                THE FOUNDER OF PAKISTAN
              </p>
            </div>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
              With sheer willpower, constitutional prowess, and unwavering devotion to principle, he
              carved out a nation without firing a single shot. His weapon was reason, law, and steadfast
              faith.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => fireCelebrationConfetti()}
                className="group cursor-pointer px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/50 border border-emerald-400/40 hover:border-emerald-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-45 transition-transform duration-300" />
                <span>Salute The Quaid</span>
              </button>
            </div>
          </div>

          {/* Right: Arched Framed Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-3 rounded-t-[140px] rounded-b-3xl bg-emerald-500/20 blur-2xl group-hover:blur-3xl group-hover:bg-emerald-400/35 transition-all duration-500" />
              <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[400px] rounded-t-[140px] md:rounded-t-[160px] rounded-b-3xl overflow-hidden border-2 border-emerald-500/50 group-hover:border-emerald-300 group-hover:ring-4 group-hover:ring-emerald-400/30 p-1 bg-[#021811] shadow-2xl transition-all duration-500">
                <img
                  src={APP_IMAGES.jinnah}
                  alt="Quaid-e-Azam Muhammad Ali Jinnah"
                  className="w-full h-full object-cover object-top rounded-t-[136px] md:rounded-t-[156px] rounded-b-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LIFE & LEADERSHIP (Light Cream Background - matching video 00:31) */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8faf8] text-[#0f241d]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-[0.28em] text-emerald-700 uppercase">
              — LIFE & LEADERSHIP —
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#091f16]">
              The Making of a Leader
            </h2>
            <p className="text-xs sm:text-sm text-[#3b554b] max-w-xl mx-auto">
              Integrity and vision, never compromised for personal ambition or ease.
            </p>
          </div>

          {/* Two Columns with Original Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Leadership & 1940 Resolution */}
            <div className="group cursor-pointer rounded-2xl bg-white border border-emerald-100/90 hover:border-emerald-400/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-2.5 transition-all duration-500 ease-out overflow-hidden flex flex-col">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={APP_IMAGES.lahore1940}
                  alt="Quaid-e-Azam presiding over the 1940 Lahore Resolution"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-75 transition-opacity duration-500" />
                <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md bg-black/60 group-hover:bg-black/80 backdrop-blur-md text-[11px] font-semibold text-emerald-300 uppercase tracking-wider border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all duration-300">
                  Archival 1940 • Lahore Resolution
                </span>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300 border-b border-emerald-100 pb-3">
                    Architect of a Nation
                  </h3>
                  <p className="text-sm text-[#274639] leading-relaxed pt-2">
                    Recognizing that the Muslim minority required constitutional sovereignty to
                    preserve their heritage, democracy, and freedom, Jinnah organized the All-India
                    Muslim League into an invincible democratic movement.
                  </p>
                </div>
                <blockquote className="text-xs sm:text-sm text-emerald-800 font-medium italic border-l-3 border-emerald-600 pl-3 mt-4">
                  "Few individuals significantly alter the course of history. Fewer still modify the map
                  of the world. Hardly anyone can be credited with creating a nation-state. Mohammad Ali
                  Jinnah did all three." — Stanley Wolpert
                </blockquote>
              </div>
            </div>

            {/* Eternal Legacy & Mazar-e-Quaid */}
            <div className="group cursor-pointer rounded-2xl bg-white border border-emerald-100/90 hover:border-emerald-400/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-950/15 hover:-translate-y-2.5 transition-all duration-500 ease-out overflow-hidden flex flex-col">
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={APP_IMAGES.mazarQuaid}
                  alt="Mazar-e-Quaid in Karachi, Pakistan"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-75 transition-opacity duration-500" />
                <span className="absolute bottom-3 left-4 px-2.5 py-1 rounded-md bg-black/60 group-hover:bg-black/80 backdrop-blur-md text-[11px] font-semibold text-emerald-300 uppercase tracking-wider border border-emerald-500/30 group-hover:border-emerald-400/60 transition-all duration-300">
                  Mazar-e-Quaid • Karachi
                </span>
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300 border-b border-emerald-100 pb-3">
                    Early Life & Legal Distinction
                  </h3>
                  <p className="text-sm text-[#274639] leading-relaxed pt-2">
                    Born in Karachi on 25 December 1876, Jinnah went on to Lincoln's Inn, London,
                    becoming the youngest Indian called to the bar at age 19. His uncompromising integrity
                    and constitutional mastery made him the Father of the Nation.
                  </p>
                </div>
                <p className="text-xs text-[#4b6a5e] leading-relaxed italic border-l-3 border-emerald-600 pl-3 mt-4">
                  "Expect the best, prepare for the worst. No struggle can ever succeed without women participating side by side with men."
                </p>
              </div>
            </div>
          </div>

          {/* 3 Golden Pillars */}
          <div className="pt-4">
            <h4 className="text-center font-cinzel text-xl font-bold text-[#091f16] mb-8">
              The Three Guiding Principles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="group cursor-pointer p-6 rounded-xl bg-white border border-emerald-100/90 hover:border-emerald-400 hover:bg-emerald-50/40 shadow-sm hover:shadow-xl hover:shadow-emerald-950/10 hover:-translate-y-2 transition-all duration-400">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-emerald-600/30 flex items-center justify-center mb-3 transition-all duration-300">
                  <Heart className="w-5 h-5" />
                </div>
                <h5 className="font-cinzel text-lg font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">IMAN</h5>
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
                  Faith
                </p>
                <p className="text-xs text-[#3b554b]">
                  Unyielding confidence in destiny and moral righteousness.
                </p>
              </div>

              <div className="group cursor-pointer p-6 rounded-xl bg-white border border-emerald-100/90 hover:border-emerald-400 hover:bg-emerald-50/40 shadow-sm hover:shadow-xl hover:shadow-emerald-950/10 hover:-translate-y-2 transition-all duration-400">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-emerald-600/30 flex items-center justify-center mb-3 transition-all duration-300">
                  <Shield className="w-5 h-5" />
                </div>
                <h5 className="font-cinzel text-lg font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">ITTEHAD</h5>
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
                  Unity
                </p>
                <p className="text-xs text-[#3b554b]">
                  Standing together as one indivisible community beyond sect or region.
                </p>
              </div>

              <div className="group cursor-pointer p-6 rounded-xl bg-white border border-emerald-100/90 hover:border-emerald-400 hover:bg-emerald-50/40 shadow-sm hover:shadow-xl hover:shadow-emerald-950/10 hover:-translate-y-2 transition-all duration-400">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-emerald-600/30 flex items-center justify-center mb-3 transition-all duration-300">
                  <Scale className="w-5 h-5" />
                </div>
                <h5 className="font-cinzel text-lg font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">NAZM</h5>
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
                  Discipline
                </p>
                <p className="text-xs text-[#3b554b]">
                  Self-restraint, adherence to law, and steadfast dedication to duty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HISTORIC QUOTE (Dark Emerald Background - matching video 00:33) */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#031d16] text-white text-center relative overflow-hidden border-t border-emerald-800/40">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-serif text-6xl text-emerald-400/40 select-none">“</span>
          <blockquote className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-semibold leading-relaxed text-emerald-50 max-w-3xl mx-auto">
            With faith, discipline and selfless devotion to duty, there is nothing worthwhile that
            you cannot achieve.
          </blockquote>
          <p className="text-xs sm:text-sm tracking-[0.25em] text-emerald-400 uppercase font-semibold">
            — MUHAMMAD ALI JINNAH
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Bottom Page Navigation Bar (matching video 00:34) */}
      {/* ========================================================================= */}
      <nav className="py-6 px-4 sm:px-8 bg-[#021811] border-t border-emerald-900/50 flex items-center justify-between text-xs tracking-widest uppercase font-semibold text-emerald-300">
        <button
          onClick={() => {
            onSelectTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group cursor-pointer flex items-center gap-2 hover:text-white px-3 py-1.5 rounded-lg hover:bg-emerald-900/40 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
          <span>HOME</span>
        </button>

        <button
          onClick={() => {
            onSelectTab('allama-iqbal');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group cursor-pointer flex items-center gap-2 hover:text-white px-3 py-1.5 rounded-lg hover:bg-emerald-900/40 transition-all duration-300"
        >
          <span>ALLAMA IQBAL</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
        </button>
      </nav>
    </div>
  );
};
