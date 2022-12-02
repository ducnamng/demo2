import React, { useState } from "react";
import imgconten1 from "./images/imgconten1.png";

const Blogitem = ({ newfit }) => {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);

  const toggleBtnReadMore = () => {
    setIsReadMoreShown((prev) => !prev);
  };
  return (
    <div
      className="rounded-[50px] border shadow-2xl shadow-sky-300 h-fit mb-16"
      key={newfit.id}
    >
      <img alt="" src={imgconten1} className="w-full"></img>
      <div className="px-16 pb-20 pt-14 flex flex-col gap-4 sm-max:px-8 sm-max:py-10 ">
        <span className="flex gap-3 text-index-1 font-semibold text-base">
          <ion-icon name="folder"></ion-icon>
          <p>Consultation</p>
        </span>
        <h1 className="font-semibold text-index-2 text-3xl sm-max:text-base ">
          How much does a consultation cost at our clinic?
        </h1>
        <p className="text-base text-index-3 sm-max:text-sm">
          {isReadMoreShown ? newfit.para : newfit.para.substr(0, 200)}
        </p>
        <button
          onClick={toggleBtnReadMore}
          className="flex items-center py-4 px-9 justify-center rounded-[50px] bg-[#FF64AE] w-[200px] text-white gap-2 cursor-pointer opacity-80 hover:opacity-100"
          text-white
        >
          {isReadMoreShown ? "Read Less" : "Read More"}
          <ion-icon
            name={isReadMoreShown ? "caret-up" : "caret-down"}
            size="small"
          ></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Blogitem;
