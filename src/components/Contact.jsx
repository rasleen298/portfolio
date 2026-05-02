import React from 'react';
import s from './Contact.module.css';

const socials = [
  { label: 'LINKEDIN', href: '#' },
  { label: 'GITHUB', href: '#' },
  { label: 'TWITTER', href: '#' },
];

export default function Contact() {
  return (
    <section className={s.section} id="contact">
      <div className={s.curve} aria-hidden="true" />
      <div className={s.inner}>
        {/* blobs */}
        <div className={`${s.blob} ${s.blob1}`} aria-hidden="true" />
        <div className={`${s.blob} ${s.blob2}`} aria-hidden="true" />

        <div className={s.content}>
          <p className={`${s.tag} reveal`}>04 — CONTACT</p>
          <h2 className={`${s.heading} reveal d1`}>
            Let's build<br />
            <span className={s.gradientText}>something quiet.</span>
          </h2>
          <a href="mailto:rasleen@example.com" className={`${s.email} reveal d2`}>
            rasleen@example.com
          </a>
        </div>

        <footer className={s.footer}>
          <span className={s.copy}>© 2026 RASLEEN</span>
          <div className={s.socials}>
            {socials.map(s2 => (
              <a key={s2.label} href={s2.href} className={s.socialLink}>{s2.label}</a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
