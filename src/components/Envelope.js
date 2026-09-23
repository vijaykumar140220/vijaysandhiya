import React, { useEffect, useRef, useState } from "react";
import "./Envelope.css";

function Envelope({ onOpen }) {
  const [isBreaking, setIsBreaking] = useState(false);
  const timerRef = useRef(null);

  const handleSealClick = () => {
    if (isBreaking) return;

    setIsBreaking(true);

    timerRef.current = setTimeout(() => {
      onOpen();
    }, 1100);
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
      <div className="envelope-container">
        {/* =================================================
            ENVELOPE
        ================================================= */}

        <div
          className={`luxury-envelope ${isBreaking ? "envelope-opening" : ""}`}
        >
          {/* Inner border */}
          <div className="envelope-inner-border"></div>

          {/* =================================================
              FLORAL DECORATIONS
          ================================================= */}

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

          {/* =================================================
              LEAF DECORATIONS
          ================================================= */}

          <div className="leaf-decoration leaf-left"></div>

          <div className="leaf-decoration leaf-right"></div>

          {/* =================================================
              TOP TITLE
              
              ONLY WEDDING INVITATION
              NO V ♥ S HERE
          ================================================= */}

          <div className="envelope-heading">
            <div className="invitation-title">WEDDING INVITATION</div>
          </div>

          {/* =================================================
              ENVELOPE FLAPS
          ================================================= */}

          <div className="envelope-flap envelope-flap-left"></div>

          <div className="envelope-flap envelope-flap-right"></div>

          <div className="envelope-flap envelope-flap-bottom"></div>

          {/* =================================================
              WAX SEAL
              
              V ♥ S ONLY INSIDE THE SEAL
          ================================================= */}

          <button
            type="button"
            className={`wax-seal ${isBreaking ? "wax-breaking" : ""}`}
            onClick={handleSealClick}
            disabled={isBreaking}
            aria-label="Open wedding invitation"
            aria-busy={isBreaking}
          >
            <span className="wax-highlight"></span>

            <span className="wax-ring wax-ring-one"></span>

            <span className="wax-ring wax-ring-two"></span>

            <span className="wax-monogram">
              V<span>♥</span>S
            </span>

            <span className="wax-crack crack-one"></span>

            <span className="wax-crack crack-two"></span>

            <span className="wax-crack crack-three"></span>
          </button>

          {/* Soft seal glow */}

          <div className="envelope-glow"></div>
        </div>

        {/* =================================================
            TAP TEXT
        ================================================= */}

        <button
          type="button"
          className={`tap-seal-text ${isBreaking ? "tap-text-opening" : ""}`}
          onClick={handleSealClick}
          disabled={isBreaking}
        >
          <span className="tap-star">✦</span>

          <span>
            {isBreaking ? "OPENING YOUR INVITATION" : "TAP THE SEAL TO OPEN"}
          </span>

          <span className="tap-star">✦</span>
        </button>
      </div>
    </section>
  );
}

export default Envelope;
