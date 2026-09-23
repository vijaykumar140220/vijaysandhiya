import React from "react";
import "./CoupleSection.css";
import coupleImage from "../images/sandhiya.jpeg";

function CoupleSection() {
  return (
    <section className="couple-section">
      {/* Floating decorations */}
      <div className="couple-petal couple-petal-1">✿</div>
      <div className="couple-petal couple-petal-2">❀</div>
      <div className="couple-petal couple-petal-3">✦</div>
      <div className="couple-petal couple-petal-4">❀</div>

      <div className="couple-container">
        {/* Top ornament */}
        <div className="couple-top-ornament">
          <span>✦</span>
          <i></i>
          <span>❀</span>
          <i></i>
          <span>✦</span>
        </div>

        {/* Heading */}
        <div className="couple-heading">
          <p className="couple-subtitle">TOGETHER WITH OUR FAMILIES</p>

          <h2 className="couple-title">Two Hearts, One Beautiful Beginning</h2>

          <p className="couple-intro">
            With love in our hearts and blessings from our families, we begin
            this beautiful journey together.
          </p>
        </div>

        {/* Main Couple Card */}
        <div className="couple-card">
          {/* Decorative corner elements */}
          <div className="couple-corner couple-corner-top-left">✦</div>

          <div className="couple-corner couple-corner-top-right">✦</div>

          <div className="couple-corner couple-corner-bottom-left">✦</div>

          <div className="couple-corner couple-corner-bottom-right">✦</div>

          {/* Photo */}
          <div className="couple-photo-area">
            <div className="couple-photo-glow"></div>

            <div className="couple-photo-frame">
              <div className="couple-photo-inner">
                <img
                  src={coupleImage}
                  alt="Vijay Kumar and Sandhiya"
                  className="couple-photo"
                />
              </div>
            </div>

            {/* Floating heart */}
            <div className="floating-heart">♥</div>
          </div>

          {/* Couple names */}
          <div className="couple-names">
            <div className="couple-name vijay-name">Vijay Kumar</div>

            <div className="couple-heart">
              <span>♥</span>
              <small>&</small>
            </div>

            <div className="couple-name sandhiya-name">Sandhiya</div>
          </div>

          {/* Caption */}
          <p className="couple-caption">
            Two souls, two families,
            <br />
            one beautiful journey.
          </p>

          {/* Divider */}
          <div className="couple-divider">
            <span>✦</span>
            <i></i>
            <span>❀</span>
            <i></i>
            <span>✦</span>
          </div>

          {/* Family blessing */}
          <div className="family-blessing">
            <span className="quote-mark">“</span>

            <p>Surrounded by the love and blessings of our beloved families.</p>

            <span className="quote-mark closing">”</span>
          </div>
        </div>

        {/* Bottom ornament */}
        <div className="couple-bottom-ornament">
          <span>✦</span>
          <i></i>
          <span>❀</span>
          <i></i>
          <span>✦</span>
        </div>
      </div>
    </section>
  );
}

export default CoupleSection;
