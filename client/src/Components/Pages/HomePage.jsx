import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "../../Style/HomePage.css";
import HomePageIntro from "./HomePageIntro";

const HomePage = () => {
  const videoSources = [
    {
      src: "https://res.cloudinary.com/gct2/video/upload/v1684487723/Video/GameTech_tpp4fy.webm",
      type: "video/webm",
    },
    {
      src: "https://res.cloudinary.com/gct2/video/upload/v1684487761/Video/WoLong_l7nh9h.webm",
      type: "video/webm",
    },
    {
      src: "https://res.cloudinary.com/gct2/video/upload/v1684487637/Video/Blur_jkapwz.webm",
      type: "video/webm",
    },
    {
      src: "https://res.cloudinary.com/gct2/video/upload/v1684487691/Video/CounterStrike_yszznp.webm",
      type: "video/webm",
    },
  ];

  const randomVideo =
    videoSources[Math.floor(Math.random() * videoSources.length)];

  return (
    <div className="homepage">
      <div className="relative w-full h-screen">
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          preload="metadata"
          playsInline
        >
          <source src={randomVideo.src} type={randomVideo.type} />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      <div className="container-txt-btn">
        <HomePageIntro />

        <div className="button-wrapper text-2xl absolute gap-8 justify-center">
          <Link to="/gameList">
            <Button
              className="bg-indigo-800 hover:bg-indigo-500 hover:scale-110 opacity-80 text-[10px] lg:text-[20px] rounded-3xl w-34 h-34 sm:w-40 sm:h-40"
              ripple={true}
            >
              For Gamers
            </Button>
          </Link>
          <Link to="/hardwareList">
            <Button
              className="bg-rose-800 hover:bg-rose-500 hover:scale-110 text-[10px] lg:text-[20px] opacity-80 rounded-3xl w-34 h-34 sm:w-40 sm:h-40"
              ripple={true}
            >
              Upgrade PC
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
