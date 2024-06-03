import CardImage from "./CardImage";
import "./GridCardImg.css";
import trainingAlter from "../assets/alter.png";
import yoga from "../assets/yoga.png";
import yoga2 from "../assets/yoga2.png";
import dance from "../assets/dance.png";
import training from "../assets/training.png";
import conversational from "../assets/conversation.png";

function GridCardImg() {
  const gridCardImg = [
    {
      imgCard: trainingAlter,
      title: "Weighlifting",
      description:
        "We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together",
    },
    {
      imgCard: yoga,
      title: "Training",
      description:
        "We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together",
    },
    {
      imgCard: yoga2,
      title: "Fitness",
      description:
        "We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together",
    },
    {
      imgCard: dance,
      title: "Adventure",
      description:
        "We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together",
    },
    {
      imgCard: training,
      title: "Ab core",
      description:
        "We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together",
    },
    {
      imgCard: conversational,
      title: "Yoga",
      description:
        "We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together",
    },
  ];

  return (
    <div className="gridCardImg">
      {gridCardImg.map((item) => (
        <CardImage {...item} />
      ))}
    </div>
  );
}

export default GridCardImg;
