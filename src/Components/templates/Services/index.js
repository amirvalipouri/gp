"use client"
import React from 'react'
import { motion } from 'framer-motion'
import styles from './Services.module.scss'

import ServiceCard from '@/Components/module/ServiceCard'

const Services = () => {
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
            title : "Lorem Ipsum",
            content : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
        },
        {
            title : "Sed ut perspiciatis",
            content : "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        },
        {
            title : "Magni Dolores",
            content : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
        },
        {
            title : "Nemo Enim",
            content : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
        },
        {
            title : "Dele cardo",
            content : "Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur",
        },
        {
            title : "Divera don",
            content : "Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
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
        offscreen: { scale : 0, opacity: 0 },
        onscreen: {
            scale : 1,
            opacity: 1
        }
    };
    return (
        <div className={`w-full ${styles.Service}`}>
            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}>
                    <motion.div variants={cardVariants}>
                        <p className={`text-black text-gray-400 font-medium mb-4 ${styles.serviceP}`}>SERVICES</p>
                        <p className='text-black font-bold text-3xl'>CHECK OUR SERVICES</p>
                    </motion.div>
            </motion.div>
            <motion.div variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }} className=' grid grid-cols-3 gap-4 my-16'>
                {data.map((e,index)=>
                    <motion.div  variants={item} className="item col-span-3 lg:col-span-1 " key={e.title}>
                        <ServiceCard index={index} {...e} />
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default Services