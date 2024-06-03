import "./Footer.css";
import evogymHeader from "../assets/evogymHeader.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="menu-footer">
          <section className="headRight">
            <img
              src={evogymHeader}
              className="evogymHeader"
              alt="evogymHeader"
            />
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              voluptates suscipit vel corrupti pariatur! Possimus nulla suscipit
              at blanditiis facere quidem inventore, a incidunt magnam! Omnis ea
              distinctio consectetur optio.
            </p>
            <p className="text">(c) Evogym All Rights Reserved</p>
          </section>

          <section className="allRights">
            <p className="footerTitle">Links</p>
            <p className="text">Massa Orci Senectus</p>
            <p className="text">Et gravida id et teitm</p>
            <p className="text">Ulam corper viana</p>
          </section>

          <section className="contactUs">
            <p className="footerTitle">Contact Us</p>
            <p className="text">Memphi depat is what</p>
            <p className="text">(123)456-7890</p>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
