"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import OptionItems from '@/Components/module/OptionItems';
const Options = () => {
    const cardVariants = {
        offscreen: {
            y: 400,
            x: 150,
            opacity: 0
        },
        onscreen: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };
    const cardVariants2 = {
        offscreen: {
            y: 400,
            x: -150,
            opacity: 0
        },
        onscreen: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (
        <div className="grid grid-cols-2 gap-4 w-full my-32 p-2">
            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }} className='col-span-2 flex justify-center items-center lg:col-span-1'>
                <motion.div variants={cardVariants2}>
                    <img src="/img/features.jpg" width="100%" height="100%" alt='office' />
                </motion.div>
            </motion.div>
            <div className='col-span-2 flex justify-start lg:justify-center items-center lg:col-span-1'>
                <div className="h-full">
                    <OptionItems/>
                </div>
            </div>
        </div>
    )
}

export default Options