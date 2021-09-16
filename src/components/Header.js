import React from "react";

const Header = () => {
  return (
    <div className="container pt-5 mt-4">
      <div className="row">
        <div className="col-md-6 align-self-center pt-2">
          <h1 className="text-dark">
            Hey! I'm <span className="text-warning"> Muhammad Hamza!</span>
          </h1>
          <h4>
            I'm
            <span className="text-warning p-1">
              Passionate Front-end Developer.
            </span>
          </h4>
        </div>
        <div className="col-md-6 pt-4">
          <img src="/images/main.jpg" alt="main" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Header;
