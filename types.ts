
import React from 'react';

export type Theme = 'premium-gold' | 'cyber-neon';

export interface SlideContent {
    title: string;
    subtitle?: string;
    badge?: string;
    summary?: { number: string; title: string }[];
    header?: string;
    panels?: { title: string; content: React.ReactNode }[];
    description?: string;
    visualization?: React.ReactNode;
    formula?: string;
    metrics?: { title: string; content: React.ReactNode }[];
    items?: { title: string; description: string }[];
    code?: React.ReactNode;
    ethics?: { title: string; content: React.ReactNode }[];
    conclusion?: { title: string; content: React.ReactNode }[];
}

export type SlideType = 
  | 'title' 
  | 'summary' 
  | 'content'
  | 'visualization'
  | 'formula'
  | 'metrics'
  | 'grid'
  | 'code'
  | 'conclusion';

export interface SlideData {
    id: number;
    type: SlideType;
    content: SlideContent;
}