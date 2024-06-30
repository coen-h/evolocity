import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from "framer-motion"

export default function Kart() {
    return (
        <>
            <Header />
                <div id="kart">       
                    <div className="box-section">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <p>Wheels</p>
                        </motion.div> 
                    </div>
                    <div className="box-section">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <p>Base</p>
                        </motion.div> 
                    </div>
                    <div className="box-section">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <p>Frame</p>
                        </motion.div> 
                    </div>
                    <div className="box-section">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <p>Steering</p>
                        </motion.div> 
                    </div>
                    <div className="box-section">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <p>Motor</p>
                        </motion.div> 
                    </div>
                    <div className="box-section">
                        <motion.div
                            className="box"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <p>Battery</p>
                        </motion.div> 
                    </div>
                </div>
            <Footer />
        </>
    )
}