import React from "react";
import { languages, tools } from "../assets/tech-stack";

const TechStack = () => {
    return (
        <div className="flex flex-col gap-12 pb-16">
            <div className="flex flex-col gap-[50px]">
                <h2 className="text-5xl leading-7 font-bold text-[#CCCCCC] text-center">
                    Skills
                </h2>
                <p className="text-[32px] leading-6 font-normal text-[#A7A7A7] text-center">
                Here are some of my skills on which I have learnt.
                </p>
            </div>
            <div className="mx-48 py-6 card flex gap-4 justify-evenly border-2 border-gray-400 rounded-lg">
                <div className="flex flex-col gap-4">
                    <h2 className="text-center text-2xl text-primary font-semibold">Languages / Frameworks</h2>
                    <div className="grid grid-cols-4">
                        {languages.map((language) => {
                            return (
                                <div
                                    key={language.id}
                                    className="flex  flex-col gap-2 text-primary font-bold justify-center items-center px-4 py-2"
                                >
                                    <img
                                        src={language.src}
                                        className="size-[72px]"
                                        alt={language.id}
                                    />
                                    <p>{language.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-center text-2xl text-primary font-semibold">Tools</h2>
                    <div className="grid grid-cols-3">
                        {tools.map((tool) => {
                            return (
                                <div
                                    key={tool.id}
                                    className="flex  flex-col gap-2 text-primary font-bold justify-center items-center px-4 py-2"
                                >
                                    <img
                                        src={tool.src}
                                        className="size-[72px]"
                                        alt={tool.id}
                                    />
                                    <p>{tool.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
