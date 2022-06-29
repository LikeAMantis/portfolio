import type { NextPage } from "next";
import ProjectSection from "../components/ProjectSection";
import { projects } from "../lib/projects";

const Home: NextPage = () => {
    return (
        <main className="relative snap-y snap-proximity space-y-2 overflow-y-auto bg-white">
            {projects.map((project) => (
                <ProjectSection key={project.id} project={project} />
            ))}
        </main>
    );
};

export default Home;
