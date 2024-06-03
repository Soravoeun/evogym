import Grids from "../component/Grids";
import "./Benefits.css";
import benefitsPageGraphic from "../assets/benefitsPageGraphic.png";
import Button from "../component/Button";

function Benefits() {
  return (
    <>
      <div className="menu-benefits page">
        <section className="title">
          <h2>MORE THAN JUST A GYM</h2>
          <p className="description">
            We are a community of like-minded individuals who are passionate
            about learning and growing together. We are a community of
            like-minded individuals who are passionate about learning and
            growing together. We are a community of like-minded individuals who
            are passionate about learning and growing together.
          </p>
        </section>

        <Grids />

        <section className="benefit">
          <div>
            <img
              src={benefitsPageGraphic}
              className="benefitsPageGraphic"
              alt="benefitsPageGraphic"
            />
          </div>

          <div className="membersFeelings">
            <h7>
              Millions of Happy Members <span className="wordInColor">FIT</span>
            </h7>
            <div className="allDescription">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos molestiae soluta fugiat quas. Optio aliquid commodi
                cupiditate modi dolores temporibus ipsa sunt qui similique aut
                doloribus quis, facere minima obcaecati?
              </p>

              <p className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos molestiae soluta fugiat quas. Optio aliquid commodi
                cupiditate modi dolores temporibus ipsa sunt qui similique aut
                doloribus quis, facere minima obcaecati?
              </p>
            </div>
            <div className="sparkles">
              <Button url="#contact" label="Join Now" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Benefits;
