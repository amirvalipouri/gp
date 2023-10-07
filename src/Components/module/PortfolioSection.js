"use client"
import React, { useEffect, useState } from 'react'
import styles from './Portfolio.module.scss'
import Image from 'next/image'
import { BiPlus, BiLink } from 'react-icons/bi'
import data from '@/constant/_data'
import { motion } from 'framer-motion'
const PortfolioSection = () => {
    // const [ dataa , setData ] = useState(data)
    const [active, setActive] = useState("ALL")
    const buttonHandler = [
        {
            label: "ALL",
            value: "ALL"
        },
        {
            label: "APP",
            value: "APP"
        },
        {
            label: "CARD",
            value: "CARD"
        },
        {
            label: "WEB",
            value: "WEB"
        }
    ]
    const dataHandler = (enter) => {
        if(enter === "ALL"){
            return data
        }else{
            return data.filter(item => item.group === enter)
        }
    }
    return (
        <div className={`${styles.PORTFOLIO}`}>
            <div className="flex justify-center items-center my-8">
                {buttonHandler?.map((e, index) =>
                    <button key={index + 20} onClick={() => setActive(prev => e.value)} className={`${active === e.value ? "bg-yellow-500" : "bg-white"} mx-2 py-1 duration-200 border-0 text-black hover:bg-yellow-500 rounded active:bg-yellow-500 px-4`}>{e.label}</button>
                )}
            </div>
            <motion.div animate={{ y: [20 , 0]}} transition={{duration : 2 , type : "infinite"}} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {dataHandler(active)?.map((e, index) =>
                    <div  className="h-auto" key={index}>
                        <div className={`${styles.PortfolioCard}`} >
                            <div className={`${styles.PortfolioCardBody}`}>
                                <img src={e.src} alt='test' className={`${styles.PortfolioCardImg}`} />
                                <div  className={`${styles.Details}`}>
                                    <p className='font-bold text-xl'>{e.title}</p>
                                    <p className='italic'>{e.group}</p>
                                    <div className="flex items-center">
                                        <BiPlus />
                                        <BiLink />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* <div className="grid gap-4 ">
                    {data.slice(3, 6).filter((e) => e.group === active)?.map((e, index) =>
                        <div className={`${styles.PortfolioCard}`} key={index * 10}>
                            <img src={e.src} />
                            <div className={`${styles.Details}`}>
                                <p>{e.title}</p>
                                <p>{e.group}</p>
                                <div className="flex items-center">
                                    <BiPlus />
                                    <BiLink />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid gap-4 ">
                    {data.slice(6, 9).filter((e) => e.group === active)?.map((e, index) =>
                        <div className={`${styles.PortfolioCard}`} key={index * 10}>
                            <img src={e.src} />
                            <div className={`${styles.Details}`}>
                                <p>{e.title}</p>
                                <p>{e.group}</p>
                                <div className="flex items-center">
                                    <BiPlus />
                                    <BiLink />
                                </div>
                            </div>
                        </div>
                    )}
                </div> */}
            </motion.div>
        </div>
    )
}

export default PortfolioSection