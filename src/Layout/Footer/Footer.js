import React from "react";
import logo from "./image/Footer Logo.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#172176]">
        <div className="max-w-screen-xl mx-auto pt-44 pb-20 mt-10 px-5 xs-max:pt-24">
          <div className="flex sm-max:flex-col gap-5">
            <div className="w-1/2 sm-max:w-full">
              <img alt="" src={logo}></img>
              <span className="flex items-center py-6">
                <h1 className="text-base text-white font-semibold">Beautice</h1>
                <p className="text-white text-sm font-light">
                  &ensp;is a Beauty Clinic WordPress Theme.
                </p>
              </span>
              <p className="text-white text-xs italic">
                Baker Steet 101, NY, United States.
              </p>
              <span>
                <p className="text-white text-xs italic">+521 569 8966.</p>
                <p className="text-white text-xs italic">mail@company.com.</p>
              </span>
            </div>
            <div className="flex w-1/2 sm-max:w-full xs-max:flex-col gap-5">
              <div className="w-1/2 xs-max:w-full">
                <h1 className="text-base text-white font-semibold pb-6">
                  Pages
                </h1>
                <div>
                  <span className="flex items-center text-white text-sm font-light pb-3 gap-1">
                    <ion-icon name="caret-forward"></ion-icon>
                    <p>Home</p>
                  </span>
                  <span className="flex items-center text-white text-sm font-light pb-3 gap-1">
                    <ion-icon name="caret-forward"></ion-icon>
                    <p>About</p>
                  </span>
                  <span className="flex items-center text-white text-sm font-light pb-3 gap-1">
                    <ion-icon name="caret-forward"></ion-icon>
                    <p>Services</p>
                  </span>
                  <span className="flex items-center text-white text-sm font-light pb-3 gap-1">
                    <ion-icon name="caret-forward"></ion-icon>
                    <p>Gallery</p>
                  </span>
                  <span className="flex items-center text-white text-sm font-light pb-3 gap-1">
                    <ion-icon name="caret-forward"></ion-icon>
                    <p>Team</p>
                  </span>
                </div>
              </div>

              <div className="w-1/2 xs-max:w-full">
                <h1 className="text-base items-center text-white font-semibold pb-6 ">
                  Informations
                </h1>
                <div>
                  <span className="flex items-center text-white text-sm font-light pb-3 gap-1">
                    <ion-icon name="caret-forward"></ion-icon>
                    <p>Terms & conditions</p>
                  </span>
                  <span className="flex items-center text-white text-sm font-light pb-3 gap-1">
                    <ion-icon name="caret-forward"></ion-icon>
                    <p>Privacy policy</p>
                  </span>
                  <span className="flex items-center text-white text-sm font-light pb-3 gap-1">
                    <ion-icon name="caret-forward"></ion-icon>
                    <p>Blog</p>
                  </span>
                  <span className="flex items-center text-white text-sm font-light pb-3 gap-1">
                    <ion-icon name="caret-forward"></ion-icon>
                    <p>Contact</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-16 sm-max:flex-col sm-max:gap-5 ">
            <div className=" text-white flex w-1/2 gap-14 sm-max:w-full xs-max:!gap-4">
              <ion-icon name="logo-facebook" size="large"></ion-icon>
              <ion-icon name="logo-instagram" size="large"></ion-icon>
              <ion-icon name="logo-linkedin" size="large"></ion-icon>
              <ion-icon name="logo-twitter" size="large"></ion-icon>
              <ion-icon name="logo-youtube" size="large"></ion-icon>
            </div>
            <div>
              <p className="text-white text-sm font-light">
                © AltDesain Studio 2021 - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
