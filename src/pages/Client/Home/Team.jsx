import React from "react";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();

  return (
    <section id="team" class="team">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Our Team</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem.
          </p>
        </div>

        <div class="row">
          <div class="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
            <div class="member">
              <div class="pic">
                <img src="assets/img/pastor.jpg" class="img-fluid" alt="" />
              </div>

              <div class="member-info">
                <h4>Prophet Mesfin Beshu</h4>
                <span>Church Visionary & Founder</span>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="member">
              <div class="pic">
                <img src="assets/img/pastor.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Prophet Mesfin Beshu</h4>
                <span>Church Visionary & Founder</span>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="member">
              <div class="pic">
                <img src="assets/img/pastor.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Prophet Mesfin Beshu</h4>
                <span>Church Visionary & Founder</span>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="member">
              <div class="pic">
                <img src="assets/img/pastor.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Prophet Mesfin Beshu</h4>
                <span>Church Visionary & Founder</span>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
