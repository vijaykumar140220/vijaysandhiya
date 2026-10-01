import React from "react";
import "./FinalMessage.css";

function FinalMessage() {
  return (
    <section className="final-section">
      {/* Lightweight decorative background */}
      <div className="final-glow final-glow-one" aria-hidden="true" />
      <div className="final-glow final-glow-two" aria-hidden="true" />

      {/* Lightweight particles */}
      <div className="final-particles" aria-hidden="true">
        <span>✦</span>
        <span>✧</span>
        <span>•</span>
        <span>❋</span>
        <span>✦</span>
        <span>•</span>
        <span>✧</span>
        <span>✦</span>
      </div>

      <div className="final-container">
        <article className="final-card">
          <div className="final-card-inner">
            {/* Decorative corners */}
            <span className="final-corner final-corner-tl" />
            <span className="final-corner final-corner-tr" />
            <span className="final-corner final-corner-bl" />
            <span className="final-corner final-corner-br" />

            {/* Top ornament */}
            <div className="final-top-ornament" aria-hidden="true">
              <span className="final-line" />
              <span>✦</span>
              <span>❀</span>
              <span>✦</span>
              <span className="final-line" />
            </div>

            {/* Eyebrow */}
            <p className="final-eyebrow">WITH LOVE &amp; GRATITUDE</p>

            {/* Heading */}
            <div className="final-title-wrap">
              <span className="title-side-star" aria-hidden="true">
                ✦
              </span>

              <h2 className="final-heading">
                Your presence
                <span>is our greatest gift</span>
              </h2>

              <span className="title-side-star" aria-hidden="true">
                ✦
              </span>
            </div>

            {/* Divider */}
            <div className="final-divider" aria-hidden="true">
              <span />
              <i>❦</i>
              <span />
            </div>

            {/* Message */}
            <p className="final-text">
              We look forward to celebrating
              <br className="final-desktop-break" />
              this beautiful beginning with you.
            </p>

            {/* Names */}
            <div className="final-names">
              <span className="final-name">Vijay Kumar</span>

              <span className="final-heart" aria-hidden="true">
                ♥
              </span>

              <span className="final-name">Sandhiya</span>
            </div>

            {/* Name decoration */}
            <div className="final-name-line" aria-hidden="true">
              <span />
              <span>✦</span>
              <span />
            </div>

            {/* Bottom ornament */}
            <div className="final-ornament" aria-hidden="true">
              <span>✦</span>
              <span className="ornament-flower">❀</span>
              <span>✦</span>
            </div>

            {/* Closing message */}
            <p className="thank-you">With love, joy &amp; gratitude</p>

            {/* Signature */}
            <div className="final-bottom-line" aria-hidden="true">
              <span />
              <b>V &amp; S</b>
              <span />
            </div>
          </div>
        </article>

        {/* Floating hearts */}
        <div className="final-floating-hearts" aria-hidden="true">
          <span>♥</span>
          <span>♡</span>
          <span>♥</span>
          <span>♡</span>
          <span>♥</span>
        </div>
      </div>
    </section>
  );
}

export default FinalMessage;
