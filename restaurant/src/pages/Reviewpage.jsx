import React from "react";
import { review } from "../Data";
import qouteImg from "../assets/images/quote-img.png";

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index}>
              <img src={qouteImg} alt="quote" className="quote" />
              <p>{item.quote}</p>
              <img src={item.img} className="user" alt={item.name} />
              <h3>{item.name}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
