import React from "react"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

export const Footer = () => {

    return (
        <div className="w-full flex flex-col">
            <div className="flex w-full bg-emerald-100 h-40 justify-center">
                <div className="w-full h-full max-w-[820px] flex justify-between items-center">
                    <div className="text-emerald-950 text-xs font-medium">Subscribe to our newsletter</div>
                    <div className="flex flex-col gap-4">
                        <input type="email" placeholder="Email" className="h-6 text-xs" />
                        <div className="text-xs text-emerald-950">
                            By signing up you agree to our <span>privacy policy</span> and <span>terms of services</span>
                        </div>
                    </div>
                    <div className="rounded-full bg-teal-500 text-xs font-medium text-center px-4 py-1 cursor-pointer hover:bg-teal-200 duration-300">
                        Read about us
                    </div>




                </div>

            </div>

            <div className="h-60 w-full flex bg-emerald-950 overflow-hidden">
                <div className="w-1/2 h-full relative flex flex-col justify-end ">

                    <div className="relative h-80 top-12 w-[400px] -left-20">
                        <Image src="/M-footer.svg" alt={""} fill={true} style={{ objectFit: "contain" }} className="" />
                    </div>

                </div>
                <div className="flex flex-col w-1/2">
                    <div className="w-full h-1/3 flex justify-start items-center">
                        <div className="text-xl font-semibold text-white">For people and the planet</div>
                    </div>
                    <div className="w-full h-1/3 flex">
                        <div className="w-1/2 h-full flex justify-start items-center gap-3">
                            <div className="bg-teal-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"><FaInstagram /></div>
                            <div className="bg-teal-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"><FaYoutube /></div>
                            <div className="bg-teal-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"><FaFacebookSquare /></div>
                            <div className="bg-teal-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"><IoLogoLinkedin /></div>
                        </div>
                        <div className="w-1/2 h-full flex justify-center items-center">
                        <Image src="/b-corp-logo.png" alt={""} width={50} height={50} style={{ objectFit: "contain" }} className="" />
                        </div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col">
                        <div className="flex gap-3 justify-start items-center w-full h-1/2">
                            <div className="text-xs text-white cursor-pointer">Legal Notice</div>
                            <div className="text-xs text-white cursor-pointer">Contact</div>
                            <div className="text-xs text-white cursor-pointer">Personal Data</div>
                        </div>
                        <div className="flex gap-3 justify-start w-full items-center h-1/2">
                        <div className="text-xs text-white cursor-pointer">Meridiam @2024. All Rights Reserved</div>
                        </div>
                    </div>

                </div>



            </div>

        </div>
    )
}