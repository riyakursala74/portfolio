"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import IconWithLink from "./IconWithLink";
import { greetings } from "./Constants";

const Body = () => {
  const [greetMsg, setGreetMsg] = useState("Hello");
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 18) + 1;
      setGreetMsg(greetings[random - 1]);
    }, 800);
    return function stopTimer() {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="md:px-10 md:py-5">
      <div className="self-center flex md:px-48 m-auto py-10 md:flex-row flex-col justify-center">
        <div>
          <img
            src="/Images/profile.jpg"
            alt="Profile Picture"
            className="md:w-96 md:h-96 h-80 w-[80%] border-2 border-amber-700 rounded-3xl items-center ml-10"
          />
        </div>
        <div className=" rounded-3xl">
          <div className="p-10 items-center m-auto">
            <h3 className="font-sans text-2xl md:ml-28 w-[80%]">
              <b className="text-5xl">{greetMsg}</b>
              <br />
              <br />
              I'm Riya. I have 4+ years of experience in building highly
              scalable, user centric websites.
            </h3>
            <br />
            <p className="font-2xl md:ml-28 font-mono w-[80%]">
              I love crafting beautiful websites design and then sparkle life
              into them
            </p>
            <div className="flex md:ml-28 mt-5">
              <IconWithLink
                Icon={FaLinkedin}
                style={"mr-5 w-8 h-8"}
                link={"https://www.linkedin.com/in/riya-kursala/"}
              />
              <IconWithLink
                Icon={FaGithub}
                style={"w-8 h-8"}
                link={"https://github.com/riyakursala74"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
