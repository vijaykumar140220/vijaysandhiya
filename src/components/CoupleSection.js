import React from "react";

function CoupleSection() {
  return (
    <section className="couple-section section-padding">

      <div className="container text-center">

        <div className="ornament">
          ✦ ─── ❀ ─── ✦
        </div>

        <h2 className="section-title">
          Together with our Families
        </h2>

        <p className="photo-caption">
          Two hearts, one beautiful beginning
        </p>

        <div className="couple-photo-wrapper">

          <img
            src="vijaya.png"
            alt="Couple"
            className="couple-photo"
          />

        </div>

        <div className="couple-photo-names">
          Vijay Kumar <span>♥</span> Sandhiya
        </div>

        <div className="ornament">
          ✦ ─── ❀ ─── ✦
        </div>

      </div>

    </section>
  );
}

export default CoupleSection;