import { TypeAnimation } from "react-type-animation";
const TypeAnimations = () => {
  return (
    <TypeAnimation
      sequence={[
        "Empowering Wellness, one click at a time.",
        1000,
        "Your Health, our priority.",
        1000,
        "Healthy Today, Thriving Tomorrow.",
        1000,
      ]}
      wrapper="span"
      speed={60}
      style={{
        fontSize: "2em",
        display: "inline-block",
        color: "#05685e",
        fontFamily: "arial",
      }}
      repeat={Infinity}
    />
  );
};
export default TypeAnimations;
