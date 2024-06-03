import "./Contact.css";
import contactUs from "../assets/contactUs.png";


function Contact() {
  return (
    <>
      <div className="contact-menu">
        <section className="title">
          <h2>
            <span className="wordInColor">JOIN NOW</span> TO GET IN SHAPE
          </h2>
          <p className="description">
            We are a community of like-minded individuals who are passionate
            about learning and growing together. We are a community of
            like-minded individuals who are passionate about learning and
            growing together. We are a community of like-minded individuals who
            are passionate about learning and growing together.
          </p>
        </section>

        <section className="inscription">
          <fieldset>
            {/* <div className="formulaires"> */}
            <input
              type="text"
              className="text miseEnForm"
              placeholder="NAME"
              size="100%"
            />
            {/* </div> */}
            {/* <div className="formulaires"> */}
            <input
              type="text"
              className="email miseEnForm"
              pattern=".+@globex\.com"
              placeholder="EMAIL"
              color="white"
              size="100%"
            />
            {/* </div> */}
            {/* <div className="formulaires"> */}
            <textarea
              type="text"
              className="message miseEnForm"
              placeholder="MESSAGE"
              size="100%"
            ></textarea>
            {/* </div> */}
            <button type="submit" className="button">
              SEND
            </button>
          </fieldset>
          <div className="contact">
            <img src={contactUs} className="contactImg" alt="contactImg" />
          </div>
        </section>

        
      </div>
    </>
  );
}

export default Contact;
