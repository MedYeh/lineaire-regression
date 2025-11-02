
import React from 'react';

interface NavigationProps {
    currentSlide: number;
    totalSlides: number;
    onPrev: () => void;
    onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, onPrev, onNext }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/95 to-black/70 backdrop-blur-xl border-t border-primary/30 flex justify-between items-center px-4 sm:px-8 md:px-12 z-50">
            <button
                onClick={onPrev}
                disabled={currentSlide === 0}
                className="bg-gradient-to-br from-secondary/20 to-accent/20 border-2 border-primary/50 text-primary py-2 px-4 sm:py-3 sm:px-8 rounded-full cursor-pointer text-sm sm:text-base font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-lg disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-secondary/40 hover:enabled:-translate-y-1 hover:enabled:shadow-glow-md"
            >
                <span>←</span>
                <span className="hidden sm:inline">Précédent</span>
            </button>
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 border border-primary/40 py-2 px-6 rounded-full text-sm sm:text-base font-semibold text-primary backdrop-blur-lg">
                <span>{currentSlide + 1}</span> / <span>{totalSlides}</span>
            </div>
            <button
                onClick={onNext}
                disabled={currentSlide === totalSlides - 1}
                className="bg-gradient-to-br from-secondary/20 to-accent/20 border-2 border-primary/50 text-primary py-2 px-4 sm:py-3 sm:px-8 rounded-full cursor-pointer text-sm sm:text-base font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-lg disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:bg-secondary/40 hover:enabled:-translate-y-1 hover:enabled:shadow-glow-md"
            >
                <span className="hidden sm:inline">Suivant</span>
                <span>→</span>
            </button>
        </div>
    );
};

export default Navigation;