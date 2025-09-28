import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <div className="flex flex-col items-center gap-10 bg-[#0058FF] pt-12 p-5 rounded-lg">
      <h3 className="text-5xl font-bold text-white text-center ">
        Get In Touch
      </h3>
      <p className="text-lg text-white text-center">
        Contact us now to enquire our plumbing services, whether you have a
        commercial project that requires support, or a domestic plumbing task
        that needs the attention of a trusted professional.
      </p>
      <button className="btn text-[16px]  bg-white text-[#0058FF] flex  items-center sm:1 lg:gap-3 ">
        Book a Professional Plumber
        <FaArrowRight />
      </button>
    </div>
  );
}
