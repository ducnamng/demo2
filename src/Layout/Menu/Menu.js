import React, { useState } from "react";
import mainLogo from "./image/MainLogo.png";
import { Link } from "react-router-dom";

const Menu = () => {
  let Links = [
    { name: "Home+", path: "home+" },
    { name: "About", path: "about" },
    { name: "Service", path: "service" },
    { name: "Gallery", path: "gallery" },
    { name: "Blog", path: "blog" },
  ];

  let [open, setOpen] = useState(false);

  let handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        className="absolute z-20 right-2 top-[40px] text-gray-500 font-semibold lg:hidden hover:cursor-pointer"
      >
        <ion-icon
          name={open ? "close" : "menu"}
          size="large"
          className="text-gray-700"
        ></ion-icon>
      </div>
      <div className=" font-pop flex lg:justify-around md-max:pl-4 items-center mt-6 lg:mt-10 mx-auto absolute w-full">
        <div>
          <img alt="Logo" src={mainLogo}></img>
        </div>
        <ul
          className={`font-medium text-white z-10  items-center lg:flex lg:gap-12  md-max:fixed md-max:right-0 md-max:top-0 md-max:h-full md-max:w-2/4 md-max:pt-20  md-max:transition-all md-max:duration-500 md-max:ease-in md-max:bg-rose-300 xs-max:!w-full
          ${open ? "md-max:right-0" : "md-max:-right-full"}
          `}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="py-5 md-max:mx-3 md-max:pl-5 md-max:hover:bg-pink-bottom hover:cursor-pointer md-max:hover:border md-max:hover:rounded-xl md-max:hover:shadow-2xl md-max:hover:text-white"
            >
              <a
                href={link.path}
                className="text-index-3 lg:hover:text-pink-400 font-semibold "
              >
                {link.name}
              </a>
            </li>
          ))}

          <button className="rounded-2xl bg-pink-bottom shadow-lg hover:shadow-2xl opacity-90 hover:opacity-100 px-12 py-5 font-semibold text-white md-max:my-5 md-max:ml-3">
            <a href="contact">Contact</a>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
