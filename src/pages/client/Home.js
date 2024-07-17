import React from "react";
import Hero from "../client/Home/Hero";
import Testimonial from "../client/Home/Testimonial";

function Home({ handleLogin }) {
  return (
    <div>
      <Hero />
      <Testimonial />
      {/* <button onClick={handleLogin}>Login</button> */}
    </div>
  );
}

export default Home;
