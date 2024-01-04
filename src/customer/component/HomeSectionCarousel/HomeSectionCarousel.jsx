import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";

function HomeSectionCarousel() {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div>
      {" "}
      <AliceCarousel
        items={items}
        autoPlay
        disableButtonControls
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
}

export default HomeSectionCarousel;
