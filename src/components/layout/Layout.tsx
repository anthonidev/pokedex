import Head from "next/head"
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import Alert from "../notification/Alert";
import Navbar from "../navigation/Navbar";

import { motion } from 'framer-motion';
import { routeAnimation } from "../../animation/animations";
import { get_items } from "../../redux/apis/pokemon";
import { AppDispatch } from "../../redux/configureStore";

const Layout: React.FC<Props> = ({ title, content, children }) => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(get_items())
    }, [dispatch]);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
            </Head>
            <main className="min-h-screen bg-cyan-100">
                <Navbar />

                <motion.div variants={routeAnimation} initial="initial" animate="animate" className="  " exit="exit" >
                    {children}
                </motion.div>
            </main>

            <Alert />


        </>
    )
}


export default Layout