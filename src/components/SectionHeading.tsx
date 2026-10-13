import React from 'react';

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ number, label, title, children }) => (
  <div className="section-heading">
    <div>
      <span className="eyebrow">{number} / {label}</span>
      <h2>{title}</h2>
    </div>
    <p>{children}</p>
  </div>
);
