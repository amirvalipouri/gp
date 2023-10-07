"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import { BsCheck2All } from 'react-icons/bs'
import { motion, animate, inView, useInView } from 'framer-motion'
import LogoSlider from '@/Components/module/LogoSlider'
const Office = () => {
    const cardVariants = {
        offscreen: {
            y: 400,
            x: 150,
            opacity : 0
        },
        onscreen: {
            y: 0,
            x: 0,
            opacity : 1,
            transition: {
                duration: 0.5
            }
        }
    };
    const cardVariants2 = {
        offscreen: {
            y: 400,
            x: -150,
            opacity : 0
        },
        onscreen: {
            y: 0,
            x: 0,
            opacity : 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (
        <div className="grid grid-cols-2 gap-2 w-full my-32 p-2">
            <motion.div id="test" initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }} className='col-span-2 flex justify-center items-center lg:col-span-1'>
                <motion.div variants={cardVariants2}>
                    <p className='font-bold text-gray-800 text-2xl'>Voluptatem dignissimos provident quasi<br /> corporis voluptates sit assumenda.</p>
                    <p className='text-gray-500 my-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                        <li className='flex my-2'><BsCheck2All color='#ffc451' size={20} /><p className='text-black mx-2'>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></li>
                        <li className='flex my-2'><BsCheck2All color='#ffc451' size={20} /><p className='text-black mx-2'>Duis aute irure dolor in reprehenderit in voluptate velit.</p></li>
                        <li className='flex my-2'><BsCheck2All color='#ffc451' size={24} /><p className='text-black mx-3'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br /> dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p></li>
                    </ul>
                    <p className='text-black mt-16' >Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                </motion.div>
            </motion.div>
            <motion.div initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }} className='col-span-2 flex justify-center items-center lg:col-span-1'>
                <motion.div variants={cardVariants}>
                    <img src="/img/about.jpg" objectFit="cover" width="100%" height="100%" alt='office' />
                </motion.div>
            </motion.div>
            <div className="w-full col-span-2 mt-16">
                <LogoSlider />
            </div>
        </div>
    )
}

export default Office