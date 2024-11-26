"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Projects = () => {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 3) + 1;
      setNumber(random);
    }, 3000);
    return function stopTimer() {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="">
      <p className="text-lg pb-5 ml-10 italic mt-2">
        Here are some glimpses of my work..
      </p>
      <div className="md:flex ml-8">
        <Card
          name={"MOTT"}
          image={`/Images/mott_${number}.png`}
          desc={"Streaming application built for image optimization"}
          tech={"React"}
          link={"https://movie-ott-ae3cc.web.app"}
        ></Card>
        <Card
          name={"Ezdeli"}
          image={`/Images/ezdeli_${number}.png`}
          desc={"Food Delivery app with theme control"}
          tech={"React"}
          link={"https://ezdeli.web.app/"}
        ></Card>
      </div>
    </div>
  );
};

export default Projects;
