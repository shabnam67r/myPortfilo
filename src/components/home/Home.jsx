import React from "react";
import "./home.css";
import Me from "../../assets/shabnam.jpeg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Shabnam Rezapour</h1>
        <span className="home__education">I'm a Front-End developer</span>
        <HeaderSocials />
        <a href="#contact" className="my-btn">
          Hire Me
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
