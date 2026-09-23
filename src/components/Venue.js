import React from "react";
import "./Venue.css";

function Venue() {
  const mapUrl = "https://maps.app.goo.gl/HujH1WFA1ppdn5PX9";

  return (
    <section className="venue-section">
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="venue-glow venue-glow-one" aria-hidden="true" />

      <div className="venue-glow venue-glow-two" aria-hidden="true" />

      <div className="venue-glow venue-glow-three" aria-hidden="true" />

      {/* =====================================================
          FLOATING GOLD PARTICLES
      ====================================================== */}

      <div className="venue-particle venue-particle-1">✦</div>

      <div className="venue-particle venue-particle-2">✧</div>

      <div className="venue-particle venue-particle-3">❋</div>

      <div className="venue-particle venue-particle-4">✦</div>

      <div className="venue-particle venue-particle-5">❀</div>

      <div className="venue-particle venue-particle-6">✧</div>

      <div className="venue-particle venue-particle-7">✦</div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="venue-container">
        <div className="venue-card">
          {/* Decorative inner border */}

          <div className="venue-card-inner" aria-hidden="true" />

          {/* =================================================
              TOP ORNAMENT
          ================================================= */}

          <div className="venue-top-ornament" aria-hidden="true">
            <span>✦</span>
            <i />
            <span>❋</span>
            <i />
            <span>✦</span>
          </div>

          {/* =================================================
              SECTION LABEL
          ================================================= */}

          <p className="venue-eyebrow">THE VENUE</p>

          {/* =================================================
              TITLE
          ================================================= */}

          <h2 className="venue-title">Adam Mahal</h2>

          <p className="venue-intro">
            A beautiful place to celebrate
            <br />
            the beginning of our forever.
          </p>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="venue-divider" aria-hidden="true">
            <span>✦</span>
            <i />
            <span>❀</span>
            <i />
            <span>✦</span>
          </div>

          {/* =================================================
              LOCATION CARD
          ================================================= */}

          <div className="venue-location-card">
            <div className="venue-location-icon">
              <span className="venue-pin">♡</span>
            </div>

            <div className="venue-location-content">
              <span className="venue-location-label">WEDDING VENUE</span>

              <h3>Adam Mahal</h3>

              <p>
                Adam Mahal Thirumana Mandapam
                <br />
                Eswaran Koil Street
                <br />
                Walajabad
              </p>
            </div>
          </div>

          {/* =================================================
              MAP VISUAL
          ================================================= */}

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="venue-map"
            aria-label="Open Adam Mahal location in Google Maps"
          >
            <div className="venue-map-background">
              <div className="venue-map-grid" />

              <div className="venue-map-road venue-road-one" />
              <div className="venue-map-road venue-road-two" />
              <div className="venue-map-road venue-road-three" />

              <div className="venue-map-ring">
                <span className="venue-map-pin">♥</span>
              </div>

              <div className="venue-map-pulse" />
            </div>

            <div className="venue-map-overlay">
              <span className="venue-map-small">OUR WEDDING LOCATION</span>

              <strong>Adam Mahal</strong>

              <span className="venue-map-open">TAP TO OPEN MAP →</span>
            </div>
          </a>

          {/* =================================================
              DIRECTIONS BUTTON
          ================================================= */}

          <div className="venue-button-wrapper">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="venue-directions-button"
            >
              <span className="venue-button-icon">♧</span>

              <span className="venue-button-text">
                <small>FIND YOUR WAY</small>

                <strong>GET DIRECTIONS</strong>
              </span>

              <span className="venue-button-arrow">→</span>
            </a>
          </div>

          {/* =================================================
              TRAVEL MESSAGE
          ================================================= */}

          <div className="venue-travel-message">
            <span className="venue-quote quote-left">“</span>

            <p>
              We can't wait to celebrate
              <br className="venue-desktop-break" />
              this beautiful day with you.
            </p>

            <span className="venue-quote quote-right">”</span>
          </div>

          {/* =================================================
              BOTTOM ORNAMENT
          ================================================= */}

          <div className="venue-bottom-ornament" aria-hidden="true">
            <span>✦</span>
            <i />
            <span>❋</span>
            <i />
            <span>✦</span>
          </div>

          <div className="venue-bottom-text">WITH LOVE &amp; BLESSINGS</div>
        </div>
      </div>
    </section>
  );
}

export default Venue;
