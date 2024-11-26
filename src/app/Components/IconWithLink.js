"use client";
import React from "react";

const IconWithLink = ({ Icon, style, link }) => {
  const handleClick = () => {
    window.open(link, "_blank").focus();
  };
  return (
    <div className="cursor-pointer">
      <Icon className={style} onClick={handleClick}></Icon>
    </div>
  );
};

export default IconWithLink;
