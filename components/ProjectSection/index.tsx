import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Project } from '../../lib/projects'
import Image from 'next/image'

interface Props {
    project: Project
}

const section = {
    hidden: {},
    show: {
        transition: {
            delay: 0.2,
            delayChildren: 0.5,
            staggerChildren: 0.5,
        },
    },
}

const item = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.3,
        },
    },
}

const listItem = {
    hidden: { opacity: 0, x: '100%' },
    show: { opacity: 1, x: '0%' },
}

const image = {
    hidden: { opacity: 1 },
    show: { opacity: 0.4 },
}

const side = {
    hidden: { x: '100%' },
    show: { x: '0%', transition: { duration: 0.3 } },
}

const ProjectSection = ({ project }: Props) => {
    const ref = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const target: HTMLElement | null = ref.current
        if (!target) return

        const observer = new IntersectionObserver(
            ([{ isIntersecting }]) => setIsVisible(isIntersecting),
            { root: null, threshold: [0.7] }
        )
        observer.observe(target)

        return () => observer.unobserve(target)
    }, [])

    return (
        <motion.section
            ref={ref}
            className="relative h-full snap-start overflow-hidden"
            variants={section}
            initial="hidden"
            animate={isVisible ? 'show' : 'hidden'}
        >
            {/* <motion.div className="h-full " variants={image}> */}
            <Image
                className="absolute h-full w-full object-cover brightness-50"
                src={project.img}
                alt=""
                layout="fill"
            />
            {/* </motion.div> */}
            {/* Overlay */}
            <div className="relative mx-auto flex h-full w-full items-start justify-between">
                {/* Project Name */}
                <motion.h2
                    variants={item}
                    className="mt-10 ml-10 bg-black bg-opacity-80 p-4 capitalize backdrop-blur-lg lg:ml-[15%] "
                >
                    {project.id}
                </motion.h2>
                {/* Technologies */}
                <motion.div
                    variants={item}
                    className="absolute right-1/3 bottom-1/3 translate-x-1/2 translate-y-1/2 bg-black bg-opacity-80 p-4 backdrop-blur-lg"
                >
                    <p className="text-lg font-semibold md:text-xl">
                        Technologies:
                    </p>
                    <ul>
                        {project.technologies.map((tech) => (
                            <motion.li
                                className="md:text-lg"
                                variants={listItem}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
                {/* Go to App */}
                <motion.a
                    href={project.url}
                    target="_blank"
                    variants={side}
                    className="right-0 flex h-full cursor-pointer flex-col items-center justify-center bg-gradient-to-l from-black to-transparent px-4"
                >
                    <p className="top-1/2 text-xl font-bold">Go to App</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </motion.a>
            </div>
        </motion.section>
    )
}

export default ProjectSection
