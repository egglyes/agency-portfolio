import React, { useEffect, useRef, useState } from 'react';
import { Plus, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const background = [...document.querySelectorAll<HTMLElement>('main, footer')];
    const previousInert = background.map(element => element.inert);
    document.body.style.overflow = 'hidden';
    background.forEach(element => { element.inert = true; });
    headerRef.current?.querySelector<HTMLAnchorElement>('#mobile-navigation a')?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
      if (event.key === 'Tab') {
        const controls = [...(headerRef.current?.querySelectorAll<HTMLElement>('a, button') ?? [])]
          .filter(element => element.getClientRects().length);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      window.removeEventListener('keydown', handleKey);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [mobileMenuOpen]);

  const navigate = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
    if (mobileMenuOpen) {
      requestAnimationFrame(() => {
        const section = document.getElementById(id);
        section?.setAttribute('tabindex', '-1');
        section?.focus({ preventScroll: true });
      });
    }
  };

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-40 h-[72px] surface-paper border-b border-ink/15">
      <div className="site-container h-full flex items-center justify-between gap-8">
        <a href="#hero" onClick={event => navigate(event, 'hero')} className="flex items-center gap-3 min-h-11 whitespace-nowrap text-[17px] font-bold tracking-tight hover:text-blue" aria-label="Sami Ben, home">
          <span>SAMI BEN</span>
          <span className="hidden lg:inline font-mono text-[10px] font-normal tracking-normal text-ink/50">/ portfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={event => navigate(event, item.id)} aria-current={activeSection === item.id ? 'location' : undefined} className={`nav-link ${activeSection === item.id ? 'active' : ''}`}>{item.label}</a>
          ))}
        </nav>
        <a href="#contact" onClick={event => navigate(event, 'contact')} className="btn-primary hidden lg:inline-flex min-h-10 py-2.5 px-5">Start a project <span aria-hidden="true">↗</span></a>
        <button ref={menuToggleRef} onClick={() => setMobileMenuOpen(open => !open)} className="md:hidden flex items-center gap-3 min-h-11 text-[13px]" aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? 'Close' : 'Menu'}{mobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bottom-0 surface-paper overflow-y-auto flex flex-col px-6 py-8">
          <nav id="mobile-navigation" aria-label="Mobile Navigation" className="flex flex-col">
            {navItems.map((item, index) => (
              <a key={item.id} href={`#${item.id}`} onClick={event => navigate(event, item.id)} className="flex items-center justify-between gap-4 border-b border-ink/15 py-5 font-serif text-[40px] hover:text-blue" aria-current={activeSection === item.id ? 'location' : undefined}>
                {item.label}<span className="font-mono text-[11px] accent">0{index + 1}</span>
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <a href="#contact" onClick={event => navigate(event, 'contact')} className="btn-primary w-full">Start a project <span aria-hidden="true">↗</span></a>
            <p className="mt-5 font-mono text-[10px] text-ink/60">Algiers, DZ / Working worldwide</p>
          </div>
        </div>
      )}
    </header>
  );
};
