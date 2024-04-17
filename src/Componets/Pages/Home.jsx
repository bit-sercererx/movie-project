import { IoMdStar } from "react-icons/io"
import move from "../../assest/imgs/mortal.jpg"
import poster from "../../assest/imgs/poster.jpg"
import { FaRegBookmark } from "react-icons/fa"
import { VscDebugStart } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";


const Home=()=>{
    const popularMove=useSelector((state)=>state.popularMovie)
    const isLoading=useSelector((state)=>state.loading)
    return(
        <div>
            <div className="relative">
                <div className="w-[80%] h-[100%] absolute top-0 right-0"
                id="background"></div>
                    {/* <div className="w-screen"  >
                        {isLoading? <p>isloading</p>: <MovieList movies={popularMove} /> }
                   </div> */}
                    {/* <div className="absolute top-0 flex  items-end h-52 justify-end w-screen">
                    <VscDebugStart className="text-4xl m-auto mt-[30%] border-solid border-[3px] border-white rounded-full p-1 "/>
                     <img src="move" className=" hidden"  />
                     <div className="w-[40%] left-5 ">
                        <h1 className="font-bold pb-2">
                        </h1>
                        <p className="w-28 text-justify text-[7px]">
                            MMa fighter cole young seek out Earth's greats champel in order stand
                        </p>
                        <IoMdStar className="inline text-[#FFD700]"/>
                        <p className="w-28 text-justify text-[7px] inline">9.0</p>
                        <div> <button className="bg-red text-sm px-1 rounded-md mt-3 pb-1 inline mr-3">watch</button>
                         <FaRegBookmark className="inline  "/>

                        </div>

                     </div>
                    </div> */}

                
            </div>
            {/* Popular Movies */}
       <div>
       <h1 className="text-lg pl-6 pt-2">Popular Movies</h1>
               <MovieList movies={popularMove} /></div>
             {/* Trending Movies */}
             <div className="mt-6">
       <h1 className="text-lg pl-6 pt-2">Trending Movies</h1>
               <MovieList movies={popularMove} /></div>
            
            
        </div>
    )
}
export default Home