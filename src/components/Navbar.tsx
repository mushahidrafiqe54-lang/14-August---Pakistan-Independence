import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { Volume2, VolumeX, Sparkles, Menu, X } from 'lucide-react';
import { anthemPlayer } from '../utils/audio';
import { fireCelebrationConfetti } from '../utils/confetti';

interface NavbarProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab }) => {
  const [isPlayingAnthem, setIsPlayingAnthem] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = anthemPlayer.onStateChange((playing) => {
      setIsPlayingAnthem(playing);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      unsub();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'quaid-e-azam', label: 'QUAID-E-AZAM' },
    { id: 'allama-iqbal', label: 'ALLAMA IQBAL' },
    { id: 'independence-journey', label: 'INDEPENDENCE JOURNEY' },
  ];

  const handleTabClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMusic = () => {
    anthemPlayer.toggle();
  };

  const handleCelebrate = () => {
    fireCelebrationConfetti();
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#021811]/95 backdrop-blur-md shadow-lg shadow-emerald-950/40 border-b border-emerald-800/40 py-3'
          : 'bg-[#021811]/85 backdrop-blur-sm border-b border-emerald-900/30 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-button"
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
        >
          {/* Pakistan Crescent & Star Emblem */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-900 border border-emerald-400/40 flex items-center justify-center shadow-md shadow-emerald-950/50 group-hover:scale-110 group-hover:rotate-6 group-hover:border-emerald-300 group-hover:shadow-lg group-hover:shadow-emerald-500/40 transition-all duration-300">
            <svg
              className="w-6 h-6 text-white drop-shadow group-hover:scale-105 transition-transform duration-300"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              {/* Crescent */}
              <path d="M 68 18 A 38 38 0 1 0 68 82 A 32 32 0 1 1 68 18 Z" />
              {/* 5-pointed star tilted */}
              <polygon points="76,32 80,42 90,44 82,51 85,61 76,55 67,61 70,51 62,44 72,42" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.18em] text-white leading-tight group-hover:text-emerald-300 transition-colors duration-200">
              14 AUGUST
            </span>
            <span className="text-[10px] tracking-[0.25em] text-emerald-400/90 font-medium group-hover:text-emerald-200 transition-colors duration-200">
              PAKISTAN INDEPENDENCE
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleTabClick(item.id)}
                className={`group relative px-4 py-2 text-xs font-semibold tracking-[0.18em] rounded-md transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? 'text-emerald-300 font-bold bg-emerald-900/30 shadow-inner'
                    : 'text-emerald-100/75 hover:text-white hover:bg-emerald-900/40'
                }`}
              >
                <span className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5 inline-block">
                  {item.label}
                </span>
                {/* Expanding hover underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-4/5 bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-500'
                      : 'w-0 group-hover:w-3/5 bg-emerald-400/80'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right actions: Anthem player & Celebrate */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Audio toggle button */}
          <button
            id="audio-toggle-button"
            onClick={toggleMusic}
            title={isPlayingAnthem ? 'Mute National Anthem' : 'Play National Anthem'}
            className={`p-2 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs px-3 cursor-pointer hover:scale-105 active:scale-95 ${
              isPlayingAnthem
                ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 shadow-sm shadow-emerald-500/20 animate-pulse hover:bg-emerald-600/40'
                : 'bg-emerald-950/40 border-emerald-800/50 text-emerald-300 hover:border-emerald-500 hover:bg-emerald-900/50 hover:text-white hover:shadow-md hover:shadow-emerald-500/20'
            }`}
          >
            {isPlayingAnthem ? (
              <>
                <Volume2 className="w-4 h-4 text-emerald-300" />
                <span className="text-[11px] font-medium hidden md:inline">Anthem Playing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-emerald-400/80" />
                <span className="text-[11px] font-medium hidden md:inline">Anthem</span>
              </>
            )}
          </button>

          {/* Celebrate Button */}
          <button
            id="nav-celebrate-button"
            onClick={handleCelebrate}
            className="group px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-semibold tracking-wider flex items-center gap-1.5 shadow-md shadow-emerald-950/40 border border-emerald-400/30 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:rotate-45 transition-transform duration-300" />
            <span>Celebrate 🇵🇰</span>
          </button>
        </div>

        {/* Mobile menu trigger button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-audio-button"
            onClick={toggleMusic}
            className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-300"
            aria-label="Toggle Anthem"
          >
            {isPlayingAnthem ? <Volume2 className="w-4 h-4 text-emerald-300" /> : <VolumeX className="w-4 h-4 text-emerald-400" />}
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-200 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-[#021811] border-b border-emerald-800/50 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold tracking-[0.16em] transition-colors ${
                  isActive
                    ? 'bg-emerald-800/50 text-emerald-300 border-l-4 border-emerald-400'
                    : 'text-emerald-100/80 hover:bg-emerald-900/30 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-emerald-900/40 flex items-center justify-between">
            <button
              onClick={handleCelebrate}
              className="w-full py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Celebrate Pakistan 🇵🇰
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
