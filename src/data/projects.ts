import { CaseStudyData } from '../types';

// Encode the entire SVG; ampersands in SVG text must be valid XML.
const svgImage = (svg: string) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
const MAISON_COVER = svgImage(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" fill="none"><rect width="1200" height="800" fill="#F5F1E8"/><rect x="80" y="80" width="1040" height="640" border="1" stroke="#171717" stroke-width="2" fill="none"/><line x1="80" y1="240" x2="1120" y2="240" stroke="#171717" stroke-width="1.5"/><line x1="480" y1="240" x2="480" y2="720" stroke="#171717" stroke-width="1.5"/><text x="120" y="180" font-family="Georgia, serif" font-size="64" font-style="italic" fill="#0000FF">Maison Atelier</text><text x="120" y="210" font-family="monospace" font-size="14" letter-spacing="4" fill="#171717">SPECIALTY ROASTERY &amp; BRAND SYSTEM</text><circle cx="800" cy="520" r="110" stroke="#0000FF" stroke-width="3" fill="none"/><circle cx="800" cy="520" r="64" stroke="#171717" stroke-width="1.5" stroke-dasharray="6 6" fill="none"/><text x="520" y="320" font-family="sans-serif" font-size="24" font-weight="600" fill="#171717">01 / BRAND IDENTITY &amp; WEB FLAGSHIP</text><text x="520" y="360" font-family="sans-serif" font-size="16" fill="#666666">Identity Design • Custom Typography • React Flagship</text><rect x="120" y="300" width="300" height="360" fill="#171717"/><text x="150" y="480" font-family="serif" font-size="36" fill="#F5F1E8">M.A 2026</text></svg>`);

const VORTEX_COVER = svgImage(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" fill="none"><rect width="1200" height="800" fill="#171717"/><path d="M0 160H1200M0 320H1200M0 480H1200M0 640H1200M240 0V800M480 0V800M720 0V800M960 0V800" stroke="#262626" stroke-width="1"/><rect x="120" y="120" width="960" height="560" fill="#0A0A0A" stroke="#6978FF" stroke-width="2"/><rect x="120" y="120" width="960" height="40" fill="#1A1A1A" stroke="#262626" stroke-width="1"/><circle cx="150" cy="140" r="6" fill="#FF5F56"/><circle cx="170" cy="140" r="6" fill="#FFBD2E"/><circle cx="190" cy="140" r="6" fill="#27C93F"/><text x="220" y="145" font-family="monospace" font-size="12" fill="#888888">vortex-os // telemetry-node-01</text><text x="180" y="240" font-family="sans-serif" font-size="48" font-weight="700" fill="#FFFFFF">VORTEX <tspan fill="#A3ADFF">OS</tspan></text><text x="180" y="280" font-family="monospace" font-size="16" fill="#A3ADFF">&gt; Real-Time Data Pipeline Infrastructure</text><rect x="180" y="340" width="380" height="260" fill="#141414" stroke="#333333"/><text x="210" y="390" font-family="monospace" font-size="14" fill="#A3ADFF">$ vortex deploy --prod</text><text x="210" y="420" font-family="monospace" font-size="14" fill="#888888">✔ Engine compiled (14ms)</text><text x="210" y="450" font-family="monospace" font-size="14" fill="#888888">✔ Edge Nodes Synced [EU/NA/AF]</text><rect x="600" y="340" width="420" height="260" fill="#141414" stroke="#333333"/><path d="M630 520 L700 440 L780 480 L860 380 L980 410" stroke="#6978FF" stroke-width="3" fill="none"/><circle cx="860" cy="380" r="5" fill="#FFFFFF"/></svg>`);

const ECHOES_COVER = svgImage(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" fill="none"><rect width="1200" height="800" fill="#FFFFFF"/><rect x="40" y="40" width="1120" height="720" stroke="#171717" stroke-width="3" fill="none"/><line x1="40" y1="200" x2="1160" y2="200" stroke="#171717" stroke-width="2"/><line x1="600" y1="40" x2="600" y2="760" stroke="#171717" stroke-width="2"/><text x="80" y="140" font-family="Georgia, serif" font-size="72" font-weight="bold" fill="#171717">ECHOES OF</text><text x="640" y="140" font-family="Georgia, serif" font-size="72" font-style="italic" fill="#0000FF">MODERNISM</text><rect x="80" y="240" width="480" height="460" fill="#0000FF"/><text x="120" y="320" font-family="monospace" font-size="16" fill="#FFFFFF">EXHIBITION 2026 // TRIENNALE</text><text x="120" y="650" font-family="sans-serif" font-size="64" font-weight="900" fill="#FFFFFF">01 — 28</text><text x="120" y="680" font-family="monospace" font-size="14" fill="#FFFFFF">OCTOBER / ALGIERS &amp; PARIS</text><circle cx="880" cy="480" r="180" stroke="#171717" stroke-width="4" fill="none"/><path d="M700 480 H1060 M880 300 V660" stroke="#171717" stroke-width="1.5"/></svg>`);

export const PROJECTS_DATA: CaseStudyData[] = [
  {
    id: 'maison-atelier',
    title: 'Maison Atelier',
    tagline: 'High-end specialty roastery & editorial digital flagship store',
    subtitle: 'Self-Initiated Brand Identity & Full Frontend Implementation',
    client: 'Maison Atelier Specialty Coffee (Self-Initiated)',
    year: '2026',
    role: ['Brand Identity', 'Visual Systems', 'Frontend Engineering'],
    discipline: 'Complete Identity & Web Flagship',
    surfaceTheme: 'paper',
    coverImage: MAISON_COVER,
    summary: 'A complete brand identity and editorial web flagship designed for an artisan coffee roastery. Pairing expressive typography with considered digital interactions.',
    challenge: 'Specialty coffee brands often fall into generic rustic trends or hyper-minimalist cold corporate aesthetics. The challenge was to forge a warm, editorial luxury identity that translates seamlessly into a high-performance web experience.',
    direction: 'Warm paper tones and expressive product typography set the editorial direction. A high-contrast serif is paired with a readable sans-serif for origin notes and product details.',
    systemDescription: 'The visual system relies on a warm paper canvas (#F5F1E8) contrasting with ink black stroke grids (#171717) and an electric blue signature tag (#0000FF) denoting organic single-origin releases.',
    artifacts: [
      {
        title: 'Brand Palette System',
        type: 'palette',
        caption: 'Strict chromatic contrast between Warm Paper, Deep Roasted Ink, and Pure Electric Blue.',
        paletteColors: ['#F5F1E8', '#171717', '#0000FF', '#FFFFFF']
      },
      {
        title: 'Typography Hierarchy',
        type: 'typography',
        caption: 'Instrument Serif for editorial quotes & product titles; Plus Jakarta Sans for origin coordinates and body copy.',
        codeSnippet: `/* Typographic Scale Token */\n.heading-editorial {\n  font-family: 'Instrument Serif', serif;\n  font-size: clamp(2.5rem, 5vw, 4.5rem);\n  font-style: italic;\n  color: #0000FF;\n}`
      }
    ],
    responsiveShowcase: {
      desktopUrl: MAISON_COVER,
      mobileUrl: MAISON_COVER,
      description: 'Fully responsive React implementation ensuring fluid font scaling and seamless checkout drawer interactions across mobile and desktop viewports.'
    },
    reflection: 'Building both the brand system and code base simultaneously prevented the usual friction between design intent and frontend feasibility. The process keeps typography, responsive layouts, and component behavior part of the same design conversation.',
    githubUrl: 'https://github.com/samiben/maison-atelier'
  },
  {
    id: 'vortex-os',
    title: 'Vortex OS',
    tagline: 'Developer platform & real-time analytics engine landing page',
    subtitle: 'SaaS Positioning, Product Design & Interactive Web Showcase',
    client: 'Vortex Cloud Inc. (Self-Initiated Concept)',
    year: '2026',
    role: ['UI/UX Design', 'Design Systems', 'Frontend Engineering'],
    discipline: 'Technology / SaaS Landing Page',
    surfaceTheme: 'black',
    coverImage: VORTEX_COVER,
    summary: 'An authoritative, dark-mode SaaS landing page for an edge data telemetry platform. Designed to convert engineering leads with interactive code playgrounds and live architecture previews.',
    challenge: 'Developer tools often suffer from cluttered interfaces, confusing technical jargon, and generic dark-mode templates. Vortex OS needed to communicate complex distributed edge node concepts in seconds.',
    direction: 'A dark ink background, electric blue telemetry lines, and clear monospaced code blocks make technical information easier to scan.',
    systemDescription: 'Interactive tabbed code components, live node status indicators, and zero layout shift micro-animations powered by GSAP and Framer Motion.',
    artifacts: [
      {
        title: 'Design System & UI Tokens',
        type: 'palette',
        caption: 'High-contrast dark mode palette engineered for reduced eye strain during code inspection.',
        paletteColors: ['#171717', '#0A0A0A', '#0000FF', '#00FF66']
      },
      {
        title: 'Interactive Telemetry Playground',
        type: 'code',
        caption: 'React component rendering real-time CLI terminal output with simulated edge network latency.',
        codeSnippet: `const TelemetryNode = ({ id, ping }: { id: string; ping: number }) => (\n  <div className="flex items-center justify-between border border-white/20 p-3">\n    <span className="font-mono text-sm">{id}</span>\n    <span className="text-electric-blue font-mono">{ping}ms</span>\n  </div>\n);`
      }
    ],
    responsiveShowcase: {
      desktopUrl: VORTEX_COVER,
      mobileUrl: VORTEX_COVER,
      description: 'Optimized touch navigation with responsive code tabs and collapsible system architecture diagrams for mobile engineers.'
    },
    reflection: 'Designing for developers requires hyper-accuracy in technical terminology and clean execution. The concept explores how code previews and concise product explanations can make a technical platform easier to understand.',
    liveUrl: 'https://vortex-os-demo.vercel.app'
  },
  {
    id: 'echoes-of-modernism',
    title: 'Echoes of Modernism',
    tagline: 'Cultural exhibition campaign & graphic design system',
    subtitle: 'Poster Series, Social Media Grid & Digital Catalog',
    client: 'Algiers & Paris Architecture Triennale',
    year: '2026',
    role: ['Graphic Design', 'Poster Design', 'Visual Identity'],
    discipline: 'Visual Campaign & Editorial System',
    surfaceTheme: 'white',
    coverImage: ECHOES_COVER,
    summary: 'A striking visual campaign celebrating 100 years of Mediterranean modernism. Spanning printed exhibition posters, billboard visuals, and an interactive digital pavilion catalog.',
    challenge: 'The campaign needed to bridge historical architectural rigor with contemporary digital visual culture, creating a cross-cultural aesthetic resonant in both North Africa and Europe.',
    direction: 'Bold proportions and electric blue color blocks create a distinctive rhythm across crisp white surfaces. The composition carries from printed posters to digital layouts.',
    systemDescription: 'A custom typographic grid combining large scale serif display headlines with functional monospaced exhibition coordinates.',
    artifacts: [
      {
        title: 'Exhibition Poster Grid',
        type: 'image',
        caption: 'Primary A0 exhibition poster using strict asymmetrical grid dividers and electric blue accents.',
        url: ECHOES_COVER
      }
    ],
    responsiveShowcase: {
      desktopUrl: ECHOES_COVER,
      mobileUrl: ECHOES_COVER,
      description: 'Digital exhibition pavilion web catalog displaying high-resolution poster archives and interactive gallery routes.'
    },
    reflection: 'Demonstrates graphic direction and pure visual composition outside traditional app interfaces, proving how grid systems translate seamlessly across physical print and digital screens.'
  }
];
