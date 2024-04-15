import {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isusesearch , setusesearch] = useState(false)
  const [isinputsearch , setinputsearch]=useState("")
  const [isclickmenu ,setclickmenu]=useState(false)
 function handelsearch (){
  setusesearch(!isusesearch)
 };

 function handleInputSearch(e) {
  setinputsearch(e.target.value);
};

function handelcilckmenu (){
  setclickmenu(!isclickmenu)
}

  return (
    <div className=' border-b-2 bg-green-500 border-blue-800 h-16 flex items-center justify-between w-full md:w-full lg:w-11/12 absolute top-0 md:absolute lg:top-2 lg:left-14 '>
      <div className='p-4 text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-red-600 font-bold'>logo</div>

       <div className='md:hidden'>
       {isclickmenu ?
      <div className='w-44 h-80 bg-slate-800 rounded-bl-xl absolute top-0 right-0 flex flex-col items-center justify-center ' >
        <IoClose onClick={handelcilckmenu} color='white' size='2rem' className='absolute top-1 right-1 cursor-pointer'/>
        <ul className='flex flex-col items-center justify-center gap-6 text-white' >
        <li className='li-hover-effect cursor-pointer'>Home</li>
        <li className='li-hover-effect cursor-pointer'>Genre</li>
        <li className='li-hover-effect cursor-pointer'>Actor</li>
        <li className='li-hover-effect cursor-pointer'>About</li>
        <li className='li-hover-effect cursor-pointer'>Bookmarked</li>
        </ul>
      </div>
       :
       <>
        {isusesearch?
         <div className='md:hidden flex items-center justify-center gap-4 p-4 text-red-600'>
          <FaSearch size='1.5rem' color='#970A20' onClick={handelsearch} className='cursor-pointer order-1'/>
          <input  className='w-40 h-8 rounded-lg  ' value={isinputsearch} type="text" onChange={handleInputSearch} />
         </div>
         :
         <div className='md:hidden flex items-center justify-center gap-4 p-4 text-red-600'>
        <TiThMenu className='order-2 cursor-pointer' color='#970A20' size='2rem' onClick={handelcilckmenu} />
        <FaSearch size='1.5rem' color='#970A20' onClick={handelsearch} className='cursor-pointer order-1'/>
         </div>
        }
       </>
      }
       </div>

        
      

      <ul className='hidden md:flex md:items-center md:justify-center md:gap-10 lg:gap-20 xl:gap-20 md:font-bold md:text-lg md:text-white md:p-2'>
        {isusesearch? (
          <>
              <input  className='w-80 h-8 rounded-lg  ' value={isinputsearch} type="text" onChange={handleInputSearch} />
              <FaSearch size='2.5rem' color='#970A20' onClick={handelsearch} className='cursor-pointer'/>
          </>
        ):(
         <>
        <li className='li-hover-effect cursor-pointer'>Home</li>
        <li className='li-hover-effect cursor-pointer'>Genre</li>
        <li className='li-hover-effect cursor-pointer'>Actor</li>
        <li className='li-hover-effect cursor-pointer'>About</li>
        <li className='li-hover-effect cursor-pointer'>Bookmarked</li>
        <li className='cursor-pointer'><FaSearch  size='2.5rem' color='#970A20' onClick={handelsearch}/></li>
        </>
        )
         
      }

      </ul>
    </div>
  )
}

export default Navbar
