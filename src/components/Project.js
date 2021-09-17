import React, { useState } from "react";
import projectApi from "../Api/projectApi";

const Project = () => {
  const [projects] = useState(projectApi);
  return (
    <div className="container-fluid bg-dark text-white">
      <h2 className="text-center text-center fs-1 p-5 text-warning text-decoration-underline">
        Projects
      </h2>
      <div className="container ms-1">
        <div className="row align-self-center ps-5">
          {projects.map((el) => {
            const { title, info, image, github, website } = el;
            return (
              <>
                <div
                  className="card text-warning bg-secondary col-md-3 col-sm-12 align-self-center m-4"
                  style={{ width: "18rem", height: "43vh" }}
                >
                  <img src={image} className="card-img-top p-2" alt="..." />
                  <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{info}</p>
                    <div className="d-flex align-self-center justify-content-center">
                      <a
                        href={website}
                        className="btn btn-warning text-dark m-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        website
                      </a>
                      <a
                        href={github}
                        className="btn btn-warning m-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
