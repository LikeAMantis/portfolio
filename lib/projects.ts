import productFinderImg from '../public/imgs/product-finder.png'
import taskTrackerImg from '../public/imgs/task-tracker.png'
import spotifyImg from '../public/imgs/spotify.png'
import habitTragerImg from '../public/imgs/habit-tracker.png'

export interface Project {
    img: string
    id: string
    technologies: string[]
    url: string
}

const tech = {
    next: 'next.js',
    tailwind: 'tailwindcss',
    mysql: 'MySql',
    framer: 'Framer-Motion',
    puppeteer: 'puppeteer.js',
    react: 'react',
    typescript: 'typescript',
    nextAuth: 'nextAuth',
    javascript: 'javascript',
}

export const projects = [
    {
        id: 'product finder',
        img: productFinderImg,
        technologies: [
            tech.next,
            tech.tailwind,
            tech.mysql,
            tech.framer,
            tech.puppeteer,
            tech.typescript,
        ],
        url: 'https://product-finder-next.herokuapp.com/',
    },
    {
        id: 'spotify next',
        img: spotifyImg,
        technologies: [tech.next, tech.nextAuth, tech.tailwind, tech.framer],
        url: 'https://spotify-next-api.vercel.app/',
    },
    {
        id: 'task tracker',
        img: taskTrackerImg,
        technologies: [tech.react],
        url: 'https://likeamantis.github.io/react-task-tracker/',
    },
    {
        id: 'everyday',
        img: habitTragerImg,
        technologies: [tech.javascript],
        url: 'https://likeamantis.github.io/everyday/',
    },
]
