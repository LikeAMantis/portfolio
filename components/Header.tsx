import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
    const router = useRouter()
    const pathName = router.pathname

    return (
        <nav className=" w-full space-x-4 bg-skin-menu p-6 pl-16">
            <Link href="/">
                <a
                    className={
                        pathName == '/'
                            ? 'border-b border-accent font-bold'
                            : ''
                    }
                >
                    About Me
                </a>
            </Link>
            <Link href="/projects">
                <a
                    className={
                        pathName == '/projects'
                            ? 'border-b border-accent font-bold'
                            : ''
                    }
                >
                    Projects
                </a>
            </Link>
        </nav>
    )
}

export default Header
