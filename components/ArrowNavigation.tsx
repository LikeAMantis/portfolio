import React, { Ref, RefObject, useEffect, useRef } from 'react'

interface Props {
    showUp: boolean
    showDown: boolean
}

const ArrowNavigation = ({ showUp, showDown }: Props) => {
    const scrollContainer = useRef()

    useEffect(() => {
        scrollContainer.current = document.querySelector('main')

        window.addEventListener('keydown', ({ key }) => {
            if (key == 'ArrowUp') scrollUp()
            if (key == 'ArrowDown') scrollDown()
        })
    }, [])

    function scrollUp() {
        scrollContainer.current.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth',
        })
    }

    function scrollDown() {
        scrollContainer.current.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {/* <svg
                className="absolute top-24 left-1/2 h-10 w-10 -translate-x-1/2 rotate-180 rounded-full bg-black text-white opacity-50"
                onClick={scrollUp}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                />
            </svg>
            <svg
                onClick={scrollDown}
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-5 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-black text-white opacity-50"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                />
            </svg> */}
        </>
    )
}

export default ArrowNavigation
