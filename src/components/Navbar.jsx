import React, { useEffect, useState } from 'react';
import s from './Navbar.module.css';

const links = ['About', 'Work', 'Projects', 'Blogs', 'Contact'];

function scrollTo(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <span className={s.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Rasleen
      </span>
      <ul className={s.links}>
        {links.map(l => (
          <li key={l}>
            <button className={s.link} onClick={() => scrollTo(l)}>{l}</button>
          </li>
        ))}
      </ul>
      <button className={s.cta} onClick={() => scrollTo('Contact')}>GET IN TOUCH</button>
    </nav>
  );
}
