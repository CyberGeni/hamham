import "./App.css";
import Navbar from "./components/Navbar";
import leftBurger from "./assets/images/left-hero-burger.png";
import rightBurger from "./assets/images/right-hero-burger.png";
import hand from "./assets/images/hand.svg";
function App() {
  return (
    <div className="App font-['Maven_Pro'] overflow-x-hidden">
      <Navbar />
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
        <div className="space-x-3 py-2">
          <button className="bg-[#1e1e1e] text-xs text-[#E4DDCD] px-5 py-3 rounded-full">
            FIND LOCATION{" "}
          </button>
          <button className="text-xs border border-[#1e1e1e] px-5 py-2.5 rounded-full">
            BUY ONLINE
          </button>
        </div>
        <img className="hidden md:flex absolute z-50 bottom-1 left-28 lg:left-[180px] w-24 lg:w-32 " src={hand} alt="" />
        <img className="w-36 sm:w-60 md:72 lg:w-80 -z-10 opacity-40 md:opacity-100  absolute left-0 bottom-3" src={leftBurger} alt="" />
        <img className="w-36 sm:w-60 md:72 lg:w-80 -z-10 opacity-40 md:opacity-100 absolute right-0 bottom-3" src={rightBurger} alt="" />
      </section>
    </div>
  );
}
export default App;
