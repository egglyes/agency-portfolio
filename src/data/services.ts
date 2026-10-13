import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design-dev',
    number: '01',
    title: 'Website Design & Development',
    summary: 'Distinctive websites and digital experiences, designed with care and built to work beautifully across screens.',
    deliverables: [
      'Art-Directed UX/UI Design in Figma',
      'Production-Ready React / TypeScript Codebase',
      'Considered Interactions & Micro-Animations',
      'Responsive Layouts & Performance Optimization',
      'CMS Integration or Custom Headless Architecture'
    ],
    valueProposition: 'Bypasses the typical disconnect between designers and developers by delivering single-source vision from initial prototype to final production code.',
    idealFor: 'Startups, luxury brands, tech companies, and creative agencies requiring high-performance web presences.'
  },
  {
    id: 'brand-identity',
    number: '02',
    title: 'Brand Identity & Visual Systems',
    summary: 'Distinctive identities built around intentional typography, memorable marks, and a consistent visual language.',
    deliverables: [
      'Primary Logo, Wordmark & Secondary Marks',
      'Typography & Type Hierarchy',
      'Color Systems for Print & Screen',
      'Brand Guidelines & Digital Applications',
      'Real-world Collateral & Packaging Applications'
    ],
    valueProposition: 'Creates recognizable visual equity that establishes instant market credibility for new products or revitalizes existing businesses.',
    idealFor: 'Emerging startups, specialty boutique brands, and businesses preparing for capital raises or product launches.'
  },
  {
    id: 'social-video-editing',
    number: '03',
    title: 'Social Media Video Editing & Scripting',
    summary: 'Short-form content shaped from idea to final cut. I help creators and businesses develop clear scripts and edit engaging social videos designed for platforms such as Instagram Reels, TikTok, and YouTube Shorts.',
    deliverables: [
      'Short-Form Video Editing & Assembly',
      'Scriptwriting & Content Structure',
      'Hook & Opening Refinement',
      'Pacing, Dynamic Cuts & Storytelling',
      'Captions & On-Screen Typography',
      'Platform-Ready Exports for Vertical Formats'
    ],
    valueProposition: 'Transforms raw footage and abstract ideas into structured, high-retention vertical videos that capture audience attention immediately.',
    idealFor: 'Content creators, founders, consumer brands, and businesses looking to grow through organic vertical video.'
  }
];
