"use client"
import React from 'react'
import styles from './ServiceCard.module.scss'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { MdSpeed } from 'react-icons/md'
import { BiWorld , BiBasketball } from 'react-icons/bi'
import { LuMonitorPlay } from 'react-icons/lu'
import { LiaArchwaySolid } from 'react-icons/lia'
const ServiceCard = ({ index = 0, title = "", content = "" }) => {
    const icons = [<BiBasketball size={28} color='#151515' />, <HiOutlineNewspaper size={28} color='#151515' />, <MdSpeed size={28} color='#151515' />, <BiWorld size={28} color='#151515' />, <LuMonitorPlay size={28} color='#151515' />, <LiaArchwaySolid size={28} color='#151515' />]
    return (
        <div className={`w-100 h-[330px] bg-white flex justify-center items-center ${styles.Servicecard}`}>
            <div className="w-100 flex justify-center items-center flex-col px-2">
                <span className="w-[64px] h-[64px] rounded bg-[#FFC451] flex justify-center items-center my-4">
                    {icons[index]}
                </span>
                <p className='text-center text-black font-bold text-2xl'>{title}</p>
                <p className='text-center text-gray-700'>{content}</p>
            </div>
        </div>
    )
}

export default ServiceCard