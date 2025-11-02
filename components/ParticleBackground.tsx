
import React, { useRef, useEffect } from 'react';
import type { Theme } from '../types';

interface ParticleBackgroundProps {
    theme: Theme;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ theme }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let blobs: Blob[] = [];
        const blobCount = 5;

        class Blob {
            x: number;
            y: number;
            r: number;
            vx: number;
            vy: number;
            color: string;

            constructor(width: number, height: number, currentTheme: Theme) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.r = (Math.random() * 200 + 300) * (width / 1920);
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                
                let hue: number;
                if (currentTheme === 'cyber-neon') {
                    hue = Math.random() > 0.5 ? 180 + Math.random() * 30 : 300 + Math.random() * 30; // Cyan or Pink/Magenta
                } else {
                    hue = 40 + Math.random() * 20; // Hues around gold/yellow
                }
                this.color = `hsl(${hue}, 100%, 50%)`;
            }

            update(width: number, height: number) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x - this.r < 0 || this.x + this.r > width) this.vx *= -1;
                if (this.y - this.r < 0 || this.y + this.r > height) this.vy *= -1;
            }

            draw(ctx: CanvasRenderingContext2D) {
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'transparent');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const setupBlobs = (width: number, height: number, currentTheme: Theme) => {
            blobs = [];
            for (let i = 0; i < blobCount; i++) {
                blobs.push(new Blob(width, height, currentTheme));
            }
        };
        
        const resizeCanvas = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            setupBlobs(canvas.width, canvas.height, theme);
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            ctx.globalAlpha = 0.08;
            ctx.filter = 'blur(120px)';

            blobs.forEach(blob => {
                blob.update(canvas.width, canvas.height);
                blob.draw(ctx);
            });
            
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[1] bg-black" />;
};

export default ParticleBackground;