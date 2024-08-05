import React from "react";
import AboutImg from "../assets/images/about-img.jpeg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="About Us" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
              Welcome to Virtual Chess, where culinary artistry meets the strategic elegance of chess. Located in the vibrant heart of Islamabad, our restaurant offers a unique dining experience that blends gourmet cuisine with the timeless game of chess.
            </p>
            <p>
              At Virtual Chess, we believe that every meal should be an experience. Our carefully curated menu features a fusion of classic and contemporary dishes, crafted with the finest ingredients to delight your palate. Whether you're a chess enthusiast or simply looking for a memorable dining experience, our cozy and sophisticated ambiance provides the perfect setting for any occasion.
            </p>
            <a href="#" className="btn">learn more</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
