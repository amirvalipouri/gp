"use client"
import React, { useEffect } from 'react'
import styles from './Users.module.scss'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi'
const Users = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    const cardVariants2 = {
        offscreen: {
            scale: 0,
            opacity: 0
        },
        onscreen: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    const logos = [
        {
            id: 1,
            src: "/img/ts/ts1.jpg",
            job: "Front end",
            name: "Amir Valipouri",
            content: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
        },
        {
            id: 2,
            src: "/img/ts/ts2.jpg",
            name: "Amir Nezam",
            job: "Backend",
            content: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
        },
        {
            id: 3,
            src: "/img/ts/ts3.jpg",
            name: "Saqar",
            job: "Devops",
            content: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
        },
        {
            id: 4,
            src: "/img/ts/ts4.jpg",
            name: "Foad Tab",
            job: "Business",
            content: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam"
        },
        {
            id: 5,
            src: "/img/ts/ts5.jpg",
            name: "Taher Valipouri",
            job: "Manageer",
            content: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

        autoplaySpeed: 2000,
        infinite: true,
    };
    return (
        <div className={`${styles.users}  `}>
            <div className="py-8">
                <Slider className="" {...settings}>
                    {logos.map((e) =>
                        <div className={` w-full`} key={e.id}>
                            <Image className="rounded-full mx-auto border border-4 border-gray-400" src={e.src} alt="logos" width={100} height={70} />
                            <p className='text-center font-bold  my-2'>{e.name}</p>
                            <p className='text-center text-sm my-2'>{e.job}</p>
                            <div className="flex items-center w-full justify-center"><BiSolidQuoteAltLeft /><p className='text-center text-sm italic'>{e.content}</p><BiSolidQuoteAltRight /></div>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default Users