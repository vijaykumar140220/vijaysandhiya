import React, { useEffect, useRef, useState } from "react";
import "./Engagement.css";

/* =========================================================
   WEDDING EVENT CONFIGURATION
========================================================= */

const WEDDING_EVENT = {
  title: "Vijaya & Sandhiya Wedding",
  start: "20261101T073000",
  end: "20261101T090000",
  timezone: "Asia/Kolkata",
  location: "Adam Mahal",
  description:
    "With the blessings of our families, we invite you to celebrate the wedding of Vijaya & Sandhiya.",
};

/* =========================================================
   GOOGLE CALENDAR
========================================================= */

const createGoogleCalendarUrl = () => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: WEDDING_EVENT.title,
    dates: `${WEDDING_EVENT.start}/${WEDDING_EVENT.end}`,
    ctz: WEDDING_EVENT.timezone,
    location: WEDDING_EVENT.location,
    details: WEDDING_EVENT.description,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

/* =========================================================
   SAVE TO GOOGLE CALENDAR
========================================================= */

function SaveTheDateButton() {
  const handleCalendarClick = () => {
    const url = createGoogleCalendarUrl();

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      className="engagement-calendar-button"
      onClick={handleCalendarClick}
      aria-label="Add wedding date to Google Calendar"
    >
      <span className="engagement-calendar-icon">♡</span>

      <span className="engagement-calendar-text">
        <span className="engagement-calendar-small">SAVE THIS MOMENT</span>

        <span className="engagement-calendar-main">Add to Google Calendar</span>
      </span>

      <span className="engagement-calendar-arrow">→</span>
    </button>
  );
}

/* =========================================================
   SCRATCH BOX
========================================================= */

