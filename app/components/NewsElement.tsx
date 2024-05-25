import React from 'react'
import Image from 'next/image'

type Props = {
    image : string
    date : string 
    text : string
}

export const NewsElement : React.FC<Props> = ({image, date, text}) => {

    return (
        <div className='relative flex flex-col h-60 w-1/3 cursor-pointer'>
            <div className='relative flex w-full h-full overflow-hidden rounded-md'>
                <Image src={image} alt={''} layout={"fill"} style={{objectFit: "cover"}} className='hover:scale-110 duration-300'  />
            </div>

            <div className='absolute z-10 top-1/2 w-4/5 bg-white left-10 h-64 lg:h-48 rounded-sm p-2'>
                <div className='font-light text-lg text-center text-emerald-950'>
                    {date}
                </div>
                <div className=' text-emerald-950 text-xs lg:text-sm font-medium hover:underline decoration-teal-400'>
                    {text}
                </div>
            </div>

        </div>
        
    )
}