import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios" 
import {useParams} from   "react-router-dom"
import BackButton from "../components/backbutton"
import Spinner from "../components/spinner"
import {format} from "timeago.js"
const Showbook = () => {
  const [book,setBook] = useState([])
  const [loading,setLoading] = useState(false)
  const {id} = useParams()
  useEffect(()=>{
    const fetchBookbyid = async()=>{
      const res = await axios.get(`https://book-store-mern-back.vercel.app/books/${id}`)
      setBook(res.data)
      setLoading(false)
    }
    fetchBookbyid()
  },[])
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Book Detail</h1>
      {loading? <Spinner/> : 
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
   <div className='my-4'>
<span className='text-xl mr-4 text-gray-500'>Id</span>
<span>{book._id}</span>
   </div>
   <div className='my-4'>
<span className='text-xl mr-4 text-gray-500'>Title</span>
<span>{book.title}</span>
   </div>
   <div className='my-4'>
<span className='text-xl mr-4 text-gray-500'>Author</span>
<span>{book.author}</span>
   </div>
   <div className='my-4'>
<span className='text-xl mr-4 text-gray-500'>PublishYear</span>
<span>{book.publishYear}</span>
   </div>
   <div className='my-4'>
<span className='text-xl mr-4 text-gray-500'>Create Time</span>
<span>{format(book.createdAt)}</span>
   </div>
   <div className='my-4'>
<span className='text-xl mr-4 text-gray-500'>Update Time</span>
<span>{format(book.updatedAt)}</span>
   </div>

      </div>  
      }
    </div>
  )
}

export default Showbook