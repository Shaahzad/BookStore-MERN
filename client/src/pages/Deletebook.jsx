import React, { useEffect, useState } from 'react'
import axios from "axios"
import {useParams,useNavigate} from "react-router-dom"
import Spinner from '../components/spinner'
import Backbutton from '../components/backbutton'

const Deletebook = () => {
const [loading,setloading] = useState(false)

  const {id} = useParams()
  const navigate = useNavigate()
  const Delete = async ()=>{
    setloading(true)
    await axios.delete(`https://book-store-mern-back.vercel.app/books/${id}`)
.then(()=>{
  setloading(false)
  navigate("/")
})
  .catch((err)=>console.log(err))
  }


  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ""}

      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] mx-auto p-8'>
       <h3 className='font-bold'>Are You Sure You Want To Delete This Book?</h3>
       <button onClick={Delete} className='bg-red-500 w-full rounded-lg font-bold p-4 mt-4 text-white'>
        Yes,Delete It
       </button>
      </div>
    </div>
  )
}

export default Deletebook