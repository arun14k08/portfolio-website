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
        <div className="md:flex justify-between pb-12 pt-24 md:py-48 px-12 md:px-32" id="home">
            <div>
                <div className="text-[28px] md:text-[58px] font-bold md:leading-[70px] text-gray">
                    Hi 👋, <br /> My name is <br />
                    <span className="gradient-text">ARUN KUMAR D</span>
                    <br />
                    <div className="flex gap-[2px]">
                        <p ref={animatedText}>React.js Developer.</p>
                        <p className="hidden md:block" ref={cursor}>|</p>
                    </div>
                </div>
                <a
                    href="https://drive.google.com/file/d/1nFzirmyQ0CQpwXhlfZep1Mja7wQylx10/view"
                    target="_blank"
                    className="button w-fit my-6 text-lg md:text-2xl"
                >
                    Resume
                    <ArrowRight />
                </a>
            </div>
            <div className="md:flex justify-center items-center">
                <div className="p-2 mx-auto w-fit bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] rounded-full">
                    <img
                        src={Profile}
                        className="rounded-full size-[200px] mx-auto md:size-[350px] "
                        alt="profile-pic"
                    />
                </div>
            </div>
        </div>
    );
};

// const nickNames = ["React.js Developer", "MERN Stack Developer"];

export default Hero;
