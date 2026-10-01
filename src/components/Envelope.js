import React, { useEffect, useRef, useState } from "react";
import "./Envelope.css";

function Envelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const timerRef = useRef(null);

  const handleSealClick = () => {
    if (isOpening) return;

    setIsOpening(true);

    // Matches the complete envelope opening sequence.
    timerRef.current = window.setTimeout(() => {
      onOpen();
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <section className="envelope-screen" aria-label="Wedding invitation">
      {/* Lightweight ambient particles */}
      <div className="envelope-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="envelope-container">
        <div
          className={`luxury-envelope ${isOpening ? "envelope-opening" : ""}`}
        >
          {/* Soft lighting */}
          <div className="envelope-light" aria-hidden="true" />
          <div className="envelope-light-sweep" aria-hidden="true" />

          {/* Border */}
          <div className="envelope-inner-border" aria-hidden="true" />

          {/* Decorative flowers */}
          <div className="flower flower-left-top" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="flower flower-right-top" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="flower flower-left-bottom" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="flower flower-right-bottom" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>

          {/* Leaves */}
          <div className="leaf-decoration leaf-left" aria-hidden="true" />

          <div className="leaf-decoration leaf-right" aria-hidden="true" />

          {/* Gold corner ornaments */}
          <div className="corner-ornament corner-top-left" aria-hidden="true" />

          <div
            className="corner-ornament corner-top-right"
            aria-hidden="true"
          />

          <div
            className="corner-ornament corner-bottom-left"
            aria-hidden="true"
          />

          <div
            className="corner-ornament corner-bottom-right"
            aria-hidden="true"
          />

          {/* Invitation heading */}
          <div className="envelope-heading">
            <div className="heading-small">Together with their families</div>

            <div className="invitation-title">WEDDING INVITATION</div>

            <div className="heading-line" aria-hidden="true">
              <span />
              <i>✦</i>
              <span />
            </div>
          </div>

          {/* TOP FLAP */}
          <div className="envelope-flap envelope-flap-top">
            <div className="flap-shine" />
          </div>

          {/* LEFT FLAP */}
          <div className="envelope-flap envelope-flap-left">
            <div className="flap-shine" />
          </div>

          {/* RIGHT FLAP */}
          <div className="envelope-flap envelope-flap-right">
            <div className="flap-shine" />
          </div>

          {/* BOTTOM FLAP */}
          <div className="envelope-flap envelope-flap-bottom">
            <div className="flap-shine" />
          </div>

          {/* Center glow */}
          <div className="envelope-center-glow" aria-hidden="true" />

          {/* Wax seal */}
          <button
            type="button"
            className={`wax-seal ${isOpening ? "wax-opening" : ""}`}
            onClick={handleSealClick}
            disabled={isOpening}
            aria-label="Open wedding invitation"
            aria-busy={isOpening}
          >
            <span className="wax-outer-rim" />

            <span className="wax-highlight" />

            <span className="wax-ring wax-ring-one" />

            <span className="wax-ring wax-ring-two" />

            <span className="wax-monogram">
              V<span>♥</span>S
            </span>

            <span className="wax-sparkle sparkle-one">✦</span>
            <span className="wax-sparkle sparkle-two">✦</span>
            <span className="wax-sparkle sparkle-three">✧</span>
          </button>

          {/* Seal glow */}
          <div
            className={`envelope-glow ${isOpening ? "glow-opening" : ""}`}
            aria-hidden="true"
          />

          {/* Opening flash */}
          <div
            className={`opening-flash ${isOpening ? "flash-opening" : ""}`}
            aria-hidden="true"
          />
        </div>

        {/* Tap instruction */}
        <button
          type="button"
          className={`tap-seal-text ${isOpening ? "tap-text-opening" : ""}`}
          onClick={handleSealClick}
          disabled={isOpening}
          aria-label={
            isOpening
              ? "Opening wedding invitation"
              : "Tap to open wedding invitation"
          }
        >
          <span className="tap-star" aria-hidden="true">
            ✦
          </span>

          <span className="tap-message">
            {isOpening ? "OPENING YOUR INVITATION" : "TAP THE SEAL TO OPEN"}
          </span>

          <span className="tap-star" aria-hidden="true">
            ✦
          </span>
        </button>
      </div>
    </section>
  );
}

export default Envelope;
