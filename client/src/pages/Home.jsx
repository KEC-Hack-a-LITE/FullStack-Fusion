import "@fontsource/roboto/700.css";
import React from "react";
import video from "../assets/videos/landingvid.mp4";
import TypeAnimations from "../components/TypeAnimation";
import MultiActionAreaCard from "../components/Card";
import appointment from "../assets/images/appointment.png";
import payment from "../assets/images/payment.png";
import report from "../assets/images/report.png";
import test from "../assets/images/test.png";
export default function Home() {
  return (
    <>
      <div
        className="containerLarge bg-landingBg bg-cover bg-center my-32 h-screen"
        id="home"
      >
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

      <div className="services_section -z-1" id="service">
        <p className="text-white">Services</p>

        <div className="services -z-1">
          <MultiActionAreaCard name="Appointment Booking" image={appointment} />
          <MultiActionAreaCard name="Automated Testing" image={test} />
          <MultiActionAreaCard name="View Test Reports" image={report} />
          <MultiActionAreaCard
            name="Consultation Fee Payment"
            image={payment}
          />
        </div>
      </div>
    </>
  );
}
