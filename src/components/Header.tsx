import React from "react";
import { GithubLogo, LinkedinLogo } from "../assets/SVGAssets";

const Header = () => {
    return (
        <div className="text-[20px] -mx-12 py-6 px-36">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold gradient-text cursor-pointer">
                    {"{"}ARUN KUMAR D{"}"}
                </h2>
                <ul className="flex gap-[64px]">
                    {NavLinks.map((navLink) => {
                        return (
                            <li className="hover:underline cursor-pointer underline-offset-4">
                                {navLink.name}
                            </li>
                        );
                    })}
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
        </div>
    );
};

export const NavLinks = [
    {
        id: "home",
        name: "Home",
        to: "/",
    },
    {
        id: "about",
        name: "About",
        to: "/about",
    },
    {
        id: "tech-stack",
        name: "Tech Stack",
        to: "/tech-stack",
    },
    {
        id: "projects",
        name: "Projects",
        to: "/projects",
    },
    {
        id: "contact",
        name: "Contact",
        to: "/contact",
    },
];

export default Header;
