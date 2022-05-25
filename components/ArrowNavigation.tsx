import React, { useEffect, useRef } from 'react'

const ArrowNavigation = () => {
    const scrollContainer = useRef<HTMLElement | null>()

    useEffect(() => {
        scrollContainer.current = document.querySelector('main')

        window.addEventListener('keydown', ({ key }) => {
            if (key == 'ArrowUp') scrollUp()
            if (key == 'ArrowDown') scrollDown()
        })
    }, [])

    function scrollUp() {
        if (!scrollContainer.current) return

        scrollContainer.current.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth',
        })
    }

    function scrollDown() {
        if (!scrollContainer.current) return

        scrollContainer.current.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }
}

export default ArrowNavigation
