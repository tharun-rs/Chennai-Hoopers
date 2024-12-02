import React from "react";
import "../styles/Home.css";

const Home = () => (
  <div className="home">

    {/* Main Section */}
    <section className="hero">
      <div className="hero-images">
        <div className="image-container">
          <img src="/hero_left.avif" alt="At London GWR headquarters" />
        </div>
        <div className="image-container">
          <img src="/image2.jpg" alt="Achievement 2" />
        </div>
        <div className="image-container">
          <img src="/hero_right.avif" alt="Janani's awards in ICSE nationals" />
        </div>
      </div>
      <div className="hero-text">
        <h1>
          UNLEASH YOUR GRACE & STRIVE FOR RHYTHMIC GYMNASTICS AND GUINNESS WORLD RECORD TODAY!
        </h1>
      </div>
    </section>
  </div>
);

export default Home;
