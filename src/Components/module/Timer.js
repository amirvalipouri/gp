"use client"
import { useState, useEffect } from 'react'

const Timer = ({ time }) => {
    
    const [number, setNumber] = useState(0)
    useEffect(() => {
        let myInterval = setInterval(() => {
            if(number === time){
                clearInterval(myInterval)
            }else{
                setNumber(prev => prev + 1)
            }
        }, 50)

        return () => {

            clearInterval(myInterval);
        };
    });
    return (
        <span>{number}</span>
    )
}

export default Timer

