import React from "react";
import MainCrosel from "../../component/HomeCarosel/MainCarosel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/men_kurta";

function HomePage() {
  return (
    <div>
      <MainCrosel />

      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
        {/* <HomeSectionCarousel data={mens_kurta} /> */}
      </div>
    </div>
  );
}

export default HomePage;
