import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
    project: { img: string; id: string }
}

const section = {
    hidden: { opacity: 0.5 },
    show: {
        opacity: 1,
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

const ProjectSection = ({ project }: Props) => {
    const ref = useRef()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const target = ref.current

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
            className="relative h-full snap-start overflow-x-hidden"
            variants={section}
            animate={isVisible ? 'show' : 'hidden'}
        >
            <img
                className="absolute h-full w-full object-cover"
                src={project.img}
                alt=""
            />
            {/* Overlay */}
            <div className="relative ml-auto flex h-full w-full items-start justify-between xl:container">
                <motion.h2 variants={item} className="bg-opacity-50 p-4">
                    {project.id}
                </motion.h2>
                <motion.div
                    variants={item}
                    className="h-full bg-black bg-opacity-50 p-4"
                >
                    <p className="text-lg font-semibold">Technologies:</p>
                    <ul>
                        <motion.li variants={listItem}>next.js</motion.li>
                        <motion.li variants={listItem}>tailwindcss</motion.li>
                        <motion.li variants={listItem}>framer-motion</motion.li>
                        <motion.li variants={listItem}>mysql</motion.li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default ProjectSection
