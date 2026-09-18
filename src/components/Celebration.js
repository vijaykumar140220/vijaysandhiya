import React from "react";
import "./Celebration.css";

function Celebration() {
  return (
    <section className="celebration-section section-padding">
      <div className="container text-center">
        <div className="ornament">✦ ─── ❀ ─── ✦</div>

        <p className="section-subtitle">OUR SPECIAL CELEBRATIONS</p>

        <h2 className="section-title">Two Beautiful Moments</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">31</div>

            <div>
              <span>OCTOBER 2026</span>

              <h3>Reception & Dinner</h3>

              <p>6:30 PM onwards</p>
            </div>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-date">01</div>

            <div>
              <span>NOVEMBER 2026</span>

              <h3>Wedding Ceremony</h3>

              <p>7:30 AM — 9:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Celebration;
