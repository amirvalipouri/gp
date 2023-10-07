"use client"

import React from 'react'

import { motion } from 'framer-motion';
import styles from './Team.module.scss'
import TeamCard from '@/Components/module/TeamCard';
const Team = () => {
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
    const data = [
        {
            src : "/img/team/team-1.jpg",
            name : "Walter White",
            job : "Chief Executive Officer"
        },
        {
            src : "/img/team/team-2.jpg",
            name : "Sarah Jhonson",
            job : "Product Manager"
        },
        {
            src : "/img/team/team-3.jpg",
            name : "William Anderson",
            job : "CTO"
        },
        {
            src : "/img/team/team-4.jpg",
            name : "Amanda Jepson",
            job : "Accountant"
        },
    ]
    const container = {
        offscreen: { opacity: 1, scale: 0 },
        onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.3
            }
        }
    };

    const item = {
        offscreen: { scale: 0, opacity: 0 },
        onscreen: {
            scale: 1,
            opacity: 1
        }
    };
    return (
        <div className={`w-full ${styles.Team} py-8`}>
            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                <motion.div variants={cardVariants}>
                    <p className={`text-black text-gray-400 font-medium mb-4 ${styles.teamP}`}>TEAM</p>
                    <p className='text-black font-bold text-3xl'>CHECK OUR TEAM</p>
                </motion.div>
            </motion.div>
            <motion.div variants={container}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }} className=' grid grid-cols-4 justify-items-center gap-4 my-16'>
                {data.map((e, index) =>
                    <motion.div variants={item} className="item col-span-2 lg:col-span-1" key={index}>
                        <TeamCard {...e} />
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default Team