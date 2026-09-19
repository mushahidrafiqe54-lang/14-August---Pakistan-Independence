/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { QuaidView } from './components/QuaidView';
import { IqbalView } from './components/IqbalView';
import { JourneyView } from './components/JourneyView';
import { Sparkles, ArrowUp } from 'lucide-react';
import { fireCelebrationConfetti } from './utils/confetti';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabChange = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#021811] text-[#e8f3ee] flex flex-col selection:bg-emerald-600 selection:text-white font-sans">
      {/* Top Fixed Header with Navigation */}
      <Navbar currentTab={currentTab} onSelectTab={handleTabChange} />

      {/* Main Page View */}
      <main id="main-content" className="flex-1">
        {currentTab === 'home' && <HomeView onSelectTab={handleTabChange} />}
        {currentTab === 'quaid-e-azam' && <QuaidView onSelectTab={handleTabChange} />}
        {currentTab === 'allama-iqbal' && <IqbalView onSelectTab={handleTabChange} />}
        {currentTab === 'independence-journey' && <JourneyView onSelectTab={handleTabChange} />}
      </main>

      {/* Floating Action Buttons: Back to Top & Celebrate */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating Quick Celebrate */}
        <button
          id="floating-celebrate-btn"
          onClick={() => fireCelebrationConfetti()}
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-950/80 border border-emerald-300/40 hover:scale-110 active:scale-95 transition-all group"
          title="Celebrate Pakistan 🇵🇰"
          aria-label="Celebrate Pakistan"
        >
          <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
        </button>

        {/* Back to Top */}
        {showBackToTop && (
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#021811]/90 backdrop-blur-md text-emerald-300 flex items-center justify-center shadow-lg border border-emerald-700/50 hover:bg-emerald-800 hover:text-white transition-all"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
