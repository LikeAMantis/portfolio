import type { NextPage } from 'next'
import { useRef } from 'react'
import ArrowNavigation from '../components/ArrowNavigation'
import Header from '../components/Header'
import ProjectSection from '../components/ProjectSection'

const projects = [
    { id: 'Product Finder', img: 'https://picsum.photos/seed/1/1920/1080' },
    { id: 'Spotify Next', img: 'https://picsum.photos/seed/2/1920/1080' },
    { id: 'Task Tracker', img: 'https://picsum.photos/seed/3/1920/1080' },
]

const Home: NextPage = () => {
    return (
        <div className="grid h-screen grid-rows-[auto_1fr]  bg-skin-fill text-skin-base">
            <Header />
            <main className="relative snap-y snap-mandatory space-y-6 overflow-y-auto">
                {projects.map((project) => (
                    <ProjectSection project={project} />
                ))}
            </main>
            <ArrowNavigation />
        </div>
    )
}

export default Home
