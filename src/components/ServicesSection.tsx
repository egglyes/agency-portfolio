import React from 'react';
import { SERVICES_DATA } from '../data/services';
import { SectionHeading } from './SectionHeading';

interface ServicesSectionProps { onInquireService: (serviceTitle: string) => void; }

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => (
  <section id="services" className="section-padding surface-ink">
    <div className="site-container">
      <SectionHeading number="03" label="Services" title="From identity to experience.">
        A focused set of creative services for founders, brands, and creators. Work together on a single need or the whole picture.
      </SectionHeading>
      <div>
        {SERVICES_DATA.map(service => (
          <article key={service.id} className="service-row">
            <div>
              <span className="eyebrow">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <button onClick={() => onInquireService(service.title)} className="nav-link mt-6 accent gap-5" aria-label={`Discuss ${service.title}`}>Discuss a project <span aria-hidden="true">↗</span></button>
            </div>
            <div>
              <span className="eyebrow text-neutral-400">What we can create</span>
              <ul className="service-deliverables">
                {service.deliverables.map(item => <li key={item}><span className="accent" aria-hidden="true">—</span><span>{item}</span></li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
