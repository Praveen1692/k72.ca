import React from "react";
import Video from "./video";

function HomeHeroText() {
  return (
    <div className="font-[font1] pt-6 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center ">The spark for</div>
      <div className="text-[9.5vw] justify-center uppercase leading-[8vw] flex items-center ">
        all{" "}
        <div className="h-[7vw] w-[16vw] rounded-full -mt-3   overflow-hidden">
       
          <Video  />
        </div>{" "}
        things
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center">creative</div>
    </div>
  );
}

export default HomeHeroText;
