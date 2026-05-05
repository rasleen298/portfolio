import React, { useState } from 'react';
import s from './Medium.module.css';

// const blogs = [
//   {
//     tag: 'PERFORMANCE',
//     title: 'How I Cut Bundle Size by 40% Without Changing a Single Feature',
//     excerpt:
//       'A deep dive into tree shaking, dynamic imports, and the subtle mistakes most teams make when optimising their Webpack or Vite config.',
//     date: 'APR 2026',
//     readTime: '7 min read',
//     href: '#',
//   },
//   {
//     tag: 'REACT',
//     title: 'The Right Way to Use useEffect — and When Not To',
//     excerpt:
//       'Most bugs I see in production React apps come down to useEffect misuse. Heres a mental model that has saved me countless hours of debugging.',
//     date: 'MAR 2026',
//     readTime: '5 min read',
//     href: '#',
//   },
//   {
//     tag: 'CSS',
//     title: 'CSS Cascade Layers Are the Feature You\'re Not Using Yet',
//     excerpt:
//       'Cascade layers give you explicit control over specificity without resorting to !important hacks. Heres how I restructured an entire design system with them.',
//     date: 'FEB 2026',
//     readTime: '6 min read',
//     href: '#',
//   },
//   {
//     tag: 'ARCHITECTURE',
//     title: 'Feature Flags at the Frontend: A Practical Guide',
//     excerpt:
//       'Rolling out features safely, running A/B tests, and killing old code with confidence — a pattern Ive applied across three different companies.',
//     date: 'JAN 2026',
//     readTime: '8 min read',
//     href: '#',
//   },
//   {
//     tag: 'TYPESCRIPT',
//     title: 'Typed API Responses Without Losing Your Mind',
//     excerpt:
//       'Runtime validation with Zod + static types from TypeScript — a workflow that catches bugs at the boundary before they reach your UI.',
//     date: 'DEC 2025',
//     readTime: '6 min read',
//     href: '#',
//   },
//   {
//     tag: 'DX',
//     title: 'Why I Stopped Writing Tests Last and Started Writing Them First',
//     excerpt:
//       'TDD felt slow until it didnt. A year of practicing test-first development changed how I design components and think about interfaces.',
//     date: 'NOV 2025',
//     readTime: '5 min read',
//     href: '#',
//   },
// ];

const blogs = [
     {
    tag: 'JAVASCRIPT',
    title: 'Simplifying Asynchronous JavaScript: The Promises vs. Async/Await Debate',
    excerpt:'A conceptual article showing the differences in Promises and Async/Await, insights to write cleaner code and visualizing in Debugger Console',
    date: 'APR 2026',
    readTime: '5 min read',
    href: 'https://medium.com/javascript-in-plain-english/simplifying-asynchronous-javascript-the-promises-vs-async-await-debate-905c679fff01',
  }, 
    {
    tag: 'REACT',
    title: 'A Comprehensive Guide to using GraphQL with React Native',
    excerpt:'Practical Implementation of integrating GraphQL with React Native and writing queries using open-sourced Countries API',
    date: 'APR 2026',
    readTime: '5 min read',
    href: 'https://medium.com/javascript-in-plain-english/a-comprehensive-guide-to-using-graphql-with-react-native-aa7a3855c1a0',
  },
  {
    tag: 'JAVASCRIPT',
    title: 'How to Store Login Sessions with LocalStorage and SessionStorage',
    excerpt:
      'Save Current LoggedIn user in SessionStorage and information of all the users from LocalStorage, all using plain JavaScript!',
    date: 'APR 2026',
    readTime: '4 min read',
    href: 'https://medium.com/javascript-in-plain-english/implementing-login-case-using-localstorage-and-sessionstorage-bfddce5d2198',
  },
]
const tagColors = {
  PERFORMANCE: { bg: 'rgba(45,212,191,0.1)', color: '#4338ca' },
  REACT:       { bg: 'rgba(96,165,250,0.1)', color: '#2563eb' },
  CSS:         { bg: 'rgba(232,121,249,0.1)', color: '#a21caf' },
  ARCHITECTURE:{ bg: 'rgba(251,191,36,0.1)',  color: '#b45309' },
  TYPESCRIPT:  { bg: 'rgba(129,140,248,0.1)', color: '#4338ca' },
  DX:          { bg: 'rgba(74,222,128,0.1)',  color: '#16a34a' },
  JAVASCRIPT:  { bg: 'rgba(129,140,248,0.1)', color: '#0d9488' },
};

export default function Medium() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={s.section} id="blogs">
      <div className={s.inner}>

        {/* Header */}
        <div className={s.header}>
          <div>
            <span className={`${s.sectionTag} reveal`}>04 — BLOGS</span>
            <h2 className={`${s.heading} reveal d1`}>Medium blogs</h2>
          </div>
          <a
            href="https://rasleen0209.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.viewAll} reveal d1`}
          >
            VIEW ALL ON MEDIUM ↗
          </a>
        </div>

        {/* Grid */}
        <div className={s.grid}>
          {blogs.map((blog, i) => {
            const color = tagColors[blog.tag] || { bg: 'rgba(0,0,0,0.06)', color: '#555' };
            return (
              <a
                key={i}
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${s.card} reveal`}
                style={{ transitionDelay: `${0.07 * (i % 3)}s` }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Top row */}
                <div className={s.cardTop}>
                  <span
                    className={s.tag}
                    style={{ background: color.bg, color: color.color }}
                  >
                    {blog.tag}
                  </span>
                  {/* <span className={s.date}>{blog.date}</span> */}
                </div>

                {/* Title */}
                <h3 className={`${s.title} ${hovered === i ? s.titleHovered : ''}`}>
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className={s.excerpt}>{blog.excerpt}</p>

                {/* Footer */}
                <div className={s.cardFoot}>
                  <span className={s.readTime}>{blog.readTime}</span>
                  <span className={`${s.arrow} ${hovered === i ? s.arrowHovered : ''}`}>↗</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
