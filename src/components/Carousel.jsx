import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import LeftBurger from "../assets/images/carousel-burger-left.png";
import RightBurger from "../assets/images/carousel-burger-right.png";
import MiddleBurger from "../assets/images/carousel-burger-middle.png";
import "../App.css";
function Carousel() {
  return (
    <div className="w-full py-4">
      <Splide
        // options={{
        //   type: "loop",
        //   padding: "15rem",

        // }}
        options={{
            type: "loop",
            padding: "7rem",
        }}
        hasTrack={false}
        aria-label="..."
        className=""
      >
        {/* <SplideTrack className="my-4 splide__track">
          <SplideSlide className="splide__slide transition-all scale-1">
            <img className="w-96 h-auto my-10" src={LeftBurger} alt="" />
          </SplideSlide>
          <SplideSlide className="splide__slide transition-all scale-1">
            <img className="w-96 h-auto my-10" src={MiddleBurger} alt="" />
          </SplideSlide>
          <SplideSlide className="splide__slide transition-all scale-1">
            <img className="w-96 h-auto my-10" src={RightBurger} alt="" />
          </SplideSlide>
        </SplideTrack> */}
        <SplideTrack>
          <SplideSlide>
            <img className="w-96 h-auto mx-auto my-10" src={LeftBurger} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img className="w-96 h-auto mx-auto my-10" src={MiddleBurger} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img className="w-96 h-auto mx-auto my-10" src={RightBurger} alt="" />
          </SplideSlide>
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev bg-transparent border rounded-full">
            PREV
          </button>
          <button className="splide__arrow splide__arrow--next bg-transparent border rounded-full">
            NEXT
          </button>
        </div>

        <ul
          class="splide__pagination "
          role="tablist"
          aria-label="Select a slide to show"
        >
          <li role="presentation">
            <button
              class="splide__pagination__page is-active"
              type="button"
              role="tab"
              aria-controls="splide01-slide01"
              aria-label="Go to slide 1"
              aria-selected="true"
            ></button>
          </li>
          <li role="presentation">
            <button
              class="splide__pagination__page"
              type="button"
              role="tab"
              aria-controls="splide01-slide02"
              aria-label="Go to slide 2"
              tabindex="-1"
            ></button>
          </li>
        </ul>
      </Splide>
    </div>
  );
}

export default Carousel;
