import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { IconContext } from "react-icons";
import { coverT } from "../../data";
import { Link } from "react-router-dom";
import "../../css/Style.css"; // Import the custom CSS file

const Discover = () => {
  return (
    <section
      className="container mx-auto h-[28rem] py-7 space-y-5 mt-5 overflow-x-hidden"
      id="discover"
    >
      <div className="flex items-center">
        <div className="text-xl">Discover new brands</div>
        <div className="border rounded-full bg-[#D9D9D9]">
          <Link to={"/cart"}>
            {" "}
            <IconContext.Provider value={{ size: "1rem", color: "black" }}>
              <MdNavigateNext />
            </IconContext.Provider>
          </Link>
        </div>
      </div>

      <section className="container mx-auto mt-10 overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex space-x-4 md:space-x-2">
          {coverT.map((image) => (
            <div key={image.id} className="flex-none">
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg max-w-[20rem] md:max-w-[15rem] sm:max-w-[10rem]"
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Discover;
