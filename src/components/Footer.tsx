import React from "react";
import { GithubLogo, LinkedinLogo } from "../assets/SVGAssets";
import { NavLink, navLinks } from "./Header";

const Footer = () => {
    return (
        <div className="text-[18px] -mx-12 py-6 px-36 flex flex-col gap-8">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold gradient-text cursor-pointer">
                    {"{"}ARUN KUMAR D{"}"}
                </h2>
                <ul className="flex gap-4">
                    <li>+918438642183</li>
                    <li>arun14k08@gmail.com</li>
                </ul>
                <ul className="flex gap-[20px]">
                    <a href="https://github.com/arun14k08" target="_blank">
                        <GithubLogo />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arun-14k08/"
                        target="_blank"
                    >
                        <LinkedinLogo />
                    </a>
                </ul>
            </div>
            <hr />
            <div>
                <ul className="flex gap-[64px]">
                    {navLinks.map((navLink: NavLink) => {
                        return (
                            <li className="hover:underline cursor-pointer underline-offset-4">
                                {navLink.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Footer;
