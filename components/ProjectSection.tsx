import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
    project: { img: string; id: string }
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
        <section ref={ref} className="relative h-full snap-start">
            <img
                className="absolute h-full w-full object-cover"
                src={project.img}
                alt=""
            />
            {/* Overlay */}
            <motion.div
                className="relative flex w-full items-start justify-between"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.5, type: 'tween' }}
            >
                <h2 className="bg-black bg-opacity-50 p-4">
                    Project Name Test
                </h2>
                <div className="bg-black bg-opacity-50 p-4">
                    <p className="font-bold" j>
                        Technologies:
                    </p>
                    <ul>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                        <li>item 1</li>
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default ProjectSection
