import React from "react";
import "./GrandReveal.css";
import ganeshaImage from "../images/ganesha.png";

function GrandReveal() {
  return (
    <section className="grand-reveal">
      {/* =====================================================
          FLOATING DECORATIONS
      ====================================================== */}

      <div className="grand-petal petal-1">✿</div>
      <div className="grand-petal petal-2">❀</div>
      <div className="grand-petal petal-3">✦</div>
      <div className="grand-petal petal-4">❀</div>
      <div className="grand-petal petal-5">✿</div>

      <div className="grand-glow glow-1"></div>
      <div className="grand-glow glow-2"></div>
      <div className="grand-glow glow-3"></div>

      <div className="grand-reveal-container">
        {/* =====================================================
            TOP ORNAMENT
        ====================================================== */}

        <div className="grand-top-ornament">
          <span>✦</span>
          <i></i>
          <span>❀</span>
          <i></i>
          <span>✦</span>
        </div>

        {/* =====================================================
            MAIN CARD
        ====================================================== */}

        <div className="grand-reveal-card">
          {/* Card corners */}
          <div className="card-corner corner-top-left"></div>
          <div className="card-corner corner-top-right"></div>
          <div className="card-corner corner-bottom-left"></div>
          <div className="card-corner corner-bottom-right"></div>

          {/* ===================================================
              GANESHA
          ==================================================== */}

          <div className="ganesha-wrapper">
            <div className="ganesha-ring ring-one"></div>
            <div className="ganesha-ring ring-two"></div>
            <div className="ganesha-ring ring-three"></div>

            <div className="ganesha-circle">
              <img src={ganeshaImage} alt="Lord Ganesha" />
            </div>

            <div className="ganesha-spark spark-one">✦</div>
            <div className="ganesha-spark spark-two">✧</div>
            <div className="ganesha-spark spark-three">✦</div>
            <div className="ganesha-spark spark-four">❋</div>
          </div>

          {/* ===================================================
              TAMIL HEADING
          ==================================================== */}

          <div className="tamil-heading">திருமணம் அழைப்பிதழ்</div>

          <div className="invitation-label">WEDDING INVITATION</div>

          {/* ===================================================
              BLESSING
          ==================================================== */}

          <div className="tamil-blessing">
            அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை
            <br />
            பண்பும் பயனும் அது.
          </div>

          {/* ===================================================
              DIVIDER
          ==================================================== */}

          <div className="grand-divider">
            <span>✦</span>
            <i></i>
            <span>❀</span>
            <i></i>
            <span>✦</span>
          </div>

          {/* ===================================================
              INTRO
          ==================================================== */}

<div className="invitation-intro">
  <p className="intro-line">
    With the blessings of the Almighty and our beloved families,
  </p>

  <p className="intro-line">
    we joyfully invite you to grace the wedding of
  </p>
</div>

          {/* ===================================================
              COUPLE
              DESKTOP + MOBILE = LEFT / CENTER / RIGHT
          ==================================================== */}

          <div className="couple-display">
            {/* ================= GROOM ================= */}

            <div className="person-block person-left">
              <div className="person-small-label">THE GROOM</div>

              <h1 className="person-name">Vijay Kumar</h1>

              <div className="parent-label">S/o</div>

              <p className="parent-names">
                Mr. S. Raghunathan
                <br />& Mrs. R. Banukumari
              </p>
            </div>

            {/* ================= CENTER ================= */}

            <div className="couple-center">
              <div className="center-line"></div>

              <div className="heart-symbol">♥</div>

              <div className="and-symbol">&</div>

              <div className="center-line"></div>
            </div>

            {/* ================= BRIDE ================= */}

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

          {/* ===================================================
              BOTTOM ORNAMENT
          ==================================================== */}

          <div className="bottom-ornament">
            <span>✦</span>
            <i></i>
            <span>❀</span>
            <i></i>
            <span>✦</span>
          </div>

          {/* ===================================================
              SPECIAL DAYS
              MOBILE = LEFT / RIGHT
          ==================================================== */}

          <div className="special-days">
            <div className="special-days-heading">
              <span className="heading-line"></span>

              <span className="heading-star">✦</span>

              <span className="heading-text">OUR SPECIAL DAYS</span>

              <span className="heading-star">✦</span>

              <span className="heading-line"></span>
            </div>

            <div className="special-days-grid">
              {/* =================================================
                  RECEPTION
              ================================================== */}

              <article className="special-day-card reception-date-card">
                <div className="date-card-glow"></div>

                <div className="date-card-corner date-corner-tl">❋</div>

                <div className="date-card-corner date-corner-tr">❋</div>

                <div className="date-card-corner date-corner-bl">❋</div>

                <div className="date-card-corner date-corner-br">❋</div>

                <div className="date-card-icon">❀</div>

                <span className="date-card-label">RECEPTION</span>

                <div className="date-card-divider">
                  <span></span>
                  <b>✦</b>
                  <span></span>
                </div>

                <strong className="date-card-date">
                  Saturday, 31 October 2026
                </strong>

                <span className="date-card-time">6:30 PM onwards</span>

                <span className="date-card-location">WALAJABAD</span>

                <div className="date-card-bottom">
                  <span>✦</span>
                  <span>❀</span>
                  <span>✦</span>
                </div>
              </article>

              {/* =================================================
                  WEDDING
              ================================================== */}

              <article className="special-day-card wedding-date-card">
                <div className="date-card-glow"></div>

                <div className="date-card-corner date-corner-tl">❋</div>

                <div className="date-card-corner date-corner-tr">❋</div>

                <div className="date-card-corner date-corner-bl">❋</div>

                <div className="date-card-corner date-corner-br">❋</div>

                <div className="date-card-icon">♥</div>

                <span className="date-card-label">WEDDING</span>

                <div className="date-card-divider">
                  <span></span>
                  <b>✦</b>
                  <span></span>
                </div>

                <strong className="date-card-date">
                  Sunday, 01 November 2026
                </strong>

                <span className="date-card-time">7:30 AM — 9:00 AM</span>

                <span className="date-card-location">WALAJABAD</span>

                <div className="date-card-bottom">
                  <span>✦</span>
                  <span>❀</span>
                  <span>✦</span>
                </div>
              </article>
            </div>

            {/* Connection */}

            <div className="date-connection">
              <span className="connection-line"></span>

              <span className="connection-heart">♥</span>

              <span className="connection-line"></span>
            </div>

            {/* Footer */}

            <div className="date-teaser-footer">
              <span>TWO DAYS • ONE BEAUTIFUL BEGINNING</span>

              <strong>Vijay ♥ Sandhiya</strong>

              <small>WALAJABAD</small>
            </div>
          </div>

          {/* ===================================================
              SCROLL
          ==================================================== */}

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
