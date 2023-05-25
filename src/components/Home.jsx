import { NavLink } from "react-router-dom";
import arrowRight from "../assets/arrow-right.svg";
import hero from "../assets/hero.svg";
import { useState, useEffect } from "react";
import menuIcon from "../assets/toggle-icon.png";

const Home = () => {
  //Scroll au clique du menu
  const handleMenuClick = (e, sectionId) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Fixer le menu au défilement
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const navbarStyle = {
    position: scrollPosition > 0 ? "fixed" : "relative",
    left: scrollPosition > 0 ? "50%" : "",
    top: scrollPosition > 0 ? "50px" : "",
    paddingTop: scrollPosition > 0 ? "8px" : "40px",
    transform: scrollPosition > 0 ? "translate(-50%, -50%)" : "",
    background:
      scrollPosition > 0
        ? "linear-gradient(100deg, #f77dd0, #fbd999)"
        : "transparent",
    borderRadius: scrollPosition > 0 ? "10px" : "0",
  };

  return (
    <div id="home" className="home px-32 relative">
      <div
        style={navbarStyle}
        className="menu z-50 flex justify-center items-center gap-96 px-5 pb-2"
      >
        <div className="logo text-white text-2xl font-bold">
          <NavLink to="/">Logo</NavLink>
        </div>
        <nav className="none text-black text-md font-bold">
          <ul className="flex gap-10">
            <li>
              <NavLink
                className={(nav) => nav.isActive && "active"}
                onClick={(e) => handleMenuClick(e, "home")}
                id="hover"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(nav) => nav.isActive && "active"}
                onClick={(e) => handleMenuClick(e, "features")}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(nav) => nav.isActive && "active"}
                onClick={(e) => handleMenuClick(e, "services")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(nav) => nav.isActive && "active"}
                onClick={(e) => handleMenuClick(e, "pricing")}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(nav) => nav.isActive && "active"}
                onClick={(e) => handleMenuClick(e, "testimonials")}
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(nav) => nav.isActive && "active"}
                onClick={(e) => handleMenuClick(e, "contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <img
          className="menuIcon d-none w-8 h-7"
          src={menuIcon}
          onClick={() => setToggle(!toggle)}
          alt="menuIcon"
        />
        {toggle && (
          <nav className="text-black text-md font-bold flex flex-col fixed  linear p-4 rounded-md top-12">
            <ul className="flex gap-3 flex-col">
              <li>
                <NavLink
                  to="#home"
                  className={(nav) => nav.isActive && "active"}
                  id="hover"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(nav) => nav.isActive && "active"}
                  to="#features"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(nav) => nav.isActive && "active"}
                  to="#services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(nav) => nav.isActive && "active"}
                  to="#pricing"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(nav) => nav.isActive && "active"}
                  to="#testimonials"
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(nav) => nav.isActive && "active"}
                  to="#contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <header className="flex justify-between py-44 text-white">
        <div className="left w-2/3">
          <h1 className="font-bold text-5xl">Creative Landing Page Template</h1>
          <NavLink
            className="link flex justify-between w-48 font-bold p-2 rounded-md mt-14"
            to="#"
          >
            <span>Get started</span>
            <img
              className="w-5"
              loading="lazy"
              src={arrowRight}
              alt="arrow-right"
            />
          </NavLink>
        </div>
        <div className="right w-1/2">
          <div className="circle">
            <img
              className="w-80 h-80"
              loading="lazy"
              src={hero}
              alt="hero-svg"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
