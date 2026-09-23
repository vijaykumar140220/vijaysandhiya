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
  location: "Walajabad",
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
   SAVE TO GOOGLE CALENDAR BUTTON
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
        <span className="engagement-calendar-small">
          SAVE THIS MOMENT
        </span>

        <span className="engagement-calendar-main">
          Add to Google Calendar
        </span>
      </span>

      <span className="engagement-calendar-arrow">→</span>
    </button>
  );
}

/* =========================================================
   SCRATCH CARD
========================================================= */

function ScratchBox({ value, label, onReveal, type }) {
  const canvasRef = useRef(null);

  const [scratched, setScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const parent = canvas.parentElement;

    if (!parent) return;

    const setupCanvas = () => {
      const rect = parent.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      /* Gold scratch surface */

      const gradient = ctx.createLinearGradient(
        0,
        0,
        rect.width,
        rect.height
      );

      gradient.addColorStop(0, "#f4dfaa");
      gradient.addColorStop(0.22, "#d8b56a");
      gradient.addColorStop(0.5, "#f6e4b5");
      gradient.addColorStop(0.75, "#c99b4e");
      gradient.addColorStop(1, "#e9cc8a");

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      /* Golden shine */

      const shine = ctx.createLinearGradient(
        0,
        0,
        rect.width,
        rect.height
      );

      shine.addColorStop(
        0,
        "rgba(255,255,255,0.38)"
      );

      shine.addColorStop(
        0.5,
        "rgba(255,255,255,0)"
      );

      shine.addColorStop(
        1,
        "rgba(90,45,10,0.14)"
      );

      ctx.fillStyle = shine;
      ctx.fillRect(0, 0, rect.width, rect.height);

      /* Inner border */

      ctx.strokeStyle = "rgba(92, 43, 24, 0.48)";
      ctx.lineWidth = 1;

      ctx.strokeRect(
        9,
        9,
        rect.width - 18,
        rect.height - 18
      );

      /* Corner ornaments */

      ctx.fillStyle = "rgba(94, 42, 24, 0.65)";
      ctx.font = "14px Georgia, serif";

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText("✦", 19, 19);
      ctx.fillText("✦", rect.width - 19, 19);
      ctx.fillText("✦", 19, rect.height - 19);
      ctx.fillText(
        "✦",
        rect.width - 19,
        rect.height - 19
      );

      /* Scratch label */

      ctx.fillStyle = "#6a391f";

      ctx.font =
        '600 11px Montserrat, Arial, sans-serif';

      ctx.fillText(
        "SCRATCH TO REVEAL",
        rect.width / 2,
        rect.height / 2 - 8
      );

      ctx.fillStyle = "#82572e";

      ctx.font =
        "10px Montserrat, Arial, sans-serif";

      ctx.fillText(
        "✦  ❋  ✦",
        rect.width / 2,
        rect.height / 2 + 14
      );
    };

    setupCanvas();

    window.addEventListener("resize", setupCanvas);

    return () => {
      window.removeEventListener(
        "resize",
        setupCanvas
      );
    };
  }, []);

  const getPoint = (event) => {
    const canvas = canvasRef.current;

    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (
      event.touches &&
      event.touches.length > 0
    ) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const scratch = (event) => {
    if (!isDrawing || scratched) return;

    if (event.cancelable) {
      event.preventDefault();
    }

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const point = getPoint(event);

    if (!point) return;

    ctx.save();

    ctx.globalCompositeOperation =
      "destination-out";

    ctx.beginPath();

    ctx.arc(
      point.x,
      point.y,
      type === "year" ? 34 : 30,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.restore();

    /* Check scratched percentage */

    try {
      const pixels = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      let transparentPixels = 0;
      let totalSamples = 0;

      const sampleStep = 4 * 16;

      for (
        let i = 3;
        i < pixels.length;
        i += sampleStep
      ) {
        totalSamples++;

        if (pixels[i] < 80) {
          transparentPixels++;
        }
      }

      const percentage =
        totalSamples > 0
          ? (transparentPixels / totalSamples) * 100
          : 0;

      if (percentage > 38) {
        setScratched(true);

        if (onReveal) {
          onReveal();
        }
      }
    } catch (error) {
      console.error(
        "Scratch canvas error:",
        error
      );
    }
  };

  const startScratch = (event) => {
    if (event.cancelable) {
      event.preventDefault();
    }

    setIsDrawing(true);

    /* Small delay allows state to update */
    setTimeout(() => {
      scratch(event);
    }, 0);
  };

  const stopScratch = () => {
    setIsDrawing(false);
  };

  return (
    <div
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

      <div className="engagement-scratch-bottom">
        ❋
      </div>

      {!scratched && (
        <canvas
          ref={canvasRef}
          className="engagement-scratch-canvas"
          onMouseDown={startScratch}
          onMouseMove={scratch}
          onMouseUp={stopScratch}
          onMouseLeave={stopScratch}
          onTouchStart={startScratch}
          onTouchMove={scratch}
          onTouchEnd={stopScratch}
          onTouchCancel={stopScratch}
          aria-label={`Scratch to reveal ${label}`}
        />
      )}

      <div
        className="engagement-scratch-glow"
        aria-hidden="true"
      />
    </div>
  );
}

/* =========================================================
   COUNTDOWN
========================================================= */

function Countdown() {
  const calculateTimeLeft = () => {
    const weddingDate = new Date(
      "2026-11-01T07:30:00+05:30"
    );

    const difference =
      weddingDate.getTime() -
      new Date().getTime();

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
  };

  const [timeLeft, setTimeLeft] =
    useState(calculateTimeLeft);

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
   MAIN ENGAGEMENT
========================================================= */

export default function Engagement() {
  const [revealed, setRevealed] = useState({
    month: false,
    day: false,
    year: false,
  });

  const allRevealed =
    revealed.month &&
    revealed.day &&
    revealed.year;

  const handleReveal = (key) => {
    setRevealed((previous) => ({
      ...previous,
      [key]: true,
    }));
  };

  return (
    <section className="engagement-section">
      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

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

      {/* =====================================================
          GOLD PARTICLES
      ====================================================== */}

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

      <div
        className="engagement-particle particle-6"
        aria-hidden="true"
      >
        ✧
      </div>

      <div
        className="engagement-particle particle-7"
        aria-hidden="true"
      >
        ✦
      </div>

      {/* =====================================================
          FLOATING PETALS
      ====================================================== */}

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

      <div
        className="engagement-petal petal-5"
        aria-hidden="true"
      >
        ❀
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="engagement-container">
        <div className="engagement-card">
          <div
            className="engagement-card-inner"
            aria-hidden="true"
          />

          {/* =================================================
              TOP ORNAMENT
          ================================================= */}

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

          {/* =================================================
              EYEBROW
          ================================================= */}

          <div className="engagement-eyebrow">
            OUR SPECIAL DAY
          </div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h2 className="engagement-title">
            Save the Date
          </h2>

          <p className="engagement-subtitle">
            Scratch below to reveal
            <br />
            our beautiful wedding date
          </p>

          {/* =================================================
              DIVIDER
          ================================================= */}

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

          {/* =================================================
              SCRATCH CARDS
          ================================================= */}

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

          {/* =================================================
              REVEAL MESSAGE
          ================================================= */}

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

          {/* =================================================
              LOVE MESSAGE
          ================================================= */}

          <div className="engagement-love-message">
            <span className="engagement-quote quote-left">
              “
            </span>

            <p>
              Surrounded by the love and blessings
              <br className="desktop-break" />
              of our beloved families.
            </p>

            <span className="engagement-quote quote-right">
              ”
            </span>
          </div>

          {/* =================================================
              WEDDING DETAILS
          ================================================= */}

          <div className="engagement-details">
            <div className="engagement-detail-item">
              <span className="engagement-detail-icon">
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
              <span className="engagement-detail-icon">
                ✦
              </span>

              <span className="engagement-detail-label">
                VENUE
              </span>

              <span className="engagement-detail-value">
                WALAJABAD
              </span>
            </div>
          </div>

          {/* =================================================
              COUNTDOWN
          ================================================= */}

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

          {/* =================================================
              GOOGLE CALENDAR
          ================================================= */}

          <div className="engagement-calendar-wrapper">
            <SaveTheDateButton />
          </div>

          {/* =================================================
              BOTTOM ORNAMENT
          ================================================= */}

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