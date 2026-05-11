import React from "react";
import s from "./Hero.module.css";
// import cvFile from "../CV/CV_RasleenKaur.pdf";

export default function Hero() {
  return (
    <section className={s.hero} id="hero">
      {/* <p className={`${s.eyebrow} reveal`}>PORTFOLIO · 2026</p> */}

      <h1 className={`${s.title} reveal d1`}>
        Hi, I'm <span className="gradient-name">Rasleen</span>.<br />
        A software
        <br />
        engineer.
      </h1>

      {/* <p className={`${s.sub} reveal d2`}>
        I design and build dependable software — quiet interfaces,<br />
        careful systems, and products people return to.
      </p> */}
      <p className={`${s.sub} reveal d2`}>
        Helping real users solve real problems through thoughtful engineering, <br />Building scalable, high-performance apps that impact millions of users.
      </p>

      <div className={`${s.actions} reveal d3`}>
        <button
          className={s.btnPrimary}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          EMAIL ME &nbsp;→
        </button>
        {/* <a className={s.btnPrimary} href={cvFile} download="CV_RasleenKaur.pdf">
          DOWNLOAD CV &nbsp;→
        </a> */}
        <button
          className={s.btnGhost}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          VIEW WORK
        </button>
      </div>
    </section>
  );
}
