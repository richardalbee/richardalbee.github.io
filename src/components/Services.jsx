import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Solution Architecture",
      desc: "Designing application workflows, production processes, and automation tooling.",
      icon: "fas fa-palette",
    },
    {
      name: "System Engineering",
      desc: "Creating Cloud and On-Prem application environments: AWS, Azure, SQL, APIs, CI/CD, Active Directory, Networks, and much more!",
      icon: "fas fa-desktop",
    },
    {
      name: "Technical Project Management",
      desc: "Leading production teams to implement new technical systems, process improvements, running software production operations.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Reporting",
      desc: "Summarizing production data to make informed business decisions; and, audit production operations in order to ensure product and data integrity.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Automation",
      desc: "Saving thousands of hours of productivity and reducing human error through documented and scripted work practices.",
      icon: "fas fa-chart-area",
    },
    {
      name: "Team Leadership",
      desc: "The art of balancing the interpersonal and career growth needs of coworkers while ensuring business operations continue running smoothly.",
      icon: "fas fa-bullhorn",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Skillsets
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
