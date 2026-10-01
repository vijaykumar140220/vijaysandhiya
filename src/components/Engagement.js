import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Engagement.css";

/* =========================================================
   WEDDING EVENT
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

function SaveTheDateButton() {
  const handleCalendarClick = useCallback(() => {
    window.open(
      createGoogleCalendarUrl(),
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <button
      type="button"
      className="engagement-calendar-button"
      onClick={handleCalendarClick}
      aria-label="Add wedding date to Google Calendar"
    >
      <span className="engagement-calendar-icon" aria-hidden="true">
        ♡
      </span>

      <span className="engagement-calendar-text">
        <span className="engagement-calendar-small">
          SAVE THIS MOMENT
        </span>

        <span className="engagement-calendar-main">
          Add to Google Calendar
        </span>
      </span>

      <span className="engagement-calendar-arrow" aria-hidden="true">
        →
      </span>
    </button>
  );
}

/* =========================================================
   SCRATCH CARD
========================================================= */

function ScratchBox({ value, label, onReveal, type }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const ctxRef = useRef(null);

  const drawingRef = useRef(false);
  const scratchedRef = useRef(false);
  const revealedRef = useRef(false);

  const lastPointRef = useRef(null);
  const rafRef = useRef(null);
  const pendingPointRef = useRef(null);

  const [scratched, setScratched] = useState(false);

  /* -------------------------------------------------------
     DRAW GOLD SCRATCH SURFACE
  ------------------------------------------------------- */

  const drawScratchSurface = useCallback(
    (canvas, width, height, dpr) => {
      const ctx = canvas.getContext("2d", {
        alpha: true,
      });

      if (!ctx) return;

      ctxRef.current = ctx;

      ctx.setTransform(1, 0, 0, 1, 0, 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.scale(dpr, dpr);

      /* GOLD BASE */

      const gradient = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      gradient.addColorStop(0, "#f8e8bd");
      gradient.addColorStop(0.22, "#c89b52");
      gradient.addColorStop(0.42, "#f5dfaa");
      gradient.addColorStop(0.62, "#d0a65d");
      gradient.addColorStop(0.82, "#efd79c");
      gradient.addColorStop(1, "#bc8940");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      /* LIGHT SHINE */

      const shine = ctx.createLinearGradient(
        0,
        0,
        width,
        height
      );

      shine.addColorStop(
        0,
        "rgba(255,255,255,.45)"
      );

      shine.addColorStop(
        0.5,
        "rgba(255,255,255,.10)"
      );

      shine.addColorStop(
        1,
        "rgba(80,40,10,.14)"
      );

      ctx.fillStyle = shine;
      ctx.fillRect(0, 0, width, height);

      /* LIGHT TEXTURE */

      ctx.globalAlpha = 0.08;

      const textureGap = width < 150 ? 14 : 18;

      ctx.strokeStyle = "#fff7df";
      ctx.lineWidth = 1;

      for (
        let x = -height;
        x < width + height;
        x += textureGap
      ) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + height, height);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;

      /* BORDER */

      const inset = width < 150 ? 6 : 8;

      ctx.strokeStyle = "rgba(92,43,24,.48)";
      ctx.lineWidth = 1;

      ctx.strokeRect(
        inset,
        inset,
        width - inset * 2,
        height - inset * 2
      );

      /* CORNER SYMBOLS */

      const symbolSize = width < 150 ? 10 : 13;
      const symbolOffset = width < 150 ? 12 : 16;

      ctx.fillStyle = "rgba(94,42,24,.65)";
      ctx.font = `${symbolSize}px Georgia, serif`;

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(
        "✦",
        symbolOffset,
        symbolOffset
      );

      ctx.fillText(
        "✦",
        width - symbolOffset,
        symbolOffset
      );

      ctx.fillText(
        "✦",
        symbolOffset,
        height - symbolOffset
      );

      ctx.fillText(
        "✦",
        width - symbolOffset,
        height - symbolOffset
      );

      /* INSTRUCTION */

      ctx.fillStyle = "#62371f";

      const small = width < 155;

      if (small) {
        ctx.font =
          "700 8px Montserrat, Arial, sans-serif";

        ctx.fillText(
          "SCRATCH",
          width / 2,
          height / 2 - 7
        );

        ctx.fillText(
          "TO REVEAL",
          width / 2,
          height / 2 + 6
        );

        ctx.fillStyle = "#80552b";

        ctx.font =
          "9px Montserrat, Arial, sans-serif";

        ctx.fillText(
          "✦  ❋  ✦",
          width / 2,
          height / 2 + 22
        );
      } else {
        ctx.font =
          "600 11px Montserrat, Arial, sans-serif";

        ctx.fillText(
          "SCRATCH TO REVEAL",
          width / 2,
          height / 2 - 7
        );

        ctx.fillStyle = "#80552b";

        ctx.font =
          "10px Montserrat, Arial, sans-serif";

        ctx.fillText(
          "✦  ❋  ✦",
          width / 2,
          height / 2 + 14
        );
      }
    },
    []
  );

  /* -------------------------------------------------------
     CANVAS SETUP
  ------------------------------------------------------- */

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = containerRef.current;

    if (!canvas || !parent) return;

    let resizeFrame = null;
    let previousWidth = 0;
    let previousHeight = 0;

    const setupCanvas = () => {
      if (scratchedRef.current) return;

      const rect = parent.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      const mobile =
        window.matchMedia("(max-width: 600px)").matches;

      /*
        Desktop: up to 1.5x
        Mobile: max 1.5x

        The original used 2x which increases
        pixel processing significantly.
      */

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        mobile ? 1.5 : 1.75
      );

      const width = Math.round(rect.width);
      const height = Math.round(rect.height);

      if (
        width === previousWidth &&
        height === previousHeight &&
        canvas.width
      ) {
        return;
      }

      previousWidth = width;
      previousHeight = height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      drawScratchSurface(
        canvas,
        width,
        height,
        dpr
      );
    };

    setupCanvas();

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(resizeFrame);

      resizeFrame = requestAnimationFrame(
        setupCanvas
      );
    });

    observer.observe(parent);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(resizeFrame);
    };
  }, [drawScratchSurface]);

  /* -------------------------------------------------------
     GET POINTER POSITION
  ------------------------------------------------------- */

  const getPoint = useCallback((event) => {
    const canvas = canvasRef.current;

    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }, []);

  /* -------------------------------------------------------
     REVEAL CHECK
     
     IMPORTANT:
     This is no longer called continuously.
     
     We check only after scratching pauses/ends.
  ------------------------------------------------------- */

  const checkRevealPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;

    if (
      !canvas ||
      !ctx ||
      revealedRef.current
    ) {
      return;
    }

    try {
      /*
        Instead of reading the entire canvas,
        sample a small fixed-size area.
      */

      const sampleWidth = Math.min(
        90,
        canvas.width
      );

      const sampleHeight = Math.min(
        90,
        canvas.height
      );

      const scaleX =
        canvas.width / sampleWidth;

      const scaleY =
        canvas.height / sampleHeight;

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const pixels = imageData.data;

      let transparentPixels = 0;
      let totalSamples = 0;

      /*
        Sample approximately every few pixels.
      */

      const stepX = Math.max(
        1,
        Math.floor(scaleX)
      );

      const stepY = Math.max(
        1,
        Math.floor(scaleY)
      );

      for (
        let y = 0;
        y < canvas.height;
        y += stepY
      ) {
        for (
          let x = 0;
          x < canvas.width;
          x += stepX
        ) {
          const alphaIndex =
            (y * canvas.width + x) * 4 + 3;

          totalSamples++;

          if (pixels[alphaIndex] < 80) {
            transparentPixels++;
          }
        }
      }

      const percentage =
        totalSamples > 0
          ? (transparentPixels /
              totalSamples) *
            100
          : 0;

      if (percentage >= 38) {
        revealedRef.current = true;
        scratchedRef.current = true;

        setScratched(true);

        onReveal?.();
      }
    } catch (error) {
      console.error(
        "Scratch reveal check failed:",
        error
      );
    }
  }, [onReveal]);

  /* -------------------------------------------------------
     DRAW SCRATCH
  ------------------------------------------------------- */

  const drawScratch = useCallback(
    (point) => {
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;

      if (!ctx || !canvas || !point) {
        return;
      }

      const previous =
        lastPointRef.current || point;

      const distance = Math.hypot(
        point.x - previous.x,
        point.y - previous.y
      );

      const width = canvas.clientWidth || 200;

      const brushSize =
        width < 140
          ? 44
          : width < 180
          ? 49
          : 54;

      const steps = Math.max(
        1,
        Math.ceil(distance / 7)
      );

      ctx.save();

      ctx.globalCompositeOperation =
        "destination-out";

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = brushSize;

      ctx.beginPath();

      ctx.moveTo(
        previous.x,
        previous.y
      );

      for (let i = 1; i <= steps; i++) {
        const progress = i / steps;

        const x =
          previous.x +
          (point.x - previous.x) *
            progress;

        const y =
          previous.y +
          (point.y - previous.y) *
            progress;

        ctx.lineTo(x, y);
      }

      ctx.stroke();

      /*
        Fill the brush head to prevent
        gaps between fast touch movements.
      */

      ctx.beginPath();

      ctx.arc(
        point.x,
        point.y,
        brushSize / 2,
        0,
        Math.PI * 2
      );

      ctx.fill();

      ctx.restore();

      lastPointRef.current = point;
    },
    []
  );

  /* -------------------------------------------------------
     RAF SCRATCH RENDER
  ------------------------------------------------------- */

  const scheduleScratch = useCallback(
    (point) => {
      pendingPointRef.current = point;

      if (rafRef.current) return;

      rafRef.current =
        requestAnimationFrame(() => {
          rafRef.current = null;

          const pending =
            pendingPointRef.current;

          pendingPointRef.current = null;

          if (pending) {
            drawScratch(pending);
          }
        });
    },
    [drawScratch]
  );

  /* -------------------------------------------------------
     POINTER DOWN
  ------------------------------------------------------- */

  const handlePointerDown = useCallback(
    (event) => {
      if (
        scratchedRef.current ||
        revealedRef.current
      ) {
        return;
      }

      event.preventDefault();

      try {
        event.currentTarget.setPointerCapture(
          event.pointerId
        );
      } catch {
        // Unsupported browser.
      }

      drawingRef.current = true;

      const point = getPoint(event);

      lastPointRef.current = point;

      scheduleScratch(point);
    },
    [getPoint, scheduleScratch]
  );

  /* -------------------------------------------------------
     POINTER MOVE
  ------------------------------------------------------- */

  const handlePointerMove = useCallback(
    (event) => {
      if (
        !drawingRef.current ||
        scratchedRef.current ||
        revealedRef.current
      ) {
        return;
      }

      event.preventDefault();

      const point = getPoint(event);

      scheduleScratch(point);
    },
    [getPoint, scheduleScratch]
  );

  /* -------------------------------------------------------
     POINTER END
  ------------------------------------------------------- */

  const handlePointerEnd = useCallback(
    (event) => {
      if (!drawingRef.current) return;

      drawingRef.current = false;

      lastPointRef.current = null;

      try {
        event.currentTarget.releasePointerCapture(
          event.pointerId
        );
      } catch {
        // Unsupported browser.
      }

      /*
        Let the final RAF finish before checking.
      */

      requestAnimationFrame(() => {
        checkRevealPercentage();
      });
    },
    [checkRevealPercentage]
  );

  /* -------------------------------------------------------
     CLEANUP
  ------------------------------------------------------- */

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(
          rafRef.current
        );
      }
    };
  }, []);

  /* -------------------------------------------------------
     CONTEXT MENU
  ------------------------------------------------------- */

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <div
      ref={containerRef}
      className={`engagement-scratch-card engagement-scratch-${type} ${
        scratched ? "is-revealed" : ""
      }`}
    >
      <div
        className="engagement-scratch-card-decoration"
        aria-hidden="true"
      >
        ✦
      </div>

      <div className="engagement-scratch-label">
        {label}
      </div>

      <div className="engagement-scratch-value">
        {value}
      </div>

      <div
        className="engagement-scratch-bottom"
        aria-hidden="true"
      >
        ❋
      </div>

      {!scratched && (
        <canvas
          ref={canvasRef}
          className="engagement-scratch-canvas"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onPointerLeave={handlePointerEnd}
          onContextMenu={handleContextMenu}
          aria-label={`Scratch to reveal ${label}`}
        />
      )}

      <div
        className="engagement-scratch-glow"
        aria-hidden="true"
      />

      <div
        className="engagement-scratch-shine"
        aria-hidden="true"
      />

      {scratched && (
        <div
          className="engagement-reveal-burst"
          aria-hidden="true"
        >
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
  const calculateTimeLeft = useCallback(() => {
    const weddingDate = new Date(
      "2026-11-01T07:30:00+05:30"
    );

    const difference =
      weddingDate.getTime() -
      Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference /
          (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference /
          (1000 * 60 * 60)) %
          24
      ),

      minutes: Math.floor(
        (difference /
          (1000 * 60)) %
          60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  }, []);

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

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
        <div
          className="engagement-countdown-item"
          key={item.label}
        >
          <div className="engagement-countdown-number">
            {String(item.value).padStart(2, "0")}
          </div>

          <div className="engagement-countdown-label">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Engagement() {
  const [revealed, setRevealed] =
    useState({
      month: false,
      day: false,
      year: false,
    });

  const allRevealed =
    revealed.month &&
    revealed.day &&
    revealed.year;

  const handleReveal = useCallback(
    (key) => {
      setRevealed((previous) => {
        if (previous[key]) {
          return previous;
        }

        return {
          ...previous,
          [key]: true,
        };
      });
    },
    []
  );

  return (
    <section className="engagement-section">
      {/* BACKGROUND */}

      <div
        className="engagement-glow engagement-glow-one"
        aria-hidden="true"
      />

      <div
        className="engagement-glow engagement-glow-two"
        aria-hidden="true"
      />

      <div
        className="engagement-glow engagement-glow-three"
        aria-hidden="true"
      />

      {/* PARTICLES */}

      <div
        className="engagement-particle particle-1"
        aria-hidden="true"
      >
        ✦
      </div>

      <div
        className="engagement-particle particle-2"
        aria-hidden="true"
      >
        ✧
      </div>

      <div
        className="engagement-particle particle-3"
        aria-hidden="true"
      >
        ✦
      </div>

      <div
        className="engagement-particle particle-4"
        aria-hidden="true"
      >
        ❋
      </div>

      <div
        className="engagement-particle particle-5"
        aria-hidden="true"
      >
        ✦
      </div>

      {/* PETALS */}

      <div
        className="engagement-petal petal-1"
        aria-hidden="true"
      >
        ❀
      </div>

      <div
        className="engagement-petal petal-2"
        aria-hidden="true"
      >
        ✿
      </div>

      <div
        className="engagement-petal petal-3"
        aria-hidden="true"
      >
        ❀
      </div>

      <div
        className="engagement-petal petal-4"
        aria-hidden="true"
      >
        ✦
      </div>

      {/* MAIN */}

      <div className="engagement-container">
        <div className="engagement-card">
          <div
            className="engagement-card-inner"
            aria-hidden="true"
          />

          {/* TOP ORNAMENT */}

          <div
            className="engagement-top-ornament"
            aria-hidden="true"
          >
            <span>✦</span>
            <i />
            <span>❋</span>
            <i />
            <span>✦</span>
          </div>

          {/* HEADING */}

          <div className="engagement-eyebrow">
            OUR SPECIAL DAY
          </div>

          <h2 className="engagement-title">
            Save the Date
          </h2>

          <p className="engagement-subtitle">
            Scratch below to reveal
            <br />
            our beautiful wedding date
          </p>

          {/* DIVIDER */}

          <div
            className="engagement-divider"
            aria-hidden="true"
          >
            <span>✦</span>
            <i />
            <span>❋</span>
            <i />
            <span>✦</span>
          </div>

          {/* SCRATCH CARDS */}

          <div className="engagement-scratch-wrapper">
            <ScratchBox
              type="month"
              value="NOVEMBER"
              label="MONTH"
              onReveal={() =>
                handleReveal("month")
              }
            />

            <ScratchBox
              type="day"
              value="01"
              label="DAY"
              onReveal={() =>
                handleReveal("day")
              }
            />

            <ScratchBox
              type="year"
              value="2026"
              label="YEAR"
              onReveal={() =>
                handleReveal("year")
              }
            />
          </div>

          {/* REVEAL */}

          <div
            className={`engagement-reveal-message ${
              allRevealed ? "show" : ""
            }`}
          >
            <span className="engagement-reveal-small">
              OUR SPECIAL DAY
            </span>

            <strong>
              01 · 11 · 2026
            </strong>

            <span className="engagement-reveal-location">
              WALAJABAD
            </span>
          </div>

          {/* LOVE MESSAGE */}

          <div className="engagement-love-message">
            <span
              className="engagement-quote quote-left"
              aria-hidden="true"
            >
              “
            </span>

            <p>
              Surrounded by the love and
              blessings
              <br className="desktop-break" />
              of our beloved families.
            </p>

            <span
              className="engagement-quote quote-right"
              aria-hidden="true"
            >
              ”
            </span>
          </div>

          {/* DETAILS */}

          <div className="engagement-details">
            <div className="engagement-detail-item">
              <span
                className="engagement-detail-icon"
                aria-hidden="true"
              >
                ♡
              </span>

              <span className="engagement-detail-label">
                THIRUMANAM
              </span>

              <span className="engagement-detail-value">
                01 · 11 · 2026
              </span>
            </div>

            <div
              className="engagement-detail-line"
              aria-hidden="true"
            />

            <div className="engagement-detail-item">
              <span
                className="engagement-detail-icon"
                aria-hidden="true"
              >
                ✦
              </span>

              <span className="engagement-detail-label">
                VENUE
              </span>

              <span className="engagement-detail-value">
                Adam Mahal
              </span>
            </div>
          </div>

          {/* COUNTDOWN */}

          <div className="engagement-countdown-section">
            <div className="engagement-countdown-heading">
              COUNTING THE MOMENTS
            </div>

            <div
              className="engagement-countdown-divider"
              aria-hidden="true"
            >
              ✦ ───── ❋ ───── ✦
            </div>

            <Countdown />
          </div>

          {/* GOOGLE CALENDAR */}

          <div className="engagement-calendar-wrapper">
            <SaveTheDateButton />
          </div>

          {/* BOTTOM */}

          <div
            className="engagement-bottom-ornament"
            aria-hidden="true"
          >
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