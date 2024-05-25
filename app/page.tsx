'use client'

import Image from "next/image";
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Button } from "./components/UI/Button";
import { IoChevronDown } from "react-icons/io5";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { NewsElement } from "./components/NewsElement";

export default function Home() {

  const [lastScrollY, setLastScrollY] = useState(0)
  const [typedText, setTypedText] = useState('');
  const [headerIsVisible, setHeaderIsVisible] = useState(true)
  const [aboutUsImage, setAboutUsImage] = useState("/Homepage_2.1.jpg")

  const handleScroll = useMemo(() => {
    return () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setHeaderIsVisible(false)
        } else {
          setHeaderIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }
  }, [lastScrollY])


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY, handleScroll])


  const parallaxText1 = useRef(null)
  const parallaxText2 = useRef(null)
  const parallaxText3 = useRef(null)


  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      parallaxText1.current.style.transform = `translateY(${scrollTop * -0.2 + 150}px)`;
      parallaxText2.current.style.transform = `translateY(${scrollTop * -0.2 + 200}px)`;
      parallaxText3.current.style.transform = `translateY(${scrollTop * -0.2 + 250}px)`;
    }



    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const handleImageChange = (image: string) => {

    setAboutUsImage(image)

    
  }


  return (
    <div className="flex flex-col">
      <Header
        headerIsVisible={headerIsVisible}

      />

      {/* Video */}


      <main className={`flex flex-col items-center duration-300 ${headerIsVisible ? 'mt-20' : ""}`}>
        <div className="relative w-full h-[500px] overflow-hidden justify-center block">
          <video autoPlay muted loop height={100} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full" >
            <source src="https://www.meridiam.com/wp-content/uploads/2024/04/MERIDIAM_SITE_FINALE_1080-opt.mp4"></source>

          </video>

          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 hover:scale-150 hover:animate-pulse duration-500">
            <Link href="#deliver" className="">
              <Button text={<IoChevronDown />} h={10} w={10} />
            </Link>
          </div>
        </div>

        {/* Presentation  */}


        <div className="text-4xl font-medium text-emerald-950 w-full text-center my-10" id="deliver">
          Delivering Transformational Infrastructure
        </div>
        <div className="w-full flex px-20 justify-center items-center">
          <div className="m-10 relative">
            <div className="text-white absolute top-1 left-2 text-sm">Critical Public Services</div>
            <Image src={"/Homepage_1.1.jpg"} alt={""} width={700} height={0} className="rounded-md" />
          </div>
          <div className="flex flex-col items-start" ref={parallaxText1}>
            <div className="text-3xl font-medium text-emerald-950 max-w-[500px] flex flex-col">
              We work for people and the planet – designing, financing, developing and operating transformational infrastructure, for the long term and investing in green impact SMEs.
            </div>
            <div className="rounded-full bg-teal-500 text-xs font-medium text-center px-4 py-1 mt-6 cursor-pointer hover:bg-teal-200 duration-300">
              Read about us

            </div>


          </div>
        </div>
        <div className="w-full flex px-20 justify-center items-center">
          <div className="flex flex-col items-start" ref={parallaxText2}>
            <div className="text-3xl font-medium text-emerald-950 max-w-[500px] flex flex-col">
              Driven by our mission, we are dedicated to the UN Sustainable Development Goals, determined to make them a reality,
              addressing what we believe are the world’s most pressing challenges – building resilient communities, tackling climate change and protecting the environment.
            </div>
            <div className="rounded-full bg-teal-500 text-xs font-medium text-center px-4 py-1 mt-6 cursor-pointer hover:bg-teal-200 duration-300">
              Read about us

            </div>


          </div>
          <div className="m-10 relative">
            <div className="text-white absolute top-1 left-2 text-sm">Sustainable Mobility</div>
            <Image src={"/Homepage_1.2.jpg"} alt={""} width={700} height={0} className="rounded-md" />
          </div>

        </div>
        <div className="w-full flex px-20 justify-center items-center">
          <div className="m-10 relative">
            <div className="text-white absolute top-1 left-2 text-sm">Innovative Low Carbon Solutions</div>
            <Image src={"/Homepage_1.3.jpg"} alt={""} width={650} height={0} className="rounded-md" />
          </div>
          <div className="flex flex-col items-start" ref={parallaxText3}>
            <div className="text-3xl font-medium text-emerald-950 max-w-[500px] flex flex-col">
              Investing responsibly has the power to build economic growth and dramatically improve people’s lives.
            </div>
            <div className="rounded-full bg-teal-500 text-xs font-medium text-center px-4 py-1 mt-6 cursor-pointer hover:bg-teal-200 duration-300">
              Read more

            </div>


          </div>
        </div>

        {/* latest news*/}

        <div className="bg-zinc-100 w-full px-40 py-28 flex flex-col">
          <div className="font-light text-xl mb-20">
            Latest News
          </div>

          <div id='news conatainer' className="flex gap-4">
            <NewsElement
              image={"/News_element_1.jpg"}
              date={"06.05.2024"}
              text={"Meridiam and Conrac Solutions Announce $299M Project to Enhance Reno-Tahoe International Airport’s Efficiency, Sustainability and Customer Experience"}
            />
            <NewsElement
              image={"/News_element_2.jpg"}
              date={"06.05.2024"}
              text={"Meridiam and Conrac Solutions Announce $299M Project to Enhance Reno-Tahoe International Airport’s Efficiency, Sustainability and Customer Experience"}
            />
            <NewsElement
              image={"/News_element_3.jpg"}
              date={"06.05.2024"}
              text={"Meridiam and Conrac Solutions Announce $299M Project to Enhance Reno-Tahoe International Airport’s Efficiency, Sustainability and Customer Experience"}
            />
          </div>
        </div>

        {/* About us */}


        <div className="flex w-full h-[665px]">
          <div className="w-1/2 flex overflow-hidden relative">
            <Image src={aboutUsImage} alt={""} fill={true} style={{ objectFit: "cover" }} />
          </div>
          <div className="w-1/2 flex flex-col justify-center p-10 pl-20 gap-10">
            <div className="group relative flex justify-start items-center " onMouseEnter={()=>{handleImageChange("/Homepage_2.1.jpg")}}>
              <div className="relative hover:cursor-pointer">
                <div className="absolute duration-700 -z-10 inset-0 transition-transform transform scale-y-0 group-hover:scale-y-100 bg-teal-500 origin-bottom w-full h-full"></div>
                <div className="inline-block text-5xl font-medium text-emerald-950">About Us</div>
              </div>
            </div>
            <div className="group relative flex justify-start items-center" onMouseEnter={()=>{handleImageChange("/Homepage_2.2.jpg")}}>
              <div className="relative hover:cursor-pointer">
                <div className="absolute duration-700 -z-10 inset-0 transition-transform transform scale-y-0 group-hover:scale-y-100 bg-teal-500 origin-bottom w-full h-full"></div>
                <div className="inline-block text-5xl font-medium text-emerald-950">Follow us</div>
              </div>
            </div>
            <div className="group relative flex justify-start items-center" onMouseEnter={()=>{handleImageChange("/Homepage_2.3.jpg")}}>
              <div className="relative hover:cursor-pointer">
                <div className="absolute duration-700 -z-10 inset-0 transition-transform transform scale-y-0 group-hover:scale-y-100 bg-teal-500 origin-bottom w-full h-full"></div>
                <div className="inline-block text-5xl font-medium text-emerald-950">Our Impact</div>
              </div>
            </div>

          </div>


        </div>


      </main>
      <Footer />
    </div>
  );
}
function round(arg0: number): import("react").SetStateAction<number> {
  throw new Error("Function not implemented.");
}

