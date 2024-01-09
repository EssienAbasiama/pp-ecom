import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    console.log("activeIndex +1", activeIndex + 1);
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }) => {
    console.log("I'm Here");
    console.log("Item Here is " + item);
    setActiveIndex(item);
  };

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border">
      <h2 className="text-2x1 font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          // disableButtonsControls
          responsive={responsive}
          disableDotsControls
          // autoPlay={true}
          autoPlayInterval={1000}
          // infinite={true}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          renderNextButton={() =>
            activeIndex !== items.length - 1 && (
              <Button
                onClick={slideNext}
                variant="contained"
                className="z-50 bg-white"
                sx={{
                  position: "absolute",
                  top: "8rem",
                  right: "0rem",
                  transform: "translateX(50%) rotate(90deg)",
                  bgcolor: "white",
                }}
                aria-label="next"
              >
                <KeyboardArrowLeft
                  sx={{ transform: "rotate(90deg)", color: "black" }}
                />
              </Button>
            )
          }
          renderPrevButton={() =>
            activeIndex !== 0 && (
              <Button
                onClick={slidePrev}
                variant="contained"
                className="z-50 bg-white"
                sx={{
                  position: "absolute",
                  top: "8rem",
                  left: "0rem",
                  transform: "translateX(-50%) rotate(-90deg)",
                  bgcolor: "white",
                }}
                aria-label="prev"
              >
                <KeyboardArrowLeft
                  sx={{ transform: "rotate(90deg)", color: "black" }}
                />
              </Button>
            )
          }
        />

        {/* {activeIndex !== items.length - 1 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeft
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )} */}

        {/* {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeft
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
