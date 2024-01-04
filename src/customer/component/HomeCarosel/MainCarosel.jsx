import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "../../pages/HomePage/MainCaroselData";

const MainCrosel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className
      role="presentation"
      onClick={() => navigate}
      src={item.image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      autoPlay
      disableButtonControls
      autoPlayInterval={1000}
      infinite
    />
  );
};

export default MainCrosel;
