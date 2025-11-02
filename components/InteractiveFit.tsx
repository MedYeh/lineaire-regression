import React, { useState, useRef, useCallback, useMemo } from 'react';

// A fixed set of data points for the scatter plot
const dataPoints = [
    { x: 100, y: 380 }, { x: 180, y: 310 }, { x: 250, y: 320 },
    { x: 320, y: 250 }, { x: 400, y: 240 }, { x: 480, y: 180 },
    { x: 550, y: 190 }, { x: 630, y: 120 }, { x: 700, y: 150 },
    { x: 780, y: 90 },
];

const InteractiveFit: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    // State for the two handles that define the line
    const [handles, setHandles] = useState([{ x: 150, y: 400 }, { x: 750, y: 100 }]);
    const [draggingHandle, setDraggingHandle] = useState<number | null>(null);

    // Memoized calculation for the line equation and errors
    const { m, b, sse } = useMemo(() => {
        const [p1, p2] = handles;
        // Avoid division by zero
        const slope = (p1.x === p2.x) ? Infinity : (p2.y - p1.y) / (p2.x - p1.x);
        const yIntercept = p1.y - slope * p1.x;
        
        let sumOfSquaredErrors = 0;
        dataPoints.forEach(point => {
            const predictedY = slope * point.x + yIntercept;
            const error = point.y - predictedY;
            sumOfSquaredErrors += error * error;
        });

        // Normalize SSE for better display
        return { m: slope, b: yIntercept, sse: sumOfSquaredErrors / 100000 };
    }, [handles]);


    const getMousePosition = (event: React.MouseEvent<SVGSVGElement>): { x: number; y: number } => {
        if (!svgRef.current) return { x: 0, y: 0 };
        const CTM = svgRef.current.getScreenCTM();
        if (!CTM) return { x: 0, y: 0 };
        return {
            x: (event.clientX - CTM.e) / CTM.a,
            y: (event.clientY - CTM.f) / CTM.d,
        };
    };

    const handleMouseDown = (index: number) => (event: React.MouseEvent) => {
        setDraggingHandle(index);
        event.stopPropagation();
    };

    const handleMouseMove = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
        if (draggingHandle === null) return;
        const { x, y } = getMousePosition(event);
        setHandles(prevHandles => {
            const newHandles = [...prevHandles];
            newHandles[draggingHandle] = { x, y };
            return newHandles;
        });
    }, [draggingHandle]);

    const handleMouseUp = useCallback(() => {
        setDraggingHandle(null);
    }, []);

    return (
        <div className="w-full flex flex-col items-center gap-2">
            <div className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-primary/20 rounded-xl p-2 md:p-4 shadow-2xl shadow-black/30">
                <svg
                    ref={svgRef}
                    viewBox="0 0 900 500"
                    className="w-full h-auto max-h-[50vh] cursor-grab"
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp} // Also stop dragging if mouse leaves svg
                >
                    <defs>
                        <pattern id="interactiveGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(var(--color-primary-rgb),0.1)" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="900" height="500" fill="url(#interactiveGrid)" />

                    {/* Axes and Labels */}
                    <g className="pointer-events-none">
                        <line x1="80" y1="50" x2="80" y2="450" className="stroke-primary/50" strokeWidth="3" />
                        <line x1="80" y1="450" x2="850" y2="450" className="stroke-primary/50" strokeWidth="3" />
                        <text x="465" y="480" textAnchor="middle" className="fill-primary text-base font-semibold">
                            Variable Indépendante (X)
                        </text>
                        <text x="40" y="250" textAnchor="middle" transform="rotate(-90 40 250)" className="fill-primary text-base font-semibold">
                            Variable Dépendante (Y)
                        </text>
                    </g>

                    {/* Data Points */}
                    {dataPoints.map((point, i) => (
                        <circle key={i} cx={point.x} cy={point.y} r="8" className="fill-highlight opacity-80" />
                    ))}

                    {/* Residuals (Error Lines) */}
                    {dataPoints.map((point, i) => {
                        const predictedY = m * point.x + b;
                        return (
                            <line
                                key={`res-${i}`}
                                x1={point.x}
                                y1={point.y}
                                x2={point.x}
                                y2={predictedY}
                                className="stroke-negative/60"
                                strokeWidth="2"
                                strokeDasharray="3 3"
                            />
                        );
})}
                    
                    {/* User-controllable Line */}
                    <line
                        x1={handles[0].x}
                        y1={handles[0].y}
                        x2={handles[1].x}
                        y2={handles[1].y}
                        className="stroke-primary"
                        strokeWidth="5"
                        strokeLinecap="round"
                    />

                    {/* Handles */}
                    {handles.map((handle, i) => (
                        <circle
                            key={i}
                            cx={handle.x}
                            cy={handle.y}
                            r="15"
                            className="fill-secondary cursor-pointer hover:fill-primary transition-colors"
                            onMouseDown={handleMouseDown(i)}
                        />
                    ))}
                </svg>
            </div>
            <div className="w-full max-w-sm bg-gradient-to-br from-accent/30 to-secondary/20 border-2 border-primary/50 rounded-lg p-3 text-center">
                <p className="text-sm text-white/80">Somme des Erreurs au Carré (SSE) :</p>
                <p className="font-mono text-primary text-xl font-bold tracking-wider">{sse.toFixed(2)}</p>
                <p className="text-xs text-white/60 mt-1">Essayez de minimiser cette valeur !</p>
            </div>
        </div>
    );
};

export default InteractiveFit;