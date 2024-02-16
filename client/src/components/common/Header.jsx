import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/2.png";
export default function Header() {
  return (
    <>
      <header>
        <nav className="bg-[#05685e] h-auto md:h-16 items-center flex shadow-md shadow-gray-700 p-3">
          <div className="  text-base md:text-xl   text-white md:flex  md:gap-2 font-semibold flex items-center">
            <img src={logo} alt="" className="h-16 w-30 p-1 m-2 " />
            <p>KAUSHALYAM</p>
          </div>

          <div className="flex justify-end items-center w-[100%] mr-4">
            <div>
              <ul className="flex text-white gap-16 m-10">
                <li className="hover:underline">
                  <a href="">Home</a>
                </li>
                <li className="hover:underline">
                  <a href="">Pricing</a>
                </li>
                <li className="hover:underline">
                  <a href="">Services</a>
                </li>
              </ul>
            </div>

            <button
              type="button"
              className="border text-[#05685e] rounded-md p-2 font-semibold bg-white hover:text-white hover:bg-[#05685e] transition-opacity  "
            >
              LOGIN{" "}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
