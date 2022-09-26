import ladyLogo from "../../assets/ladytolady.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>("");
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    if (isActive == "") {
      setIsActive("home");
    }
  }, [isActive, showNav]);
  return (
    <header className="bg-[#FCEC2C] px-4 py-4 md:py-0 fixed w-full top-0 m-0 z-40 border-b-[3px]  border-white">
      <div className="md:max-w-5xl md:mx-auto h-[60px]">
        <nav className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <Link to="home" spy={true} smooth={true}>
              <img
                className="h-10 w-10"
                alt="lady-to-lady-logo"
                src={ladyLogo}
              />
            </Link>
            <span className="text-lg font-semibold cursor-pointer hover:text-white">
              Lady to lady global
            </span>
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
            className="primary-navigation md:relative md:translate-y-0 md:h-full md:bg-transparent md:flex-row md:items-center md:gap-4 md:py-0 md:space-y-0 md:inset-0 md:px-0 md:z-0"
            data-visible={showNav ? "true" : "false"}
          >
            {[
              "home",
              "about",
              "vision",
              "gallery",
              "livestream",
              "conferences",
            ].map((item, index) => (
              <li
                key={index}
                className={` ${
                  item == isActive ? "active" : ""
                } text-2xl font-semibold text-white cursor-pointer md:text-lg md:text-black md:py-4 md:font-bold  md:border-0 capitalize md:hover:text-white`}
              >
                <Link
                  onClick={() => {
                    setIsActive(item);
                  }}
                  activeClass={item}
                  offset={-68}
                  to={item}
                  spy={true}
                  smooth={true}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
