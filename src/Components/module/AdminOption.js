"use client"
import React from 'react'
import {BsEmojiSmile , BsJournalRichtext , BsClock , BsAward} from 'react-icons/bs'
import styles from './AdminOption.module.scss'
import { motion } from 'framer-motion'
import Timer from './Timer'
const AdminOption = () => {
    const data = [
        {
            icon : <BsEmojiSmile size={36} color="#ffc451"  />,
            title : 65,
            content : <p className='text-gray-700 text-md '><span className='text-black font-bold'>Happy Clients</span> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
        },
        {
            icon : <BsJournalRichtext size={36} color="#ffc451"  />,
            title : 85,
            content : <p className='text-gray-700 text-md '><span className='text-black font-bold'>Projects</span> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
        },
        {
            icon : <BsClock size={36} color="#ffc451"  />,
            title : 35,
            content : <p className='text-gray-700 text-md '><span className='text-black font-bold'>Years of experience</span> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
        },
        {
            icon : <BsAward size={36} color="#ffc451"  />,
            title : 20,
            content : <p className='text-gray-700 text-md '><span className='text-black font-bold'>Awards</span> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
        },
    ]
    function animateValue(end) {
        let startTimestamp = null;
        let start = 0
        let duration = 5000
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          let counter = document.getElementById("counter")
          counter.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
  return (
    <div className="w-full flex items-center justify-center h-full ">
        <div>
            <p className="text-black text-start font-bold text-3xl leading-10 mb-4">Voluptatem dignissimos provident quasi</p>
            <p className="text-gray-700 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
            <div className='w-full grid grid-cols-2 gap-4 my-16'>
                {data.map((e,index) => 
                    <div key={index} className="flex items-start col-span-2 md:col-span-1">
                        <div className="mx-2">{e.icon}</div>
                        <div className='mx-1'>
                            <p id="counter" className="text-black font-bold text-xl"><Timer time={e.title} /></p>
                            <div className="text-black">{e.content}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default AdminOption