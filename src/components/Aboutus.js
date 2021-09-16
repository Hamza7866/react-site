const Aboutus = ({ title }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center fs-1 p-1 text-warning text-decoration-underline">
        {title}
      </h2>
      <div className="row">
        <div className="col-md-6 align-self-center pt-2">
          <p className="fs-5">
            I am a Software Engineer with 2 years experience based in New York
            City, NY. I am proficient in Front-End development. I have extensive
            knowledge in HTML, CSS, Javascript,React, Next, Node.Js, MongoDB,
            and Express. As a software engineer, I help businesses create an
            online presence through fully responsive websites.
          </p>
        </div>
        <div className="col-md-6 rounded-circle p-2 rounded">
          <img src="/images/me.jpg" alt="about me" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
