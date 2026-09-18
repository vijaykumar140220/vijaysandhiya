import React, { useEffect, useRef, useState } from "react";

function Envelope({ onOpen }) {
  const [isBreaking, setIsBreaking] = useState(false);
  const timerRef = useRef(null);

  const handleSealClick = () => {
    // Prevent multiple clicks
    if (isBreaking) return;

    setIsBreaking(true);

    // Open invitation after wax-breaking animation
    timerRef.current = setTimeout(() => {
      onOpen();
    }, 950);
  };

  // Cleanup timer when component unmounts
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

        <div className="envelope">
          {/* =================================================
              ENVELOPE FLAP
          ================================================= */}

          <div className="envelope-flap"></div>

          {/* =================================================
              INVITATION PAPER
          ================================================= */}

          <div className="envelope-paper">
            <div className="paper-content">
              <p className="small-gold-text">WEDDING INVITATION</p>

              <p className="paper-invite">A beautiful beginning</p>

              <div className="paper-divider">✦</div>

              <p className="paper-small">TOGETHER WITH OUR FAMILIES</p>
            </div>
          </div>

          {/* =================================================
              WAX SEAL
          ================================================= */}

          <button
            type="button"
            className={`wax-seal ${isBreaking ? "wax-breaking" : ""}`}
            onClick={handleSealClick}
            disabled={isBreaking}
            aria-label="Open wedding invitation"
            aria-busy={isBreaking}
          >
            {/* Wax seal outer shine */}
            <span className="wax-shine"></span>

            {/* Crack effect */}
            <span className="wax-cracks" aria-hidden="true">
              <span className="crack crack-one"></span>
              <span className="crack crack-two"></span>
              <span className="crack crack-three"></span>
              <span className="crack crack-four"></span>
            </span>

            {/* Wax seal initials */}
            <span className="wax-letter">V</span>

            <small className="wax-heart">♥</small>

            <span className="wax-letter">S</span>
          </button>
        </div>

        {/* =================================================
            TAP TEXT
        ================================================= */}

        <div className={`tap-text ${isBreaking ? "tap-breaking" : ""}`}>
          <span>✦</span>

          <span>
            {isBreaking ? "Opening Your Invitation..." : "Tap the Wax Seal"}
          </span>

          <span>✦</span>
        </div>
      </div>
    </section>
  );
}

export default Envelope;
