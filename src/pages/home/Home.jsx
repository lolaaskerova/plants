import React from "react";
import Hero from "./hero/Hero";
import Special from "./special/Special";
import Popular from "./popular/Popular";
import OurStory from "./ourstory/OurStory";
import Category from "./category/Category";
import Comment from "./comment/Comment";
import Gift from "./gift/Gift";
import About from "./about/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Special />
      <Popular />
      <OurStory />
      <Category />
      <Comment />
      <Gift />
      <About />
    </>
  );
};

export default Home;
