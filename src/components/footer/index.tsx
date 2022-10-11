import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { useRef, useState, useEffect } from "react";
import { Player, PlayerEvent } from "@lottiefiles/react-lottie-player";
import { useForm, SubmitHandler } from "react-hook-form";
import successMessage from "../../assets/successful-message.gif";
// @ts-ignore
import sanityClient from "./../../client";

type Input = {
  email: string;
};
const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();
  const player = useRef<Player>(null);

  const [subscribed, setSubscribed] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Input> = (data) => {
    const doc = {
      _type: "subscription",
      email: data.email,
      createdAt: new Date().toISOString(),
    }; // @ts-ignore
    sanityClient.create(doc).then((res) => {
      console.log("Email subscribed successfully");
    });
    setSubscribed(true);
    console.log(data);
  };

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "subscription"]`) // @ts-ignore
      .then((data) => console.log(data));
  }, []);

  return (
    <footer className="py-16 px-4">
      <div className="space-y-10 md:max-w-5xl md:mx-auto">
        <div className="space-y-6 md:flex md:justify-between md:gap-10 md:space-y-0">
          <div className="flex flex-col ">
            <h3 className="text-white font-semibold text-2xl capitalize text-center">
              features
            </h3>
            <ul className="flex flex-col gap-4 mt-4 items-center">
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[#FCD404]">
                <Link to="about" spy={true} smooth={true}>
                  about Us
                </Link>
              </li>
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[#FCD404]">
                <Link to="vision" spy={true} smooth={true}>
                  Vision
                </Link>
              </li>
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[#FCD404]">
                <a
                  href="https://www.facebook.com/ladytoladyconference"
                  target="_blank"
                  rel="noreferrer"
                >
                  gallery
                </a>
              </li>
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[#FCD404]">
                <Link to="testimony" spy={true} smooth={true}>
                  livestream
                </Link>
              </li>
              <li className="text-[#B3B3B3] capitalize cursor-pointer hover:text-[#FCD404]">
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
            {subscribed ? (
              <>
                <p className="text-[#FCD404] font-medium">
                  Subscription successful...
                </p>
                <Player
                  ref={player}
                  src="https://assets8.lottiefiles.com/packages/lf20_aAjwn1msVx.json"
                  autoplay={true}
                  loop={false}
                  speed={0.5}
                  style={{ width: "300px", height: "100px" }}
                ></Player>
              </>
            ) : (
              <>
                <form
                  className="rounded flex border border-[#B3B3B3] bg-white"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="py-2 px-5 outline-none"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />

                  <button className="py-2 px-5 text-white bg-[#FCD404] border-0">
                    Subscribe
                  </button>
                </form>

                {errors.email && (
                  <p className="text-red-700 text-md" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </>
            )}
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
