import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            About Me
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Richard Albee,</span> a System Engineer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            I am an enthusiastic technical lead excited by digging into new things and finding process improvements.
            My leadership and interpersonal skills bridge the gap between technical and non-technical business departments. 
            I have demonstrated experience leading medium and large company initiatives to completion. 
            Optimizing production-facing business practices involving application workflows is my specialty. 
            I'll lead teams, coordinate with SMEs, reach out to stakeholders, and design and then iterate upon effective 
            solutions for all parties involved.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            My time in social services taught me to bring exceptional customer service and servant leadership to the 
            workplace. I establish working relationships across departments, ask 
            questions about pain points in their jobs, and involve stakeholders in the 
            design process. Constant feedback creates a positive-feedback process 
            improvement loop leaving stakeholders feeling heard and engaged with new solutions.
            Similarly, while leading others, I set aside time to flexibly help and mentor junior coworkers;
            by hangs-on engaging with their business pain points, I can design effective solutions. 
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Richard Albee
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">RALBEE1@IWU.EDU</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Phone:</span>(815) 980-6278
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Rockford, IL
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>9</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years IT Experience
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>$5,600,000</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Revenue Recovered
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>4000</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Project Management Hours
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>26</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Staff Led / Managed
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
