import productFinderImg from "../public/imgs/product-finder.png";
import taskTrackerImg from "../public/imgs/task-tracker.png";
import spotifyImg from "../public/imgs/spotify2.png";
import habitTragerImg from "../public/imgs/habit-tracker.png";
import { StaticImageData } from "next/image";

export interface Project {
    img: StaticImageData | string;
    id: string;
    technologies: string[];
    url: string;
}

const tech = {
    next: "React (NextJS)",
    react: "React",
    tailwind: "TailwindCSS",
    mysql: "MySQL",
    framer: "Framer-Motion",
    puppeteer: "Puppeteer",
    typescript: "Typescript",
    nextAuth: "NextAuth",
    javascript: "Javascript",
    chart: "ChartJS",
    csshtml: "CSS/HTML",
};

export const projects: Project[] = [
    {
        id: "product finder",
        img: productFinderImg,
        technologies: [
            tech.next,
            tech.tailwind,
            tech.mysql,
            tech.framer,
            tech.puppeteer,
            tech.typescript,
        ],
        url: "https://product-finder.vercel.app/",
    },
    {
        id: "spotify next",
        img: spotifyImg,
        technologies: [tech.next, tech.nextAuth, tech.tailwind, tech.framer],
        url: "https://spotify-next-api.vercel.app/",
    },
    {
        id: "task tracker",
        img: taskTrackerImg,
        technologies: [tech.react, tech.csshtml],
        url: "https://likeamantis.github.io/react-task-tracker/",
    },
    {
        id: "everyday",
        img: habitTragerImg,
        technologies: [tech.javascript, tech.chart, tech.csshtml],
        url: "https://likeamantis.github.io/everyday/",
    },
];
