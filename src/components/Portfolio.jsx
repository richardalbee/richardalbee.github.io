import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    PROJECTS: "Projects",
    SCRIPTS: "Scripts",
    WRITING: "Technical-Writing",
  };

  const projectsData = [
    {
      title: "My Portfolio Website",
      projectInfo:
        "Built from NodeJS using react and HTML, this website is deployed through Github Pages. Github actions extract newly compiled builds and deploy to the root of the github page. The compiled website files are then hosted through github. You can learn more by visiting the code source below.",
      client: "Home Project",
      technologies: "Github, HTML5, CSS3, React, NodeJS",
      industry: "",
      readme: "",
      url: {
        name: "My Portfolio's Development Repo",
        link: "https://github.com/richardalbee/richardalbee.github.io",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/richard-albee/",
        facebook: "http://www.facebook.com/",
        github: "https://github.com/richardalbee/portfolio-development",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:ralbee1@iwu.edu",
      },
      thumbImage: "images/projects/portfolio-screenshot.jpg",
      sliderImages: [
      ],
      categories: [filters.PROJECTS],
    },
    {
      title: "Lego Python",
      projectInfo:
        "I am the lead architect and primary developer of a modular, component-based, python scripting platform used to design automation tools cross-departmentally. LegoPython has recovered over 5 million dollars and hundreds of hours of work by globally automating auth, environment handling, error handling, logging, api call methods, and more. Thousands of proprietary lines of code have been removed; Lego Python lives on as a template of the core features.",
      client: "Moxe Health",
      technologies: "Python, REST APIs, PostGre SQL, VPN, PyPi, Jira, Github, Jenkins, Jfrog Artifactory, Camunda, AWS: Secrets Manager, S3, Dynamo DB, ect!",
      industry: "",
      readme: "",
      url: {
        name: "Github Repo",
        link: "https://github.com/richardalbee/legopython",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/richard-albee/",
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:ralbee1@iwu.edu",
      },
      thumbImage: "images/projects/legopython.png",
      sliderImages: [
      ],
      categories: [filters.PROJECTS],
    },
    {
      title: "Five-Card Draw Video Poker",
      projectInfo:
        "Five-card Draw is a playable Python poker application. You redraw from an initial 5 cards in an attempt to score the highest hand you can. This project served as a hands-on Python learning experience in 2021. On my journey, I learned about creating graphical user interfaces in Python, pythonic best practices, CI/CD workflows, PyPi deployments, and much more. Five-card-draw is available for easy installation from PyPi. Instructuions are in the Github Repo link below.",
      client: "Home Project",
      technologies: "Python, TKinter GUI, PyPi, Github Actions",
      industry: "",
      readme: "",
      url: {
        name: "Github Repo",
        link: "https://github.com/richardalbee/5_card_draw",
      },
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/richard-albee/",
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:ralbee1@iwu.edu",
      },
      thumbImage: "images/projects/five_card_draw_logo.png",
      sliderImages: [
        "images/projects/five_card_draw_screenshot.png",
      ],
      categories: [filters.PROJECTS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-white-50 opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Projects
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">{projectsData[index].categories}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
