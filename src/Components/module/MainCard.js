"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MainCard = ({src , href = "" , label = ""}) => {
  return (
    <motion.div whileHover={{scale : 1.1}} className="border border-gray-400 flex flex-col items-center justify-start py-6  duration-150 hover:border-yellow-500 col-span-4 md:col-span-2 lg:col-span-1 w-[215px] h-[157px]">
        <span>{src}</span>
        <Link className="duration-200 font-bold hover:text-yellow-500 text-xl my-6" href={href}>{label}</Link>
    </motion.div>
  )
}

export default MainCard