import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import team1 from "./images/team1.png";
import team2 from "./images/team2.png";
import team3 from "./images/team3.png";
import profile1 from "./images/profile1.png";
import profile2 from "./images/profile2.png";
import profile3 from "./images/profile3.png";
import imgcmt from "./images/img-cmt.png";

const TeamPage = () => {
  let lists = [
    {
      img: { team1 },
      position: "Surgeon",
      name: "TBriyan Nevalli",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit utaliquam, purus sit",
    },
    {
      position: "Dermatologist",
      name: "Bella sebastian",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit utaliquam, purus sit",
    },
    {
      position: "Stylist expert",
      name: "Lilly Adams",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit utaliquam, purus sit",
    },
  ];

  let listSliders = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
    },
    {
      content:
        "Learn how to build a React image slider carousel from scratch in this beginner tutorial. You will be able to navigate through the image slideshow using left and right arrows. We will use react hooks to create this project.",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = listSliders.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(listSliders) || listSliders.length <= 0) {
    return null;
  }

  console.log(current);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-0 pt-56 text-center px-4">
        <h2 className="text-index-1 font-semibold text-sm">
          Professional Teams
        </h2>
        <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
          The Professional expert
        </h1>
        <p className="text-index-3 font-normal text-base pb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>

        <div className="flex gap-5 pt-20 md-max:flex-col md-max:items-center">
          {lists.map((list) => (
            <div key={list.name}>
              <div className="w-full px-12 py-16 rounded-3xl hover:shadow-2xl hover:cursor-pointer xs-max:w-full xs-max:mx-auto xs-max:px-10 xs-max:py-10">
                <div className="flex justify-center items-center pb-11">
                  <img alt="" src={team1}></img>
                </div>
                <h2 className=" text-index-1 font-semibold text-base">
                  Surgeon
                </h2>
                <h1 className=" text-index-2 font-semibold text-2xl  pb-3 pt-4">
                  {list.name}
                </h1>
                <p className=" text-index-3 font-normal text-sm pb-3">
                  {list.information}
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
          ))}
        </div>
      </div>

      {/* Meet the pro assistance */}
      <div className="max-w-screen-xl mx-auto my-0 pt-40 text-center px-4">
        <h2 className="text-index-1 font-semibold text-sm">Assistance Team</h2>
        <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
          Meet the pro assistance
        </h1>
        <p className="text-index-3 font-normal text-base pb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>

        <div>
          <div className="flex items-center pt-20 md-max:flex-col">
            <div className="w-1/2 sm-max:w-[70%] xs-max:w-full">
              <img alt="" src={profile1}></img>
            </div>
            <div className="w-1/2 sm-max:w-[70%] xs-max:w-full">
              <span class="flex items-center md-max:py-3">
                <h1 className="text-lg text-index-2 font-semibold">
                  Lina Gustav /
                </h1>
                <p className="text-index-3 text-sm">Pharmacist</p>
              </span>
              <p className="text-index-3 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </p>
            </div>
          </div>

          <div className="flex items-center pt-20 md-max:flex-col">
            <div className="w-1/2 sm-max:w-[70%] xs-max:w-full">
              <img alt="" src={profile2}></img>
            </div>
            <div className="w-1/2 sm-max:w-[70%] xs-max:w-full">
              <span class="flex items-center md-max:py-3">
                <h1 className="text-lg text-index-2 font-semibold">
                  Adam White /
                </h1>
                <p className="text-index-3 text-sm">Finance</p>
              </span>
              <p className="text-index-3 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </p>
            </div>
          </div>

          <div className="flex items-center pt-20 md-max:flex-col">
            <div className="w-1/2 sm-max:w-[70%] xs-max:w-full">
              <img alt="" src={profile3}></img>
            </div>
            <div className="w-1/2 sm-max:w-10/12 xs-max:w-full">
              <span class="flex items-center md-max:py-3">
                <h1 className="text-lg text-index-2 font-semibold">
                  Jane Doe /
                </h1>
                <p className="text-index-3 text-sm">Marketer</p>
              </span>
              <p className="text-index-3 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
                magnis at placerat pulvinar euismod neque.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer satisfaction is our main goal */}
      <div className="bg-[url('https://i.pinimg.com/originals/b9/dc/d0/b9dcd0bd508ddb530ebc3fc8c4205577.jpg')] text-center py-64 mt-24 bg-no-repeat px-5">
        <h1 className="font-semibold text-white text-4xl">
          Customer satisfaction is our main goal
        </h1>
        <p className="text-base text-[#cacaca]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </p>
      </div>

      {/* What our customer says */}
      <div>
        <div className="max-w-screen-xl mx-auto my-0 pt-32 text-center px-4">
          <h2 className="text-index-1 font-semibold text-sm">
            Our Testimonials
          </h2>
          <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
            What our customer says
          </h1>
          <p className="text-index-3 font-normal text-base pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>

        <div className="flex w-3/5 mx-auto items-center md-max:w-10/12 xs-max:!w-full">
          <div className="w-[15%]">
            <ion-icon
              size="large"
              name="arrow-back"
              onClick={prevSlide}
            ></ion-icon>
          </div>
          {/* {listSliders.map((listSlider, index) => ())} */}
          <div className={"text-center pt-10 "}>
            <div className="flex justify-center pb-10">
              <img alt="" src={imgcmt}></img>
            </div>

            <p className="w-3/5 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              metus tincidunt laoreet ultricies condimentum ac integer aliquam.
              Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem
              elementum morbi imperdiet suscipit erat ut. Purus volutpat in
              turpis gravida blandit.
            </p>

            <div className="text-yellow-300 pt-10">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
          </div>

          <div className="w-[15%]">
            <ion-icon
              size="large"
              name="arrow-forward"
              // onClick={nextSlide}
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
