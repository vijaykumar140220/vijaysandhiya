import React from "react";
import "./FinalMessage.css";

function FinalMessage() {
  return (
    <section className="final-section">
      {/* Background glow */}
      <div className="final-glow final-glow-one"></div>
      <div className="final-glow final-glow-two"></div>
      <div className="final-glow final-glow-three"></div>

      {/* Floating particles */}
      <div className="final-particles" aria-hidden="true">
        <span>✦</span>
        <span>✧</span>
        <span>•</span>
        <span>✦</span>
        <span>❋</span>
        <span>•</span>
        <span>✧</span>
        <span>✦</span>
        <span>•</span>
        <span>❋</span>
        <span>✦</span>
        <span>✧</span>
      </div>

      <div className="final-container">
        <div className="final-card">
          <div className="final-card-inner">
            {/* Decorative corners */}
            <span className="final-corner final-corner-tl"></span>
            <span className="final-corner final-corner-tr"></span>
            <span className="final-corner final-corner-bl"></span>
            <span className="final-corner final-corner-br"></span>

            {/* Top ornament */}
            <div className="final-top-ornament">
              <span className="final-line"></span>
              <span className="final-diamond">✦</span>
              <span className="final-flower">❀</span>
              <span className="final-diamond">✦</span>
              <span className="final-line"></span>
            </div>

            <p className="final-eyebrow">WITH LOVE &amp; GRATITUDE</p>

            <div className="final-title-wrap">
              <span className="title-side-star">✦</span>

              <h2 className="final-heading">
                Your presence
                <span>is our greatest gift</span>
              </h2>

              <span className="title-side-star">✦</span>
            </div>

            <div className="final-divider">
              <span></span>
              <i>❦</i>
              <span></span>
            </div>

            <p className="final-text">
              We look forward to celebrating
              <br />
              this beautiful beginning with you.
            </p>

            {/* Names */}
            <div className="final-names">
              <span className="final-name">Vijay Kumar</span>

              <span className="final-heart">♥</span>

              <span className="final-name">Sandhiya</span>
            </div>

            <div className="final-name-line">
              <span></span>
              <span></span>
            </div>

            {/* Bottom ornament */}
            <div className="final-ornament">
              <span>✦</span>
              <span className="ornament-flower">❀</span>
              <span>✦</span>
            </div>

            <p className="thank-you">With love, joy &amp; gratitude</p>

            <div className="final-bottom-line">
              <span></span>
              <b>V &amp; S</b>
              <span></span>
            </div>
          </div>
        </div>

        {/* Bottom floating hearts */}
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
