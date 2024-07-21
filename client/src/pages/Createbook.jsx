import React from 'react'
import Spinner from '../components/spinner'
import Backbutton from '../components/backbutton'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Createbook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publishYear, setPublishYear] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handelsavebook = async () => {  
    const newBook = {
      title,
      author,
      publishYear 
    }
    setLoading(true)
    await axios.post("https://book-store-mern-back.vercel.app/books", newBook).then
    (() => {
      setLoading(false)
      navigate("/")
    }).catch((err)=>{
      setLoading(false)
      alert("All fields Are Required")
      console.log(err)
    })
  }

  useEffect(() => {
    handelsavebook()
  }, [])
  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner/> : ""}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] mx-auto p-4'>
       <div className='my-4'>
        <label htmlFor="title" className='text-xl mr-4 text-gray-500'>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} 
        className='border-2 border-sky-400  px-4 py-1 outline-none w-full' />
       </div>
       <div className='my-4'>
        <label htmlFor="title" className='text-xl mr-4 text-gray-500'>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} 
        className='border-2 border-sky-400  px-4 py-1 outline-none w-full' />
       </div>
       <div className='my-4'>
        <label htmlFor="title" className='text-xl mr-4 text-gray-500'>PublishYear</label>
        <input value={publishYear} onChange={(e) => setPublishYear(e.target.value)} 
        className='border-2 border-sky-400  px-4 py-1 outline-none w-full' />
       </div>
   <button onClick={handelsavebook} className=' bg-sky-400 p-2 w-full mt-5 rounded-full font-bold'>
    save
   </button>
      </div>
    </div>
  )
}

export default Createbook