import React from 'react';
import s from './Work.module.css';

const items = [
  {
    num: '01',
    title: 'Product Engineering',
    desc: 'Leading feature development end-to-end — from technical design through release — with a focus on reliability and developer experience.',
  },
  {
    num: '02',
    title: 'System Design',
    desc: 'Designing scalable component systems and APIs, refining data models, and shaping architecture decisions that age well.',
  },
  {
    num: '03',
    title: 'Mentorship',
    desc: 'Reviewing code, pairing with engineers, and helping the team raise the bar on quality and craft.',
  },
];
export default function Work() {
  return (
    <section className={s.section} id="work">
      <div className={s.inner}>
        <span className={`${s.sectionTag} reveal`}>02 — CURRENTLY</span>
        <div className={s.layout}>
          <div className={s.left}>
            <h2 className={`${s.heading} reveal d1`}>What I do</h2>
            <p className={`${s.sub} reveal d2`}>
              In my current role as a senior software engineer, I focus on
              shipping product surfaces that are dependable, observable, and
              easy to evolve.
            </p>
          </div>
          <div className={s.right}>
            {items.map((item, i) => (
              <div
                key={item.num}
                className={`${s.item} reveal`}
                style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
              >
                <span className={s.num}>{item.num}</span>
                <div>
                  <h3 className={s.itemTitle}>{item.title}</h3>
                  <p className={s.itemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
