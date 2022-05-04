import Head from "next/head"
import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import Alert from "../notification/Alert";
import Navbar from "../navigation/Navbar";

import { motion } from 'framer-motion';
import { routeAnimation } from "../../animation/animations";

const Layout: React.FC<Props> = ({ title, content, children }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
            </Head>
                <Navbar />

                <motion.div variants={routeAnimation} initial="initial" animate="animate" className="bg-cyan-100 " exit="exit" >
                    {children}
                </motion.div>
                <Alert />


        </>
    )
}


export default Layout