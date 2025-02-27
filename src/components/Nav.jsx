import { useState } from "react";
import "../css/button.css";
import "../css/nav.css";
import { useModal } from "../context/ModalContext";
import Logo from "../Assets/Logos/Polio/Logo.svg";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
const Nav = () => {
  const [togglenav, setToggleNav] = useState(true);
  const { openModal } = useModal();

  const handleNavOpen = () => {
    setToggleNav((prev) => !prev);
  };

  const handleLinkClick = () => {
    setToggleNav(true);
  };

  return (
    <nav className={`nav ${!togglenav ? "active" : ""}`}>
      <div className="wrapper">
        <div className="left-hand-side">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <ul className="links">
            <li>
              <a href="/" className="link" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#integrations" className="link" onClick={handleLinkClick}>
                Integrations
              </a>
            </li>
            <li>
              <a href="#features" className="link" onClick={handleLinkClick}>
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="link" onClick={handleLinkClick}>
               Customers
              </a>
            </li>
          </ul>
        </div>
        <div className="right-hand-side">
          <a href="#" onClick={openModal} className="btn btn-secondary">
            Sign In
          </a>
          <a href="#" onClick={openModal} className="btn btn-primary">
            Start for free
          </a>
        </div>
        <div className="hamburger" onClick={handleNavOpen}>
          {togglenav ? (
            <IoMenuOutline className="menu-icon" />
          ) : (
            <IoCloseOutline className="menu-icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
