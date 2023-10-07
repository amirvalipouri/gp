'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import AdminOption from '@/Components/module/AdminOption';
const Admin = () => {
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
        <div className="grid grid-cols-2 gap-2 w-full my-32 p-2">
            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }} className='col-span-2 lg:flex lg:justify-start items-center lg:col-span-1'>
                <motion.div variants={cardVariants2}>
                    <img src="/img/counts-img.jpg" width="100%" height="60%" alt='office' />
                </motion.div>
            </motion.div>
            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }} className='col-span-2  lg:col-span-1'>
                <motion.div className='flex items-center h-full' variants={cardVariants}>
                    <AdminOption />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Admin