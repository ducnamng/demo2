import React from "react";
import img1 from "./images/Animation1.png";
import img2 from "./images/Animation2.png";
import img3 from "./images/Animation3.png";

const ServicePage = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-0 pt-56 text-center px-4">
        <h2 className="text-index-1 font-semibold text-sm">Our Services</h2>
        <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
          We focus on your beauty
        </h1>
        <p className="text-index-3 font-normal text-base pb-3">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col gap-12 mt-16 px-5 ">
        <div className="flex h-64 gap-12">
          <div className="w-[70%] xs-max:w-full">
            <img
              alt=""
              src="https://i.pinimg.com/originals/01/10/27/01102735734e964e0978f44589333c18.jpg"
              className="w-full h-full object-cover rounded-3xl"
            ></img>
          </div>
          <div className="w-[30%] xs-max:hidden">
            <img
              alt=""
              src="https://i.pinimg.com/736x/82/8a/ca/828acafc44fdbcd3a6cc6d9b7a08b23e.jpg"
              className="w-full h-full object-cover rounded-3xl"
            ></img>
          </div>
        </div>
        <div className="flex h-64 gap-12">
          <div className="w-[30%] xs-max:hidden">
            <img
              alt=""
              src="https://i.pinimg.com/originals/54/9d/76/549d766ecc0da98c21c54e04e57425d5.jpg"
              className="w-full h-full object-cover rounded-3xl"
            ></img>
          </div>
          <div className="w-[70%] xs-max:w-full">
            <img
              alt=""
              src="https://i.pinimg.com/736x/61/e5/99/61e599a4b5a497cf75d3e61f030574cc.jpg"
              className="w-full h-full  object-cover rounded-3xl"
            ></img>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-16 px-5 ">
        <div className="flex justify-between  items-center mt-8 sm-max:flex-col">
          <div>
            <img alt="" src={img1}></img>
          </div>
          <div className="w-1/2 sm-max:w-full">
            <h2 className="text-index-1 font-semibold text-sm">
              Beauty Consultation
            </h2>
            <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
              We services beauty consultation
            </h1>
            <p className="text-index-3 font-normal text-base pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </p>
            <span className="flex items-center text-index-2 font-semibold">
              <p>Make an Appointment</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 sm-max:flex-col-reverse">
          <div className="w-1/2 sm-max:w-full">
            <h2 className="text-index-1 font-semibold text-sm">
              Skin Treatements
            </h2>
            <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
              Skin care and treatment by expert
            </h1>
            <p className="text-index-3 font-normal text-base pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </p>
            <span className="flex items-center text-index-2 font-semibold">
              <p>Make an Appointment</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
          </div>
          <div>
            <img alt="" src={img2}></img>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 sm-max:flex-col">
          <div>
            <img alt="" src={img3}></img>
          </div>
          <div className="w-1/2 sm-max:w-full   ">
            <h2 className="text-index-1 font-semibold text-sm">
              Beauty Product
            </h2>
            <h1 className="text-index-2 font-semibold text-4xl  pb-3 pt-4">
              We present quality beauty products
            </h1>
            <p className="text-index-3 font-normal text-base pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero.
            </p>
            <span className="flex items-center text-index-2 font-semibold">
              <p>Make an Appointment</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[url('https://i.pinimg.com/originals/b9/dc/d0/b9dcd0bd508ddb530ebc3fc8c4205577.jpg')] py-52 sm-max:mt-10">
        <div className="max-w-screen-xl mx-auto mt-16 px-5 ">
          <h1 className="text-white text-3xl font-semibold">
            Best responsibility and service for our customers
          </h1>
          <p className="text-index-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div className="mx-5">
          <h1 className="text-index-2 font-semibold text-4xl pb-3 pt-24 text-center">
            Services FAQ’s
          </h1>

          <div>
            <div className="flex px-10 justify-between py-5">
              <h1 className="text-index-2 font-semibold">
                Is beauty consultation handled thoroughly?
              </h1>
              <ion-icon name="chevron-up"></ion-icon>
            </div>
            <div className="bg-blue-100 px-16 py-12 border-t-2 border-solid border-t-index-2">
              <p className="text-index-3 text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna <br />
                porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo, vel fringilla est ullamcorper eget nulla
              </p>
            </div>
          </div>

          <div>
            <div className="flex px-10 justify-between py-5 xs-max:!px-0">
              <h1 className="text-index-2 font-semibold">
                ICan I be beautiful in an instant time?
              </h1>
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </div>

          <div>
            <div className="flex px-10 justify-between py-5 xs-max:px-0">
              <h1 className="text-index-2 font-semibold">
                Are there any side effects to the treatment methods or
                treatments at this clinic?
              </h1>
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </div>
          <div>
            <div className="flex px-10 justify-between py-5 xs-max:px-0">
              <h1 className="text-index-2 font-semibold">
                Do professionals have accreditation in their respective fields?
              </h1>
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
