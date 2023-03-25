import React from "react";
import "./Home.scss";
import Featured from "../../Components/Featured/Featured";
import Trustedby from "../../Components/TrustedBy/Trustedby";
import Slide from "../../Components/Slide/Slide";
import { cards } from "../../Data";
import { projects } from "../../Data";
import Catcard from "../../Components/catCard/catCard";

import FeatureVideo from "../../Components/FeatureVideo/FeatureVideo";
import FeaturedPics from "../../Components/Featurepics/FeaturedPics";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
const Home = () => {
  return (
    <>
      <Featured />
      <Trustedby />
      <Slide slidesToShow={5} arrowsScroll={2}>
        {cards.map((card) => (
          <Catcard item={card} key={card.id} />
        ))}
      </Slide>
      <FeatureVideo />

      <FeaturedPics />
      <Slide slidesToShow={4} arrowsScroll={3}>
        {projects.map((card) => (
          <ProjectCard item={card} key={card.id} />
        ))}
      </Slide>
      
    </>
  );
};

export default Home;
