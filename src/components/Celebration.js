import React, { useEffect, useState } from "react";
import "./Celebration.css";

import receptionImage from "../images/reception.svg.webp";
import weddingImage from "../images/wedding.svg.webp";

function Celebration() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="celebration-section">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="celebration-glow glow-one"></div>
      <div className="celebration-glow glow-two"></div>
      <div className="celebration-glow glow-three"></div>

      <div className="celebration-light-beam beam-one"></div>
      <div className="celebration-light-beam beam-two"></div>

      {/* =====================================================
          GOLD PARTICLES
      ====================================================== */}

      <div className="gold-particle particle-1">✦</div>
      <div className="gold-particle particle-2">✧</div>
      <div className="gold-particle particle-3">✦</div>
      <div className="gold-particle particle-4">❋</div>
      <div className="gold-particle particle-5">✦</div>
      <div className="gold-particle particle-6">✧</div>
      <div className="gold-particle particle-7">✦</div>
      <div className="gold-particle particle-8">✧</div>
      <div className="gold-particle particle-9">✦</div>

      {/* =====================================================
          FLOATING PETALS
      ====================================================== */}

      <div className="floating-petal petal-1">❀</div>
      <div className="floating-petal petal-2">✿</div>
      <div className="floating-petal petal-3">❀</div>
      <div className="floating-petal petal-4">✦</div>
      <div className="floating-petal petal-5">❀</div>
      <div className="floating-petal petal-6">✿</div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className={`celebration-container ${
          visible ? "celebration-visible" : ""
        }`}
      >
        {/* =================================================
            SECTION HEADING
        ================================================== */}

        <div className="celebration-heading">
          <div className="top-ornament">
            <span>✦</span>
            <i></i>
            <span>❋</span>
            <i></i>
            <span>✦</span>
          </div>

          <p className="celebration-small-title">OUR SPECIAL CELEBRATIONS</p>

          <h2 className="celebration-title">Two Beautiful Moments</h2>

          <p className="celebration-intro">
            Two days, two celebrations,
            <br />
            one beautiful beginning.
          </p>

          <div className="heading-bottom-ornament">
            <span></span>
            <b>♡</b>
            <span></span>
          </div>
        </div>

        {/* =================================================
            DAY 1 — RECEPTION
        ================================================== */}

        <article className="event-card reception-card">
          {/* Animated border shine */}
          <div className="card-shine"></div>

          {/* Decorative corners */}
          <span className="card-corner corner-top-left">❋</span>
          <span className="card-corner corner-top-right">❋</span>
          <span className="card-corner corner-bottom-left">❋</span>
          <span className="card-corner corner-bottom-right">❋</span>

          {/* IMAGE */}

          <div className="event-image-wrapper reception-image">
            <div className="image-aura"></div>
            <div className="image-ring ring-one"></div>
            <div className="image-ring ring-two"></div>

            <div className="image-glow"></div>

            <img
              src={receptionImage}
              alt="Reception celebration"
              className="event-image"
            />

            <div className="image-sparkle sparkle-a">✦</div>
            <div className="image-sparkle sparkle-b">✧</div>
            <div className="image-sparkle sparkle-c">✦</div>
            <div className="image-sparkle sparkle-d">✧</div>
          </div>

          {/* CONTENT */}

          <div className="event-content">
            <span className="event-day">DAY 1</span>

            <div className="mini-line">
              <span></span>
              <b>❋</b>
              <span></span>
            </div>

            <h3 className="event-title">Reception</h3>

            <div className="event-tamil">வரவேற்பு</div>

            {/* SINGLE LINE DATE */}

            <div className="event-date">Saturday, 31 October 2026</div>

            <div className="event-time">6:30 PM onwards</div>

            <div className="content-ornament">
              <span>────</span>
              <b>♡</b>
              <span>────</span>
            </div>

            <p className="event-description">
              An evening filled with
              <br />
              joy, love, laughter
              <br />
              and beautiful memories.
            </p>
          </div>
        </article>

        {/* =================================================
            CONNECTING ORNAMENT
        ================================================== */}

        <div className="between-events">
          <span className="line"></span>

          <div className="heart-orbit">
            <span>✦</span>

            <b>♡</b>

            <span>✦</span>
          </div>

          <span className="line"></span>
        </div>

        {/* =================================================
            DAY 2 — WEDDING
        ================================================== */}

        <article className="event-card wedding-card">
          {/* Animated border shine */}
          <div className="card-shine"></div>

          {/* Decorative corners */}

          <span className="card-corner corner-top-left">❋</span>
          <span className="card-corner corner-top-right">❋</span>
          <span className="card-corner corner-bottom-left">❋</span>
          <span className="card-corner corner-bottom-right">❋</span>

          {/* CONTENT */}

          <div className="event-content">
            <span className="event-day">DAY 2</span>

            <div className="mini-line">
              <span></span>
              <b>❋</b>
              <span></span>
            </div>

            <h3 className="event-title">Wedding</h3>

            <div className="event-tamil">திருமணம்</div>

            {/* SINGLE LINE DATE */}

            <div className="event-date">Sunday, 01 November 2026</div>

            <div className="event-time">7:30 AM — 9:00 AM</div>

            <div className="content-ornament">
              <span>────</span>
              <b>♡</b>
              <span>────</span>
            </div>

            <p className="event-description">
              With the blessings of
              <br />
              our families, we begin
              <br />a beautiful new chapter.
            </p>
          </div>

          {/* IMAGE */}

          <div className="event-image-wrapper wedding-image">
            <div className="image-aura"></div>
            <div className="image-ring ring-one"></div>
            <div className="image-ring ring-two"></div>

            <div className="image-glow"></div>

            <img
              src={weddingImage}
              alt="Wedding ceremony"
              className="event-image"
            />

            <div className="image-sparkle sparkle-a">✦</div>
            <div className="image-sparkle sparkle-b">✧</div>
            <div className="image-sparkle sparkle-c">✦</div>
            <div className="image-sparkle sparkle-d">✧</div>
          </div>
        </article>

        {/* =================================================
            FOOTER
        ================================================== */}

        <div className="celebration-footer">
          <div className="footer-ornament">✦ ───────── ❋ ───────── ✦</div>

          <p>
            TWO DAYS
            <span> · </span>
            TWO MEMORIES
            <span> · </span>
            ONE LOVE
          </p>

          <div className="footer-heart">♡</div>
        </div>
      </div>
    </section>
  );
}

export default Celebration;
