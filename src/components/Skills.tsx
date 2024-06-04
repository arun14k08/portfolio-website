import React from "react";
import { languages, tools } from "../assets/skills";

const Skills = () => {
    return (
        <div className="flex flex-col gap-12 pb-16 scroll-mt-36" id="skills">
            <div className="flex flex-col gap-[24px] px-6 md:px-0 md:gap-[50px]">
                <h2 className="text-4xl md:text-5xl md:leading-7 font-bold text-[#CCCCCC] text-center">
                    Skills
                </h2>
                <p className="text-2xl md:text-4xl md:leading-6 font-normal text-[#A7A7A7] text-center">
                    Here are some of my skills on which I have learnt.
                </p>
            </div>
            <div className="mx-6 md:mx-48 py-6 card flex md:flex-row flex-col gap-2 md:gap-4 justify-evenly border-2 border-gray-400 rounded-lg">
                <div className="flex flex-col gap-4">
                    <h2 className="text-center text-lg md:text-2xl text-primary font-semibold">
                        Languages / Frameworks
                    </h2>
                    <div className="grid grid-cols-4">
                        {languages.map((language) => {
                            return (
                                <div
                                    key={language.id}
                                    className="flex  flex-col gap-2 text-primary font-bold justify-center items-center px-4 py-2"
                                >
                                    <img
                                        src={language.src}
                                        className="size-[44px] md:size-[72px]"
                                        alt={language.id}
                                    />
                                    <p className="text-base md:text-lg">{language.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-center text-lg md:text-2xl text-primary font-semibold">
                        Tools
                    </h2>
                    <div className="grid grid-cols-4 md:grid-cols-3">
                        {tools.map((tool) => {
                            return (
                                <div
                                    key={tool.id}
                                    className="flex  flex-col gap-2 text-primary font-bold justify-center items-center px-4 py-2"
                                >
                                    <img
                                        src={tool.src}
                                        className="size-[44px] md:size-[72px]"
                                        alt={tool.id}
                                    />
                                    <p className="text-base md:text-lg text-nowrap">{tool.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
