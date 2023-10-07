import React from 'react'
import styles from './Layout.module.scss'
import { BiLogoTwitter, BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoSkype } from 'react-icons/bi'
import { HiChevronRight } from 'react-icons/hi'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={`${styles.footer} bg-black`}>
            <div className={`${styles.footerTop} bg-[#151515]`}>
                <div className={`${styles.container} py-8`}>
                    <div className="grid grid-cols-5">
                        <div className="col-span-5 md:col-span-2 lg:col-span-1 flex items-center  md:justify-start lg:justify-center p-2">
                            <div className={`${styles.footerInfo}`}>
                                <h3>Gp<span>.</span></h3>
                                <p>
                                    A108 Adam Street <br />
                                    NY 535022, USA<br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                                <div className="social-links flex items-center  mt-3">
                                    <Link href="#" className="twitter w-[36px] h-[36px] bg-[#292929] p-2 rounded mx-1 flex items-center justify-center hover:bg-[#ffc451]"><BiLogoTwitter /></Link>
                                    <Link href="#" className="facebook w-[36px] h-[36px] bg-[#292929] p-2 rounded mx-1 flex items-center justify-center hover:bg-[#ffc451]"><BiLogoFacebookCircle /></Link>
                                    <Link href="#" className="instagram w-[36px] h-[36px] bg-[#292929] p-2 rounded mx-1 flex items-center justify-center hover:bg-[#ffc451]"><BiLogoInstagram /> </Link>
                                    <Link href="#" className="google-plus w-[36px] h-[36px] bg-[#292929] p-2 rounded mx-1 flex items-center justify-center hover:bg-[#ffc451]"><BiLogoSkype /></Link>
                                    <Link href="#" className="linkedin w-[36px] h-[36px] bg-[#292929] p-2 rounded mx-1 flex items-center justify-center hover:bg-[#ffc451]"><BiLogoLinkedinSquare /></Link>
                                </div>
                            </div>
                        </div>
                        <div className={`col-span-5 md:col-span-2 lg:col-span-1 flex  md:justify-start lg:justify-center items-center p-2  ${styles.footerLink}`}>
                            <div className="h-full">
                                <h4 className='mb-4'>Useful Links</h4>
                                <ul>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">Home</Link></li>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">About us</Link></li>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">Services</Link></li>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">Terms of service</Link></li>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">Privacy policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-span-5 md:col-span-2 lg:col-span-1 flex md:justify-start lg:justify-center items-center p-2  ${styles.footerLink}`}>
                            <div className="h-full">
                                <h4 className='mb-4'>Our Services</h4>
                                <ul>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">Home</Link></li>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">About us</Link></li>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">Services</Link></li>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">Terms of service</Link></li>
                                    <li className="flex items-center my-2"><HiChevronRight color="#ffc451" /> <Link className='text-white hover:text-yellow-500' href="#">Privacy policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-span-5 md:col-span-2 lg:col-span-2 flex flex-col justify-start items-start px-4 `} >
                            <div>
                                <p>Our Newsletter</p>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            </div>
                            {/* <div className="w-1/2 p-2 bg-white flex justify-between rounded mt-8 ">
                                <input type='text' className="outline-0 border-0 text-black " />
                                <button className="bg-yellow-500 text-gray-600 hover:bg-yellow-400 rounded h-full w-full relative">Subscribe</button>
                            </div> */}
                            <div class="flex items-center border border-gray-500 rounded mt-8">
                                <input class="appearance-none text-white bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
                                    <button class="flex-shrink-0 bg-yellow-500 hover:bg-yellow-700 border-yellow-500 hover:border-yellow-700 text-sm border-4 text-white py-1 px-2 rounded rounded-l-none" type="button">
                                        Sign Up
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer