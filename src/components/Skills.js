import React from "react";
const Skills = () => {
  return (
    <div className="container-fluid bg-dark text-white p-3">
      <h1 className="text-center fs-4 pt-5 text-warning text-decoration-underline">
        Skills
      </h1>
      <div className="row">
        <div className="col-md-6 pt-4">
          <h3 className="text-center fs-4 text-decoration-underline">
            Frontend Skills
          </h3>
          <div className="text-center pt-3">
            <h3>HTML</h3>
            <h3>CSS</h3>
            <h3>JavaScript</h3>
            <h3>React</h3>
            <h3>BootStrap</h3>
            <h3>React Router</h3>
            <h3>Material-ui</h3>
            <h3>Scss</h3>
          </div>
        </div>
        <div className="col-md-6 pt-4">
          <h3 className="text-center fs-4  text-decoration-underline">
            Backend Skills
          </h3>
          <div className="text-center pt-3">
            <h3>Node</h3>
            <h3>Express</h3>
            <h3>Git</h3>
            <h3>GitHub</h3>
            <h3>Json</h3>
            <h3>MongoDb</h3>
            <h3>EJS</h3>
            <h3>Rest Api</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
