import React from "react";
import { Link } from "react-router-dom";
import Aboutpage from "./Aboutpage";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            fresh <span>food in the </span>morning
          </h3>
          <p>
            "Indulge in a culinary journey where flavor meets elegance. Welcome to my Restaurant, where every meal is a celebration."
          </p>
          <Link to="/menu" className="btn">
            get yours now
          </Link>
        </div>
      
      </section>
      <Aboutpage/>
    </>
  );
};

export default Home;
