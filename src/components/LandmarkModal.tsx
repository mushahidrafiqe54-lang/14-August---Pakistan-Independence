import React from 'react';
import { Landmark } from '../types';
import { X, MapPin, Calendar, Landmark as LandmarkIcon } from 'lucide-react';

interface LandmarkModalProps {
  landmark: Landmark | null;
  onClose: () => void;
}

export const LandmarkModal: React.FC<LandmarkModalProps> = ({ landmark, onClose }) => {
  if (!landmark) return null;

  return (
    <div
      id="landmark-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="landmark-modal-container"
        className="relative w-full max-w-2xl bg-[#03231a] border border-emerald-700/50 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-950/80 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="landmark-modal-close"
          onClick={onClose}
          className="group absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-emerald-600 text-white/80 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 backdrop-blur-sm cursor-pointer border border-white/10 hover:border-emerald-400"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#01140e] group">
          <img
            src={landmark.imageUrl}
            alt={landmark.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            onError={(e) => {
              // Graceful fallback if unsplash image takes time
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03231a] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest bg-emerald-700/80 text-emerald-100 backdrop-blur-md mb-2 border border-emerald-500/30">
              {landmark.province.toUpperCase()}
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wide text-white drop-shadow-md">
              {landmark.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick specs */}
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-emerald-300/90 pb-4 border-b border-emerald-800/40">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{landmark.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Inaugurated: {landmark.yearBuilt}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <LandmarkIcon className="w-4 h-4 text-emerald-400" />
              <span>{landmark.city}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-sans">
            {landmark.description}
          </p>

          {/* Historical Significance */}
          <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/40">
            <h4 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Historical Significance
            </h4>
            <p className="text-xs sm:text-sm text-emerald-200/85 leading-relaxed">
              {landmark.significance}
            </p>
          </div>

          {/* Action button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 text-white text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer border border-emerald-500/40"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
