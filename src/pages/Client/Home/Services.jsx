import React, { useEffect } from "react";
// import "aos/dist/aos.css";
// import Aos from "aos";

const Services = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // }, []);

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon">
              <i className="bi bi-chat-left-dots"></i>
            </div>
            <h4 className="title">
              <a href="#services">Prayer Team</a>
            </h4>
            <p className="description">
              Our dedicated Prayer Team is here to support you through prayer,
              interceding on your behalf and providing spiritual guidance.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon">
              <i className="bi bi-bounding-box"></i>
            </div>
            <h4 className="title">
              <a href="#services">Youth Ministry</a>
            </h4>
            <p className="description">
              Engaging and empowering the next generation through dynamic youth
              programs, fostering faith and community.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon">
              <i className="bi bi-globe"></i>
            </div>
            <h4 className="title">
              <a href="#services">Mission Outreach</a>
            </h4>
            <p className="description">
              Reaching out to communities locally and globally, spreading the
              message of love and hope through our missions.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon">
              <i className="bi bi-broadcast"></i>
            </div>
            <h4 className="title">
              <a href="#services">Broadcast Ministry</a>
            </h4>
            <p className="description">
              Broadcasting uplifting sermons, worship services, and special
              events to bring the church experience to you.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon">
              <i className="bi bi-brightness-high"></i>
            </div>
            <h4 className="title">
              <a href="#services">Children's Ministry</a>
            </h4>
            <p className="description">
              Providing a safe and nurturing environment for children to learn
              about God's love through fun and engaging activities.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon">
              <i className="bi bi-calendar2-week"></i>
            </div>
            <h4 className="title">
              <a href="#services">Community Events</a>
            </h4>
            <p className="description">
              Organizing events and gatherings that bring people together,
              fostering a sense of community and fellowship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
