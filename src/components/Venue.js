import React from "react";

function Venue() {

  const mapUrl =
    "https://maps.app.goo.gl/HujH1WFA1ppdn5PX9";

  return (
    <section className="venue-section section-padding">

      <div className="container">

        <div className="venue-card text-center">

          <div className="ornament">
            ✦ ─── ❀ ─── ✦
          </div>

          <p className="section-subtitle">
            THE VENUE
          </p>

          <h2 className="venue-title">
            Adam Mahal
          </h2>

          <p className="venue-address">
            Adam Mahal Thirumana Mandapam
            <br />
            Eswaran Koil Street
            <br />
            Walajabad
          </p>

          <div className="map-placeholder">

            <i className="bi bi-geo-alt-fill"></i>

            <p>
              Adam Mahal
            </p>

          </div>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn gold-button"
          >
            <i className="bi bi-map"></i>
            &nbsp; GET DIRECTIONS
          </a>

        </div>

      </div>

    </section>
  );
}

export default Venue;