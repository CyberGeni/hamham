import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import LeftBurger from "../assets/images/carousel-burger-left.png";
import RightBurger from "../assets/images/carousel-burger-right.png";
import MiddleBurger from "../assets/images/carousel-burger-middle.png";
import "../App.css";
function Carousel() {
  return (
    <div className="w-full py-3">
      <Splide
        options={{
          type: "loop",
        //   padding: "15rem",
          rewind: true,
        }}
        hasTrack={false}
        aria-label="..."
        className=""
      >
        <SplideTrack className="my-4">
          <SplideSlide className="splide__slide transition-all scale-1">
            <img className="w-16 h-auto my-2" src={LeftBurger} alt="" />
          </SplideSlide>
          <SplideSlide className="splide__slide transition-all scale-1">
            <img className="w-16 h-auto my-2" src={MiddleBurger} alt="" />
          </SplideSlide>
          <SplideSlide className="splide__slide transition-all scale-1">
            <img className="w-16 h-auto my-2" src={RightBurger} alt="" />
          </SplideSlide>
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>

        <ul
          class="splide__pagination splide__pagination--ltr"
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
