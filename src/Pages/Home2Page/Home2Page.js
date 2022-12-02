import React, { useRef, useState } from "react";
import about from "./Image/about.png";
import icon1 from "./Image/icon1.png";
import icon2 from "./Image/icon2.png";
import icon3 from "./Image/icon3.png";
import brotherhood from "./Image/brotherhood.png";
import doctor from "./Image/doctor.png";
import earth from "./Image/earth.png";
import handshake from "./Image/handshake.png";
import outlate1 from "./Image/outlate1.png";
import outlate2 from "./Image/outlate2.png";
import outlate3 from "./Image/outlate3.png";
import backgroundvideo from "./Video/Skin Care Product example commercial.mp4";
import backgroundimg from "./Image/Background.png";

const Home2Page = () => {
  let [isActive, setIsActive] = useState(false);

  const videoRef = useRef();

  let handlePlayVideo = () => {
    setIsActive(true);
    videoRef.current.play();
  };
  let handlePauseVideo = () => {
    setIsActive(false);
    videoRef.current.pause();
  };

  return (
    <div className="font-pop">
      <div>
        <video className="absolute w-full -z-10" ref={videoRef}>
          <source src={backgroundvideo} type="video/webm"></source>
        </video>
        <div className="max-w-screen-xl mx-auto my-0 flex items-center gap-60 h-758 md-max:h-auto md-max:gap-0 md-max:pt-[140px] md-max:px-5 xs-max:!pt-20 xs-max:justify-center">
          <div className="w-2/4 xs-max:hidden">
            <h1 className="text-5xl text-white font-semibold mb-3 sm-max:text-3xl">
              Your beauty center place
            </h1>
            <p className="text-base font-medium text-white md-max:hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              massa pellentesque arcu fusce et magna consequat neque vitae
              lobortis.
            </p>
            <button className="text-base rounded-2xl font-semibold border border-white px-12 py-3 text-white mt-8 md-max:pt[140px]">
              More Details
            </button>
          </div>
          <div className="w-2/4 md-max:justify-center md-max:flex">
            <div className="flex items-center justify-center text-white border rounded-full border-white w-20 h-20 z-0 ">
              {isActive ? (
                <ion-icon
                  onClick={handlePauseVideo}
                  name="pause"
                  size="large"
                ></ion-icon>
              ) : (
                <ion-icon
                  onClick={handlePlayVideo}
                  name="play"
                  size="large"
                ></ion-icon>
              )}
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="max-w-screen-xl mx-auto my-0 pt-40 flex md-max:px-5 xs-max:flex-col xs-max:gap-5">
          <div className="w-2/4 xs-max:!w-full ">
            <img alt="AboutUs" src={about} />
          </div>
          <div className="w-2/4 pl-32 md-max:pl-14 sm-max:!pl-7 xs-max:!w-full">
            <h2 className="text-index-1 font-semibold">About Us</h2>
            <h1 className="text-index-2 font-semibold text-4xl py-3">
              We are the best beauty clinic
            </h1>
            <p className="text-index-3 font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
              tellus in suspendisse placerat.
            </p>
            <button>Learn More</button>
          </div>
        </div>

        {/* Main Services */}
        <div className="">
          <div className="pt-40 max-w-screen-xl mx-auto my-0 ">
            <div className="text-center">
              <h2 className="text-index-1 font-semibold">Main Services</h2>
              <h1 className="text-index-2 font-semibold text-4xl py-3">
                Our focus services
              </h1>
              <p className="text-index-3 font-normal text-base">
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className="flex gap-16 pt-16 justify-center md-max:flex-col md-max:items-center">
              <div className="w-1/4 border border-neutral-200 border-solid rounded-3xl px-9 py-12 md-max:w-10/12">
                <img alt="img" src={icon2}></img>
                <h1 className="text-index-2 font-semibold text-lg  pb-3 pt-4">
                  Beauty consultation
                </h1>
                <p className="text-index-3 font-normal text-base pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
                <h2 className="text-index-1 font-semibold text-sm">
                  Learn more
                </h2>
              </div>

              <div className="w-1/4 border border-violet-400 border-solid rounded-3xl px-9 py-12 md-max:w-10/12">
                <img alt="img" src={icon1}></img>
                <h1 className="text-index-2 font-semibold text-lg  pb-3 pt-4">
                  Beauty consultation
                </h1>
                <p className="text-index-3 font-normal text-base pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
                <h2 className="text-index-1 font-semibold text-sm">
                  Learn more
                </h2>
              </div>

              <div className="w-1/4 border border-neutral-200 border-solid rounded-3xl px-9 py-12 md-max:w-10/12">
                <img alt="img" src={icon3}></img>
                <h1 className="text-index-2 font-semibold text-lg  pb-3 pt-4">
                  Beauty consultation
                </h1>
                <p className="text-index-3 font-normal text-base pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
                <h2 className="text-index-1 font-semibold text-sm">
                  Learn more
                </h2>
              </div>
            </div>
          </div>

          {/* Why choosing us? */}

          <div className=" py-24 bg-cover bg-no-repeat bg-[url('https://i.pinimg.com/736x/c1/f9/47/c1f94730a71def6ae34ff2221051d523.jpg')] mt-32">
            {/* <div>
              <img
                alt=""
                src={backgroundimg}
                className="w-full -z-10 absolute top-[1995px] md-max:top-[2270px]"
              ></img>
            </div> */}
            <div className="max-w-screen-xl mx-auto my-0 flex gap-14 items-center md-max:flex-col">
              <div className="w-2/4 md-max:w-full text-center px-5">
                <h1 className="text-4xl font-semibold text-white">
                  Why choosing us?
                </h1>
                <p className="text-base font-normal text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis.
                </p>
              </div>

              <div className="flex w-2/4 md-max:w-full justify-evenly xs-max:flex-col xs-max:items-center xs-max:gap-11">
                <div className="flex flex-col gap-11">
                  <div className="flex gap-3">
                    <img alt="img" src={handshake}></img>
                    <div>
                      <h1 className="text-4xl font-semibold text-white">
                        100%
                      </h1>
                      <p className="text-base font-semibold text-white">
                        trusted clinic
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <img alt="img" src={earth}></img>
                    <div>
                      <h1 className="text-4xl font-semibold text-white">
                        100%
                      </h1>
                      <p className="text-base font-semibold text-white">
                        customer love
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-11">
                  <div className="flex gap-3 xs-max:justify-center">
                    <img alt="img" src={brotherhood}></img>
                    <div>
                      <h1 className="text-4xl font-semibold text-white">99%</h1>
                      <p className="text-base font-semibold text-white">
                        asian branch
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 xs-max:justify-center">
                    <img alt="img" src={doctor}></img>
                    <div>
                      <h1 className="text-4xl font-semibold text-white">
                        1.200+
                      </h1>
                      <p className="text-base font-semibold text-white">
                        licensed worker
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-40 md-max:pt-[10rem]">
            <div className="text-center">
              <h2 className="text-index-1 font-semibold">The Blog</h2>
              <h1 className="text-index-2 font-semibold text-4xl py-3">
                Our latest news
              </h1>
              <p className="text-index-3 font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="flex gap-16 pt-16 justify-center md-max:flex-col md-max:items-center xs-max:mx-5">
              <div className="w-1/4 shadow-lg shadow-gray-150 rounded-3xl md-max:w-2/3 xs-max:!w-full">
                <img className="w-full" alt="img" src={outlate1}></img>
                <div className="px-9 py-12">
                  <h1 className="text-index-2 font-semibold text-lg  pb-3 pt-4">
                    How much does a consultation cost at our clinic?
                  </h1>
                  <p className="text-index-3 font-normal text-base pb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings ...
                  </p>
                  <h2 className="text-index-1 font-semibold text-sm">
                    Learn more
                  </h2>
                </div>
              </div>

              <div className="w-1/4 shadow-lg shadow-gray-150 rounded-3xl md-max:w-2/3 xs-max:!w-full">
                <img alt="img" className="w-full" src={outlate2}></img>
                <div className="px-9 py-12">
                  <h1 className="text-index-2 font-semibold text-lg  pb-3 pt-4">
                    Watch out! don't choose the wrong beauty product
                  </h1>
                  <p className="text-index-3 font-normal text-base pb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings ...
                  </p>
                  <h2 className="text-index-1 font-semibold text-sm">
                    Learn more
                  </h2>
                </div>
              </div>

              <div className="w-1/4 shadow-lg shadow-gray-150 rounded-3xl md-max:w-2/3 xs-max:!w-full">
                <img alt="img" className="w-full" src={outlate3}></img>
                <div className="px-9 py-12">
                  <h1 className="text-index-2 font-semibold text-lg  pb-3 pt-4">
                    About skin care you need to knowAbout skin care you need to
                    know
                  </h1>
                  <p className="text-index-3 font-normal text-base pb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings ...
                  </p>
                  <h2 className="text-index-1 font-semibold text-sm">
                    Learn more
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-40">
            <div className="flex max-w-screen-xl mx-auto my-0 items-center justify-between md-max:flex-col">
              <div className="w-2/4 md-max:text-center md-max:w-10/12">
                <h1 className="text-index-2 font-semibold text-4xl py-3">
                  Request call services
                </h1>
                <p className="text-index-3 font-normal text-base">
                  Lorem ipsum dolor sit amet, consect adipiscing elit Contact
                  Us.
                </p>
              </div>
              <div className="w-2/4 md-max:w-10/12">
                <div className="flex xs-max:flex-col">
                  <input
                    placeholder="Insert your phone number here ..."
                    className="w-full pl-8 pr-5 border-sky-400 border rounded-xl py-6 text-index-3"
                  />
                  <button className=" border rounded-xl py-7 px-10 text-white bg-pink-400">
                    Call
                  </button>
                </div>
                <p className="text-right font-normal italic Class text-index-3 Properties text-xs">
                  Toll free for our coverage areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2Page;
