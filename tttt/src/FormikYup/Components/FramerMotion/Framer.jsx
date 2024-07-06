import React from 'react'
import { motion } from 'framer-motion'

function Framer() {

    const textAnim = {
        hidden: {
            x: -100,
            opactiy: 0,
        },
        visible: {
            x: 0,
            opactiy: 1,
        }
    }
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
        >
            <motion.h1
                variants={textAnim}
            >AAAAAA</motion.h1>
            <p>BBBBBBB</p>
            <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
            >CCCCCC</motion.button>
        </motion.div>
    )
}

export default Framer