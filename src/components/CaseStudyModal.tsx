import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { CaseStudyData } from '../types';

interface CaseStudyModalProps {
  project: CaseStudyData | null;
  onClose: () => void;
  onSelectNext: (nextProject: CaseStudyData) => void;
  allProjects: CaseStudyData[];
}

const StorySection: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <section className="grid md:grid-cols-3 gap-6 pt-8 border-t border-current/20">
    <div><span className="eyebrow">{number}</span><h3 className="font-serif text-[30px] leading-tight mt-2">{title}</h3></div>
    <div className="md:col-span-2 text-[15px] sm:text-[16px] leading-[1.8] space-y-5">{children}</div>
  </section>
);

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onSelectNext, allProjects }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = !!project;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.scrollTop = 0;
      dialog.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true });
    }
  }, [project?.id]);

  if (!project) return null;
  const currentIndex = allProjects.findIndex(item => item.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const surfaceClass = project.surfaceTheme === 'paper' ? 'surface-paper'
    : project.surfaceTheme === 'black' ? 'surface-ink'
    : project.surfaceTheme === 'blue' ? 'surface-blue' : 'surface-white';

  return (
    <dialog ref={dialogRef} aria-labelledby="case-study-title" className={`case-study-dialog ${surfaceClass}`}
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}>
      <div className="sticky top-0 z-10 bg-inherit border-b border-current/20 px-6 sm:px-10 py-3 flex items-center justify-between gap-4">
        <span className="eyebrow">Case study / {String(currentIndex + 1).padStart(2, '0')}</span>
        <button autoFocus onClick={onClose} aria-label="Close case study" className="flex items-center gap-2 min-h-11 text-[12px]"><span>Close</span><X size={18} aria-hidden="true" /></button>
      </div>
      <div className="p-6 sm:p-10 space-y-10 sm:space-y-12">
        <div>
          <div className="eyebrow">{project.discipline} / {project.year}</div>
          <h2 id="case-study-title" className="font-serif text-[clamp(40px,5vw,72px)] leading-[1.05] mt-4">{project.title}</h2>
          <p className="font-serif text-[24px] sm:text-[30px] leading-tight mt-3 opacity-75">{project.tagline}</p>
          <p className="mt-6 text-[15px] sm:text-[17px] leading-[1.8] max-w-[68ch]">{project.summary}</p>
          <p className="font-mono text-[10px] leading-relaxed opacity-60 mt-5">{project.client}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.role.map(role => <span key={role} className="text-[11px] px-3 py-1.5 border border-current/25">{role}</span>)}
          </div>
          <img src={project.coverImage} alt={`${project.title} visual identity preview`} width="1200" height="800" className="w-full h-auto mt-8 border border-current/20" />
        </div>
        <StorySection number="01" title="The brief"><p>{project.challenge}</p></StorySection>
        <StorySection number="02" title="The direction"><p>{project.direction}</p><p className="opacity-75">{project.systemDescription}</p></StorySection>
        <section className="pt-8 border-t border-current/20">
          <span className="eyebrow">03 / Details of the system</span>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {project.artifacts.map(artifact => (
              <div key={artifact.title} className="min-w-0 border border-current/20 p-5 sm:p-6">
                <h3 className="font-serif text-[26px] leading-tight">{artifact.title}</h3>
                <p className="text-[14px] leading-relaxed opacity-75 mt-3">{artifact.caption}</p>
                {artifact.paletteColors && <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  {artifact.paletteColors.map(color => <div key={color}><div className="h-14 border border-current/20" style={{backgroundColor: color}} /><span className="font-mono text-[10px] block mt-2">{color}</span></div>)}
                </div>}
                {artifact.codeSnippet && <pre className="mt-6 p-4 bg-[#0A0A0A] text-white text-[11px] sm:text-[12px] leading-relaxed font-mono"><code>{artifact.codeSnippet}</code></pre>}
                {artifact.url && <img src={artifact.url} alt={artifact.title} loading="lazy" className="w-full h-auto mt-6" />}
              </div>
            ))}
          </div>
        </section>
        <StorySection number="04" title="Across screens">
          <p>{project.responsiveShowcase.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Visit live demo ↗</a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">View source ↗</a>}
          </div>
        </StorySection>
        <StorySection number="05" title="What I learned"><p>{project.reflection}</p></StorySection>
      </div>
      <div className="p-6 sm:p-10 border-t border-current/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div><span className="eyebrow">Next project</span><h3 className="font-serif text-[30px] mt-2">{nextProject.title}</h3></div>
        <button className="btn-primary" onClick={() => onSelectNext(nextProject)}>Next case study <span aria-hidden="true">→</span></button>
      </div>
    </dialog>
  );
};
