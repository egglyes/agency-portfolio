import React from 'react';
import { SectionHeading } from './SectionHeading';

const capabilities = [
  ['Website design & development', 'React / Vite'],
  ['Brand identity & logos', 'Visual systems'],
  ['Graphic design', 'Print & digital'],
  ['Social video & scripting', 'Reels / Shorts'],
];

export const AboutSection: React.FC = () => (
  <section id="about" className="section-padding surface-paper">
    <div className="site-container">
      <SectionHeading number="02" label="About" title="One mind. Both sides.">
        Design thinking and technical craft, connected from the start.
      </SectionHeading>
      <div className="site-grid items-start gap-y-12">
        <div className="col-span-4 sm:col-span-6 lg:col-span-7 lg:pr-12">
          <h3 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.2] max-w-[28ch]">Good design deserves an equally thoughtful build.</h3>
          <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-ink/75 max-w-[56ch]">
            <p>I’m Sami Ben, a designer and developer based in Algiers. My practice brings together brand identity, website design and development, graphic design, and social media video.</p>
            <p>Working across design and engineering means the details survive the handoff: the typography, the interactions, and the feeling that makes a brand its own.</p>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-6 lg:col-span-5">
          <span className="eyebrow mb-4">Across disciplines</span>
          <ul className="border-t border-ink/20">
            {capabilities.map(([title, detail]) => (
              <li key={title} className="py-5 border-b border-ink/15 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[14px] font-medium">{title}</span>
                <span className="font-mono text-[10px] accent">{detail}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[12px] leading-relaxed text-ink/60">Selected work includes self-initiated projects, identified in each case study.</p>
        </div>
      </div>
    </div>
  </section>
);
