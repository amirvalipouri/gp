"use client"
import React, { useState } from 'react'
import styles from './Portfolio.module.scss'
import { motion } from 'framer-motion'
import PortfolioSection from '@/Components/module/PortfolioSection'
const Portfolio = () => {
    const cardVariants = {
        offscreen: {
            y: 60,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.9
            }
        }
    };
    const cardVariants2 = {
        offscreen: {
            y: 60,
            opacity: 1
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };
    return (
        <div className={`px-2 w-full my-16 ${styles.PORT}`}>
            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                <motion.div variants={cardVariants}>
                    <p className={`text-black text-gray-400 font-medium mb-4 ${styles.PortP}`}>PORTFOLIO</p>
                    <p className='text-black font-bold text-3xl'>CHECK OUR PORTFOLIO</p>
                </motion.div>
            </motion.div>
            {/* <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.5 }}>
                <motion.div variants={cardVariants2}>
                    <PortfolioSection/>
                </motion.div>
            </motion.div> */}
            <div>
                <PortfolioSection />
            </div>
        </div>
    )
}

export default Portfolio