import React from "react";
import UndrawBooks from "../assets/Undraw_Books.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section id="landing">
      <div className="header container">
        <div className="header__container">
          <div className="header__description">
            <h1>Top Selling Spiritual Books World-Wide</h1>
            <h2>
              Find a book that feeds your <span className="purple">Soul.</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse Books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Landing;
