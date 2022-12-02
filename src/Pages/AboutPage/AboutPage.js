import React from "react";
import video1 from "./video/backgroundvideo.mp4";
import bubble from "./image/Bubble BG.png";
import bubble2 from "./image/Bubble BG Footer.png";
import team1 from "./image/team1.png";
import team2 from "./image/team2.png";
import team3 from "./image/team3.png";
import illustration from "./image/Illustration.png";
import illustration2 from "./image/Illustration-2.png";
import background2 from "./image/background2.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo1 from "./image/LOGO1.png";
import logo2 from "./image/LOGO2.png";
import logo3 from "./image/LOGO3.png";
import logo4 from "./image/LOGO4.png";
import logo5 from "./image/LOGO5.png";
import poster from "./image/imgvideo.png";

function AboutPage(props) {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-0">
        <div className="w-3/5 pt-56 pl-5 md-max:pl-[19px] sm-max:text-center sm-max:w-full sm-max:pr-[19px] xs-max:pt-40">
          <h2 className="text-index-1 font-semibold text-sm">About</h2>
          <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
            We are a leading beauty clinic that has been around since 2002
          </h1>
          <p className="text-index-3 font-normal text-base pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
        <div>
          <video
            controls
            loop
            className="w-11/12 mx-auto rounded-3xl mt-12  border-none"
          >
            <source src={video1} type="video/webm"></source>
          </video>
        </div>
      </div>
      <div>
        <img
          alt="img"
          src={bubble}
          className="absolute right-0 -z-10 top-[650px]"
        ></img>
      </div>
      <div>
        <img
          alt="img"
          src={bubble2}
          className="absolute left-0 -z-10 top-[2870px]"
        ></img>
      </div>

      <div className="max-w-screen-xl mx-auto my-0 pt-56 text-center ">
        <h2 className="text-index-1 font-semibold text-sm">
          Professional Teams
        </h2>
        <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
          The Professional expert
        </h1>
        <p className="text-index-3 font-normal text-base pb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>

        <div className="flex gap-5 pt-20 md-max:flex-col md-max:px-[19px]">
          <div className="w-2/6 px-12 py-16 rounded-3xl hover:shadow-2xl hover:cursor-pointer md-max:w-full">
            <div className="flex justify-center items-center pb-11">
              <img alt="" src={team1}></img>
            </div>
            <h2 className=" text-index-1 font-semibold text-base">Surgeon</h2>
            <h1 className=" text-index-2 font-semibold text-2xl  pb-3 pt-4">
              TBriyan Nevalli
            </h1>
            <p className=" text-index-3 font-normal text-sm pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="flex justify-center gap-5 pt-11">
              <div className="w-12 h-12 shadow-md flex justify-center items-center rounded-full">
                <TwitterIcon />
              </div>
              <div className="w-12 h-12 shadow-md flex justify-center items-center rounded-full">
                <FacebookIcon />
              </div>
              <div className="w-12 h-12 shadow-md flex justify-center items-center rounded-full">
                <InstagramIcon />
              </div>
            </div>
          </div>

          <div className="w-2/6 px-12 py-16 rounded-3xl hover:shadow-2xl hover:cursor-pointer md-max:w-full">
            <div className="flex justify-center items-center pb-11">
              <img alt="" src={team2}></img>
            </div>
            <h2 className=" text-index-1 font-semibold text-base">
              Dermatologist
            </h2>
            <h1 className=" text-index-2 font-semibold text-2xl  pb-3 pt-4">
              Bella sebastian
            </h1>
            <p className=" text-index-3 font-normal text-sm pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="flex justify-center gap-5 pt-11">
              <div className="w-12 h-12 shadow-md flex justify-center items-center rounded-full">
                <TwitterIcon />
              </div>
              <div className="w-12 h-12 shadow-md flex justify-center items-center rounded-full">
                <FacebookIcon />
              </div>
              <div className="w-12 h-12 shadow-md flex justify-center items-center rounded-full">
                <InstagramIcon />
              </div>
            </div>
          </div>

          <div className="w-2/6 px-12 py-16 rounded-3xl hover:shadow-2xl hover:cursor-pointer md-max:w-full">
            <div className="flex justify-center items-center pb-11">
              <img alt="" src={team3}></img>
            </div>
            <h2 className=" text-index-1 font-semibold text-base">
              Stylist expert
            </h2>
            <h1 className=" text-index-2 font-semibold text-2xl  pb-3 pt-4">
              Lilly Adams
            </h1>
            <p className=" text-index-3 font-normal text-sm pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
            <div className="flex justify-center gap-5 pt-11">
              <div className="w-12 h-12 shadow-md flex justify-center items-center rounded-full">
                <TwitterIcon />
              </div>
              <div className="w-12 h-12 shadow-md flex justify-center items-center rounded-full">
                <FacebookIcon />
              </div>
              <div className="w-12 h-12 shadow-md flex justify-center items-center rounded-full">
                <InstagramIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24">
        <img className="w-full" alt="" src={background2}></img>
      </div>
      <div className="pt-24 max-w-screen-xl mx-auto md-max:px-[19px]">
        <div className="flex items-center gap-28 sm-max:flex-col sm-max:text-center sm-max:gap-8">
          <div className="w-1/2">
            <img alt="" src={illustration}></img>
          </div>
          <div className="w-1/2 sm-max:w-full">
            <h2 className=" text-index-1 font-semibold text-base">
              Our Vision
            </h2>
            <h1 className=" text-index-2 font-semibold text-2xl  pb-3 pt-4">
              Be the best and go international
            </h1>
            <p className=" text-index-3 font-normal text-sm pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
              tellus in suspendisse placerat.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-28 pt-28 sm-max:flex-col-reverse sm-max:text-center sm-max:gap-8 sm-max:pt-16">
          <div className="w-1/2 sm-max:w-full">
            <h2 className=" text-index-1 font-semibold ">Our Mission</h2>
            <h1 className=" text-index-2 font-semibold text-2xl  pb-3 pt-4">
              Special & premium service to any clients
            </h1>
            <p className=" text-index-3 font-normal text-sm pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
              tellus in suspendisse placerat.
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <img alt="" src={illustration2}></img>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-0 pt-32 text-center">
        <h2 className="text-index-1 font-semibold text-base">Our Clients</h2>
        <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
          Well-known agencies
        </h1>
        <p className="text-index-3 font-normal text-base pb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      <div className="flex justify-center gap-[4rem] pb-32 pt-10 md-max:gap-0 xs-max:flex-col xs-max:w-2/5 mx-auto">
        <img alt="" src={logo1}></img>
        <img alt="" src={logo2}></img>
        <img alt="" src={logo3}></img>
        <img alt="" src={logo4}></img>
        <img alt="" src={logo5}></img>
      </div>
    </div>
  );
}

export default AboutPage;
