import "@fontsource/roboto/700.css";
import React from "react";
import video from "../assets/videos/landingvid.mp4";
import TypeAnimations from "../components/TypeAnimation";
import MultiActionAreaCard from "../components/Card";
import appointment from "../assets/images/appointment.png";
import payment from "../assets/images/payment.png";
import report from "../assets/images/report.png";
import test from "../assets/images/test.png";
import { Link } from "react-router-dom";
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


      <div className="services_section -z-1">
        <p className="text-white">AWARENESS</p>         
      </div>
      <div className="m-10 -z-1 text-base">
          
          <p className=""> Awareness for health is crucial for maintaining a balanced and fulfilling life. It involves understanding the importance of physical, mental, and emotional well-being and making informed choices to support them. By being aware of our bodies, identifying potential health risks, and adopting healthy habits, we can prevent illness, enhance our quality of life, and increase longevity. This awareness extends beyond individual health to encompass broader societal issues such as access to healthcare, environmental factors, and social determinants of health. By promoting health awareness, we empower ourselves and our communities to prioritize wellness, leading to happier, more resilient societies.
           
          </p>
          <Link to={"/videocomponent"}>
<button type="button" className=" bg-[#05685e] rounded-md text-white h-11 w-auto p-2 m-2"> Awareness Videos</button>
        </Link>
        </div>

    </>
  );
}
