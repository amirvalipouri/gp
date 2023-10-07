import React from 'react'

import styles from './Team.module.scss'
import Image from 'next/image'
import { BiLogoTwitter , BiLogoFacebookCircle , BiLogoInstagram , BiLogoLinkedinSquare } from 'react-icons/bi'
import { motion, AnimatePresence } from "framer-motion"

const TeamCard = ({ src, name = "", job = "" }) => {
    const socialMedia = [
        {
            icon : <BiLogoTwitter size={20} color="#000000" />,
            name : "Twitter"
        },
        {
            icon : <BiLogoFacebookCircle size={20} color="#000000" />,
            name : "Facebook"
        },
        {
            icon : <BiLogoInstagram size={20} color="#000000" />,
            name : "Instagram"
        },
        {
            icon : <BiLogoLinkedinSquare size={20} color="#000000" />,
            name : "Linkdln"
        },
    ]
    return (
        <div className={`${styles.TeamCard} bg-white shadow w-full lg:w-[308px]`}>
            <Image className={`${styles.TeamImage}`} width={216} height={216} src={src} alt={job} />
            <div className={`${styles.socialMedia} flex w-full items-center justify-center duration-200`}>
                {socialMedia.map((e,index) => 
                    <span key={index} className="w-[36px] h-[36px] rounded mx-1 flex justify-center items-center">{e.icon}</span>
                )}
            </div>
            <div className="w-full p-4">
                <p className="text-black font-bold text-lg">{name}</p>
                <p className="text-sm text-gray-600 ">{job}</p>
            </div>
        </div>
    )
}

export default TeamCard