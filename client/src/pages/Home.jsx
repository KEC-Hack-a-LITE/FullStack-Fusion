import "@fontsource/roboto/700.css";
import React from "react";
import video from "../assets/videos/landingvid.mp4";
import TypeAnimations from "../components/TypeAnimation";
export default function Home() {
  return (
    <>
      <div className="containerLarge bg-landingBg bg-cover bg-center my-10 h-screen">
        <div className="leftDiv">
          <h2 className="text-[100px] protest-strike-regular text-[#05685e]">
            KAUSHALYAM
          </h2>
          <TypeAnimations></TypeAnimations>
        </div>
        <div className="rightDiv">
          <video
            controls
            loop
            autoPlay
            width="320"
            height="400"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
            }}
          >
            <source src={video} />
          </video>
        </div>
      </div>
      ;
    </>
  );
}
