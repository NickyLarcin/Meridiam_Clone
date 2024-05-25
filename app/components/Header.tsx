'use client'

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {
    headerIsVisible : any

}


export const Header : React.FC<Props> = ({headerIsVisible}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    
  
    



    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

   
 
    
      
    return (
        <div className={`flex w-full h-20 justify-center duration-300 fixed bg-white z-50 transition-opacity transition-transform ${headerIsVisible? "" : "-translate-y-20"}`}>
            <div className=" flex w-full justify-between lg:max-w-screen-lg max-w-screen-md h-full">
                <div className="ml-4 flex items-center cursor-pointer w-28 lg:w-36 relative">
                    <Image fill={true} alt="logo" src="/Meridiam_logo.gif" style={{objectFit: "contain"}}/>
                </div>
                <div className="h-full gap-8 text-sm items-center hidden lg:flex  ">
                    <Link className="hover:underline cursor-pointer decoration-teal-400 decoration-2 h-4 text-emerald-950" href="/home" >About Us</Link>
                    <Link className="hover:underline cursor-pointer decoration-teal-400 decoration-2 h-4 text-emerald-950" href="">Our Impact</Link>
                    <Link className="hover:underline cursor-pointer decoration-teal-400 decoration-2 h-4 text-emerald-950" href="">Sustainability Strategy</Link>
                    <Link className="hover:underline cursor-pointer decoration-teal-400 decoration-2 h-4 text-emerald-950" href="">News</Link>
                </div>
                <div className="h-full flex items-center lg:gap-6">
                    <div className={`rounded-full text-emerald-950 bg-teal-400  h-8 text-center  m-auto 
                    justify-center items-center cursor-pointer duration-500 truncate hidden lg:flex ${isHovered ? "px-2 w-56" : "w-8"}`}
                        onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>{isHovered ? "Investor Presentation" : "IP"}</div>
                    <div className="text-emerald-950 text-md cursor-pointer">EN/FR</div>
                    <div className="flex flex-col gap-2 cursor-pointer rounded-full hover:bg-slate-200 w-14 h-14 justify-center items-center" onClick={() => toggleMenu()}>
                        <div className={`w-10 h-1 bg-emerald-950 rounded-md duration-500 ${isOpen ? "rotate-45 translate-y-3 " : ""}`}></div>
                        <div className={`w-10 h-1 bg-emerald-950 rounded-md duration-300 ${isOpen ? "opacity-0 translate-x-20" : ""}`}></div>
                        <div className={`w-10 h-1 bg-emerald-950 rounded-md duration-500 ${isOpen ? "-rotate-45 -translate-y-3" : ""}`}></div>
                    </div>

                </div>
            </div>
        </div>
    )
}