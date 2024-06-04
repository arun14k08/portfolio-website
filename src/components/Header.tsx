import React from "react";
import { ArrowRight, GithubLogo, LinkedinLogo } from "../assets/SVGAssets";

export interface NavLink {
    id: string;
    name: string;
    to: string;
}

const Header = () => {
    return (
        <div className="text-[20px] w-full backdrop-blur-xl ring-2 py-6 px-36 fixed top-0 left-0 text-primary z-50">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold gradient-text cursor-pointer">
                    {"{"}ARUN KUMAR D{"}"}
                </h2>
                <ul className="flex gap-[64px]">
                    {navLinks.map((navLink) => {
                        return (
                            <a
                                key={navLink.id}
                                className="hover:underline cursor-pointer underline-offset-4"
                            >
                                {navLink.name}
                            </a>
                        );
                    })}
                </ul>
                <ul className="flex gap-[20px] justify-center items-center">
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

export const navLinks: NavLink[] = [
    {
        id: "home",
        name: "Home",
        to: "#home",
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
