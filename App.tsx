
import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA } from './constants/slides';
import ParticleBackground from './components/ParticleBackground';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import ThemeSwitcher from './components/ThemeSwitcher';
import type { Theme } from './types';

const App: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [theme, setTheme] = useState<Theme>('premium-gold');
    const totalSlides = SLIDES_DATA.length;

    const handleNext = useCallback(() => {
        setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
    }, [totalSlides]);

    const handlePrev = useCallback(() => {
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleNext, handlePrev]);

    return (
        <div data-theme={theme} className="font-sans overflow-hidden bg-black text-white w-screen h-screen relative">
            <ProgressBar currentSlide={currentSlide} totalSlides={totalSlides} />
            <ParticleBackground theme={theme} />
            <ThemeSwitcher currentTheme={theme} onChangeTheme={setTheme} />
            <div className="presentation w-full h-full relative z-[2]">
                {SLIDES_DATA.map((slide, index) => (
                    <Slide
                        key={slide.id}
                        slideData={slide}
                        isActive={index === currentSlide}
                    />
                ))}
            </div>
            <Navigation
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </div>
    );
};

export default App;