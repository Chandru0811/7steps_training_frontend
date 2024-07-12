import React from "react";
import Hero from "../client/Home/Hero";
import Testimonial from "../client/Home/Testimonial";

function Home({ handleLogin }) {
  return (
    <div>
      <h2>
        <Hero />
        <Testimonial />
      </h2>
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
}

export default Home;
