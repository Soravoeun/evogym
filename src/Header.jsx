import "./Header.css";

import evogymHeader from "./assets/evogymHeader.png";
import { useState } from "react";
import Button from "./component/Button";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log("window.scrollY");
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="header-menu">
          <div className="evogym">
            <img
              src={evogymHeader}
              className="evogymHeader"
              alt="evogymHeader"
            />
            <section className="homeMember">
              <div className="evogymHome">
                <a href="#home" className="home">
                  Home
                </a>
                <a href="#benefits" className="benefits">
                  Benefits
                </a>
                <a href="#classes" className="classes">
                  Our Classes
                </a>
                <a href="#contact" className="contact">
                  Contact Us
                </a>
              </div>

              <div className="evogymSignIn">
                <p>Sign In</p>
                <Button url="#contact" label="Become a Member" />
              </div>
            </section>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
