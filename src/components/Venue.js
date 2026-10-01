import React from "react";
import "./Venue.css";

const MAP_URL = "https://maps.app.goo.gl/HujH1WFA1ppdn5PX9";

function Venue() {
  return (
    <section className="venue-section" aria-labelledby="venue-title">
      {/* Lightweight decorative background */}
      <div className="venue-glow venue-glow-one" aria-hidden="true" />
      <div className="venue-glow venue-glow-two" aria-hidden="true" />

      <div className="venue-particles" aria-hidden="true">
        <span>✦</span>
        <span>✧</span>
        <span>❋</span>
        <span>✦</span>
        <span>❀</span>
      </div>

      <div className="venue-container">
        <article className="venue-card">
          <div className="venue-card-border" aria-hidden="true" />

          {/* Top ornament */}
          <div className="venue-ornament" aria-hidden="true">
            <span>✦</span>
            <i />
            <span>❋</span>
            <i />
            <span>✦</span>
          </div>

          {/* Heading */}
          <p className="venue-eyebrow">THE VENUE</p>

          <h2 id="venue-title" className="venue-title">
            Adam Mahal
          </h2>

          <p className="venue-intro">
            A beautiful place to celebrate
            <br />
            the beginning of our forever.
          </p>

          <div className="venue-divider" aria-hidden="true">
            <span>✦</span>
            <i />
            <span>❀</span>
            <i />
            <span>✦</span>
          </div>

          {/* Address */}
          <div className="venue-location-card">
            <div className="venue-location-icon" aria-hidden="true">
              <span>♡</span>
            </div>

            <div className="venue-location-content">
              <span className="venue-location-label">WEDDING VENUE</span>

              <h3>Adam Mahal</h3>

              <address>
                Adam Mahal Thirumana Mandapam
                <br />
                Eswaran Koil Street
                <br />
                Walajabad
              </address>
            </div>
          </div>

          {/* Map preview */}
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="venue-map"
            aria-label="Open Adam Mahal in Google Maps"
          >
            <div className="venue-map-background" aria-hidden="true">
              <div className="venue-map-grid" />

              <span className="venue-map-road venue-road-one" />
              <span className="venue-map-road venue-road-two" />
              <span className="venue-map-road venue-road-three" />

              <div className="venue-map-location">
                <span>♥</span>
              </div>
            </div>

            <div className="venue-map-overlay">
              <span className="venue-map-small">OUR WEDDING LOCATION</span>

              <strong>Adam Mahal</strong>

              <span className="venue-map-open">TAP TO OPEN MAP →</span>
            </div>
          </a>

          {/* Directions */}
          <div className="venue-button-wrapper">
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="venue-directions-button"
            >
              <span className="venue-button-icon" aria-hidden="true">
                ♧
              </span>

              <span className="venue-button-text">
                <small>FIND YOUR WAY</small>
                <strong>GET DIRECTIONS</strong>
              </span>

              <span className="venue-button-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          {/* Message */}
          <div className="venue-travel-message">
            <span className="venue-quote quote-left" aria-hidden="true">
              “
            </span>

            <p>
              We can't wait to celebrate
              <br className="venue-desktop-break" />
              this beautiful day with you.
            </p>

            <span className="venue-quote quote-right" aria-hidden="true">
              ”
            </span>
          </div>

          {/* Bottom ornament */}
          <div
            className="venue-ornament venue-ornament-bottom"
            aria-hidden="true"
          >
            <span>✦</span>
            <i />
            <span>❋</span>
            <i />
            <span>✦</span>
          </div>

          <div className="venue-bottom-text">WITH LOVE &amp; BLESSINGS</div>
        </article>
      </div>
    </section>
  );
}

export default Venue;
