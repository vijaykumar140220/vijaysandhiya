import React, { useEffect, useRef } from "react";
import "./Celebration.css";

const CELEBRATIONS = [
  {
    number: "01",
    label: "THE EVENING BEFORE",
    title: "Reception & Dinner",
    date: "Saturday, 31 October 2026",
    time: "6:30 PM onwards",
    detail:
      "Join us for an evening filled with happiness, love and celebration.",
    icon: "✧",
    type: "reception",
  },
  {
    number: "02",
    label: "LET THE MUSIC PLAY",
    title: "DJ Music",
    date: "Saturday, 31 October 2026",
    time: "6:45 PM onwards",
    detail:
      "Celebrate our special evening with music, dancing and joyful memories.",
    icon: "♫",
    type: "music",
  },
  {
    number: "03",
    label: "OUR SPECIAL DAY",
    title: "Wedding Ceremony",
    date: "Sunday, 01 November 2026",
    time: "7:30 AM – 9:00 AM",
    detail:
      "Bless us as we begin our beautiful journey together, hand in hand.",
    icon: "♡",
    type: "wedding",
  },
];

function Celebration() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const elements = section.querySelectorAll(".celebration-reveal");

    // Show everything immediately if animations are not supported
    // or the visitor prefers reduced motion.
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="celebration-section"
      id="celebration"
      ref={sectionRef}
      aria-labelledby="celebration-title"
    >
      <span
        className="celebration-decoration celebration-decoration-top"
        aria-hidden="true"
      >
        ✧
      </span>

      <span
        className="celebration-decoration celebration-decoration-bottom"
        aria-hidden="true"
      >
        ❋
      </span>

      <div className="celebration-container">
        {/* Heading */}
        <header className="celebration-header celebration-reveal">
          <span className="celebration-eyebrow">
            TWO DAYS OF LOVE & HAPPINESS
          </span>

          <div className="celebration-heading-ornament" aria-hidden="true">
            <span />
            <span className="ornament-diamond">✦</span>
            <span />
          </div>

          <h2 className="celebration-main-title" id="celebration-title">
            The Celebrations
            <br />
            <em>Unfold</em>
          </h2>

          <p className="celebration-description">
            With the blessings of our families, we invite you to be part of our
            special moments and celebrate the beginning of our forever.
          </p>
        </header>

        {/* Event cards */}
        <div className="celebration-timeline">
          {CELEBRATIONS.map((event) => (
            <article
              className={`celebration-card celebration-card-${event.type} celebration-reveal`}
              key={event.number}
            >
              <span className="celebration-card-number">{event.number}</span>

              <div className="celebration-card-icon" aria-hidden="true">
                {event.icon}
              </div>

              <div className="celebration-card-content">
                <span className="celebration-card-label">{event.label}</span>

                <h3>{event.title}</h3>

                <p className="celebration-card-date">{event.date}</p>

                <p className="celebration-card-time">
                  <span aria-hidden="true">◷</span>
                  {event.time}
                </p>

                <p className="celebration-card-detail">{event.detail}</p>
              </div>

              <div
                className="celebration-card-bottom-ornament"
                aria-hidden="true"
              >
                <span>✧</span>
                <span>❧</span>
                <span>✧</span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing message */}
        <footer className="celebration-footer celebration-reveal">
          <span className="celebration-footer-line" />

          <p>
            Your presence will make our celebration
            <br />
            even more beautiful.
          </p>

          <div className="celebration-couple-names">
            Vijaya Kumar <span>♥</span> Sandhiya
          </div>

          <span className="celebration-footer-small">
            WITH LOVE & BLESSINGS
          </span>
        </footer>
      </div>
    </section>
  );
}

export default Celebration;
