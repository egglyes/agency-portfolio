import React from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { CaseStudyData } from '../types';
import { SectionHeading } from './SectionHeading';

interface SelectedWorkProps { onSelectProject: (project: CaseStudyData) => void; }

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => (
  <section id="work" className="section-padding surface-ink">
    <div className="site-container">
      <SectionHeading number="01" label="Selected work" title="Ideas, made tangible.">
        A selection of brand identities, digital experiences, and visual systems. From first concept to final detail.
      </SectionHeading>
      <div className="project-grid">
        {PROJECTS_DATA.map((project, index) => (
          <article key={project.id} className={`project-card ${index === 0 ? 'project-featured' : ''}`}>
            <div className="project-visual">
              <img src={project.coverImage} alt={`${project.title} visual identity preview`} loading="lazy" width="1200" height="800" />
            </div>
            <div className="project-body">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow">{String(index + 1).padStart(2, '0')} / {index === 0 ? 'Brand & website' : index === 1 ? 'Digital experience' : 'Visual campaign'}</span>
                  <span className="font-mono text-[11px] text-neutral-400">{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.tagline}</p>
              </div>
              <div className="project-roles">{project.role.map(role => <span key={role}>{role}</span>)}</div>
              <div className="project-action"><span>Explore case study</span><span className="accent text-xl" aria-hidden="true">↗</span></div>
            </div>
            <button className="project-open" onClick={() => onSelectProject(project)} aria-haspopup="dialog" aria-label={`Explore ${project.title} case study`} />
          </article>
        ))}
      </div>
    </div>
  </section>
);
