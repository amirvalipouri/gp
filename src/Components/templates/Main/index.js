"use client"
import React from 'react'
import styles from './Main.module.scss'
import { AiOutlineShop } from 'react-icons/ai'
import { MdOutlineAnalytics, MdOutlineDateRange } from 'react-icons/md'
import { FiDatabase } from 'react-icons/fi'
import { RiPaintBrushLine } from 'react-icons/ri'
import MainCard from '@/Components/module/MainCard'
import { motion } from 'framer-motion'
const Main = () => {
    const data = [
        {
            label: "Lorem",
            src: <AiOutlineShop color='#ffc451' size="32" />,
            href: "/"
        },
        {
            label: "Dolor Sitema",
            src: <MdOutlineAnalytics color='#ffc451' size="32" />,
            href: "/"
        },
        {
            label: "Sedare Perspiciatis",
            src: <MdOutlineDateRange color='#ffc451' size="32" />,
            href: "/"
        },
        {
            label: "Magni Dolores",
            src: <RiPaintBrushLine color='#ffc451' size="32" />,
            href: "/"
        },
        {
            label: "Nemos Enimade",
            src: <FiDatabase color='#ffc451' size="32" />,
            href: "/"
        },
    ]
    return (
        <div className={`${styles.Main} flex flex-col items-center justify-around lg:justify-center p-1`}>
            <motion.div className="mt-16 lg:mt-0" initial={{ y: 200, scale: 0 }}
                animate={{ y: 0, scale: 1 }}
                transition={{
                    duration: 0.7
                }}>
                <p className="text-6xl text-white text-center font-bold">Powerful Digital<br /> Solutions With Gp<span className='text-yellow-500 text-5xl'>.</span></p>
                <p className="text-white text-center text-3xl mt-4">We are team of talented digital marketers</p>
            </motion.div>
            <motion.div 
                initial={{scale : 0 , y : 250}}
                animate={{ scale : 1 ,y: 0}}
                transition={{
                    type : "ease-in",
                    duration: 0.9
                }} className="flex justify-center items-center w-100">
                <div className="grid grid-cols-4 lg:grid-cols-5  gap-4 mt-16 ">
                    {data.map((e) =>
                        <MainCard key={e.label} {...e} />
                    )}
                </div>
            </motion.div>

        </div>
    )
}

export default Main