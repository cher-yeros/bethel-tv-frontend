import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="row no-gutters">
            <div class="col-lg-6 video-box">
              <img src="assets/img/about-1.jpg" class="img-fluid" alt="" />
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                class="venobox play-btn mb-4"
                data-vbtype="video"
                data-autoplay="true"
              ></a>
            </div>

            <div class="col-lg-6 d-flex flex-column justify-content-center about-content">
              <div class="section-title">
                <h2>About Us</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea.
                </p>
              </div>

              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon">
                  <i class="bx bx-fingerprint"></i>
                </div>
                <h4 class="title">
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p class="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon">
                  <i class="bx bx-gift"></i>
                </div>
                <h4 class="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p class="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about-lists">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-lg-4 col-md-6 content-item" data-aos="fade-up">
              <span>01</span>
              <h4>Our Mission</h4>
              <p>
                To spread the word of God and share the love of Jesus Christ
                through our broadcasts and community services.
              </p>
            </div>

            <div
              class="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span>02</span>
              <h4>Our Vision</h4>
              <p>
                To become a beacon of hope and faith for people in Ethiopia and
                around the world, bringing them closer to God.
              </p>
            </div>

            <div
              class="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span>03</span>
              <h4>Community Outreach</h4>
              <p>
                We are dedicated to serving our local communities through
                various outreach programs, including food drives, health camps,
                and educational initiatives.
              </p>
            </div>

            <div
              class="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span>04</span>
              <h4>Our Broadcasts</h4>
              <p>
                Tune in to Bethel TV for inspirational sermons, uplifting music,
                and spiritual guidance that will strengthen your faith.
              </p>
            </div>

            <div
              class="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span>05</span>
              <h4>Upcoming Events</h4>
              <p>
                Join us for our upcoming events, including worship services,
                prayer meetings, and community gatherings. Stay tuned for more
                details!
              </p>
            </div>

            <div
              class="col-lg-4 col-md-6 content-item"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span>06</span>
              <h4>Support Us</h4>
              <p>
                Your generous donations help us continue our mission. Learn how
                you can support Bethel TV and make a difference in the lives of
                others.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
