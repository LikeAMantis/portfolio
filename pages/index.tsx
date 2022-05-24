import type { NextPage } from 'next'
import ArrowNavigation from '../components/ArrowNavigation'
import Header from '../components/Header'
import ProjectSection from '../components/ProjectSection'
import { projects } from '../lib/projects'

const Home: NextPage = () => {
    return (
        <div className="grid h-screen grid-rows-[auto_1fr]  bg-skin-fill text-skin-base">
            <Header />
            <main className="relative snap-y snap-proximity space-y-10 overflow-y-auto bg-black">
                {projects.map((project) => (
                    <ProjectSection project={project} />
                ))}
            </main>
            <ArrowNavigation />
        </div>
    )
}

export default Home
