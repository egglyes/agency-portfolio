import React from 'react';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => (
  <section id="hero" className="hero-section surface-paper">
    <div className="site-container hero-content">
      <span className="eyebrow mb-6">Independent designer & frontend developer</span>
      <h1 className="hero-title">
        <span className="hero-title-line">Visual judgment <em className="accent">meets</em>{' '}</span>
        <span className="hero-title-line">engineering <strong>PRECISION.</strong></span>
      </h1>
      <p className="hero-intro">
        I’m <strong className="font-semibold text-ink">Sami Ben</strong>, a designer and frontend developer based in Algiers.
        I bring brands to life through considered identities, distinctive websites, and engaging social video.
      </p>
      <div className="flex flex-wrap gap-3 mt-8">
        <button onClick={onContactClick} className="btn-primary">Start a project <span aria-hidden="true">↗</span></button>
        <button onClick={onExploreWork} className="btn-secondary">View selected work <span aria-hidden="true">↓</span></button>
      </div>
    </div>
    <div className="site-container">
      <div className="hero-bottom">
        <span className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue" aria-hidden="true" />Algiers, DZ / Working worldwide</span>
        <button onClick={onExploreWork} className="accent min-h-11">Selected work, 2026 <span aria-hidden="true">↓</span></button>
      </div>
    </div>
  </section>
);
