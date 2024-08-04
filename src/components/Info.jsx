import React from 'react'
import { motion } from "framer-motion"

export default function Info() {
    return (
        <div id="info">
            <p id="info-title">What is Evolocity?</p>
            <motion.div
                id="info-cardl" 
                className="info-card"
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 }
                }}
                transition={{ type: "spring", stiffness: 50, delay: 0.2}}
            >
                <div id="info-content">
                    <p>1 - Plan your build.</p>
                    <p>
                        Start planning out your build, do you want to build
                        a 4 wheel kart, a trike / reverse trike, or even a 
                        2 wheel electric bike.
                    </p>
                </div>
                <img id="info-image" src="/3.jpg" alt="Planning Kart" />
            </motion.div>
            <motion.div
                id="info-cardr" 
                className="info-card"
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0.8 }
                }}
                transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
            >
                <div id="info-content">
                    <p>2 - Start your build!</p>
                    <p>
                        Start making your frame and slowly adding on parts
                        until you have a complete kart with a electric motor
                        and brakes.
                    </p>
                </div>
                <img id="info-image" src="/2.png" alt="Build Kart" />
            </motion.div>
            <motion.div 
                id="info-cardl" 
                className="info-card"
                initial="hidden"
                whileInView="visible"
                
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -400 }
                }}
                transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
            >

                <div id="info-content">
                    <p>3 - Race your Kart!</p>
                    <p>
                        Bring your kart to the race in November and compete
                        against other schools to prove your kart is the best!
                    </p>
                </div>
                <img id="info-image" src="/4.jpg" alt="Driving Kart" />
            </motion.div>
        </div>
    )
}