"use client"
import { useState, useRef } from "react";
import { CiLocationOn } from 'react-icons/ci'
import { TfiEmail } from 'react-icons/tfi'
import { BsPhone } from 'react-icons/bs'
const Map = () => {
  const data = [
    {
      icon : <CiLocationOn size={20} color="#000000"/>,
      value : "A108 Adam Street, New York, NY 535022",
      title : "Location:"
    },
    {
      icon : <TfiEmail size={20} color="#000000"/>,
      value : "info@example.com",
      title : "Email:"
    },
    {
      icon : <BsPhone size={20} color="#000000"/>,
      value : "+1 5589 55488 55s",
      title : "Call:"
    },
  ]
  return (
    <div>
      <div>
        <iframe style={{ border: "0px", width: "100%", height: "270px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div>
      <div className="w-full grid grid-cols-3 items-start my-4">
        <div className="col-span-3 lg:col-span-1  flex flex-col items-start justify-between">
          {data.map((e,index)=>
            <div className="my-4 flex items-center" key={index}>
              <div className="rounded flex justify-center items-center p-2 w-[44px] h-[44px] bg-[#ffc451]">{e.icon}</div>
              <div className="mx-2">
                <p className="text-xl text-black">{e.title}</p>
                <p className="text-gray-500 text-sm	">{e.value}</p>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-3 lg:col-span-2">
          <form className="w-full grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1 m-1">
              <input className="p-2 bg-white border border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500  rounded text-black w-full" placeholder="Your Email" />
            </div>
            <div className="col-span-2 md:col-span-1 m-1">
              <input className="p-2 bg-white border border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500  rounded text-black w-full" placeholder="Your Name" />
            </div>
            <div className="col-span-2 m-1">
              <input className="p-2 bg-white border border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500  rounded text-black w-full" placeholder="Subject" />
            </div>
            <div className="col-span-2 m-1">
              <textarea rows="5" cols="20" className="p-2 bg-white border border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500  rounded text-black w-full" placeholder="Message" />
            </div>
            <div className="col-span-2 flex justify-center items-center">
              <button className="rounded px-4 py-2 text-xl bg-yellow-500 text-gray-700 hover:bg-yellow-300">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Map