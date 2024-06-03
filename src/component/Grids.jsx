import "./Grids.css";
import LearnMore from "./LearnMore";
import homeLogo from "../assets/homeLogo.svg";
import classesLogo from "../assets/classesLogo.svg";
import trainersLogo from "../assets/trainersLogo.svg";
import Card from "./Card";

function Grids() {
  const grid = [
    {
        
      img: homeLogo,
      title: "Modern Facility",
      description:
        "We are a community of like-minded individuals who are passionate about learning and growing together.",
      button: <LearnMore />,
    },
    {
      img: classesLogo,
      title: "100's of Diverse Classes",
      description:
        "We are a community of like-minded individuals who are passionate about learning and growing together.",
      button: <LearnMore />,
    },
    {
      img: trainersLogo,
      title: "Expert and Pro Trainers",
      description:
        "We are a community of like-minded individuals who are passionate about learning and growing together.",
      button: <LearnMore />,
    },
  ];

  return (
    <div className="grid">
      {grid.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
}

export default Grids;
