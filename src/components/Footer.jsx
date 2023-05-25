import { NavLink } from "react-router-dom";
import { useState } from "react";
import arrowUp from "../assets/arrow-up.svg";
const Footer = () => {
  // Remonte en haut de la page au clic sur le bouton
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  return (
    <footer className="bg-gray-800 px-32 p-5 relative">
      <div>
        {visible && (
          <img
            onClick={scrollToTop}
            className="arrowUp h-10 absolute -top-4 left-1/2 rounded-lg p-2 cursor-pointer"
            src={arrowUp}
            alt="arrowUp"
          />
        )}
      </div>
      <div className="footer flex justify-between pt-10">
        <div>
          <div className="text-white para flex gap-2 ">
            <p>© 2020. All rights reserved. | Designed by</p>
            <NavLink className="design font-bold" to="/design">
              DesignDrastic
            </NavLink>
          </div>
        </div>
        <div className="flex gap-10 text-zinc-400">
          <NavLink className="hover:text-white" to="/termes">
            Terms & Conditions
          </NavLink>
          <NavLink className="hover:text-white" to="/privacy">
            Privacy Policies
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
