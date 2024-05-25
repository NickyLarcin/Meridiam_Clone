import Link from "next/link"
import React from "react"
import internal from "stream"

type Props = {
    text : any
    h : number
    w : number
}

export const Button : React.FC<Props> = ({text, h, w}) => {

    return (
        
        <div className={`bg-teal-400 rounded-full cursor-pointer flex justify-center items-center h-${h} w-${w}`}>
            {text}
        </div>
    
    )
}