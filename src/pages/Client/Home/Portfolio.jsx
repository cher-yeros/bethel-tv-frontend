/* eslint-disable jsx-a11y/anchor-is-valid */
import Isotope from "isotope-layout";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { GET_SERVICES_FOR_USERS } from "../../../graphql/services";
import { useQuery } from "@apollo/client";

export default function Portfolio() {
  const { t } = useTranslation();

  const isotopeInstance = useRef(null);
  const gridElement = useRef(null);

  const [activeFilter, setActiveFilter] = useState("*");

  const { data, loading } = useQuery(GET_SERVICES_FOR_USERS);

  useEffect(() => {
    // Initialize Isotope
    isotopeInstance.current = new Isotope(gridElement.current, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    // Cleanup on unmount
    return () => {
      isotopeInstance.current.destroy();
    };
  }, [activeFilter]);

  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({ filter: activeFilter });
      isotopeInstance.current.on("arrangeComplete", function () {
        window.AOS && window.AOS.refresh(); // Refresh AOS if it's available
      });
    }
  }, [activeFilter]);

  const filterItems = (filter) => {
    // isotopeInstance.current.arrange({ filter });

    setActiveFilter(filter);
  };

  const dataFilters = [
    // {
    //   className: "filter-active",
    //   dataFilter: "*",
    //   label: "All",
    //   category: "*",
    // },
    {
      className: "",
      dataFilter: ".category-worship",
      label: "Worship",
      category: "category-worship",
    },
    {
      className: "",
      dataFilter: ".category-preaching",
      label: "Preaching",
      category: "category-preaching",
    },
    {
      className: "",
      dataFilter: ".category-teaching",
      label: "Teaching",
      category: "category-teaching",
    },
    {
      className: "",
      dataFilter: ".category-deliverance",
      label: "Deliverance",
      category: "category-deliverance",
    },
    {
      className: "",
      dataFilter: ".category-prayer",
      label: "Prayer",
      category: "category-prayer",
    },
    {
      className: "",
      dataFilter: ".category-healing",
      label: "Healing",
      category: "category-healing",
    },
    {
      className: "",
      dataFilter: ".category-discipleship",
      label: "Discipleship",
      category: "category-discipleship",
    },
  ];

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="section-title">
          <h2>Bethel TV</h2>
          <p>
            {/* Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas. */}
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              {/* <li
                data-filter="*"
                className="filter-active"
                onClick={() => filterItems("*")}
              >
                All
              </li> */}
              <li
                data-filter=".filter-deliverance"
                className={
                  activeFilter === ".filter-deliverance" && "filter-active"
                }
                onClick={() => filterItems(".filter-deliverance")}
              >
                Deliverance Time
              </li>
              <li
                data-filter=".filter-worship"
                className={
                  activeFilter === ".filter-worship" && "filter-active"
                }
                onClick={() => filterItems(".filter-worship")}
              >
                Worship
              </li>
              <li
                data-filter=".filter-miracle"
                className={
                  activeFilter === ".filter-miracle" && "filter-active"
                }
                onClick={() => filterItems(".filter-miracle")}
              >
                Miracle
              </li>
              <li
                data-filter=".filter-testimony"
                className={
                  activeFilter === ".filter-testimony" && "filter-active"
                }
                onClick={() => filterItems(".filter-testimony")}
              >
                Testimony
              </li>
              <li
                data-filter=".filter-teaching"
                className={
                  activeFilter === ".filter-teaching" && "filter-active"
                }
                onClick={() => filterItems(".filter-teaching")}
              >
                Teaching
              </li>
              <li
                data-filter=".filter-preaching"
                className={
                  activeFilter === ".filter-preaching" && "filter-active"
                }
                onClick={() => filterItems(".filter-preaching")}
              >
                Preaching
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
          ref={gridElement}
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 portfolio-item ${item.filter}`}
            >
              <div className="portfolio-wrap">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    src={item.videoUrl}
                    title={item.title}
                    allowFullScreen
                  ></iframe>
                </div>
                {/* <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const portfolioItems = [
  {
    videoUrl: "https://www.youtube.com/embed/rcGqqDHTmxE",
    title: "Deliverance 1",
    category: "Deliverance Time",
    filter: "filter-deliverance",
  },
  {
    videoUrl: "https://www.youtube.com/embed/rcGqqDHTmxE",
    title: "Worship 1",
    category: "Worship",
    filter: "filter-worship",
  },
  {
    videoUrl: "https://www.youtube.com/embed/rcGqqDHTmxE",
    title: "Miracle 1",
    category: "Miracle",
    filter: "filter-miracle",
  },
  {
    videoUrl: "https://www.youtube.com/embed/rcGqqDHTmxE",
    title: "Testimony 1",
    category: "Testimony",
    filter: "filter-testimony",
  },
  {
    videoUrl: "https://www.youtube.com/embed/rcGqqDHTmxE",
    title: "Teaching 1",
    category: "Teaching",
    filter: "filter-teaching",
  },
  {
    videoUrl: "https://www.youtube.com/embed/rcGqqDHTmxE",
    title: "Preaching 1",
    category: "Preaching",
    filter: "filter-preaching",
  },
  {
    videoUrl: "https://www.youtube.com/embed/rcGqqDHTmxE",
    title: "Deliverance 2",
    category: "Deliverance Time",
    filter: "filter-deliverance",
  },
  {
    videoUrl: "https://www.youtube.com/embed/rcGqqDHTmxE",
    title: "Worship 2",
    category: "Worship",
    filter: "filter-worship",
  },
  {
    videoUrl: "https://www.youtube.com/embed/rcGqqDHTmxE",
    title: "Miracle 2",
    category: "Miracle",
    filter: "filter-miracle",
  },
];

function getYouTubeID(url) {
  var regExp =
    /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|youtu.be\/|\/embed\/)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return null;
  }
}
