import "./Home.css";
import evogymPicture from "../assets/evogymPicture.png";
import femmeEnSport from "../assets/femmeEnSport.png";
import redBull from "../assets/redBull.png";
import forbes from "../assets/forbes.png";
import fortune from "../assets/fortune.png";
import Button from "../component/Button";
import LearnMore from "../component/LearnMore";

function Home() {
  return (
    <>
      <div className="menu-home ">
        <section className="evolve">
          <div className="contentHome page">
            <div className="appEvogym">
              <img
                src={evogymPicture}
                className="evogymPicture"
                alt="evogymPicture"
              />
              <p>
                We are a community of like-minded individuals who are passionate
                about learning and growing together. We are a community of
                like-minded individuals who are passionate about learning and
                growing together.
              </p>
              <div className="btn">
                <Button url="#contact" label="Join" />
                <LearnMore />
              </div>
            </div>

            <div className="sportPic">
              <img src={femmeEnSport} className="femme" alt="femmme" />
            </div>
          </div>
        </section>

        <section className="homeLogo">
          <div className="redBull">
            <img
              src={redBull}
              className="redBullPicture"
              alt="redBullPicture"
            />
            <img src={forbes} className="forbesPicture" alt="forbesPicture" />
            <img
              src={fortune}
              className="fortunePicture"
              alt="fortunePicture"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
