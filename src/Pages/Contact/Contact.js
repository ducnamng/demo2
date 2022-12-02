import React from "react";
import contact from "./image/Contact Animations.png";
import map from "./image/map.png";
import add from "./image/map-marker-alt.png";
import phone from "./image/phone-alt.png";
import mail from "./image/mail-bulk.png";

const Contact = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-0 pt-56 px-4">
        <div className="flex justify-between items-center gap-36">
          <div className="w-3/5">
            <h2 className="text-index-1 font-semibold text-sm">Contact Us</h2>
            <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
              Contact service for our customers
            </h1>
          </div>
          <div className="w-2/5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="w-1/2">
            <img alt="" src={contact}></img>
          </div>
          <div class="w-1/2 flex flex-col gap-8">
            <div className="flex gap-8">
              <input
                placeholder="First name"
                className="border py-4 px-6 rounded-2xl w-1/2"
              ></input>
              <input
                placeholder="Last name"
                className="border py-4 px-6 rounded-2xl w-1/2"
              ></input>
            </div>

            <div className="flex flex-col gap-8">
              <input
                placeholder="Email address"
                className="border py-4 px-6 rounded-2xl"
              ></input>
              <input
                placeholder="Subject message"
                className="border py-4 px-6 rounded-2xl"
              ></input>
              <input
                placeholder="Your inquiry here"
                className="border py-4 px-6 rounded-2xl"
              ></input>
              <button
                onClick={() => {
                  alert("Message sent successfully!");
                }}
                className="px-6 py-5 w-56 rounded-3xl bg-pink-bottom shadow-lg hover:shadow-2xl opacity-90 hover:opacity-100 font-semibold text-white md-max:my-5 md-max:ml-3"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img alt="" src={map}></img>
      </div>

      <div className="text-center">
        <h2 className="text-index-1 font-semibold text-sm">Contact Us</h2>
        <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
          Contact service for our customers
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis
        </p>
      </div>

      <div className="flex gap-5 pt-20 md-max:flex-col md-max:px-[19px]">
        <div className="w-2/6 px-12 py-16 rounded-3xl text-center hover:shadow-2xl hover:cursor-pointer md-max:w-full">
          <div className="flex justify-center items-center pb-11">
            <img alt="" src={add}></img>
          </div>
          <h2 className=" text-index-1 font-semibold text-base">Address</h2>
          <h1 className=" text-index-2 font-semibold text-2xl  pb-3 pt-4">
            101 Baker Street, NY
          </h1>
          <p className=" text-index-3 font-normal text-sm pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </p>
        </div>

        <div className="w-2/6 px-12 py-16 rounded-3xl text-center hover:shadow-2xl hover:cursor-pointer md-max:w-full">
          <div className="flex justify-center items-center pb-11">
            <img alt="" src={phone}></img>
          </div>
          <h2 className=" text-index-1 font-semibold text-base">Phone</h2>
          <h1 className=" text-index-2 font-semibold text-2xl  pb-3 pt-4">
            +896 120 5889
          </h1>
          <p className=" text-index-3 font-normal text-sm pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </p>
        </div>

        <div className="w-2/6 px-12 py-16 rounded-3xl text-center hover:shadow-2xl hover:cursor-pointer md-max:w-full">
          <div className="flex justify-center items-center pb-11">
            <img alt="" src={mail}></img>
          </div>
          <h2 className=" text-index-1 font-semibold text-base">Mail</h2>
          <h1 className=" text-index-2 font-semibold text-2xl  pb-3 pt-4">
            mail@company.com
          </h1>
          <p className=" text-index-3 font-normal text-sm pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
