import React from 'react';
import s from './About.module.css';

const stats = [
  { value: '7+', label: 'YEARS BUILDING PRODUCTS' },
  { value: '50+', label: 'SHIPPED FEATURES' },
  { value: '∞', label: 'CUPS OF COFFEE' },
];

export default function About() {
  return (
    <section className={s.section} id="about">
      <div className={s.inner}>
        <span className={`${s.sectionTag} reveal`}>01 — ABOUT</span>
        <div className={s.content}>
          <h2 className={`${s.heading} reveal d1`}>
            A frontend engineer with a<br />preference for clarity, craft,<br />and considered detail.
          </h2>
          <div className={s.right}>
            <p className={`${s.body} reveal d2`}>
              I work across the full frontend stack — from resilient architectures
              to interfaces that feel calm to use. My approach is quiet and intentional:
              fewer abstractions, better edges, and code that ages gracefully.
            </p>
            <hr className={`${s.divider} reveal d3`} />
            <div className={`${s.stats} reveal d3`}>
              {stats.map(st => (
                <div key={st.label} className={s.stat}>
                  <span className={s.statVal}>{st.value}</span>
                  <span className={s.statLabel}>{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
