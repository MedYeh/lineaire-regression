import React from 'react';
import type { SlideData } from '../types';
import InteractiveFit from '../components/InteractiveFit';

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-primary font-bold text-shadow-[0_0_10px_rgba(var(--color-primary-rgb),0.5)]">{children}</span>
);

const InfoBadge: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`bg-gradient-to-r from-accent/20 to-secondary/10 border-l-4 border-primary p-3 my-2 rounded-r-lg italic text-sm ${className}`}>
        {children}
    </div>
);

const FormulaBox: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={`bg-gradient-to-br from-accent/30 to-secondary/20 border-2 border-primary/50 rounded-lg p-3 my-2 text-center font-mono text-primary text-lg md:text-xl animate-pulse ${className}`}>
        {children}
    </div>
);

const MiniChart: React.FC<{ title: React.ReactNode, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-primary/20 rounded-lg p-3 text-center flex flex-col justify-center">
        <h4 className="text-primary mb-2 text-base font-bold">{title}</h4>
        <p className="text-sm leading-tight">{children}</p>
    </div>
);

const ContentPanel: React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => (
    <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-primary/20 rounded-xl p-4 shadow-2xl shadow-black/30 w-full ${className}`}>
        {children}
    </div>
);

const Li: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="relative pl-6 text-sm leading-relaxed mb-2 before:content-['◆'] before:absolute before:left-0 before:text-primary before:text-lg">
        {children}
    </li>
);

export const SLIDES_DATA: SlideData[] = [
    {
        id: 1,
        type: 'title',
        content: {
            title: '📊 RÉGRESSION LINÉAIRE',
            subtitle: 'Le Fondement du Machine Learning',
            badge: 'Presenté par Mohamed Yehdih',
        },
    },
    {
        id: 2,
        type: 'summary',
        content: {
            title: '📋 SOMMAIRE',
            summary: [
                { number: '01-05', title: 'Introduction & Concepts Clés' },
                { number: '06-10', title: 'Mécanique & Visualisations' },
                { number: '11-12', title: 'Évaluation & Applications' },
                { number: '13-15', title: 'Limites & Implémentation' },
                { number: '16', title: 'Conclusion' },
            ],
        },
    },
    {
        id: 3,
        type: 'visualization',
        content: {
            title: "🎯 Qu'est-ce que la Régression Linéaire ?",
            visualization: (
                <div className="w-full flex flex-col lg:flex-row gap-4 items-stretch">
                    <ContentPanel>
                        <h3 className="text-primary text-lg font-bold mb-2">Définition</h3>
                        <p className="text-sm leading-relaxed">Un algorithme qui modélise la <Highlight>relation</Highlight> entre des variables pour prédire une valeur numérique continue.</p>
                        <InfoBadge>💡 L'idée est de trouver la <Highlight>meilleure ligne droite</Highlight> qui traverse un nuage de points.</InfoBadge>
                    </ContentPanel>
                    <ContentPanel>
                        <h3 className="text-primary text-lg font-bold mb-2">Objectifs</h3>
                        <ul className="list-none p-0">
                            <Li>Comprendre les relations</Li>
                            <Li>Prédire des valeurs futures</Li>
                            <Li>Identifier les tendances</Li>
                        </ul>
                    </ContentPanel>
                </div>
            )
        }
    },
    {
        id: 4,
        type: 'visualization',
        content: {
            title: "✍️ À vous de jouer : Trouvez la meilleure droite !",
            visualization: (
                <div className="w-full flex flex-col gap-2 items-center">
                    <InteractiveFit />
                </div>
            )
        }
    },
    {
        id: 5,
        type: 'visualization',
        content: {
            title: "💡 L'Idée Générale",
            visualization: (
                <div className="w-full flex flex-col gap-4 items-center">
                    <ContentPanel className="text-center text-base md:text-lg">
                        Trouver une <Highlight>ligne optimale</Highlight> qui minimise l'erreur entre les prédictions et la réalité.
                    </ContentPanel>
                     <div className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-primary/20 rounded-xl p-2 md:p-4 shadow-2xl shadow-black/30">
                        <svg viewBox="0 0 800 400" className="w-full h-auto max-h-[45vh]">
                            <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(var(--color-primary-rgb),0.1)" strokeWidth="1"/></pattern></defs>
                            <rect width="800" height="400" fill="url(#grid)"/>
                            <g className="text-sm">
                                <line x1="60" y1="350" x2="760" y2="350" className="stroke-primary/80" strokeWidth="3"/>
                                <line x1="60" y1="350" x2="60" y2="50" className="stroke-primary/80" strokeWidth="3"/>
                                <circle cx="120" cy="310" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/></circle>
                                <circle cx="180" cy="275" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" begin="0.2s" repeatCount="indefinite"/></circle>
                                <circle cx="240" cy="250" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" begin="0.4s" repeatCount="indefinite"/></circle>
                                <circle cx="300" cy="210" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" begin="0.6s" repeatCount="indefinite"/></circle>
                                <circle cx="360" cy="195" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" begin="0.8s" repeatCount="indefinite"/></circle>
                                <circle cx="420" cy="180" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" begin="1s" repeatCount="indefinite"/></circle>
                                <circle cx="480" cy="140" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" begin="1.2s" repeatCount="indefinite"/></circle>
                                <circle cx="540" cy="110" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" begin="1.4s" repeatCount="indefinite"/></circle>
                                <circle cx="600" cy="95" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" begin="1.6s" repeatCount="indefinite"/></circle>
                                <circle cx="660" cy="70" r="8" className="fill-highlight opacity-80"><animate attributeName="r" values="8;12;8" dur="2s" begin="1.8s" repeatCount="indefinite"/></circle>
                                <line x1="60" y1="320" x2="760" y2="40" className="stroke-primary" strokeWidth="4" strokeDasharray="5,5"><animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/></line>
                                <text x="400" y="385" className="fill-primary" textAnchor="middle" fontWeight="600">Variable X (Indépendante)</text>
                                <text x="30" y="200" className="fill-primary" textAnchor="middle" fontWeight="600" transform="rotate(-90 30 200)">Variable Y (Dépendante)</text>
                                <circle cx="620" cy="30" r="6" className="fill-highlight"/><text x="635" y="35" fill="rgba(255,255,255,0.9)">Données réelles</text>
                                <line x1="615" y1="55" x2="645" y2="55" className="stroke-primary" strokeWidth="3"/><text x="655" y="60" fill="rgba(255,255,255,0.9)">Ligne de régression</text>
                            </g>
                        </svg>
                     </div>
                </div>
            )
        }
    },
    {
        id: 6,
        type: 'visualization',
        content: {
            title: '⚡ Exemple : Consommation Électrique',
            visualization: (
                <div className="w-full flex flex-col lg:flex-row gap-4 items-stretch">
                    <ContentPanel className="lg:flex-shrink-0 lg:w-2/5">
                        <h3 className="text-primary text-lg font-bold mb-2">Cas Pratique</h3>
                        <p className="text-sm leading-relaxed"><Highlight>Problème :</Highlight> Prédire la consommation d'énergie selon la température extérieure.</p>
                        <InfoBadge>🏢 Plus il fait froid → Plus on chauffe → Plus on consomme</InfoBadge>
                    </ContentPanel>
                    <ContentPanel className="flex-grow">
                         <svg viewBox="0 0 500 350" className="w-full h-auto max-h-[40vh]">
                            <defs><linearGradient id="tempGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" className="stop-cyan-400" /><stop offset="100%" className="stop-negative" /></linearGradient></defs>
                            <g className="text-xs">
                                <line x1="50" y1="300" x2="450" y2="300" className="stroke-primary/60" strokeWidth="2"/><line x1="50" y1="300" x2="50" y2="50" className="stroke-primary/60" strokeWidth="2"/>
                                <rect x="50" y="320" width="400" height="10" fill="url(#tempGrad)" rx="5"/><text x="50" y="345" className="fill-cyan-400">Froid</text><text x="450" y="345" className="fill-negative" textAnchor="end">Chaud</text>
                                <circle cx="100" cy="110" r="6" className="fill-primary"/><circle cx="150" cy="125" r="6" className="fill-primary"/><circle cx="200" cy="170" r="6" className="fill-primary"/><circle cx="250" cy="180" r="6" className="fill-primary"/><circle cx="300" cy="230" r="6" className="fill-primary"/><circle cx="350" cy="240" r="6" className="fill-primary"/><circle cx="400" cy="280" r="6" className="fill-primary"/>
                                <line x1="70" y1="90" x2="430" y2="280" className="stroke-special" strokeWidth="3" opacity="0.7" strokeDasharray="5,5"/>
                                <text x="250" y="30" className="fill-primary text-base font-bold" textAnchor="middle">Consommation vs Température</text>
                                <text x="20" y="180" fill="rgba(255,255,255,0.8)" transform="rotate(-90 20 180)">Consommation (kWh)</text>
                            </g>
                        </svg>
                    </ContentPanel>
                </div>
            )
        }
    },
    {
        id: 7,
        type: 'visualization',
        content: {
            title: '📐 La Formule Mathématique',
            visualization: (
                <div className="w-full flex flex-col gap-3 items-center">
                    <FormulaBox className="text-3xl md:text-4xl py-3 md:py-4">y = mx + b</FormulaBox>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 w-full">
                        <MiniChart title="📊 y">La valeur à prédire (sortie)</MiniChart>
                        <MiniChart title="📈 x">La donnée d'entrée (entrée)</MiniChart>
                        <MiniChart title="⚡ m">La pente (impact de x sur y)</MiniChart>
                        <MiniChart title="🎯 b">Le point de départ de la ligne</MiniChart>
                    </div>
                    <InfoBadge className="text-center w-full max-w-3xl mt-2">
                        🎯 L'algorithme trouve les meilleures valeurs de <Highlight>m</Highlight> et <Highlight>b</Highlight> pour minimiser l'erreur.
                    </InfoBadge>
                </div>
            )
        }
    },
    {
        id: 8,
        type: 'visualization',
        content: {
            title: "⚙️ Comment Ça Marche ?",
            visualization: (
                 <div className="w-full flex flex-col gap-3 items-center">
                    <ContentPanel>
                        <h3 className="text-primary text-lg font-bold mb-2">Le Processus d'Apprentissage</h3>
                        <ul className="list-none p-0 columns-1 sm:columns-2 gap-x-4 text-sm">
                            <Li><Highlight>Étape 1 :</Highlight> Initialiser m et b</Li>
                            <Li><Highlight>Étape 2 :</Highlight> Prédire les valeurs de y</Li>
                            <Li><Highlight>Étape 3 :</Highlight> Calculer l'erreur</Li>
                            <Li><Highlight>Étape 4 :</Highlight> Ajuster m et b pour réduire l'erreur</Li>
                            <Li><Highlight>Étape 5 :</Highlight> Répéter jusqu'à convergence</Li>
                        </ul>
                    </ContentPanel>
                     <div className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-primary/20 rounded-xl p-2 md:p-4 shadow-2xl shadow-black/30">
                        <h4 className="text-primary text-center text-base font-bold">Visualisation de la Descente de Gradient</h4>
                        <svg viewBox="0 0 700 250" className="w-full h-auto max-h-[25vh]">
                            <path d="M 50 200 Q 200 50 350 120 Q 500 200 650 50" fill="none" className="stroke-primary" strokeWidth="3" opacity="0.5"/>
                            <circle cx="80" cy="180" r="8" className="fill-highlight"><animate attributeName="cx" values="80;150;250;380;550;650" dur="5s" repeatCount="indefinite"/><animate attributeName="cy" values="180;120;80;110;70;50" dur="5s" repeatCount="indefinite"/></circle>
                            <g className="text-sm">
                                <text x="350" y="240" fill="rgba(255,255,255,0.8)" textAnchor="middle">Paramètres (m, b)</text>
                                <text x="30" y="125" fill="rgba(255,255,255,0.8)" textAnchor="middle" transform="rotate(-90 30 125)">Erreur</text>
                                <text x="650" y="40" className="fill-primary" textAnchor="middle">Minimum</text>
                            </g>
                        </svg>
                    </div>
                </div>
            )
        }
    },
    {
        id: 9,
        type: 'visualization',
        content: {
            title: "📊 Types de Régression Linéaire",
            visualization: (
                <div className="w-full flex flex-col lg:flex-row gap-4 items-stretch">
                    <ContentPanel className="text-center">
                        <h3 className="text-lg font-bold mb-2">📈 Régression Simple</h3>
                        <FormulaBox className="text-lg">y = mx + b</FormulaBox>
                        <p className="text-sm"><Highlight>Une seule</Highlight> variable d'entrée (x).</p>
                        <InfoBadge className="text-left text-xs">Ex: Prix d'une maison / surface</InfoBadge>
                        <svg viewBox="0 0 300 200" className="w-full h-auto max-h-[15vh] mt-1"><line x1="30" y1="170" x2="270" y2="170" className="stroke-primary/50" strokeWidth="2"/><line x1="30" y1="170" x2="30" y2="30" className="stroke-primary/50" strokeWidth="2"/><circle cx="60" cy="140" r="4" className="fill-primary"/><circle cx="100" cy="120" r="4" className="fill-primary"/><circle cx="140" cy="90" r="4" className="fill-primary"/><circle cx="180" cy="70" r="4" className="fill-primary"/><circle cx="220" cy="50" r="4" className="fill-primary"/><line x1="40" y1="150" x2="240" y2="40" className="stroke-special" strokeWidth="2"/></svg>
                    </ContentPanel>
                    <ContentPanel className="text-center">
                        <h3 className="text-lg font-bold mb-2">📊 Régression Multiple</h3>
                        <FormulaBox className="text-base px-1">y = m₁x₁ + ... + b</FormulaBox>
                        <p className="text-sm"><Highlight>Plusieurs</Highlight> variables d'entrée (x₁, x₂, ...)</p>
                        <InfoBadge className="text-left text-xs">Ex: Prix / surface, chambres, etc.</InfoBadge>
                         <svg viewBox="0 0 300 200" className="w-full h-auto max-h-[15vh] mt-1"><polygon points="150,50 250,100 150,150 50,100" className="fill-special/30 stroke-special" strokeWidth="2"/><circle cx="80" cy="90" r="4" className="fill-primary"/><circle cx="120" cy="110" r="4" className="fill-primary"/><circle cx="160" cy="100" r="4" className="fill-primary"/><circle cx="200" cy="120" r="4" className="fill-primary"/><circle cx="180" cy="80" r="4" className="fill-primary"/><text x="150" y="180" fill="rgba(255,255,255,0.7)" textAnchor="middle" className="text-xs">Plan de régression 3D</text></svg>
                    </ContentPanel>
                </div>
            )
        }
    },
    {
        id: 10,
        type: 'visualization',
        content: {
            title: "📉 Analyse Visuelle Complète",
            visualization: (
                <div className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-primary/20 rounded-xl p-2 md:p-4 shadow-2xl shadow-black/30">
                    <svg viewBox="0 0 1000 500" className="w-full h-auto max-h-[60vh]">
                        <defs><pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(var(--color-primary-rgb),0.1)" strokeWidth="0.5"/></pattern><linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" className="stop-primary" /><stop offset="100%" className="stop-special" /></linearGradient></defs>
                        <rect width="1000" height="500" fill="url(#smallGrid)"/>
                        <line x1="80" y1="420" x2="920" y2="420" className="stroke-primary" strokeWidth="3"/><line x1="80" y1="420" x2="80" y2="80" className="stroke-primary" strokeWidth="3"/>
                        <g><circle cx="150" cy="360" r="10" className="fill-highlight opacity-90"/><circle cx="290" cy="270" r="10" className="fill-highlight opacity-90"/><circle cx="430" cy="230" r="10" className="fill-highlight opacity-90"/><circle cx="570" cy="160" r="10" className="fill-highlight opacity-90"/><circle cx="710" cy="130" r="10" className="fill-highlight opacity-90"/><circle cx="850" cy="95" r="10" className="fill-highlight opacity-90"/></g>
                        <line x1="80" y1="380" x2="920" y2="60" stroke="url(#lineGrad)" strokeWidth="5" opacity="0.9"/>
                        <line x1="150" y1="360" x2="150" y2="365" className="stroke-highlight/80" strokeWidth="2" strokeDasharray="3,3"/><line x1="290" y1="270" x2="290" y2="300" className="stroke-highlight/80" strokeWidth="2" strokeDasharray="3,3"/><line x1="710" y1="130" x2="710" y2="140" className="stroke-highlight/80" strokeWidth="2" strokeDasharray="3,3"/>
                        <g className="text-lg">
                          <text x="500" y="460" className="fill-primary" textAnchor="middle" fontWeight="600">Variable Indépendante (X)</text>
                          <text x="40" y="250" className="fill-primary" textAnchor="middle" fontWeight="600" transform="rotate(-90 40 250)">Variable Dépendante (Y)</text>
                        </g>
                        <rect x="700" y="30" width="270" height="110" fill="rgba(0,0,0,0.7)" rx="10" className="stroke-primary/30" strokeWidth="1"/>
                        <g className="text-sm">
                          <circle cx="725" cy="55" r="6" className="fill-highlight"/><text x="740" y="60" fill="white">Points de données</text>
                          <line x1="715" y1="80" x2="735" y2="80" stroke="url(#lineGrad)" strokeWidth="4"/><text x="740" y="85" fill="white">Droite de régression</text>
                          <line x1="715" y1="105" x2="735" y2="105" className="stroke-highlight/80" strokeWidth="2" strokeDasharray="3,3"/><text x="740" y="110" fill="white">Résidus (erreurs)</text>
                        </g>
                    </svg>
                </div>
            )
        }
    },
    {
        id: 11,
        type: 'visualization',
        content: {
            title: "📊 Métriques d'Évaluation",
            visualization: (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
                    <ContentPanel>
                        <h3 className="text-primary font-bold text-base">R² - Coefficient de Détermination</h3>
                        <p className="text-xs">Quelle part de la variation est expliquée par le modèle ?</p>
                        <div className="my-2">
                           <div className="bg-gradient-to-r from-negative via-primary to-positive h-5 rounded-md" />
                           <div className="flex justify-between text-xs mt-1 px-1">
                               <span>Mauvais</span>
                               <span>Parfait</span>
                           </div>
                        </div>
                        <p className="text-center text-primary text-xs mt-2">Plus proche de 1 = Meilleur</p>
                    </ContentPanel>
                    <ContentPanel>
                         <h3 className="text-primary font-bold text-base">MSE - Mean Squared Error</h3>
                        <p className="text-xs">Moyenne des carrés des erreurs.</p>
                        <FormulaBox className="text-sm p-1.5">MSE = (1/n) Σ(yᵢ - ŷᵢ)²</FormulaBox>
                        <p className="text-center text-primary text-xs">Pénalise les grandes erreurs.</p>
                    </ContentPanel>
                    <ContentPanel>
                        <h3 className="text-primary font-bold text-base">RMSE - Root Mean Squared Error</h3>
                        <p className="text-xs">Racine carrée du MSE.</p>
                        <FormulaBox className="text-sm p-1.5">RMSE = √MSE</FormulaBox>
                        <p className="text-center text-primary text-xs">Interprétable (même unité que y).</p>
                    </ContentPanel>
                    <ContentPanel>
                        <h3 className="text-primary font-bold text-base">MAE - Mean Absolute Error</h3>
                        <p className="text-xs">Moyenne des valeurs absolues des erreurs.</p>
                        <FormulaBox className="text-sm p-1.5">MAE = (1/n) Σ|yᵢ - ŷᵢ|</FormulaBox>
                        <p className="text-center text-primary text-xs">Moins sensible aux outliers.</p>
                    </ContentPanel>
                </div>
            )
        }
    },
    {
        id: 12,
        type: 'visualization',
        content: {
            title: "🌍 Applications dans le Monde Réel",
            visualization: (
                <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3">
                    <MiniChart title="💰 Finance">Prédiction des prix d'actions, analyse de risque.</MiniChart>
                    <MiniChart title="🏠 Immobilier">Estimation du prix des biens immobiliers.</MiniChart>
                    <MiniChart title="📱 Marketing">Impact des pubs sur les ventes.</MiniChart>
                    <MiniChart title="⚕️ Santé">Relation entre style de vie et santé.</MiniChart>
                    <MiniChart title="⚡ Énergie">Prévision de consommation électrique.</MiniChart>
                    <MiniChart title="🌾 Agriculture">Prédiction du rendement des cultures.</MiniChart>
                </div>
            )
        }
    },
    {
        id: 13,
        type: 'visualization',
        content: {
            title: "⚠️ Limitations",
            visualization: (
                 <div className="w-full flex flex-col gap-3 items-center">
                    <ContentPanel>
                        <h3 className="text-primary text-lg font-bold mb-2">Points d'Attention</h3>
                        <ul className="list-none p-0 columns-1 sm:columns-2 gap-x-4 text-sm">
                            <Li>Suppose une relation <Highlight>linéaire</Highlight>.</Li>
                            <Li>Très sensible aux <Highlight>valeurs aberrantes</Highlight> (outliers).</Li>
                            <Li>Ne capture pas les <Highlight>relations complexes</Highlight>.</Li>
                        </ul>
                    </ContentPanel>
                     <div className="w-full flex flex-col sm:flex-row gap-3 items-stretch">
                         <div className="flex-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-primary/20 rounded-xl p-2 shadow-2xl shadow-black/30">
                           <svg viewBox="0 0 300 250" className="w-full h-auto max-h-[25vh]"><text x="150" y="20" textAnchor="middle" className="fill-positive text-sm font-bold">✓ Idéal Pour Ça</text><line x1="30" y1="220" x2="270" y2="220" className="stroke-primary/50" strokeWidth="2"/><line x1="30" y1="220" x2="30" y2="40" className="stroke-primary/50" strokeWidth="2"/><circle cx="60" cy="180" r="5" className="fill-positive"/><circle cx="120" cy="140" r="5" className="fill-positive"/><circle cx="180" cy="100" r="5" className="fill-positive"/><circle cx="240" cy="60" r="5" className="fill-positive"/><line x1="40" y1="195" x2="260" y2="50" className="stroke-primary" strokeWidth="3"/></svg>
                         </div>
                         <div className="flex-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-primary/20 rounded-xl p-2 shadow-2xl shadow-black/30">
                           <svg viewBox="0 0 300 250" className="w-full h-auto max-h-[25vh]"><text x="150" y="20" textAnchor="middle" className="fill-negative text-sm font-bold">✗ Inefficace Pour Ça</text><line x1="30" y1="220" x2="270" y2="220" className="stroke-primary/50" strokeWidth="2"/><line x1="30" y1="220" x2="30" y2="40" className="stroke-primary/50" strokeWidth="2"/><circle cx="60" cy="200" r="5" className="fill-negative"/><circle cx="90" cy="140" r="5" className="fill-negative"/><circle cx="150" cy="60" r="5" className="fill-negative"/><circle cx="210" cy="140" r="5" className="fill-negative"/><circle cx="240" cy="200" r="5" className="fill-negative"/><path d="M 60 200 Q 150 40 240 200" fill="none" className="stroke-special" strokeWidth="3"/><line x1="40" y1="150" x2="260" y2="150" className="stroke-primary" strokeWidth="3" opacity="0.3" strokeDasharray="5,5"/></svg>
                         </div>
                    </div>
                </div>
            )
        }
    },
    {
        id: 14,
        type: 'code',
        content: {
            title: '💻 Implémentation en Python : Cas Pratique',
            code: (
                <ContentPanel className="h-full flex flex-col">
                    <h3 className="text-primary text-lg font-bold mb-2">Charger, Entraîner & Évaluer</h3>
                    <div className="bg-black/60 border border-primary/30 rounded-lg p-3 font-mono text-[10px] sm:text-[11px] leading-snug text-gray-300 overflow-x-auto flex-grow">
                        <pre><code className="!whitespace-pre">
<span className="text-blue-400">import</span> pandas <span className="text-blue-400">as</span> pd
<span className="text-blue-400">from</span> sklearn.model_selection <span className="text-blue-400">import</span> train_test_split
<span className="text-blue-400">from</span> sklearn.linear_model <span className="text-blue-400">import</span> LinearRegression{"\n"}
<span className="text-gray-500"># 1. Charger les données depuis un CSV</span>
data = pd.<span className="text-yellow-300">read_csv</span>(<span className="text-orange-400">'consommation.csv'</span>){"\n"}
<span className="text-gray-500"># 2. Définir features (X) et cible (y)</span>
X = data[[<span className="text-orange-400">'temperature'</span>]]
y = data[<span className="text-orange-400">'consommation'</span>]{"\n"}
<span className="text-gray-500"># 3. Diviser les données (entraînement/test)</span>
X_train, X_test, y_train, y_test = <span className="text-yellow-300">train_test_split</span>(
    X, y, test_size=0.2, random_state=42
){"\n"}
<span className="text-gray-500"># 4. Entraîner le modèle</span>
model = <span className="text-yellow-300">LinearRegression</span>()
model.<span className="text-yellow-300">fit</span>(X_train, y_train){"\n"}
<span className="text-gray-500"># 5. Évaluer le modèle</span>
score = model.<span className="text-yellow-300">score</span>(X_test, y_test)
<span className="text-yellow-300">print</span>(<span className="text-orange-400">{`f"Score R² : {score:.2f}"`}</span>){"\n"}
<span className="text-gray-500"># 6. Faire une prédiction</span>
prediction = model.<span className="text-yellow-300">predict</span>([[18]])
<span className="text-yellow-300">print</span>(<span className="text-orange-400">{`f"Prédiction (18°C): {prediction[0]:.2f} kWh"`}</span>)
                        </code></pre>
                    </div>
                </ContentPanel>
            ),
            visualization: (
                <ContentPanel className="h-full">
                    <h3 className="text-primary text-lg font-bold mb-2">Commandes Clés pour l'Entraînement</h3>
                     <ul className="list-none p-0 space-y-2 text-left">
                        <li>
                           <h4 className="font-bold text-base"><Highlight>pd.read_csv()</Highlight></h4>
                           <p className="text-sm">Charge les données depuis un fichier CSV dans un DataFrame, la structure de base pour manipuler des données.</p>
                        </li>
                         <li>
                           <h4 className="font-bold text-base"><Highlight>train_test_split()</Highlight></h4>
                           <p className="text-sm">Sépare les données en un jeu d'entraînement (pour apprendre) et un jeu de test (pour évaluer), évitant ainsi le surapprentissage.</p>
                        </li>
                         <li>
                           <h4 className="font-bold text-base"><Highlight>model.fit(X_train, y_train)</Highlight></h4>
                           <p className="text-sm">La commande la plus importante. C'est ici que le modèle "apprend" la relation entre X et y.</p>
                        </li>
                         <li>
                           <h4 className="font-bold text-base"><Highlight>model.predict() & .score()</Highlight></h4>
                           <p className="text-sm">Utilise le modèle entraîné pour faire des prédictions sur de nouvelles données et évaluer sa performance (score R²).</p>
                        </li>
                    </ul>
                </ContentPanel>
            )
        }
    },
    {
        id: 15,
        type: 'visualization',
        content: {
            title: "💻 Modélisation en Python : Consommation Électrique",
            visualization: (
                <div className="w-full flex flex-col lg:flex-row gap-4 items-stretch">
                    <ContentPanel className="lg:w-1/2 flex flex-col">
                        <div className="w-full overflow-x-auto flex-grow">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-primary/40">
                                        <th className="p-2 md:p-3 font-bold text-primary text-sm">Température (°C)</th>
                                        <th className="p-2 md:p-3 font-bold text-primary text-sm text-right">Consommation (kWh)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-white/90 text-sm">
                                    <tr className="border-b border-white/10"><td className="p-2 md:p-3">5</td><td className="p-2 md:p-3 text-right">420</td></tr>
                                    <tr className="border-b border-white/10"><td className="p-2 md:p-3">10</td><td className="p-2 md:p-3 text-right">380</td></tr>
                                    <tr className="border-b border-white/10"><td className="p-2 md:p-3">15</td><td className="p-2 md:p-3 text-right">350</td></tr>
                                    <tr className="border-b border-white/10"><td className="p-2 md:p-3">20</td><td className="p-2 md:p-3 text-right">300</td></tr>
                                    <tr><td className="p-2 md:p-3">25</td><td className="p-2 md:p-3 text-right">270</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm italic text-white/70 mt-4 text-center shrink-0">
                            « Plus il fait froid, plus la consommation augmente. »
                        </p>
                    </ContentPanel>
                    <ContentPanel className="lg:w-1/2 flex flex-col">
                        <h3 className="text-primary text-lg font-bold mb-2 shrink-0">🧠 Étapes de la Modélisation</h3>
                        <ol className="list-decimal list-inside space-y-1 text-sm mb-3 text-white/90 shrink-0">
                            <li>Préparer les données</li>
                            <li>Entraîner le modèle avec <code className="text-secondary bg-black/30 px-1.5 py-0.5 rounded text-xs">LinearRegression()</code></li>
                            <li>Obtenir les coefficients <code className="text-secondary bg-black/30 px-1.5 py-0.5 rounded text-xs">a</code> et <code className="text-secondary bg-black/30 px-1.5 py-0.5 rounded text-xs">b</code></li>
                            <li>Visualiser la droite de régression</li>
                        </ol>
                        <div className="bg-black/60 border border-primary/30 rounded-lg p-3 font-mono text-[10px] sm:text-xs leading-snug text-gray-300 overflow-hidden flex-grow">
                            <pre><code>
{`from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[5], [10], [15], [20], [25]])
y = np.array([420, 380, 350, 300, 270])

