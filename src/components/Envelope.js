import React, { useEffect, useRef, useState } from "react";
import "./Envelope.css";

function Envelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const timerRef = useRef(null);

  const handleSealClick = () => {
    if (isOpening) return;

    setIsOpening(true);

    // Allow the complete opening animation to finish
    timerRef.current = setTimeout(() => {
      onOpen();
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <section className="envelope-screen">
      {/* Ambient floating particles */}
      <div className="envelope-particles" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="envelope-container">
        <div
          className={`luxury-envelope ${isOpening ? "envelope-opening" : ""}`}
        >
          {/* Premium light layers */}
          <div className="envelope-light"></div>
          <div className="envelope-light-sweep"></div>

          {/* Inner border */}
          <div className="envelope-inner-border"></div>

          {/* Decorative corner flowers */}
          <div className="flower flower-left-top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="flower flower-right-top">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="flower flower-left-bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="flower flower-right-bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Leaves */}
          <div className="leaf-decoration leaf-left"></div>
          <div className="leaf-decoration leaf-right"></div>

          {/* Gold corner ornaments */}
          <div className="corner-ornament corner-top-left"></div>
          <div className="corner-ornament corner-top-right"></div>
          <div className="corner-ornament corner-bottom-left"></div>
          <div className="corner-ornament corner-bottom-right"></div>

          {/* Title */}
          <div className="envelope-heading">
            <div className="heading-small">Together with their families</div>

            <div className="invitation-title">WEDDING INVITATION</div>

            <div className="heading-line">
              <span></span>
              <i>✦</i>
              <span></span>
            </div>
          </div>

          {/* Four envelope flaps */}

          {/* TOP */}
          <div className="envelope-flap envelope-flap-top">
            <div className="flap-shine"></div>
          </div>

          {/* LEFT */}
          <div className="envelope-flap envelope-flap-left">
            <div className="flap-shine"></div>
          </div>

          {/* RIGHT */}
          <div className="envelope-flap envelope-flap-right">
            <div className="flap-shine"></div>
          </div>

          {/* BOTTOM */}
          <div className="envelope-flap envelope-flap-bottom">
            <div className="flap-shine"></div>
          </div>

          {/* Center glow */}
          <div className="envelope-center-glow"></div>

          {/* Wax seal */}
          <button
            type="button"
            className={`wax-seal ${isOpening ? "wax-opening" : ""}`}
            onClick={handleSealClick}
            disabled={isOpening}
            aria-label="Open wedding invitation"
            aria-busy={isOpening}
          >
            <span className="wax-outer-rim"></span>

            <span className="wax-highlight"></span>

            <span className="wax-ring wax-ring-one"></span>

            <span className="wax-ring wax-ring-two"></span>

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
          ></div>

          {/* Opening flash */}
          <div
            className={`opening-flash ${isOpening ? "flash-opening" : ""}`}
          ></div>
        </div>

        {/* Tap text */}
        <button
          type="button"
          className={`tap-seal-text ${isOpening ? "tap-text-opening" : ""}`}
          onClick={handleSealClick}
          disabled={isOpening}
        >
          <span className="tap-star">✦</span>

          <span className="tap-message">
            {isOpening ? "OPENING YOUR INVITATION" : "TAP THE SEAL TO OPEN"}
          </span>

          <span className="tap-star">✦</span>
        </button>
      </div>
    </section>
  );
}

export default Envelope;
