import React, { useEffect, useRef, useState } from "react";
import { Profile } from "../assets";
import { ArrowRight } from "../assets/SVGAssets";

const Hero = () => {
    const animatedText = useRef<HTMLParagraphElement>(null);
    const cursor = useRef<HTMLParagraphElement>(null);
    const animate = () => {
        const text = animatedText.current.textContent;
        if (text) {
            const splitText = text.split("");
            animatedText.current.textContent = "";
            splitText.forEach((letter, index) => {
                setTimeout(() => {
                    animatedText.current.textContent += letter;
                    if (index === splitText.length - 1) {
                        cursorAnimate();
                    }
                }, 100 * index);
            });
        }
        return () => {
            animatedText.current.textContent = text;
        };
    };
    const cursorAnimate = () => {
        const interval = setInterval(() => {
            console.log(cursor.current?.innerText);
            if (!cursor.current.innerText) {
                cursor.current.innerText = "|";
            } else {
                cursor.current.innerText = "";
            }
        }, 500);
        return () => {
            clearInterval(interval);
        };
    };

    useEffect(() => {
        animate();
    }, []);
    return (
        <div className="flex justify-between py-48 px-32">
            <div className="">
                <div className="text-[58px] font-bold leading-[70px] text-gray">
                    Hi 👋, <br /> My name is <br />
                    <span className="gradient-text">ARUN KUMAR D</span>
                    <br />
                    <div className="flex gap-[2px]">
                        <p ref={animatedText}>React.js Developer.</p>
                        <p ref={cursor}>|</p>
                    </div>
                </div>
                <a
                    href="https://drive.google.com/file/d/1nFzirmyQ0CQpwXhlfZep1Mja7wQylx10/view"
                    target="_blank"
                    className="button w-fit my-6 text-2xl"
                >
                    Resume
                    <ArrowRight />
                </a>
            </div>
            <div className="flex justify-center items-center">
                <div className="p-2 bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] rounded-full">
                    <img
                        src={Profile}
                        width={"350px"}
                        height={"350px"}
                        className="rounded-full"
                        alt="profile-pic"
                    />
                </div>
            </div>
        </div>
    );
};

const nickNames = ["React.js Developer", "MERN Stack Developer"];

export default Hero;
