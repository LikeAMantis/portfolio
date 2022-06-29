import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
    const router = useRouter();
    const pathName = router.pathname;

    return (
        <nav className="flex w-full space-x-4 bg-skin-menu p-6 pl-16">
            <Link href="/">
                <a>
                    <p className={pathName == "/" ? "font-bold" : ""}>
                        About Me
                    </p>
                    {pathName == "/" && (
                        <motion.div
                            layoutId="underline"
                            className="-mx-1 border-b border-accent"
                        />
                    )}
                </a>
            </Link>
            <Link href="/projects">
                <a>
                    <p className={pathName == "/projects" ? "font-bold" : ""}>
                        Projects
                    </p>
                    {pathName == "/projects" && (
                        <motion.div
                            layoutId="underline"
                            className="-mx-1 border-b border-accent"
                        />
                    )}
                </a>
            </Link>
        </nav>
    );
};

export default Header;
