import {
    GithubLogo,
    LinkedinLogo,
    MailIcon,
    PhoneIcon,
} from "../assets/SVGAssets";
import { NavLink, navLinks } from "./Header";

const Footer = () => {
    return (
        <div className="text-[18px] -mx-12 py-6 md:px-36 flex flex-col gap-8">
            <div className="flex md:flex-row md:gap-0 gap-5 flex-col justify-between items-center">
                <h2 className="text-3xl font-bold gradient-text cursor-pointer">
                    {"{"}ARUN KUMAR D{"}"}
                </h2>
                <ul className="flex md:flex-row flex-col gap-4">
                    <li className="flex gap-2">
                        <PhoneIcon /> +918438642183
                    </li>
                    <li className="flex gap-2">
                        <MailIcon /> arun14k08@gmail.com
                    </li>
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
            <div className="md:block hidden">
                <ul className="flex gap-[64px]">
                    {navLinks.map((navLink: NavLink) => {
                        return (
                            <li key={navLink.id} className="hover:underline cursor-pointer underline-offset-4">
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
