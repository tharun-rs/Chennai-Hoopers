import React from "react";

function Home() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Grid Layout with 3 Columns, using justify-content-evenly */}
      <div
        className="d-flex justify-content-around align-items-center flex-wrap mt-5"
        style={{
          width: "100%",
        }}
      >
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Brand 1"
            className="img-fluid rounded align-self-center"
          />
        </div>
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Brand 2"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Brand 3"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Full-Width Slogan Section */}
      <div
        className="d-flex justify-content-center align-items-center text-center p-2 py-4"
        style={{
          backgroundColor: "#f0f0f0",
          width: "100%", // Ensure full width
          height: "150px", // Adjust height as needed
        }}
      >
        <h2>UNLEASH YOUR GRACE & STRIVE FOR RHYTHMIC GYMNASTICS AND GUINNESS WORLD RECORD TODAY!</h2>
      </div>

      {/* About Section */}
      <section id="about" className="p-5">
        <h2>About</h2>
        <p>This is the about section.</p>
      </section>

            {/* Gallery Section */}
            <section id="gallery" className="p-5"  style={{ backgroundColor: "#f0f0f0" }}>
        <h2>Gallery</h2>
        <p>This is the gallery section.</p>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="p-5">
        <h2>Achievements</h2>
        <p>This is the achievements section.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-5"  style={{ backgroundColor: "#f0f0f0" }}>
        <h2>Contact</h2>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
}

export default Home;
