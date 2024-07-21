import React from "react";

export default function Counts() {
  return (
    <section className="counts section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
            <div className="count-box">
              <i className="bi bi-people" style={{ color: "#20b38e" }}></i>
              {/* <span
                data-purecounter-start="0"
                data-purecounter-end="5000"
                data-purecounter-duration="1"
                className="purecounter"
              ></span> */}
              5656
              <p>Members</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i className="bi bi-tv" style={{ color: "#c042ff" }}></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="300"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              566
              <p>Broadcasts</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="count-box">
              <i
                className="bi bi-clock-history"
                style={{ color: "#46d1ff" }}
              ></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="15000"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              736
              <p>Hours of Worship</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="count-box">
              <i className="bi bi-people-fill" style={{ color: "#ffb459" }}></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="50"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              900
              <p>Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
