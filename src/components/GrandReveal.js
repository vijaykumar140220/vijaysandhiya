import React from "react";
import "./GrandReveal.css";
import ganeshaImage from "../images/ganesha.png";

function GrandReveal() {
  return (
    <section className="grand-reveal">
      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================== */}
      <div className="grand-petal petal-1">✿</div>
      <div className="grand-petal petal-2">❀</div>
      <div className="grand-petal petal-3">✦</div>
      <div className="grand-petal petal-4">❀</div>
      <div className="grand-petal petal-5">✿</div>

      <div className="grand-glow glow-1"></div>
      <div className="grand-glow glow-2"></div>

      <div className="grand-reveal-container">
        {/* =========================================
            TOP ORNAMENT
        ========================================== */}
        <div className="grand-top-ornament">
          <span>✦</span>
          <i></i>
          <span>❀</span>
          <i></i>
          <span>✦</span>
        </div>

        {/* =========================================
            INVITATION CARD
        ========================================== */}
        <div className="grand-reveal-card">
          {/* =========================================
              CARD TOP DECORATION
          ========================================== */}
          <div className="card-corner corner-top-left"></div>
          <div className="card-corner corner-top-right"></div>
          <div className="card-corner corner-bottom-left"></div>
          <div className="card-corner corner-bottom-right"></div>

          {/* =========================================
              GANESHA
          ========================================== */}
          <div className="ganesha-wrapper">
            <div className="ganesha-ring ring-one"></div>
            <div className="ganesha-ring ring-two"></div>

            <div className="ganesha-circle">
              <img src={ganeshaImage} alt="Lord Ganesha" />
            </div>
          </div>

          {/* =========================================
              TAMIL HEADING
          ========================================== */}
          <div className="tamil-heading">திருமணம் அழைப்பிதழ்</div>

          {/* =========================================
              SMALL ENGLISH LABEL
          ========================================== */}
          <div className="invitation-label">WEDDING INVITATION</div>

          {/* =========================================
              TAMIL BLESSING
          ========================================== */}
          <div className="tamil-blessing">
            அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை
            <br />
            பண்பும் பயனும் அது.
          </div>

          {/* =========================================
              MAIN DIVIDER
          ========================================== */}
          <div className="grand-divider">
            <span>✦</span>
            <i></i>
            <span>❀</span>
            <i></i>
            <span>✦</span>
          </div>

          {/* =========================================
              INTRO
          ========================================== */}
          <div className="invitation-intro">
            <p>With the blessings of the Almighty</p>

            <p>and our beloved families,</p>

            <p>
              we joyfully invite you to grace
              <br />
              the wedding of
            </p>
          </div>

          {/* =========================================
              COUPLE
          ========================================== */}
          <div className="couple-display">
            {/* VIJAY */}
            <div className="person-block person-left">
              <div className="person-small-label">THE GROOM</div>

              <h1 className="person-name">Vijay Kumar</h1>

              <div className="parent-label">S/o</div>

              <p className="parent-names">
                Mr. S. Raghunathan
                <br />& Mrs. R. Banukumari
              </p>
            </div>

            {/* CENTER */}
            <div className="couple-center">
              <div className="center-line"></div>

              <div className="heart-symbol">♥</div>

              <div className="and-symbol">&</div>

              <div className="center-line"></div>
            </div>

            {/* SANDHIYA */}
            <div className="person-block person-right">
              <div className="person-small-label">THE BRIDE</div>

              <h1 className="person-name">Sandhiya</h1>

              <div className="parent-label">D/o</div>

              <p className="parent-names">
                Mr. T. Kumaresan
                <br />& Mrs. K. Vishalatchi (Usha)
              </p>
            </div>
          </div>

          {/* =========================================
              BOTTOM ORNAMENT
          ========================================== */}
          <div className="bottom-ornament">
            <span>✦</span>
            <i></i>
            <span>❀</span>
            <i></i>
            <span>✦</span>
          </div>

          {/* =========================================
              DATE TEASER
          ========================================== */}
          <div className="date-teaser">
            <span>OUR SPECIAL DAY</span>

            <strong>01 · 11 · 2026</strong>

            <small>WALAJABAD</small>
          </div>

          {/* =========================================
              SCROLL
          ========================================== */}
          <div className="scroll-reveal">
            <span className="scroll-text">SCROLL TO CONTINUE</span>

            <span className="scroll-arrow">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrandReveal;
