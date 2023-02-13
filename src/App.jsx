import "./App.css";
import Navbar from "./components/Navbar";
import leftBurger from "./assets/images/left-hero-burger.png";
import rightBurger from "./assets/images/right-hero-burger.png";
import hand from "./assets/images/hand.svg";
import feelTheHype from "./assets/images/feel-the-hype-burger.png";
import tasteTheHype from "./assets/images/taste-the-hype-bg.png";
import left from "./assets/images/hear-the-hype-left.png";
import right from "./assets/images/hear-the-hype-right.png";
import doodle from "./assets/images/doodle-line.svg";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Carousel from "./components/Carousel";
function App() {
  return (
    <div className="App font-['Maven_Pro'] overflow-x-hidden">
      <Navbar />
      {/* hero */}
      <section className="bg-[#E4DDCD] relative -z-20 h-[85vh] flex flex-col items-center justify-center">
        <svg
          className="absolute -z-50 w-[72em] lg:w-8/12"
          width="1312"
          height="691"
          viewBox="0 0 1312 691"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_22)">
            <rect
              width="1312"
              height="691"
              rx="200"
              fill="#BA9157"
              fill-opacity="0.22"
            />
            <rect
              x="296.176"
              y="-464"
              width="75.738"
              height="1365.6"
              transform="rotate(21.9824 296.176 -464)"
              fill="#1E1E1E"
              fill-opacity="0.06"
            />
            <rect
              x="489.584"
              y="-464"
              width="75.738"
              height="1365.6"
              transform="rotate(21.9824 489.584 -464)"
              fill="#1E1E1E"
              fill-opacity="0.06"
            />
            <rect
              x="682.992"
              y="-464"
              width="75.738"
              height="1365.6"
              transform="rotate(21.9824 682.992 -464)"
              fill="#1E1E1E"
              fill-opacity="0.06"
            />
            <rect
              x="1069.81"
              y="-464"
              width="75.738"
              height="1365.6"
              transform="rotate(21.9824 1069.81 -464)"
              fill="#1E1E1E"
              fill-opacity="0.06"
            />
            <rect
              x="876.4"
              y="-464"
              width="75.738"
              height="1365.6"
              transform="rotate(21.9824 876.4 -464)"
              fill="#1E1E1E"
              fill-opacity="0.06"
            />
            <rect
              x="1263.22"
              y="-464"
              width="75.738"
              height="1365.6"
              transform="rotate(21.9824 1263.22 -464)"
              fill="#1E1E1E"
              fill-opacity="0.06"
            />
            <rect
              x="1456.62"
              y="-464"
              width="75.738"
              height="1365.6"
              transform="rotate(21.9824 1456.62 -464)"
              fill="#1E1E1E"
              fill-opacity="0.06"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_22">
              <rect width="1312" height="691" rx="200" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="relative">
          <h1 className="absolute -z-50 mt-1 -ml-2 text-center hero-text text-[#D0A15F] text-8xl font-['Calfine_Demo']">
            Mind Blowing <br /> Bites
          </h1>
          <h1 className="text-[#1E1E1E] text-center text-8xl font-['Calfine_Demo']">
            Mind Blowing <br /> Bites
          </h1>
        </div>
        <p className="w-3/4 sm:w-2/4 lg:w-1/4 my-2 text-center">
          Lorem ipsum dolor sit amet consectetur. Felis sed vel turpis
          condimentum volutpat amet donec volutpat mattis.
        </p>
        <div className="space-x-3 py-2 flex">
          <button className="bg-[#1e1e1e] flex items-center w-fit text-xs text-[#E4DDCD] px-5 py-3 rounded-full">
            FIND LOCATION{" "}
            <svg
              className="ml-1"
              width="24"
              height="29"
              viewBox="0 0 33 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.7193 27.6788C12.7354 27.6788 15.9911 21.595 15.9911 14.0904C15.9911 6.58569 12.7354 0.501953 8.7193 0.501953C4.70319 0.501953 1.44749 6.58569 1.44749 14.0904C1.44749 21.595 4.70319 27.6788 8.7193 27.6788Z"
                fill="#E4DDCD"
              />
              <path
                d="M23.7302 27.6788C28.002 27.6788 31.4649 21.595 31.4649 14.0904C31.4649 6.58569 28.002 0.501953 23.7302 0.501953C19.4585 0.501953 15.9956 6.58569 15.9956 14.0904C15.9956 21.595 19.4585 27.6788 23.7302 27.6788Z"
                fill="#E4DDCD"
              />
              <path
                d="M24.2347 0C20.7014 0 17.68 3.80139 16.5 9.13137C15.32 3.80139 12.2986 0 8.76534 0C4.20781 0 0.5 6.32287 0.5 14.0952C0.5 21.8676 4.20781 28.1904 8.76534 28.1904C12.2986 28.1904 15.32 24.3891 16.5 19.0591C17.68 24.3891 20.7014 28.1904 24.2347 28.1904C28.7922 28.1904 32.5 21.8676 32.5 14.0952C32.5 6.32287 28.7922 0 24.2347 0ZM8.76596 27.1775C6.10631 27.1775 3.77825 24.58 2.51593 20.7189C4.45148 20.1173 6.62945 19.797 8.85452 19.797C11.0796 19.797 13.1382 20.1003 15.0317 20.6693C13.7731 24.5574 11.4369 27.1775 8.76596 27.1775V27.1775ZM15.3181 19.6978C13.3317 19.1011 11.111 18.784 8.85452 18.784C8.61524 18.784 8.37659 18.7909 8.13795 18.7978C8.43877 18.021 8.65229 17.1329 8.74901 16.1721L4.90869 14.9751L8.74587 13.7486C8.41553 10.5607 6.82414 8.14225 4.90869 8.14225C3.58671 8.14225 2.41923 9.29465 1.71333 11.0569C2.47512 5.30486 5.34704 1.01362 8.76596 1.01362C12.5743 1.01362 15.7043 6.33795 15.9938 13.0766C15.9794 13.4138 15.97 13.7529 15.97 14.0958C15.97 14.4387 15.98 14.7779 15.9938 15.1151C15.9241 16.7436 15.6892 18.2898 15.3181 19.6978V19.6978ZM24.2353 27.1775C21.5756 27.1775 19.2476 24.58 17.9853 20.7189C19.9208 20.1173 22.0988 19.797 24.3238 19.797C26.5489 19.797 28.6076 20.1003 30.501 20.6693C29.2425 24.5574 26.9063 27.1775 24.2353 27.1775V27.1775ZM30.7874 19.6978C28.801 19.1011 26.5803 18.784 24.3238 18.784C24.0846 18.784 23.8459 18.7909 23.6073 18.7978C23.9081 18.021 24.1216 17.1329 24.2183 16.1721L20.378 14.9751L24.2152 13.7486C23.8849 10.5607 22.2935 8.14225 20.378 8.14225C19.056 8.14225 17.8885 9.29466 17.1827 11.0562C17.9444 5.30424 20.8164 1.01299 24.2347 1.01299C28.2339 1.01299 31.487 6.88181 31.487 14.0952C31.487 16.0992 31.2352 17.9984 30.7868 19.6978H30.7874Z"
                fill="#1E1E1E"
              />
            </svg>
          </button>
          <button className="text-xs border border-[#1e1e1e] px-5 py-2.5 rounded-full">
            BUY ONLINE
          </button>
        </div>
        <img
          className="hidden md:flex absolute z-50 bottom-1 left-28 lg:left-[180px] w-24 lg:w-32 "
          src={hand}
          alt=""
        />
        <img
          className="w-36 sm:w-60 md:72 lg:w-80 -z-10 opacity-40 md:opacity-100  absolute left-0 bottom-3"
          src={leftBurger}
          alt=""
        />
        <img
          className="w-36 sm:w-60 md:72 lg:w-80 -z-10 opacity-40 md:opacity-100 absolute right-0 bottom-3"
          src={rightBurger}
          alt=""
        />
      </section>

      {/* feel the hype */}
      <section className="md:min-h-screen bg-[#1e1e1e]">
        <div class="text-[#E9944F] overflow-hidden">
          <p class="absolute my-5 font-['Calfine_Demo'] text-5xl text-center m-0 p-0 animation-marquee tracking-wider">
            sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh!
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh!
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh!
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh!
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh!
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh!
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh!
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            sheesh! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh!
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sheesh! &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </p>
          <svg
            width="1440"
            height="84"
            viewBox="0 0 1440 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="43.0013"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 43.0013 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="106.576"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 106.576 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="170.152"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 170.152 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="233.727"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 233.727 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="297.302"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 297.302 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="360.877"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 360.877 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="424.452"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 424.452 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="488.027"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 488.027 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="551.603"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 551.603 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="615.178"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 615.178 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="678.753"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 678.753 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="742.328"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 742.328 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="805.904"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 805.904 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="869.479"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 869.479 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="933.054"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 933.054 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="996.629"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 996.629 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="1060.2"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 1060.2 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="1123.78"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 1123.78 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="1187.35"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 1187.35 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="1250.93"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 1250.93 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="1314.51"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 1314.51 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="1378.08"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 1378.08 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
            <rect
              x="1441.66"
              y="-12"
              width="11"
              height="109.664"
              transform="rotate(29.5 1441.66 -12)"
              fill="#BC773E"
              fill-opacity="0.1"
            />
          </svg>
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full my-12">
            <img
              className="w-28 sm:my-0 sm:w-2/4 mx-auto"
              src={feelTheHype}
              alt=""
            />
            <h2 className="text-[#E4DDCD] text-3xl w-fit font-['Calfine_Demo'] mx-auto text-center flex items-center text-center">
              Burger Burst
              <div className="relative ml-2">
                <svg
                  width="66"
                  height="65"
                  viewBox="0 0 66 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.1712 33.3649L63.6683 32.4992L62.1712 31.6335L56.4412 28.3202L60.7035 23.2439L61.8197 21.9146L60.1099 21.6158L53.5957 20.4772L55.8635 14.2417L56.4567 12.6106L54.748 12.9155L48.2416 14.0767L48.2566 7.44137L48.2605 5.69975L46.7544 6.57435L41.0348 9.89572L38.7792 3.65986L38.1861 2.01997L37.0703 3.36019L32.8345 8.44823L28.5987 3.36019L27.4829 2.01997L26.8898 3.65986L24.6342 9.8956L18.9163 6.5744L17.4101 5.69955L17.414 7.44137L17.429 14.0767L10.9226 12.9155L9.21425 12.6106L9.80705 14.2415L12.0735 20.4772L5.56068 21.6158L3.85098 21.9147L4.96707 23.2439L9.22943 28.3202L3.49942 31.6335L2.00231 32.4992L3.49942 33.3649L9.22957 36.6783L4.96698 41.7562L3.85124 43.0853L5.56068 43.3842L12.0735 44.5228L9.80705 50.7585L9.21423 52.3894L10.9226 52.0845L17.4276 50.9233L17.414 57.5588L17.4105 59.3002L18.9163 58.4256L24.6342 55.1044L26.8898 61.3401L27.4829 62.98L28.5987 61.6398L32.8345 56.5518L37.0703 61.6398L38.1861 62.98L38.7792 61.3401L41.0348 55.1043L46.7544 58.4257L48.2605 59.3002L48.2566 57.5586L48.2416 50.9233L54.748 52.0845L56.4567 52.3894L55.8635 50.7583L53.5957 44.5228L60.1099 43.3842L61.8194 43.0854L60.7036 41.7562L56.441 36.6783L62.1712 33.3649Z"
                    fill="#F2EFE0"
                    stroke="#E5914D"
                    stroke-width="2"
                  />
                </svg>

                <span className="text-[#1e1e1e] font-['Maven_Pro'] absolute top-4 left-[1.15rem] font-bold text-lg">
                  $12
                </span>
              </div>
            </h2>
          </div>
          <div className="hidden md:flex items-center w-1 h-[85vh] opacity-40 rounded-full bg-[#e4ddcd]">
            <div className="w-1 h-[50vh] bg-[#1e1e1e]"></div>
          </div>
          <div className="w-full text-center ">
            <div className="md:w-3/4 mx-auto">
              <h1 className="font-['Calfine_Demo'] text-7xl lg:text-8xl bg-clip-text bg-gradient-to-b text-transparent from-[#E4DDCD] to-[#FFD497]">
                Feel The Hype!
              </h1>
              <h4 className="text-[#E5DDCB] font-medium">
                AWARD WINNING FLAVORS
              </h4>
              <p className="text-[#E4DDCD]/75 my-4 w-4/5 mx-auto">
                Our burgers have gained international recognition for most
                unique flavors.
              </p>
              <button className="text-[#E5DDCB] mx-auto my-8 border rounded-full flex px-5 py-2">
                LEARN MORE
                <svg
                  className="ml-2"
                  width="23"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5554 27.7002C25.4519 27.7002 28.6107 21.5662 28.6107 13.9996C28.6107 6.43301 25.4519 0.299072 21.5554 0.299072C17.6588 0.299072 14.5 6.43301 14.5 13.9996C14.5 21.5662 17.6588 27.7002 21.5554 27.7002Z"
                    fill="#E4DDCD"
                  />
                  <path
                    d="M21.5557 28C17.5004 28 14.201 21.7198 14.201 14C14.201 6.28021 17.5004 0 21.5557 0C25.6111 0 28.9105 6.28021 28.9105 14C28.9105 21.7198 25.6111 28 21.5557 28ZM21.5557 0.598915C17.8305 0.598915 14.7999 6.61094 14.7999 14C14.7999 21.3891 17.8305 27.4011 21.5557 27.4011C25.2809 27.4011 28.3116 21.3891 28.3116 14C28.3116 6.61094 25.2809 0.598915 21.5557 0.598915Z"
                    fill="black"
                  />
                  <path
                    d="M24.5107 11.8252C24.0585 9.50952 22.9064 7.8631 21.5552 7.8631C19.8096 7.8631 18.3947 10.6105 18.3947 14.0002C18.3947 17.3899 19.8096 20.1373 21.5552 20.1373C23.3008 20.1373 24.7158 17.3899 24.7158 14.0002H21.5552L24.5107 11.8252Z"
                    fill="black"
                  />
                  <path
                    d="M7.44396 27.7002C11.3405 27.7002 14.4993 21.5662 14.4993 13.9996C14.4993 6.43301 11.3405 0.299072 7.44396 0.299072C3.54742 0.299072 0.388641 6.43301 0.388641 13.9996C0.388641 21.5662 3.54742 27.7002 7.44396 27.7002Z"
                    fill="#E4DDCD"
                  />
                  <path
                    d="M7.44438 28C3.38906 28 0.0895996 21.7198 0.0895996 14C0.0895996 6.28021 3.38906 0 7.44438 0C11.4997 0 14.7992 6.28021 14.7992 14C14.7992 21.7198 11.4997 28 7.44438 28ZM7.44438 0.598915C3.71918 0.598915 0.688517 6.61094 0.688517 14C0.688517 21.3891 3.71918 27.4011 7.44438 27.4011C11.1696 27.4011 14.2002 21.3891 14.2002 14C14.2002 6.61094 11.1696 0.598915 7.44438 0.598915Z"
                    fill="black"
                  />
                  <path
                    d="M10.3993 11.8252C9.94712 9.50952 8.79499 7.8631 7.44382 7.8631C5.69818 7.8631 4.28326 10.6105 4.28326 14.0002C4.28326 17.3899 5.69818 20.1373 7.44382 20.1373C9.18946 20.1373 10.6044 17.3899 10.6044 14.0002H7.44382L10.3993 11.8252Z"
                    fill="black"
                  />
                  <path
                    d="M10.3993 11.8252C9.94712 9.50952 8.79499 7.8631 7.44382 7.8631C5.69818 7.8631 4.28326 10.6105 4.28326 14.0002C4.28326 17.3899 5.69818 20.1373 7.44382 20.1373C9.18946 20.1373 10.6044 17.3899 10.6044 14.0002H7.44382L10.3993 11.8252Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* featured burgers  */}
      <section className="bg-[#E4DDCD]">
        <Carousel />
      </section>
      

      {/* hear the hype */}
      <section className="bg-[#F2EEE2] m">
        <div className="flex items-center justify-center py-8 md:py-16 space-x-2">
          <img className="w-16 sm:w-28 md:w-32 -mt-8" src={left} alt="" />
          <h1 className="text-[#1e1e1e] text-center text-5xl w-fit font-['Calfine_Demo']">
            Hear the Hype
          </h1>
          <img className="w-14 sm:w-24 md:w-28" src={right} alt="" />
        </div>
        <Reviews />
      </section>

      {/* taste the hype */}
      <section className="relative h-max">
        <img className="-mt-2 relative -z-10" alt="" src={doodle} />
        <div className="w-full">
          <img
            className="min-w-[900px] opacity-80 sm:opacity-100 mx-auto -left-1/3 -right-1/3 -mt-8 sm:-mt-12 md:-mt-16 absolute -z-30"
            src={tasteTheHype}
            alt=""
          />
          <div>
            <div className="flex flex-col items-center h-max pt-16 sm:pt-24 pb-16 sm:pb-20">
              <img className="mx-auto w-24" src={hand} alt="" />
              <div className="relative mt-4 sm:mt-5 mb-4 w-fit text-center mx-auto">
                <h1 className="absolute -z-20 mt-1 -ml-2 text-center hero-text text-[#1E1E1E] text-8xl font-['Calfine_Demo']">
                  Taste the Hype
                </h1>
                <h1 className="text-[#F2EEE2] text-center text-8xl font-['Calfine_Demo']">
                  Taste the Hype
                </h1>
              </div>
              <p className="text-center font-medium">
                Come visit us at your local Hamham, location
              </p>
              <button className="flex items-center text-center rounded-full mx-auto w-fit text-[#E4DDCD] px-5 py-3 bg-[#1e1e1e] my-2">
                Shop Now{" "}
                <svg
                className="ml-1.5 w-6"
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6745 28.4753C25.571 28.4753 28.7298 22.3414 28.7298 14.7748C28.7298 7.20816 25.571 1.07422 21.6745 1.07422C17.7779 1.07422 14.6192 7.20816 14.6192 14.7748C14.6192 22.3414 17.7779 28.4753 21.6745 28.4753Z"
                    fill="#E4DDCD"
                  />
                  <path
                    d="M21.6749 28.7751C17.6196 28.7751 14.3201 22.4949 14.3201 14.7751C14.3201 7.05536 17.6196 0.775146 21.6749 0.775146C25.7302 0.775146 29.0297 7.05536 29.0297 14.7751C29.0297 22.4949 25.7302 28.7751 21.6749 28.7751ZM21.6749 1.37406C17.9497 1.37406 14.919 7.38609 14.919 14.7751C14.919 22.1642 17.9497 28.1762 21.6749 28.1762C25.4001 28.1762 28.4307 22.1642 28.4307 14.7751C28.4307 7.38609 25.4001 1.37406 21.6749 1.37406Z"
                    fill="black"
                  />
                  <path
                    d="M24.6298 12.6003C24.1776 10.2846 23.0255 8.63818 21.6743 8.63818C19.9287 8.63818 18.5138 11.3856 18.5138 14.7753C18.5138 18.1649 19.9287 20.9124 21.6743 20.9124C23.42 20.9124 24.8349 18.1649 24.8349 14.7753H21.6743L24.6298 12.6003Z"
                    fill="black"
                  />
                  <path
                    d="M7.56311 28.4753C11.4597 28.4753 14.6184 22.3414 14.6184 14.7748C14.6184 7.20816 11.4597 1.07422 7.56311 1.07422C3.66656 1.07422 0.507784 7.20816 0.507784 14.7748C0.507784 22.3414 3.66656 28.4753 7.56311 28.4753Z"
                    fill="#E4DDCD"
                  />
                  <path
                    d="M7.56352 28.7751C3.5082 28.7751 0.20874 22.4949 0.20874 14.7751C0.20874 7.05536 3.5082 0.775146 7.56352 0.775146C11.6188 0.775146 14.9183 7.05536 14.9183 14.7751C14.9183 22.4949 11.6188 28.7751 7.56352 28.7751ZM7.56352 1.37406C3.83833 1.37406 0.807657 7.38609 0.807657 14.7751C0.807657 22.1642 3.83833 28.1762 7.56352 28.1762C11.2887 28.1762 14.3194 22.1642 14.3194 14.7751C14.3194 7.38609 11.2887 1.37406 7.56352 1.37406Z"
                    fill="black"
                  />
                  <path
                    d="M10.5184 12.6003C10.0663 10.2846 8.91412 8.63818 7.56295 8.63818C5.81731 8.63818 4.40239 11.3856 4.40239 14.7753C4.40239 18.1649 5.81731 20.9124 7.56295 20.9124C9.30859 20.9124 10.7235 18.1649 10.7235 14.7753H7.56295L10.5184 12.6003Z"
                    fill="black"
                  />
                  <path
                    d="M10.5184 12.6003C10.0663 10.2846 8.91412 8.63818 7.56295 8.63818C5.81731 8.63818 4.40239 11.3856 4.40239 14.7753C4.40239 18.1649 5.81731 20.9124 7.56295 20.9124C9.30859 20.9124 10.7235 18.1649 10.7235 14.7753H7.56295L10.5184 12.6003Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default App;
