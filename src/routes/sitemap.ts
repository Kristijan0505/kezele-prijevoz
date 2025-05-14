import React from 'react';
import { Route } from 'react-router-dom';

export interface SitemapRoute {
  path: string;
  priority: number;
  changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastMod: string;
}

// This file helps with dynamic sitemap generation
export const sitemapRoutes: SitemapRoute[] = [
  {
    path: '/',
    priority: 1.0,
    changeFreq: 'weekly',
    lastMod: '2025-01-01'
  },
  {
    path: '/o-nama',
    priority: 0.8,
    changeFreq: 'monthly',
    lastMod: '2025-01-01'
  },
  {
    path: '/kontakt',
    priority: 0.8,
    changeFreq: 'monthly',
    lastMod: '2025-01-01'
  },
  {
    path: '/opci-ugovor',
    priority: 0.5,
    changeFreq: 'yearly',
    lastMod: '2025-01-01'
  },
  {
    path: '/prigovor',
    priority: 0.5,
    changeFreq: 'yearly',
    lastMod: '2025-01-01'
  }
];

export default sitemapRoutes;