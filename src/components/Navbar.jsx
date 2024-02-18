import React, { useState } from "react";
import { navLinks } from "../constants/index";
import RightArrow from "./SVG";
import { close, menu } from "../assets";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle((prev) => !prev);
    };
    return (
        <div className="w-full flex justify-center items-center px-4 py-2">
            <span className="text-[24px] sm:mr-0 mr-auto">
                ARUN KUMAR DHANARAJ
            </span>
            <ul className="ml-auto text-[18px] font-normal list-none flex-1 items-center justify-end text-[#1D2130] sm:flex hidden">
                {navLinks.map((navLink) => {
                    const LinkElem = (
                        <li id={navLink.id} className={`mr-4`}>
                            <a href="#">{navLink.title}</a>
                        </li>
                    );
                    return LinkElem;
                })}
                <button className="text-white px-4 py-2 rounded-lg bg-[#3decff] flex justify-center items-center">
                    Resume
                    <RightArrow />
                </button>
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    // src={menu}
                    alt="menu"
                    className="w-[28px] h-[28px] cursor-pointer object-contain"
                    onClick={toggleMenu}
                />
                <div className={`sm:hidden flex-col flex border-2 border-red-200 border-solid fixed top-24 right-4 w-fit nav-menu z-10 ${toggle? "flex" : "hidden"}`}>
                    <ul className="ml-auto text-[18px] font-normal list-none flex-1 items-center justify-end text-white">
                        {navLinks.map((navLink) => {
                            const LinkElem = (
                                <li id={navLink.id} className={`mr-4 mb-4`}>
                                    <a href="#">{navLink.title}</a>
                                </li>
                            );
                            return LinkElem;
                        })}
                        <button className="text-white px-4 py-2 rounded-lg bg-[#3decff] flex justify-center items-center">
                            Resume
                            <RightArrow />
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
