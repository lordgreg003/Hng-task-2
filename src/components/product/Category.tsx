import { IconContext } from "react-icons";
import { FaChevronDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div
      className="container  h-[10rem]    mx-auto lg:h-[12rem] py-3 items-center overflow-y-hidden  overflow-x-hidden"
      id="category"
    >
      <div className="hidden lg:flex h-[10rem] items-end ">
        {" "}
        <div className="flex space-x-5 w-full justify-center">
          <div className="flex  space-x-3 border p-1 rounded-xl items-center px-2 ">
            <div>Category</div>
            <div>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaChevronDown />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
            <div>Color</div>
            <div>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaChevronDown />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
            <div>Gender</div>
            <div>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaChevronDown />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
            <div>On sale</div>
            <div>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaChevronDown />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
            <div>Price</div>
            <div>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaChevronDown />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
            <div>Rating</div>
            <div>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaChevronDown />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
            <div>Size</div>
            <div>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaChevronDown />
              </IconContext.Provider>
            </div>
          </div>
          <div className="flex space-x-3 border p-1 rounded-xl items-center px-2 ">
            <div>Sort by</div>
            <div>
              <IconContext.Provider value={{ size: "1rem", color: "black" }}>
                <FaChevronDown />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden items-end lg:hidden justify-center flex mb-5 h-[8rem]   space-x-3">
        <Link to={"/cart"}>
          <div className="border flex p-3 items-center space-x-3 rounded-xl">
            <div>
              <FaHeart />
            </div>
            <div>Favourite</div>
          </div>
        </Link>
        <Link to={"/cart"}>
          <div className="border flex p-3 items-center space-x-3 rounded-xl">
            <div>
              <FaHeart />
            </div>
            <div>Following</div>
          </div>
        </Link>
        <Link to={"/cart"}>
          <div className="border flex p-3 items-center space-x-3 rounded-xl">
            <div>
              <FaHeart />
            </div>
            <div>Sales</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
