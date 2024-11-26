import React from "react";
import { FiExternalLink } from "react-icons/fi";
const Card = ({ name, image, link, desc }) => {
  return (
    <div className="h-auto w-[90%] md:w-full md:mr-5 border-amber-700 rounded-md border-2 p-5 mt-5 md:mt-10 overflow-hidden">
      <div className="flex justify-between">
        <h3 className="font-mono font-bold text-lg text-blue-950">{name}</h3>
        <button
          className="border-none"
          onClick={() => {
            window.open(link, "_blank").focus();
          }}
        >
          <FiExternalLink className="h-7" />
        </button>
      </div>
      <p className="text-blue-950 font-sans">{desc}</p>
      <img className="border-2 rounded-md mt-5" src={image} alt="App Image" />
    </div>
  );
};

export default Card;
