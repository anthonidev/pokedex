import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { RootState } from '../../redux/configureStore';
import { fadeInUp, stagger } from '../../utils/animation/animations';

const Alert = () => {
    const alert = useSelector((state: RootState) => state.alert);
    const displayAlert = () => {
        if (alert.type !== null) {
            switch (alert.type) {
                case 'green':
                    return (
                        <motion.div variants={stagger} initial="initial" animate="animate" className="fixed bottom-2 z-50 w-1/2 flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300  ">
                            <motion.div variants={fadeInUp} className=" flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                                <span className="text-green-500">
                                    <svg fill="currentColor"
                                        viewBox="0 0 20 20"
                                        className="h-6 w-6">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="alert-content ml-6">
                                <div className="alert-title font-semibold text-lg text-green-800">
                                    Correcto
                                </div>
                                <div className="alert-description text-sm text-green-600">
                                    {alert.msg}
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                case 'yellow':
                    return (
                        <motion.div variants={stagger} initial="initial" animate="animate" className="fixed bottom-2 z-50 w-1/2 flex flex-row items-center bg-yellow-200 p-5 rounded border-b-2 border-yellow-300">
                            <motion.div variants={fadeInUp} className=" flex items-center bg-yellow-100 border-2 border-yellow-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                                <span className="text-yellow-500">
                                    <svg fill="currentColor"
                                        viewBox="0 0 20 20"
                                        className="h-6 w-6">
                                        <path fillRule="evenodd"
                                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </motion.div>
                            <motion.div variants={fadeInUp} className="alert-content ml-4">
                                <div className="alert-title font-semibold text-lg text-yellow-800">
                                    Advertencia
                                </div>
                                <div className="alert-description text-sm text-yellow-600">
                                    {alert.msg}
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                
            }

        } else {
            return (
                <div></div>
            )
        }
    }

    return (
        <React.Fragment>
            {displayAlert()}
        </React.Fragment>
    )
}

export default Alert

