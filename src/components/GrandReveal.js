import React from "react";
import "./GrandReveal.css";
import ganeshaImage from "../images/ganesha.png";

const Ornament = ({ className = "" }) => (
  <div className={`invitation-ornament ${className}`} aria-hidden="true">
    <span>❦</span>
    <i />
    <b>✦</b>
    <i />
    <span>❦</span>
  </div>
);

const DateCard = ({ type, icon, title, date, time }) => (
  <article className={`date-card ${type}`}>
    <div className="date-card-corner corner-tl" aria-hidden="true">
      ❋
    </div>
    <div className="date-card-corner corner-tr" aria-hidden="true">
      ❋
    </div>
    <div className="date-card-corner corner-bl" aria-hidden="true">
      ❋
    </div>
    <div className="date-card-corner corner-br" aria-hidden="true">
      ❋
    </div>

    <div className="date-icon" aria-hidden="true">
      {icon}
    </div>
    <span className="date-label">{title}</span>
    <div className="date-divider" aria-hidden="true">
      <span />✦<span />
    </div>
    <strong className="date-value">{date}</strong>
    <span className="date-time">{time}</span>
    <span className="date-place">WALAJABAD</span>
  </article>
);

function GrandReveal() {
  return (
    <main className="grand-reveal">
      <div className="paper-shadow" aria-hidden="true" />
      <div className="grand-reveal-container">
        <section className="grand-reveal-card" aria-label="Wedding invitation">
          <div className="paper-border" aria-hidden="true" />

          <div className="top-corner-art top-left" aria-hidden="true">
            ❦
          </div>
          <div className="top-corner-art top-right" aria-hidden="true">
            ❦
          </div>

          <div className="ganesha-wrapper">
            <div className="ganesha-circle">
              <img
                src={ganeshaImage}
                alt="Lord Ganesha"
                width="118"
                height="118"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          <div className="tamil-heading">திருமண அழைப்பிதழ்</div>
          <div className="invitation-label">WEDDING INVITATION</div>

          <div className="tamil-blessing">
            அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை
            <br />
            பண்பும் பயனும் அது.
          </div>

          <Ornament />

          <div className="invitation-intro">
            <p>With the blessings of the Almighty and our beloved families,</p>
            <p>we joyfully invite you to grace the wedding of</p>
          </div>

          <div className="couple-display">
            <div className="person-block">
              <span className="person-small-label">THE GROOM</span>
              <h1 className="person-name">Vijay Kumar</h1>
              <span className="parent-label">S/o</span>
              <p className="parent-names">
                Mr. S. Raghunathan
                <br />
                &amp; Mrs. R. Banukumari
              </p>
            </div>

            <div className="couple-center" aria-hidden="true">
              <span className="center-line" />
              <span className="heart-symbol">♥</span>
              <span className="and-symbol">&amp;</span>
              <span className="center-line" />
            </div>

            <div className="person-block">
              <span className="person-small-label">THE BRIDE</span>
              <h1 className="person-name">Sandhiya</h1>
              <span className="parent-label">D/o</span>
              <p className="parent-names">
                Mr. T. Kumaresan
                <br />
                &amp; Mrs. K. Vishalatchi (Usha)
              </p>
            </div>
          </div>

          <Ornament className="bottom-ornament" />

          <section
            className="special-days"
            aria-labelledby="special-days-title"
          >
            <div className="special-days-heading">
              <span />
              <b>✦</b>
              <h2 id="special-days-title">OUR SPECIAL DAYS</h2>
              <b>✦</b>
              <span />
            </div>

            <div className="special-days-grid">
              <DateCard
                type="reception"
                icon="❀"
                title="RECEPTION"
                date="Saturday, 31 October 2026"
                time="6:30 PM onwards"
              />
              <DateCard
                type="wedding"
                icon="♥"
                title="WEDDING"
                date="Sunday, 01 November 2026"
                time="7:30 AM — 9:00 AM"
              />
            </div>

            <div className="date-connection" aria-hidden="true">
              <span />
              <b>♥</b>
              <span />
            </div>

            <div className="date-teaser-footer">
              <span>TWO DAYS • ONE BEAUTIFUL BEGINNING</span>
              <strong>Vijay ♥ Sandhiya</strong>
              <small>WALAJABAD</small>
            </div>
          </section>

          <div className="bottom-art" aria-hidden="true">
            <span>❧</span>
            <span>❦</span>
            <span>❧</span>
          </div>
        </section>
      </div>
    </main>
  );
}

export default GrandReveal;
