import React from "react";
import "./CoupleSection.css";
import coupleImage from "../images/sandhiya.jpeg";

function CoupleSection() {
  return (
    <section className="couple-section" aria-labelledby="couple-title">
      <div className="couple-container">
        {/* Traditional ornament */}
        <div className="couple-ornament" aria-hidden="true">
          <span>✦</span>
          <i />
          <b>❀</b>
          <i />
          <span>✦</span>
        </div>

        {/* Heading */}
        <header className="couple-heading">
          <p className="couple-subtitle">TOGETHER WITH OUR FAMILIES</p>
          <h2 id="couple-title" className="couple-title">
            Two Hearts, One Beautiful Beginning
          </h2>
          <p className="couple-intro">
            With love in our hearts and blessings from our families, we begin
            this beautiful journey together.
          </p>
        </header>

        {/* Main invitation card */}
        <article className="couple-card">
          <span className="card-corner top-left" aria-hidden="true">
            ❈
          </span>
          <span className="card-corner top-right" aria-hidden="true">
            ❈
          </span>
          <span className="card-corner bottom-left" aria-hidden="true">
            ❈
          </span>
          <span className="card-corner bottom-right" aria-hidden="true">
            ❈
          </span>

          <div className="card-inner">
            {/* Couple photo */}
            <div className="couple-photo-area">
              <div className="photo-frame">
                <div className="photo-inner">
                  <img
                    src={coupleImage}
                    alt="Vijay Kumar and Sandhiya"
                    className="couple-photo"
                    width="620"
                    height="760"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="photo-badge" aria-hidden="true">
                ♥
              </div>
            </div>

            {/* Names */}
            <div className="couple-names">
              <h3 className="couple-name vijay-name">Vijay Kumar</h3>

              <div className="couple-heart" aria-label="and">
                <span>♥</span>
                <small>&amp;</small>
              </div>

              <h3 className="couple-name sandhiya-name">Sandhiya</h3>
            </div>

            <p className="couple-caption">
              Two souls, two families,
              <br />
              one beautiful journey.
            </p>

            <div className="couple-divider" aria-hidden="true">
              <i />
              <span>❀</span>
              <i />
            </div>

            <div className="family-blessing">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <p>
                Surrounded by the love and blessings of our beloved families.
              </p>
              <span className="quote-mark closing" aria-hidden="true">
                ”
              </span>
            </div>
          </div>
        </article>

        <div className="couple-ornament bottom-ornament" aria-hidden="true">
          <span>✦</span>
          <i />
          <b>❀</b>
          <i />
          <span>✦</span>
        </div>
      </div>
    </section>
  );
}

export default CoupleSection;
