import React from 'react'
import { VscDebugStart } from "react-icons/vsc";






export const MovieItem = ({movie}) => {
  return (
<>


    <div className="flex justify-center ">
        
       <div className="w-[65px] h-[96px] m-3 relative">
            <h3 className=" text-[5px] absolute mt-[130%] ml-[25%] ">{movie.title}</h3>
            <div className="hidden hover:inline z-20 w-10 h-20 flex">
            <VscDebugStart className="absolute mt-[50%] ml-[37%]"/></div>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="hover:blur-[1px] w-64"/>
         </div>        
                        



    </div>
</>
  )
}
