import React from "react";

const Header = () => {
  return (
    <div className="flex px-10 pt-5 md:flex-row flex-col">
      <div className="font-mono font-bold">
        <h2 className="text-3xl">K Riya</h2>
      </div>
      <div className="flex md:pt-1">
        <h2 className="md:px-2 hidden md:block">|</h2>
        <h3 className="text-xl">Software Engineer</h3>
      </div>
    </div>
  );
};

export default Header;
