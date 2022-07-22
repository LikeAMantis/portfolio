import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import profilImg from "../public/imgs/profil2.jpg";
import {
    AtSymbolIcon,
    BeakerIcon,
    GiftIcon,
    PhoneIcon,
} from "@heroicons/react/solid";

const aboutme: NextPage = () => {
    return (
        <main className="grid grid-cols-1 overflow-y-auto bg-black lg:grid-cols-2">
            {/* Left */}
            <section className="grid h-[480px] grid-cols-1 place-items-center lg:h-auto">
                <div className="flex flex-col items-center space-y-2">
                    <Image
                        className="rounded-[50px] object-none object-top"
                        width={250}
                        height={250}
                        src={profilImg}
                        priority
                    />
                    <h2 className="semi-bold">David Gütl</h2>
                    <h3 className="font-light italic">Web-Developer</h3>
                </div>
                {/* Bottom Info */}
                <div className="flex flex-wrap justify-center gap-6 text-sm lg:text-base">
                    <div className="flex items-center space-x-1">
                        <AtSymbolIcon className="h-5 w-5" />
                        <p>d.guetl90@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <PhoneIcon className="h-5 w-5" />
                        <p>0650 9428792</p>
                    </div>
                    <a
                        className="flex items-center space-x-1"
                        target="_blank"
                        href="https://github.com/LikeAMantis"
                    >
                        <svg
                            className="w-6 text-white"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <p>Github</p>
                    </a>
                    <a
                        className="flex items-center space-x-1"
                        target="_blank"
                        href="https://www.artstation.com/like_a_mantis"
                    >
                        <svg
                            className="w-6 text-white"
                            strokeWidth={30}
                            stroke="currentColor"
                            version="1.1"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="_x32_7-artstation">
                                <g>
                                    <path d="M26,365.896l38.925,67.261c7.695,15.208,23.354,25.617,41.55,25.617h258.357l-53.591-92.878H26z     M478.44,341.094L327.989,77.938c-7.785-14.664-23.265-24.713-41.099-24.713h-80.023l232.919,405.186l36.843-63.818    C478.35,391.697,495.64,367.706,478.44,341.094z M273.131,299.903L168.576,118.856L64.02,299.903H273.131z" />
                                </g>
                            </g>
                            <g id="Layer_1" />
                        </svg>
                        <p>Artstation</p>
                    </a>
                </div>
            </section>
            {/* Right */}
            <section className="ml-12 flex flex-col justify-center space-y-6 rounded-l-[50px] bg-accent p-16 text-black lg:ml-0">
                <div>
                    {/* <h3 className="text-lg font-semibold uppercase">
                        About me
                    </h3> */}
                    <h1 className="font-bold">About Me</h1>
                </div>
                <p className="font-lg">
                    I started to learn coding with python to write my own
                    plugins, so i can improve my workflow for a 3D-Application.
                    Now i learned multiple languages like C#, Java, JavaScript,
                    TypeScript and specialiced myself as a frontend developer
                    with Reacct, because i love to create good looking, fast and
                    reactive applications. But i also like Fullstack-Development
                    with NextJS. In my freetime i like to go to concerts,
                    because music was always very important to me, and going
                    skating to stay physical fit and to relax.
                </p>
                {/* Experience */}
                <div className="space-y-6 border-t-2 border-black py-4">
                    <h3>Education</h3>
                    <div className="flex space-x-8">
                        <p className="font-bold">2020</p>
                        <div>
                            <p className="font-bold">Web-Developer</p>
                            <p className="italic">
                                everyonecodes@FHJOANNEUM, Graz
                            </p>
                            <ul className="mt-2">
                                <li>
                                    <h4 className="font-medium">
                                        Programming:
                                    </h4>
                                    <p>
                                        BasicTraining | Specialization |
                                        ProjectPhase (objectoriented,
                                        abstraction, lambdaexpressions,
                                        streams), Git, GitHub, IntelliJ
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-medium">
                                        Specialization:
                                    </h4>
                                    <p>
                                        Fullstack Development (HTML, CSS,
                                        JavaScript, REST-APIs, NodeJS, MySQL,
                                        Security)
                                    </p>
                                </li>
                                <li>
                                    <h4 className="font-medium">SoftSkill:</h4>
                                    <p>
                                        TimeManagement, CommunicationsSkills,
                                        Workinginmulticulturalteams,
                                        Learninghowtolearn
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link href="/projects">
                    <a className="mx-10 rounded-md bg-black p-2 text-center font-semibold text-white transition-transform duration-200 hover:scale-105">
                        Go to Projects
                    </a>
                </Link>
            </section>
        </main>
    );
};

export default aboutme;
