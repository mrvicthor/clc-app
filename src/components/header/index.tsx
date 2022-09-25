import ladyLogo from "../../assets/ladytolady.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>("Home");
  useEffect(() => {}, [showNav]);
  return (
    <header className="bg-[#FCEC2C] px-4 py-4 md:py-0 fixed w-full top-0 m-0 z-40">
      <div className="md:max-w-5xl md:mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" alt="lady-to-lady-logo" src={ladyLogo} />{" "}
            <span className="text-lg font-semibold">Lady to lady global</span>
          </div>

          <button
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="cursor-pointer mobile-nav-toggle md:hidden"
            aria-controls="primary-navigation"
          >
            <span className="sr-only" aria-expanded="false">
              Menu
            </span>
            {showNav ? (
              <FaTimes className="h-8 w-8 " />
            ) : (
              <FaBars className="h-8 w-8 " />
            )}
          </button>

          <ul
            id="primary-navigation"
            className="primary-navigation md:relative md:translate-y-0 md:bg-transparent md:flex-row md:gap-4 md:items-center md:py-0 md:space-y-0 md:inset-0 md:px-0 md:z-0"
            data-visible={showNav ? "true" : "false"}
          >
            {[
              "Home",
              "About",
              "Vision",
              "Gallery",
              "Livestream",
              "Conferences",
            ].map((item, index) => (
              <li
                onClick={() => setIsActive(item)}
                key={index}
                className={`${
                  isActive == item ? " active" : ""
                } text-2xl font-semibold text-white cursor-pointer md:text-xl md:text-black md:py-5 md:border-0`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
