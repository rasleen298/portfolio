import React, { useState } from 'react';
import s from './Medium.module.css';

const blogs = [
     {
    tag: 'PERFORMANCE',
    title: 'Exploring Intersection observer API in React',
    excerpt:'A guide to implementing one of the performance optimization techniques in React for lazy loading, infinite scroll, and performant applications',
    date: 'APR 2026',
    readTime: '4 min read',
    href: 'https://medium.com/javascript-in-plain-english/exploring-intersection-observer-api-in-react-9c0dbad4b085',
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
    title: 'Simplifying Asynchronous JavaScript: The Promises vs. Async/Await Debate',
    excerpt:'A conceptual article showing the differences in Promises and Async/Await, insights to write cleaner code and visualizing in Debugger Console',
    date: 'APR 2026',
    readTime: '5 min read',
    href: 'https://medium.com/javascript-in-plain-english/simplifying-asynchronous-javascript-the-promises-vs-async-await-debate-905c679fff01',
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
  PROFESSIONAL: { bg: 'rgba(129,140,248,0.1)', color: '#4338ca' },
};

export default function Medium({headingRequired}) {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={headingRequired ? s.section : s.section_one} id="blogs">
      <div className={s.inner}>

        {/* Header */}
        {headingRequired && (
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
        )}
        

        {/* Grid */}
        <div className={s.grid}>
          {blogs.map((blog, i) => {
            const color = tagColors[blog.tag] || { bg: 'rgba(0,0,0,0.06)', color: '#555' };
            return (
              <a
                key={i}
                href={headingRequired ? blog.href : null}
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
                <p className={headingRequired ? s.excerpt : s.excerpt_one}>{blog.excerpt}</p>

                {/* Footer */}
                {headingRequired && (
                <div className={s.cardFoot}>
                  <span className={s.readTime}>{blog.readTime}</span>
                  <span className={`${s.arrow} ${hovered === i ? s.arrowHovered : ''}`}>↗</span>
                </div>
                )}   
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
