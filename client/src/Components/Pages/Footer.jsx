import React from "react";
import { MdSportsEsports } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { ImTwitch } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full bg-sky-950 dark:bg-gray-900 py-2 ">
      <div className="md:px-12 lg:px-28">
        <div className="container flex flex-col mx-auto space-y-3 text-white border-t-2">
          <Link
            to="/"
            className="flex items-center m-auto hover:text-white hover:no-underline"
          >
            <MdSportsEsports className="text-4xl" />
            <p className="ml-1">GameCrazeTech</p>
          </Link>

          <ul
            role="list"
            className="flex flex-col items-center justify-center sm:flex-row sm:gap-8"
          >
            <li role="listitem">
              <Link to="/gameList" className="hover:text-white ">
                Home
              </Link>
            </li>

            <li role="listitem">
              <Link to="/about" className="hover:text-white">
                About us
              </Link>
            </li>
            <li role="listitem">
              <Link to="/contact" className="hover:text-white">
                Contact us
              </Link>
            </li>
          </ul>
          <div className=" m-auto flex w-max items-center justify-between space-x-4 pt-2">
            <Link to="https://discord.com/" className="hover:text-white" title="Discord">
              <BsDiscord className=" text-lg" />
            </Link>
            <Link to="https://www.twitch.tv/" className="hover:text-white" title="Twitch">
              <ImTwitch className=" text-lg" />
            </Link>
            <Link to="https://www.facebook.com/" className="hover:text-white" title="Facebook">
              <BsFacebook className=" text-lg" />
            </Link>
            <Link to="https://www.instagram.com/" className="hover:text-white" title="Instagram">
              <BsInstagram className=" text-lg" />
            </Link>
          </div>

          <div className="text-center">
            <span className="text-sm tracking-wide">
              Copyright © GameCrazeTech 2023 <span id="year"></span> | All right
              reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
