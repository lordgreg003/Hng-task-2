import React from "react";
import { Input, payment } from "../../images";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 mt-10 overflow-x-hidden">
      <div className="container mx-auto text-white">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex-1 p-4 min-w-[200px] space-y-2">
            <h1 className="font-bold text-2xl">Side links</h1>
            <div>Home</div>
            <div>Products</div>
            <div>Support</div>
            <div>Account</div>
          </div>
          <div className="flex-1 p-4 min-w-[200px] space-y-2">
            <h1 className="font-bold text-2xl">Shopping info</h1>
            <div>Product Categories</div>
            <div>New arrival</div>
            <div>Best sellers</div>
            <div>Gift card</div>
          </div>
          <div className="flex-1 p-4 min-w-[200px] space-y-2">
            <h1 className="font-bold text-2xl">Newsletter</h1>
            <div>Stay up to date with us to get recent updates</div>
            <div>
              <img src={Input} alt="" />
            </div>
          </div>
          <div className="flex-1 p-4 min-w-[200px] space-y-2">
            <h1 className="font-bold text-2xl">Joinus</h1>
            <div></div>
            <div></div>
          </div>
          <div className="flex-1 p-4 min-w-[200px] space-y-2">
            <h1 className="font-bold text-2xl">Payment method partners</h1>
            <div>
              <img src={payment} alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
