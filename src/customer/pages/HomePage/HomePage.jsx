import React from "react";
import MainCrosel from "../../component/HomeCarosel/MainCarosel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";

function HomePage() {
  return (
    <div>
      <MainCrosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </div>
  );
}

export default HomePage;
