import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="font-[font2] flex items-center justify-center gap-20">
      <Link className="text-[7vw] uppercase border-5 border-white rounded-full px-3   ">Projects</Link>
      <Link className="text-[7vw] uppercase border-5 border-white rounded-full px-3 ">Agence</Link>
    </div>
  );
}

export default HomeBottomText;
