import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="font-[font2] flex items-center justify-center gap-20">
      <div className="border-3 h-44 hover:border-green-400 hover:text-green-200 flex items-center px-10 border-white rounded-full uppercase">
        <Link className="text-[6vw] mt-6" to="project">
          Projects
        </Link>
      </div>

      <div className="border-3 h-44 hover:border-green-400 hover:text-green-300 flex items-center px-10 border-white rounded-full uppercase">
        <Link className="text-[6vw] mt-6" to="/agent">
          Agence
        </Link>
      </div>
    </div>
  );
}

export default HomeBottomText;
