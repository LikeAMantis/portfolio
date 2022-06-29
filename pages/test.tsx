import { motion, MotionConfig } from "framer-motion";
import { NextPage } from "next";
import React, { useState } from "react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: "-100%" },
    show: { opacity: 1, y: "0%" },
};

const test: NextPage = () => {
    const [toggle, settoggle] = useState(false);
    return (
        <div className="grid grid-cols-[1fr_minmax(2fr,500px)_1fr] bg-red-800">
            <div className="overflow-auto bg-blue-800">
                lorem ipsum dolor sit atoot quis quiel maku et bolug mollit
                distinct. dagarmidad. cakiw consectetaur uw trenzsa eit gith
                phona. elit, incluros otrenzr fuw sumbloats. plok. uf civiuda
                cillum wirc labore applios eis who
            </div>
            <div className="bg-green-800">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                suscipit nemo voluptatum libero voluptates vel, asperiores omnis
                voluptatem ipsa voluptas inventore eius dolor aperiam accusamus
            </div>
            <div className="bg-yellow-800">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                suscipit nemo voluptatum libero voluptates vel, asperiores omnis
                voluptatem ipsa voluptas inventore eius dolor aperiam accusamus
            </div>
        </div>
    );
};

export default test;
