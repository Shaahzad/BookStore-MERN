import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import Spinner from '../components/spinner'
import {Link } from "react-router-dom"
import {AiOutlineEdit} from "react-icons/ai"
import {BsInfoCircle} from "react-icons/bs"
import {MdOutlineAddBox,MdOutlineDelete} from "react-icons/md"
import "../index.css"

const Home = () => {
  const [Books,setBooks] = useState([])
  const [loading,setLoading] = useState(false)

    const fetchBooks = async()=>{
      try {
        setLoading(true)
        const res = await axios.get("https://book-store-mern-back.vercel.app/books")
        setBooks(res.data.data)
        setLoading(false)  
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }

  useEffect(()=>{fetchBooks()},[])
  return (
    <div className='p-4'>
  <div className='flex justify-around items-center'>
<h1 className='text-3xl my-8'>Book List</h1>
<Link to="/books/create">
  <MdOutlineAddBox className='text-sky-800 text-4xl'/>
</Link>
  </div>
  {
    loading 
    ? <Spinner/> :
    <table className='w-full border-separate border-spacing-2'>
     <thead>
      <tr>
      <th className='border border-slate-600 rounded-md'>No</th>
        <th className='border border-slate-600 rounded-md'>Title</th>
        <th className='border border-slate-600 rounded-md max:md:hidden'>Author</th>
        <th className='border border-slate-600 rounded-md max:md:hidden'>Publish Year</th>
        <th className='border border-slate-600 rounded-md'>Action</th>
      </tr>
     </thead>
     <tbody>
      {Books.map((book,index)=>(
        <tr key={book._id} className='h-8'>
<td className='border border-slate-600 rounded-md text-center'>
{index+1}
</td>
<td className='border border-slate-600 rounded-md text-center'>
{book.title}
</td>
<td className='border border-slate-600 rounded-md max-md:hidden text-center'>
{book.author}
</td>
<td className='border border-slate-600 rounded-md max-md:hidden text-center'>
{book.publishYear}
</td>
 <td className='border border-slate-600 rounded-md'>
  <div className=' flex justify-center gap-x-4'>
    <Link to={`/books/details/${book._id}`}>
    <BsInfoCircle className='text-green-800 text-2xl'/>
    </Link>
    <Link to={`/books/edit/${book._id}`}>
    <AiOutlineEdit className='text-yellow-800 text-2xl'/>
    </Link>
    <Link to={`/books/delete/${book._id}`}>
    <MdOutlineDelete className='text-red-800 text-2xl'/>
    </Link>
  </div>
  </td>             
</tr>
    ))}
     </tbody>
    </table>
  }
    </div>
  )
}

export default Home