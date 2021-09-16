import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container" id="footer">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2 className="text-center text-warning">Contact Me </h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.linkedin.com/in/hamza-muhammad-b514b1a1/"
                        target="_hamza"
                      >
                        <i class="fab fa-linkedin fontawesome-style text-warning"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="mailto:hamzamuhammad7576@gmail.com"
                        target="_gmail"
                      >
                        <i class="fas fa-mail-bulk fontawesome-style text-warning"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2021 Muhammad Hamza. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
