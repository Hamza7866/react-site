import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Nav from "../components/Nav";
import Skills from "../components/Skills";
import Aboutus from "./Aboutus";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Skills />
      <Aboutus title="About Me" />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
