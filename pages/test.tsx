import { motion, MotionConfig } from 'framer-motion'
import { NextPage } from 'next'
import React, { useState } from 'react'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: '-100%' },
    show: { opacity: 1, y: '0%' },
}

const test: NextPage = () => {
    const [toggle, settoggle] = useState(false)
    return (
        <div>
            <motion.div
                variants={container}
                animate={toggle ? 'hidden' : 'show'}
                className="flex w-40 gap-4 bg-blue-800 p-5"
            >
                <motion.div
                    className="h-6 w-6 bg-red-400"
                    variants={item}
                ></motion.div>
                <motion.div
                    className="h-6 w-6 bg-red-400"
                    variants={item}
                ></motion.div>
                <motion.div
                    className="h-6 w-6 bg-red-400"
                    variants={item}
                ></motion.div>
            </motion.div>
            <button onClick={() => settoggle((prev) => !prev)}>Toggle</button>
        </div>
    )
}

export default test
