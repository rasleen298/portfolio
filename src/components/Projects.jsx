import React, { useState } from 'react';
import s from './Projects.module.css';

const projects = [
  {
    num: '001',
    label: 'FEATURED PROJECT',
    title: 'Pulse Dashboard',
    desc: 'A real-time analytics dashboard built with React and WebSockets. Visualizes complex data streams with custom charts and zero-lag interactions — designed to feel calm under pressure.',
    stack: ['REACT', 'TYPESCRIPT', 'WEBSOCKETS', 'D3', 'VITE'],
    gradient: 'linear-gradient(135deg, #a78bfa, #60a5fa, #34d399)',
    links: [{ label: 'LIVE DEMO ↗', href: '#' }, { label: 'GITHUB ↗', href: '#' }],
  },
  {
    num: '002',
    label: 'OPEN SOURCE',
    title: 'Forge UI',
    desc: 'A headless, accessible React component library with 40+ components. Zero dependencies, full TypeScript support, and a flexible theming API built for design systems.',
    stack: ['REACT', 'TYPESCRIPT', 'STORYBOOK', 'VITEST', 'ROLLUP'],
    gradient: 'linear-gradient(135deg, #f9a8d4, #fb923c, #fbbf24)',
    links: [{ label: 'NPM ↗', href: '#' }, { label: 'GITHUB ↗', href: '#' }],
  },
  {
    num: '003',
    label: 'CHROME EXTENSION',
    title: 'Perf Lens',
    desc: 'A DevTools extension surfacing Core Web Vitals in real-time with actionable fix suggestions. Helps frontend teams ship faster pages without leaving the browser.',
    stack: ['VUE 3', 'VITE', 'CHROME API', 'TYPESCRIPT'],
    gradient: 'linear-gradient(135deg, #2dd4bf, #6366f1, #e879f9)',
    links: [{ label: 'CHROME STORE ↗', href: '#' }, { label: 'DOCS ↗', href: '#' }],
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section className={s.section} id="projects">
      <div className={s.inner}>
        <div className={s.header}>
          <div>
            <span className={`${s.sectionTag} reveal`}>03 — SELECTED WORK</span>
            <h2 className={`${s.heading} reveal d1`}>Projects</h2>
          </div>
          <span className={`${s.counter} reveal d1`}>
            {String(active + 1).padStart(3, '0')} / {String(projects.length).padStart(3, '0')}
          </span>
        </div>

        <div className={s.layout}>
          {/* Left: visual mockup */}
          <div className={`${s.visual} reveal d2`}>
            <div className={s.phoneWrap}>
              <div className={s.glow} style={{ background: project.gradient }} />
              <div className={s.phone}>
                <div className={s.phoneToph}>
                  <span className={s.phoneTime}>9:41</span>
                  <div className={s.phoneIsland} />
                  <span className={s.phoneBat}>100%</span>
                </div>
                <div className={s.phoneScreen}>
                  <p className={s.screenLabel}>{project.label}</p>
                  <h3 className={s.screenTitle}>{project.title}</h3>
                  <div className={s.screenLines}>
                    {[92, 75, 85, 60, 78].map((w, i) => (
                      <div key={i} className={s.screenLine} style={{ width: `${w}%`, opacity: 0.6 - i * 0.08 }} />
                    ))}
                  </div>
                  <div className={s.screenTags}>
                    {project.stack.slice(0, 3).map(t => (
                      <span key={t} className={s.screenTag}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className={s.phoneFab}>+</div>
              </div>
            </div>
            {/* Dot nav */}
            <div className={s.dots}>
              {projects.map((_, i) => (
                <button key={i} className={`${s.dot} ${i === active ? s.dotActive : ''}`} onClick={() => setActive(i)} aria-label={`Project ${i + 1}`} />
              ))}
            </div>
          </div>

          {/* Right: info */}
          <div className={`${s.info} reveal d3`}>
            <p className={s.infoLabel}>{project.label}</p>
            <h3 className={s.infoTitle}>{project.title}</h3>
            <p className={s.infoDesc}>{project.desc}</p>
            <div className={s.stack}>
              {project.stack.map(t => (
                <span key={t} className={s.stackTag}>{t}</span>
              ))}
            </div>
            <div className={s.infoActions}>
              {project.links.map(l => (
                <a key={l.label} href={l.href} className={l.label.includes('LIVE') || l.label.includes('NPM') || l.label.includes('CHROME') ? s.btnPrimary : s.btnGhost}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