function ScratchBox({ value, label, onReveal, type }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const ctxRef = useRef(null);

  const drawingRef = useRef(false);
  const scratchedRef = useRef(false);
  const lastPointRef = useRef(null);

  const checkCounterRef = useRef(0);
  const revealLockedRef = useRef(false);

  const [scratched, setScratched] = useState(false);

  /* =======================================================
     DRAW SCRATCH SURFACE
  ======================================================= */

  const drawScratchSurface = (canvas, width, height, dpr) => {
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    if (!ctx) return;

    ctxRef.current = ctx;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.clearRect(0, 0, width, height);

    /* -----------------------------------------------------
       GOLD BASE
    ----------------------------------------------------- */

    const gradient = ctx.createLinearGradient(0, 0, width, height);

    gradient.addColorStop(0, "#f9e9bd");
    gradient.addColorStop(0.18, "#c89a4e");
    gradient.addColorStop(0.36, "#f8e6b2");
    gradient.addColorStop(0.52, "#d5ae65");
    gradient.addColorStop(0.7, "#f4dda5");
    gradient.addColorStop(0.86, "#bd8b40");
    gradient.addColorStop(1, "#efd294");

    ctx.globalCompositeOperation = "source-over";

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    /* -----------------------------------------------------
       METALLIC SHINE
    ----------------------------------------------------- */

    const shine = ctx.createLinearGradient(0, 0, width, height);

    shine.addColorStop(0, "rgba(255,255,255,0.48)");

    shine.addColorStop(0.3, "rgba(255,255,255,0.08)");

    shine.addColorStop(0.5, "rgba(255,255,255,0.3)");

    shine.addColorStop(0.7, "rgba(255,255,255,0.05)");

    shine.addColorStop(1, "rgba(79,39,13,0.16)");

    ctx.fillStyle = shine;

    ctx.fillRect(0, 0, width, height);

    /* -----------------------------------------------------
       FINE TEXTURE
    ----------------------------------------------------- */

    ctx.globalAlpha = 0.1;

    const textureGap = width < 140 ? 9 : 12;

    for (let x = -height; x < width + height; x += textureGap) {
      ctx.beginPath();

      ctx.moveTo(x, 0);

      ctx.lineTo(x + height, height);

      ctx.strokeStyle = "#fff6d9";

      ctx.lineWidth = 1;

      ctx.stroke();
    }

    ctx.globalAlpha = 1;

    /* -----------------------------------------------------
       INNER BORDER
    ----------------------------------------------------- */

    const borderInset = width < 140 ? 7 : 9;

    ctx.strokeStyle = "rgba(92,43,24,0.5)";

    ctx.lineWidth = 1;

    ctx.strokeRect(
      borderInset,
      borderInset,
      width - borderInset * 2,
      height - borderInset * 2,
    );

    /* -----------------------------------------------------
       CORNER ORNAMENTS
    ----------------------------------------------------- */

    const ornamentSize = width < 140 ? 11 : 14;

    const ornamentOffset = width < 140 ? 14 : 19;

    ctx.fillStyle = "rgba(94,42,24,0.7)";

    ctx.font = `${ornamentSize}px Georgia, serif`;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText("✦", ornamentOffset, ornamentOffset);

    ctx.fillText("✦", width - ornamentOffset, ornamentOffset);

    ctx.fillText("✦", ornamentOffset, height - ornamentOffset);

    ctx.fillText("✦", width - ornamentOffset, height - ornamentOffset);

    /* -----------------------------------------------------
       SCRATCH INSTRUCTION
       MOBILE = TWO LINES
    ----------------------------------------------------- */

    ctx.fillStyle = "#62371f";

    const isSmall = width < 155;

    if (isSmall) {
      ctx.font = "700 8px Montserrat, Arial, sans-serif";

      ctx.fillText("SCRATCH", width / 2, height / 2 - 7);

      ctx.fillText("TO REVEAL", width / 2, height / 2 + 6);

      ctx.fillStyle = "#80552b";

      ctx.font = "9px Montserrat, Arial, sans-serif";

      ctx.fillText("✦  ❋  ✦", width / 2, height / 2 + 22);
    } else {
      ctx.font = "600 11px Montserrat, Arial, sans-serif";

      ctx.fillText("SCRATCH TO REVEAL", width / 2, height / 2 - 8);

      ctx.fillStyle = "#80552b";

      ctx.font = "10px Montserrat, Arial, sans-serif";

      ctx.fillText("✦  ❋  ✦", width / 2, height / 2 + 14);
    }
  };

  /* =======================================================
     CANVAS SETUP
  ======================================================= */

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = containerRef.current;

    if (!canvas || !parent) {
      return;
    }

    let resizeTimer;

    const setupCanvas = () => {
      const rect = parent.getBoundingClientRect();

      if (!rect.width || !rect.height) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(rect.width * dpr);

      canvas.height = Math.round(rect.height * dpr);

      canvas.style.width = `${rect.width}px`;

      canvas.style.height = `${rect.height}px`;

      drawScratchSurface(canvas, rect.width, rect.height, dpr);
    };

    setupCanvas();

    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        if (!scratchedRef.current) {
          setupCanvas();
        }
      }, 120);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =======================================================
     GET POINTER POSITION
  ======================================================= */

  const getPoint = (event) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return null;
    }

    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,

      y: event.clientY - rect.top,
    };
  };

  /* =======================================================
     REVEAL CHECK
  ======================================================= */

  const checkRevealPercentage = () => {
    const canvas = canvasRef.current;

    const ctx = ctxRef.current;

    if (!canvas || !ctx || revealLockedRef.current) {
      return;
    }

    checkCounterRef.current += 1;

    /*
      Do not perform expensive
      image reading on every move.
    */

    if (checkCounterRef.current % 10 !== 0) {
      return;
    }

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const pixels = imageData.data;

      let transparentPixels = 0;
      let totalSamples = 0;

      const sampleWidth = 70;
      const sampleHeight = 70;

      const stepX = Math.max(1, Math.floor(canvas.width / sampleWidth));

      const stepY = Math.max(1, Math.floor(canvas.height / sampleHeight));

      for (let y = 0; y < canvas.height; y += stepY) {
        for (let x = 0; x < canvas.width; x += stepX) {
          const index = (y * canvas.width + x) * 4 + 3;

          totalSamples++;

          if (pixels[index] < 70) {
            transparentPixels++;
          }
        }
      }

      const percentage =
        totalSamples > 0 ? (transparentPixels / totalSamples) * 100 : 0;

      if (percentage > 38) {
        revealLockedRef.current = true;

        scratchedRef.current = true;

        setScratched(true);

        if (onReveal) {
          onReveal();
        }
      }
    } catch (error) {
      console.error("Scratch reveal check failed:", error);
    }
  };

  /* =======================================================
     SCRATCH DRAWING
  ======================================================= */

  const drawScratch = (point) => {
    const ctx = ctxRef.current;

    if (!ctx || !point) {
      return;
    }

    const previous = lastPointRef.current || point;

    const distance = Math.hypot(point.x - previous.x, point.y - previous.y);

    const canvas = canvasRef.current;

    const width = canvas?.clientWidth || 200;

    const brushSize = width < 140 ? 47 : width < 180 ? 52 : 56;

    const brushRadius = brushSize / 2;

    const step = width < 140 ? 5 : 6;

    const steps = Math.max(1, Math.ceil(distance / step));

    ctx.save();

    ctx.globalCompositeOperation = "destination-out";

    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.lineWidth = brushSize;

    ctx.beginPath();

    ctx.moveTo(previous.x, previous.y);

    for (let i = 1; i <= steps; i++) {
      const progress = i / steps;

      const x = previous.x + (point.x - previous.x) * progress;

      const y = previous.y + (point.y - previous.y) * progress;

      ctx.lineTo(x, y);
    }

    ctx.stroke();

    /* Round brush head */

    ctx.beginPath();

    ctx.arc(point.x, point.y, brushRadius, 0, Math.PI * 2);

    ctx.fill();

    ctx.restore();

    lastPointRef.current = point;

    checkRevealPercentage();
  };

  /* =======================================================
     POINTER DOWN
  ======================================================= */

  const handlePointerDown = (event) => {
    if (scratchedRef.current || revealLockedRef.current) {
      return;
    }

    event.preventDefault();

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Ignore unsupported browsers.
    }

    drawingRef.current = true;

    const point = getPoint(event);

    lastPointRef.current = point;

    drawScratch(point);
  };

  /* =======================================================
     POINTER MOVE
  ======================================================= */

  const handlePointerMove = (event) => {
    if (
      !drawingRef.current ||
      scratchedRef.current ||
      revealLockedRef.current
    ) {
      return;
    }

    event.preventDefault();

    const point = getPoint(event);

    drawScratch(point);
  };

  /* =======================================================
     POINTER UP
  ======================================================= */

  const handlePointerUp = (event) => {
    drawingRef.current = false;

    lastPointRef.current = null;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Ignore unsupported browsers.
    }

    /*
      Force a final reveal check.
    */

    checkCounterRef.current = 10;

    checkRevealPercentage();
  };

  /* =======================================================
     POINTER CANCEL
  ======================================================= */

  const handlePointerCancel = () => {
    drawingRef.current = false;

    lastPointRef.current = null;
  };

  /* =======================================================
     CONTEXT MENU
  ======================================================= */

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <div
      ref={containerRef}
      className={`
        engagement-scratch-card
        engagement-scratch-${type}
        ${scratched ? "is-revealed" : ""}
      `}
    >
      {/* CARD DECORATION */}

      <div className="engagement-scratch-card-decoration" aria-hidden="true">
        ✦
      </div>

      {/* LABEL */}

      <div className="engagement-scratch-label">{label}</div>

      {/* ACTUAL VALUE */}

      <div className="engagement-scratch-value">{value}</div>

      {/* BOTTOM SYMBOL */}

      <div className="engagement-scratch-bottom" aria-hidden="true">
        ❋
      </div>

      {/* SCRATCH CANVAS */}

      {!scratched && (
        <canvas
          ref={canvasRef}
          className="engagement-scratch-canvas"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onPointerLeave={handlePointerUp}
          onContextMenu={handleContextMenu}
          aria-label={`Scratch to reveal ${label}`}
        />
      )}

      {/* GLOW */}

      <div className="engagement-scratch-glow" aria-hidden="true" />

      {/* SHINE */}

      <div className="engagement-scratch-shine" aria-hidden="true" />

      {/* REVEAL PARTICLES */}

      {scratched && (
        <div className="engagement-reveal-burst" aria-hidden="true">
          <span>✦</span>
          <span>✧</span>
          <span>❋</span>
          <span>✦</span>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   COUNTDOWN
========================================================= */

function Countdown() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2026-11-01T07:30:00+05:30");

    const difference = weddingDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

      minutes: Math.floor((difference / (1000 * 60)) % 60),

      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      value: timeLeft.days,
      label: "DAYS",
    },
    {
      value: timeLeft.hours,
      label: "HOURS",
    },
    {
      value: timeLeft.minutes,
      label: "MINUTES",
    },
    {
      value: timeLeft.seconds,
      label: "SECONDS",
    },
  ];

  return (
    <div className="engagement-countdown">
      {items.map((item) => (
        <div className="engagement-countdown-item" key={item.label}>
          <div className="engagement-countdown-number">
            {String(item.value).padStart(2, "0")}
          </div>

          <div className="engagement-countdown-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   MAIN ENGAGEMENT
========================================================= */

export default function Engagement() {
  const [revealed, setRevealed] = useState({
    month: false,
    day: false,
    year: false,
  });

  const allRevealed = revealed.month && revealed.day && revealed.year;

  const handleReveal = (key) => {
    setRevealed((previous) => ({
      ...previous,
      [key]: true,
    }));
  };

  return (
    <section className="engagement-section">
      {/* ===================================================
          BACKGROUND GLOWS
      =================================================== */}

      <div className="engagement-glow engagement-glow-one" aria-hidden="true" />

      <div className="engagement-glow engagement-glow-two" aria-hidden="true" />

      <div
        className="engagement-glow engagement-glow-three"
        aria-hidden="true"
      />

      {/* ===================================================
          GOLD PARTICLES
      =================================================== */}

      <div className="engagement-particle particle-1" aria-hidden="true">
        ✦
      </div>

      <div className="engagement-particle particle-2" aria-hidden="true">
        ✧
      </div>

      <div className="engagement-particle particle-3" aria-hidden="true">
        ✦
      </div>

      <div className="engagement-particle particle-4" aria-hidden="true">
        ❋
      </div>

      <div className="engagement-particle particle-5" aria-hidden="true">
        ✦
      </div>

      <div className="engagement-particle particle-6" aria-hidden="true">
        ✧
      </div>

      <div className="engagement-particle particle-7" aria-hidden="true">
        ✦
      </div>

      {/* ===================================================
          FLOATING PETALS
      =================================================== */}

      <div className="engagement-petal petal-1" aria-hidden="true">
        ❀
      </div>

      <div className="engagement-petal petal-2" aria-hidden="true">
        ✿
      </div>

      <div className="engagement-petal petal-3" aria-hidden="true">
        ❀
      </div>

      <div className="engagement-petal petal-4" aria-hidden="true">
        ✦
      </div>

      <div className="engagement-petal petal-5" aria-hidden="true">
        ❀
      </div>

      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div className="engagement-container">
        <div className="engagement-card">
          <div className="engagement-card-inner" aria-hidden="true" />

          {/* TOP ORNAMENT */}

          <div className="engagement-top-ornament" aria-hidden="true">
            <span>✦</span>
            <i />
            <span>❋</span>
            <i />
            <span>✦</span>
          </div>

          {/* EYEBROW */}

          <div className="engagement-eyebrow">OUR SPECIAL DAY</div>

          {/* TITLE */}

          <h2 className="engagement-title">Save the Date</h2>

          {/* SUBTITLE */}

          <p className="engagement-subtitle">
            Scratch below to reveal
            <br />
            our beautiful wedding date
          </p>

          {/* DIVIDER */}

          <div className="engagement-divider" aria-hidden="true">
            <span>✦</span>
            <i />
            <span>❋</span>
            <i />
            <span>✦</span>
          </div>

          {/* =================================================
              SCRATCH CARDS
          ================================================= */}

          <div className="engagement-scratch-wrapper">
            <ScratchBox
              type="month"
              value="NOVEMBER"
              label="MONTH"
              onReveal={() => handleReveal("month")}
            />

            <ScratchBox
              type="day"
              value="01"
              label="DAY"
              onReveal={() => handleReveal("day")}
            />

            <ScratchBox
              type="year"
              value="2026"
              label="YEAR"
              onReveal={() => handleReveal("year")}
            />
          </div>

          {/* =================================================
              REVEAL MESSAGE
          ================================================= */}

          <div
            className={`engagement-reveal-message ${allRevealed ? "show" : ""}`}
          >
            <span className="engagement-reveal-small">OUR SPECIAL DAY</span>

            <strong>01 · 11 · 2026</strong>

            <span className="engagement-reveal-location">WALAJABAD</span>
          </div>

          {/* =================================================
              LOVE MESSAGE
          ================================================= */}

          <div className="engagement-love-message">
            <span className="engagement-quote quote-left">“</span>

            <p>
              Surrounded by the love and blessings
              <br className="desktop-break" />
              of our beloved families.
            </p>

            <span className="engagement-quote quote-right">”</span>
          </div>

          {/* =================================================
              WEDDING DETAILS
          ================================================= */}

          <div className="engagement-details">
            <div className="engagement-detail-item">
              <span className="engagement-detail-icon">♡</span>

              <span className="engagement-detail-label">THIRUMANAM</span>

              <span className="engagement-detail-value">01 · 11 · 2026</span>
            </div>

            <div className="engagement-detail-line" aria-hidden="true" />

            <div className="engagement-detail-item">
              <span className="engagement-detail-icon">✦</span>

              <span className="engagement-detail-label">VENUE</span>

              <span className="engagement-detail-value">Adam Mahal</span>
            </div>
          </div>

          {/* =================================================
              COUNTDOWN
          ================================================= */}

          <div className="engagement-countdown-section">
            <div className="engagement-countdown-heading">
              COUNTING THE MOMENTS
            </div>

            <div className="engagement-countdown-divider" aria-hidden="true">
              ✦ ───── ❋ ───── ✦
            </div>

            <Countdown />
          </div>

          {/* =================================================
              GOOGLE CALENDAR
          ================================================= */}

          <div className="engagement-calendar-wrapper">
            <SaveTheDateButton />
          </div>

          {/* =================================================
              BOTTOM ORNAMENT
          ================================================= */}

          <div className="engagement-bottom-ornament" aria-hidden="true">
            <span>✦</span>
            <i />
            <span>❋</span>
            <i />
            <span>✦</span>
          </div>

          <div className="engagement-bottom-text">
            WITH LOVE &amp; BLESSINGS
          </div>
        </div>
      </div>
    </section>
  );
}
