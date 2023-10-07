import React from 'react'
import { motion } from 'framer-motion'
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './LogoSlider.module.scss'
const LogoSlider = () => {
    const logos = [
        {
            id: 1,
            src: "/img/clients/client-1.png"
        },
        {
            id: 2,
            src: "/img/clients/client-2.png"
        },
        {
            id: 3,
            src: "/img/clients/client-3.png"
        },
        {
            id: 4,
            src: "/img/clients/client-4.png"
        },
        {
            id: 5,
            src: "/img/clients/client-5.png"
        },
        {
            id: 6,
            src: "/img/clients/client-6.png"
        },
        {
            id: 7,
            src: "/img/clients/client-7.png"
        },
        {
            id: 8,
            src: "/img/clients/client-8.png"
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]

    };
    const cardVariants1 = {
        offscreen: {
            scale : 0,
        },
        onscreen: {
            scale: 1,
            transition: {
                duration: 0.9
            }
        }
    };
    return (
        <motion.div initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }} className={`w-full ${styles.LogoSlider}`}>
            <motion.div variants={cardVariants1}>
                <Slider className="grid grid-cols-6" {...settings}>
                    {logos.map((e) =>
                        <div className={`${styles.imageContainer} duration-200`} key={e.id}>
                            <Image className="" src={e.src} alt="logos" width={100} height={70} />
                        </div>
                    )}
                </Slider>
            </motion.div>
        </motion.div>
    )
}

export default LogoSlider