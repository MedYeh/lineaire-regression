import React from 'react';
import type { SlideData } from '../types';

interface SlideProps {
    slideData: SlideData;
    isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ slideData, isActive }) => {
    const { type, content } = slideData;

    const transitionClasses = isActive
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8';

    const renderContent = () => {
        switch (type) {
            case 'title':
                return (
                    <div className="relative text-center">
                         <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer" />
                        <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent text-shadow mb-6 animate-fadeInScale tracking-wider">{content.title}</h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeInUp" style={{animationDelay: '0.3s'}}>{content.subtitle}</p>
                        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 border-2 border-primary/50 py-3 px-8 rounded-full text-base backdrop-blur-lg shadow-glow-sm animate-fadeInUp" style={{animationDelay: '0.6s'}}>{content.badge}</div>
                    </div>
                );
            case 'summary':
                return (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent mb-8 text-center animate-fadeInDown">{content.title}</h2>
                        <div className="flex flex-col gap-3 w-full max-w-3xl">
                            {content.summary?.map((item, index) => (
                                <div key={index} className="flex items-center gap-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-lg border border-primary/30 rounded-xl p-3 transition-all duration-400 hover:-translate-y-1 hover:border-primary/60 hover:shadow-hover-glow animate-fadeInUp" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                                    <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{item.number}</div>
                                    <div className="text-sm font-semibold text-white leading-snug">{item.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
             case 'code':
                return (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent mb-8 text-center animate-fadeInDown">{content.title}</h2>
                        <div className="w-full max-w-7xl flex-grow min-h-0 flex flex-col lg:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            <div className="w-full lg:w-1/2 flex flex-col">
                                {content.code}
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col">
                                {content.visualization}
                            </div>
                        </div>
                    </div>
                );
            default:
                 return (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent mb-8 text-center animate-fadeInDown">{content.header || content.title}</h2>
                        <div className="w-full max-w-6xl flex-grow min-h-0 flex items-center justify-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            {slideData.content.visualization}
                        </div>
                    </div>
                );
        }
    };
    
    const containerClasses = `w-full h-full absolute top-0 left-0 transition-all duration-500 ease-in-out flex flex-col px-4 md:px-12 pt-8 pb-28 items-center justify-center ${transitionClasses} ${!isActive ? 'pointer-events-none' : ''}`;

    return (
        <div className={containerClasses} >
            {renderContent()}
        </div>
    );
};

export default Slide;