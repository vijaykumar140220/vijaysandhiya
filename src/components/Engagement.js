import React from "react";

function Engagement() {
  // Google Calendar event details
  const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Vijaya+Kumar+%26+Sandhiya+-+Wedding+Ceremony" +
    "&dates=20261101T020000Z/20261101T033000Z" +
    "&details=Wedding+Ceremony+of+Vijaya+Kumar+and+Sandhiya" +
    "&location=Adam+Mahal+Thirumana+Mandapam%2C+Eswaran+Koil+Street%2C+Walajabad" +
    "&ctz=Asia%2FKolkata";

  return (
    <section className="engagement-section section-padding">
      <div className="container">
        <div className="event-card">
          {/* Ornament */}
          <div className="ornament">✦ ─── ✦ ─── ✦</div>

          {/* Event Title */}
          <p className="event-small-title">THE WEDDING CEREMONY</p>

          {/* Day */}
          <h2 className="event-day">Sunday</h2>

          {/* Date */}
          <h1 className="event-date">01</h1>

          {/* Month */}
          <h3 className="event-month">NOVEMBER 2026</h3>

          {/* Time */}
          <div className="event-time">
            <i className="bi bi-clock"></i>
            &nbsp; 7:30 AM — 9:00 AM
          </div>

          {/* Location */}
          <div className="event-location-text">
            <strong>Adam Mahal Thirumana Mandapam</strong>
            <br />
            Eswaran Koil Street,
            <br />
            Walajabad
          </div>

          {/* Google Calendar */}
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn gold-button"
          >
            <i className="bi bi-calendar-heart"></i>
            &nbsp; SAVE THE DATE
          </a>

          {/* Calendar Note */}
          <div className="calendar-note">
            Add this special day to your Google Calendar
          </div>
        </div>
      </div>
    </section>
  );
}

export default Engagement;
