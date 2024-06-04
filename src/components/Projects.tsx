import React from "react";
import { htmlImage } from "../assets/tech-stack";
import { GithubLogo, LinkIcon } from "../assets/SVGAssets";
import { test } from "../assets/projects";

const Projects = () => {
    return (
        <div className="flex flex-col gap-12 py-16">
            <div className="flex flex-col gap-[50px]">
                <h2 className="text-5xl leading-7 font-bold text-[#CCCCCC] text-center">
                    Projects
                </h2>
                <p className="text-[32px] leading-6 font-normal text-[#A7A7A7] text-center">
                    Things I’ve built so far
                </p>
            </div>
            <div className="flex gap-6 mx-auto justify-between items-center max-w-[90%]">
                <div className="max-w-[55%] relative">
                    <a
                        href="https://elite-bookings.netlify.app"
                        target="_blank"
                    >
                        <img src={test} alt="" className="rounded-2xl" />
                    </a>
                </div>
                <div className="max-w-[45%] h-fit flex flex-col gap-4 px-2">
                    <h2 className="text-3xl leading-10 font-semibold gradient-text">
                        Elite rentals
                    </h2>
                    <div className="card py-6 px-8 h-fit my-auto flex flex-col gap-4">
                        <ul className="list-disc px-4">
                            <li>
                                This application allows house owners to manage
                                bookings for paying guests.
                            </li>
                            <li>
                                House owners can register their properties,
                                upload room details, and manage bookings.
                            </li>
                            <li>
                                Customers can browse available rooms, view
                                details, check availability, and make bookings
                                for a short stay.
                            </li>
                        </ul>
                        <div className="grid gap-2">
                            <h3 className="text-xl">Demo Accounts:</h3>
                            <div className="flex gap-4 justify-start">
                                <ul className="card-sm px-4 py-2">
                                    <p className="text-lg">Owner</p>
                                    <li>
                                        <b>user:</b> owner@demo.com
                                    </li>
                                    <li>
                                        <b>pass:</b> demo
                                    </li>
                                </ul>
                                <ul className="card-sm px-4 py-2">
                                    <p className="text-lg">Customer</p>
                                    <li>
                                        <b>user:</b> customer@demo.com
                                    </li>
                                    <li>
                                        <b>pass:</b> demo
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/arun14k08/guest-room-booking-application"
                            target="_blank"
                        >
                            <GithubLogo />
                        </a>
                        <a
                            href="https://elite-bookings.netlify.app"
                            target="_blank"
                            className="flex gap-1 underline underline-offset-2"
                        >
                            Live Link
                            <LinkIcon />
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-center gradient-text text-3xl leading-10 font-bold">
                More Projects in progress...
            </p>
        </div>
    );
};

export default Projects;
