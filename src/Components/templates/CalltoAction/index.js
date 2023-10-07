"use client"
import React from 'react'
import styles from './CalltoAction.module.scss'
import { motion } from 'framer-motion'
const CalltoAction = () => {
    const cardVariants2 = {
        offscreen: {
            scale : 0,
            opacity: 0
        },
        onscreen: {
            scale : 1,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (
        <div className={`${styles.calltoaction} flex justify-center items-center`}>
            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }} >
                <motion.div variants={cardVariants2}>
                    <p className='text-center font-bold text-3xl'>Call To Action</p>
                    <p className='text-center my-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<br /> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='w-full flex justify-center items-center'>
                        <button className="text-white bg-transparent border border-white py-2 px-4 rounded hover:border-yellow-500 hover:bg-yellow-500 hover:text-black duration-200">Call To Action</button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default CalltoAction