model = LinearRegression()
model.fit(X, y)

a = model.coef_[0]
b = model.intercept_

prediction = model.predict([[18]])
print(f"Pour 18°C → consommation = {prediction[0]:.2f} kWh")`}
                            </code></pre>
                        </div>
                        <p className="text-sm text-white/90 mt-3 text-center shrink-0">
                            « Cette droite permet de prédire la consommation pour toute température donnée. »
                        </p>
                    </ContentPanel>
                </div>
            )
        }
    },
    {
        id: 16,
        type: 'visualization',
        content: {
            title: "🎓 Conclusion",
            visualization: (
                <div className="w-full flex flex-col gap-3 items-center">
                    <ContentPanel>
                        <h3 className="text-primary text-lg font-bold mb-2">À Retenir</h3>
                        <ul className="list-none p-0 text-sm">
                            <Li>La régression linéaire est un outil <Highlight>fondamental</Highlight>, simple et rapide.</Li>
                            <Li>Idéale pour modéliser des <Highlight>relations linéaires</Highlight>.</Li>
                            <Li>Limitée pour des phénomènes <Highlight>complexes</Highlight> et non-linéaires.</Li>
                            <Li>Une base essentielle pour comprendre le Machine Learning.</Li>
                        </ul>
                    </ContentPanel>
                     <div className="text-center mt-2">
                        <h2 className="text-primary text-xl md:text-2xl font-bold mb-2">Merci ! Questions ?</h2>
                    </div>
                </div>
            )
        }
    },
];