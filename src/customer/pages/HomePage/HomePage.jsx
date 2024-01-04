import React from "react";
import MainCrosel from "../../component/HomeCarosel/MainCarosel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";

function HomePage() {
  return (
    <div>
      <MainCrosel />

      <div>
        <HomeSectionCarousel />
      </div>
    </div>
  );
}

export default HomePage;
