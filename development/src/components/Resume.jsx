import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "Current",
      title: "Certifications",
      place: "",
      desc: "A+, AWS Cloud Practitioner, AWS Solution Architect Associate (In Progress)",
    },
    {
      yearRange: "2013 - 2017",
      title: "Bachelor Degree",
      place: "Illinois Wesleyan University",
      desc: "Psychology major. IT Coursework: JavaScript, HTML, CSS, C++",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2022 - 2023",
      title: "Senior Technical Support Engineer",
      place: "Moxe Health",
      desc: "Led a team of 4+ software developers on the Engineering-Support team to identify and resolve software application bugs, develop missing product features, and optimize application performance and reliability.",
    },
    {
      yearRange: "2019 - 2022",
      title: "System Admin & Service Desk Manager",
      place: "Credit Union National Association",
      desc: "I managed Windows Servers, VPN and Network Infrastructure, database, Linux, hybrid Azure, Office 365, Dynamics 365, Okta, and Jira environments. While also managing a Service Desk team of 3, I focused on improving support practices, KPIs, and SLAs.",
    },
    {
      yearRange: "2017 - 2019",
      title: "Social Services",
      place: "Lutheran Social Services",
      desc: " Independently and collaboratively guided high-need families reaching for their individualized recovery goals. I also automated previously manual processes for calculating revenue of 10+ employees.",
    },
    {
      yearRange: "2013 - 2017",
      title: "Desktop Support Engineer & Service Desk Team Lead",
      place: "Illinois Wesleyan University",
      desc: "Hired, trained, and managed a team of 12 to provide level 1 helpdesk support. I concurrently managed over 500+ workstations across campus.",
    },
  ];

  const skills = [
    {
      name: "IT Operations",
      percent: 90,
    },
    {
      name: "Technical Project Management",
      percent: 90,
    },
    {
      name: "System Engineering",
      percent: 85,
    },
    {
      name: "IT Business Analyst",
      percent: 85,
    },
    {
      name: "Python",
      percent: 80,
    },
    {
      name: "Powershell",
      percent: 80,
    },
    {
      name: "APIs",
      percent: 75,
    },
    {
      name: "AWS & Azure Cloud",
      percent: 70,
    },
    {
      name: "Databases",
      percent: 70,
    },
    {
      name: "Application Development",
      percent: 65,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
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
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Technical Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download Resume
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
