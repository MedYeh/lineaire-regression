
import React from 'react';

interface ProgressBarProps {
    currentSlide: number;
    totalSlides: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentSlide, totalSlides }) => {
    const progress = totalSlides > 1 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

    return (
        <div 
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out z-[1001] shadow-glow-lg"
            style={{ width: `${progress}%` }}
        />
    );
};

export default ProgressBar;