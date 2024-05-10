import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from "react-icons/bs"

const Backbutton = ({destination = "/"}) => {
  return (
    <div className='flex'>
   <Link to={destination} className=' rounded-lg bg-sky-800 text-white w-fit px-4 py-1'>
   <BsArrowLeft className='text-2xl'/>
   </Link>
    </div>
  )
}

export default Backbutton