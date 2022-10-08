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
          <div className="flex flex-col ">
            <h3 className="text-white font-semibold text-2xl capitalize text-center">
              features
            </h3>
            <ul className="flex flex-col gap-4 mt-4 items-center">
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[yellow]">
                <Link to="about" spy={true} smooth={true}>
                  about Us
                </Link>
              </li>
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[yellow]">
                <Link to="vision" spy={true} smooth={true}>
                  Vision
                </Link>
              </li>
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[yellow]">
                <a
                  href="https://www.facebook.com/ladytoladyconference"
                  target="_blank"
                  rel="noreferrer"
                >
                  gallery
                </a>
              </li>
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[yellow]">
                <Link to="testimony" spy={true} smooth={true}>
                  livestream
                </Link>
              </li>
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[yellow]">
                <Link to="testimony" spy={true} smooth={true}>
                  testimony
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 items-center  md:gap-6">
            <h3 className="text-white font-semibold text-xl capitalize">
              subscribe to newsletter
            </h3>
            <form className="rounded  border border-[#B3B3B3]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="py-2 px-5 outline-none"
              />
              <button className="py-2 px-5 text-white bg-[#FCD404] border-0">
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <h3 className="text-white font-semibold text-xl capitalize">
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
          <p className="text-white capitalize text-center text-sm">
            Copyright © 2022 all right reserved | lady to lady
          </p>
          <p className="text-white text-center text-sm">
            Designed by mrvicthor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
