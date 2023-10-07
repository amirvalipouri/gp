"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { LiaNewspaperSolid } from 'react-icons/lia'
import { BiCubeAlt, BiImages, BiShield } from 'react-icons/bi'
const OptionItems = () => {
    const container = {
        offscreen: { opacity: 1, scale: 0 },
        onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.4
            }
        }
    };

    const item = {
        offscreen: { x: 40, y: 20, opacity: 0 },
        onscreen: {
            x: 0,
            y: 0,
            opacity: 1
        }
    };
    const data = [
        {
            title: "Est labore ad",
            content: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
            icon: <LiaNewspaperSolid size={48} color='#ffc451' />
        },
        {
            title: "Harum esse qui",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
            icon: <BiCubeAlt size={48} color='#ffc451' />
        },
        {
            title: "Aut occaecati",
            content: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
            icon: <BiImages size={48} color='#ffc451' />
        },
        {
            title: "Beatae veritatis",
            content: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
            icon: <BiShield size={48} color='#ffc451' />
        },
    ]
    return (
        <motion.ul
            className="container flex flex-col justify-between items-stretch"
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            {data.map((e, index) => (
                <motion.li key={index} className="item" variants={item} >
                    <div className="flex items-start mb-8">
                        <div>{e.icon}</div>
                        <div>
                            <p className='text-black text-xl font-bold'>{e.title}</p>
                            <p className="text-base text-gray-500">{e.content}</p>
                        </div>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default OptionItems