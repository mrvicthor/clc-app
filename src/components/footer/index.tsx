import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="py-16 px-4">
      <div className="space-y-10 md:max-w-5xl md:mx-auto">
        <div className="space-y-6 md:flex md:justify-between md:gap-10 md:space-y-0">
          <div className="flex flex-col">
            <h3 className="text-[#545454] font-semibold text-2xl capitalize text-center">
              features
            </h3>
            <ul className="flex flex-col gap-4 mt-4 items-center">
              <li className="text-white capitalize cursor-pointer">
                <Link to="about" spy={true} smooth={true}>
                  about Us
                </Link>
              </li>
              <li className="text-white capitalize cursor-pointer">
                <Link to="vision" spy={true} smooth={true}>
                  Vision
                </Link>
              </li>
              <li className="text-white capitalize cursor-pointer">
                <a
                  href="https://www.facebook.com/ladytoladyconference"
                  target="_blank"
                  rel="noreferrer"
                >
                  gallery
                </a>
              </li>
              <li className="text-white capitalize cursor-pointer">
                <Link to="testimony" spy={true} smooth={true}>
                  livestream
                </Link>
              </li>
              <li className="text-white capitalize cursor-pointer">
                <Link to="testimony" spy={true} smooth={true}>
                  testimony
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 items-center md:flex-[50%]">
            <h3 className="text-[#545454] font-semibold text-xl capitalize">
              subscribe to newsletter
            </h3>
            <form className="relative rounded h-10 w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="py-2 px-5 absolute w-[75%] left-0 bottom-0 top-0"
              />
              <button className="py-2 px-5 text-white bg-[yellow] w-[25%] absolute right-0 top-0 bottom-0">
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-[#545454] font-semibold text-xl capitalize">
              follow us
            </h3>
            <ul className="social__icons flex items-center gap-8">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-[2px] bg-[yellow]" />
          <p className="text-white capitalize text-center">
            Copyright © 2022 all right reserved | lady to lady
          </p>
          <p className="text-white text-center">Designed by mrvicthor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
