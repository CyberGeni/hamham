import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import LeftBurger from "../assets/images/carousel-burger-left.png";
import RightBurger from "../assets/images/carousel-burger-right.png";
import MiddleBurger from "../assets/images/carousel-burger-middle.png";
import "../App.css";
import AOS from "aos";

function Carousel() {
  const burgers = [
    {
      id: 1,
      image: LeftBurger,
      name: "La Bonda Burger",
      description:
        "Burger with cheese, bacon, lettuce, tomato, onion, and mayo",
    },
    {
      id: 2,
      image: MiddleBurger,
      name: "La Bonda Burger",
      description:
        "Burger with cheese, bacon, lettuce, tomato, onion, and mayo",
    },
    {
      id: 3,
      image: RightBurger,
      name: "La Bonda Burger",
      description:
        "Burger with cheese, bacon, lettuce, tomato, onion, and mayo",
    },
  ];
AOS.init()
  return (
    <div className="w-full py-4">
      <Splide
        options={{
          type: "loop",
          padding: "7rem",
        }}
        hasTrack={false}
        aria-label="..."
      >
        <div className="nowrap w-[480rem] -left-24 flex text-clip opacity-30 hero-text text-transparent text-7xl md:text-8xl text-center absolute  font-['Calfine_Demo'] ">FINGER LICKING &nbsp; &nbsp; &nbsp; &nbsp; FINGER LICKING &nbsp; &nbsp; &nbsp; &nbsp; FINGER LICKING</div>
        <SplideTrack className="splide__track">
          {burgers.map((burger) => (
            <SplideSlide key={burger.id}>
              <img
                className="w-96 h-auto mx-auto mt-10"
                src={burger.image}
                alt=""
              />
              <div className="text-center mb-24">
                <h1 className="flex flex-col-reverse sm:flex-row items-center justify-center relative font-['Calfine_Demo']  mx-auto w-fit text-2xl md:text-3xl lg:text-4xl">
                  <div className="absolute bg-[#E9944F] -z-10 w-24 md:w-[7.5rem] lg:w-[9rem] h-3 lg:h-4 sm:-mb-1 -left-0.5 bottom-2 sm:bottom-7"></div>
                  {burger.name}
                  <svg
                    className="ml-2"
                    width="66"
                    height="65"
                    viewBox="0 0 66 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M62.1712 33.3649L63.6683 32.4992L62.1712 31.6335L56.4412 28.3202L60.7035 23.2439L61.8197 21.9146L60.1099 21.6158L53.5957 20.4772L55.8635 14.2417L56.4567 12.6106L54.748 12.9155L48.2416 14.0767L48.2565 7.44137L48.2605 5.69975L46.7544 6.57435L41.0348 9.89572L38.7792 3.65986L38.1861 2.01996L37.0703 3.36019L32.8345 8.44823L28.5987 3.36019L27.4829 2.01997L26.8898 3.65986L24.6342 9.8956L18.9163 6.5744L17.4101 5.69955L17.414 7.44137L17.429 14.0767L10.9226 12.9155L9.21425 12.6106L9.80705 14.2415L12.0735 20.4772L5.56068 21.6158L3.85098 21.9147L4.96707 23.2439L9.22943 28.3202L3.49942 31.6335L2.00231 32.4992L3.49942 33.3649L9.22957 36.6783L4.96698 41.7562L3.85124 43.0853L5.56068 43.3842L12.0735 44.5228L9.80705 50.7585L9.21423 52.3894L10.9226 52.0845L17.4276 50.9233L17.414 57.5588L17.4105 59.3002L18.9163 58.4256L24.6342 55.1044L26.8898 61.3401L27.4829 62.98L28.5987 61.6398L32.8345 56.5518L37.0703 61.6398L38.1861 62.98L38.7792 61.3401L41.0348 55.1043L46.7544 58.4257L48.2605 59.3002L48.2565 57.5586L48.2416 50.9233L54.748 52.0845L56.4567 52.3894L55.8635 50.7583L53.5957 44.5228L60.1099 43.3842L61.8194 43.0854L60.7036 41.7562L56.441 36.6783L62.1712 33.3649Z"
                      fill="#E9944F"
                      stroke="#1D1D1E"
                      stroke-width="2"
                    />
                    <path
                      d="M20.76 28.6V25.92H23.04V28.6H20.76ZM20.76 42.96V40.2H23.04V42.96H20.76ZM21.9 41.28C21.22 41.28 20.6067 41.2467 20.06 41.18C19.5133 41.1133 19.0067 41.0133 18.54 40.88C18.0733 40.7467 17.62 40.5733 17.18 40.36V37.28C17.7933 37.7733 18.4867 38.1467 19.26 38.4C20.0333 38.6533 20.7667 38.78 21.46 38.78C22.0733 38.78 22.54 38.6667 22.86 38.44C23.1933 38.2 23.36 37.84 23.36 37.36C23.36 37 23.2067 36.7133 22.9 36.5C22.6067 36.2733 22.2133 36.08 21.72 35.92C21.2267 35.7467 20.6733 35.5533 20.06 35.34C19.6733 35.22 19.2933 35.0667 18.92 34.88C18.5467 34.6933 18.2133 34.46 17.92 34.18C17.6267 33.8867 17.3933 33.5333 17.22 33.12C17.0467 32.7067 16.96 32.2 16.96 31.6C16.96 31.0533 17.06 30.5267 17.26 30.02C17.46 29.5133 17.7667 29.06 18.18 28.66C18.6067 28.26 19.1467 27.9467 19.8 27.72C20.4533 27.48 21.22 27.36 22.1 27.36C22.6467 27.36 23.1267 27.3933 23.54 27.46C23.9667 27.5267 24.3733 27.6267 24.76 27.76C25.1467 27.88 25.54 28.04 25.94 28.24V31.36C25.6333 31.1067 25.2867 30.8733 24.9 30.66C24.5267 30.4333 24.1333 30.2467 23.72 30.1C23.3067 29.9533 22.8733 29.8733 22.42 29.86C22.02 29.8467 21.6533 29.8867 21.32 29.98C20.9867 30.0733 20.7267 30.2267 20.54 30.44C20.3533 30.64 20.26 30.9 20.26 31.22C20.26 31.5933 20.3733 31.8867 20.6 32.1C20.8267 32.3133 21.14 32.4933 21.54 32.64C21.94 32.7733 22.3867 32.92 22.88 33.08C23.4267 33.24 23.9267 33.42 24.38 33.62C24.8467 33.8067 25.2533 34.0467 25.6 34.34C25.9467 34.6333 26.2133 34.9933 26.4 35.42C26.5867 35.8467 26.68 36.36 26.68 36.96C26.68 37.76 26.4933 38.4933 26.12 39.16C25.7467 39.8133 25.2067 40.3333 24.5 40.72C23.7933 41.0933 22.9267 41.28 21.9 41.28ZM31.303 41V30.78L28.723 32.24V29.36L31.683 27.66H34.543V41H31.303ZM38.3375 41V38.72C38.7908 38.4533 39.2842 38.12 39.8175 37.72C40.3508 37.32 40.8708 36.88 41.3775 36.4C41.8975 35.92 42.3642 35.4267 42.7775 34.92C43.2042 34.4133 43.5442 33.9067 43.7975 33.4C44.0508 32.88 44.1775 32.4 44.1775 31.96C44.1775 31.48 44.0775 31.0933 43.8775 30.8C43.6775 30.4933 43.4042 30.2733 43.0575 30.14C42.7242 29.9933 42.3308 29.92 41.8775 29.92C41.2375 29.92 40.6442 30.0667 40.0975 30.36C39.5508 30.64 39.0042 30.9933 38.4575 31.42V28.64C38.9775 28.32 39.5908 28.0333 40.2975 27.78C41.0175 27.5267 41.8708 27.4 42.8575 27.4C43.8442 27.4 44.6775 27.5667 45.3575 27.9C46.0375 28.22 46.5508 28.6867 46.8975 29.3C47.2442 29.9 47.4175 30.6333 47.4175 31.5C47.4175 32.1267 47.2908 32.7267 47.0375 33.3C46.7975 33.86 46.4708 34.3933 46.0575 34.9C45.6442 35.3933 45.1842 35.86 44.6775 36.3C44.1708 36.7267 43.6575 37.1267 43.1375 37.5C42.6308 37.8733 42.1575 38.22 41.7175 38.54L41.0975 38.04H47.6775V41H38.3375Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                </h1>
                <p className="max-w-xs mx-auto my-3">{burger.description}</p>
                <button className="bg-[#1e1e1e] rounded-full text-[#E4DDCD] px-6 py-3 flex items-center mx-auto">
                  Shop Now{" "}
                  <svg
                    className="ml-1"
                    width="29"
                    height="29"
                    viewBox="0 0 33 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.71931 28.1788C12.7354 28.1788 15.9911 22.0951 15.9911 14.5904C15.9911 7.08574 12.7354 1.002 8.71931 1.002C4.70319 1.002 1.44749 7.08574 1.44749 14.5904C1.44749 22.0951 4.70319 28.1788 8.71931 28.1788Z"
                      fill="#E4DDCD"
                    />
                    <path
                      d="M23.7302 28.1788C28.002 28.1788 31.4649 22.0951 31.4649 14.5904C31.4649 7.08574 28.002 1.002 23.7302 1.002C19.4585 1.002 15.9956 7.08574 15.9956 14.5904C15.9956 22.0951 19.4585 28.1788 23.7302 28.1788Z"
                      fill="#E4DDCD"
                    />
                    <path
                      d="M24.2347 0.5C20.7014 0.5 17.68 4.30139 16.5 9.63137C15.32 4.30139 12.2986 0.5 8.76534 0.5C4.20781 0.5 0.5 6.82287 0.5 14.5952C0.5 22.3676 4.20781 28.6904 8.76534 28.6904C12.2986 28.6904 15.32 24.8891 16.5 19.5591C17.68 24.8891 20.7014 28.6904 24.2347 28.6904C28.7922 28.6904 32.5 22.3676 32.5 14.5952C32.5 6.82287 28.7922 0.5 24.2347 0.5ZM8.76596 27.6775C6.10631 27.6775 3.77825 25.08 2.51593 21.2189C4.45148 20.6173 6.62945 20.297 8.85452 20.297C11.0796 20.297 13.1382 20.6003 15.0317 21.1693C13.7731 25.0574 11.4369 27.6775 8.76596 27.6775V27.6775ZM15.3181 20.1978C13.3317 19.6011 11.111 19.284 8.85452 19.284C8.61524 19.284 8.37659 19.2909 8.13795 19.2978C8.43877 18.521 8.65229 17.6329 8.74901 16.6721L4.90869 15.4751L8.74587 14.2486C8.41553 11.0607 6.82414 8.64225 4.90869 8.64225C3.58671 8.64225 2.41923 9.79465 1.71333 11.5569C2.47512 5.80486 5.34704 1.51362 8.76596 1.51362C12.5743 1.51362 15.7043 6.83795 15.9938 13.5766C15.9794 13.9138 15.97 14.2529 15.97 14.5958C15.97 14.9387 15.98 15.2779 15.9938 15.6151C15.9241 17.2436 15.6892 18.7898 15.3181 20.1978V20.1978ZM24.2353 27.6775C21.5756 27.6775 19.2476 25.08 17.9853 21.2189C19.9208 20.6173 22.0988 20.297 24.3238 20.297C26.5489 20.297 28.6076 20.6003 30.501 21.1693C29.2425 25.0574 26.9063 27.6775 24.2353 27.6775V27.6775ZM30.7874 20.1978C28.801 19.6011 26.5803 19.284 24.3238 19.284C24.0846 19.284 23.8459 19.2909 23.6073 19.2978C23.9081 18.521 24.1216 17.6329 24.2183 16.6721L20.378 15.4751L24.2152 14.2486C23.8849 11.0607 22.2935 8.64225 20.378 8.64225C19.056 8.64225 17.8885 9.79466 17.1827 11.5562C17.9444 5.80424 20.8164 1.51299 24.2347 1.51299C28.2339 1.51299 31.487 7.38181 31.487 14.5952C31.487 16.5992 31.2352 18.4984 30.7868 20.1978H30.7874Z"
                      fill="#1E1E1E"
                    />
                  </svg>
                </button>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* controls */}
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev ml-[5%] bg-transparent border rounded-full">
            PREV
          </button>
          <button className="splide__arrow splide__arrow--next mr-[5%] bg-transparent border rounded-full">
            NEXT
          </button>
        </div>

        {/* pagination */}
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
