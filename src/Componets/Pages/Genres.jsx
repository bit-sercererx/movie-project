import React from 'react'
function Genres() {
  return (
    <div className='bg-neutral-500 mx-auto xl:w-full w-[95%] h-auto flex flex-col pb-3'>
    <div className='w-full h-12 lg:h-16 bg-red-400 flex items-center justify-center'>
     <p className='text-xl md:text-2xl lg:text-4xl text-white font-bold xl:text-3xl'>Genres</p>
    </div>
    <div className='bg-black xl:w-[95%] xl:py-10 xl:mx-auto flex justify-center flex-wrap gap-4 md:gap-7 xl:gap-10 pt-3'>
        <div id='c1' className='relative w-32 md:w-48 h-44 md:h-64 lg:w-[267.84px] lg:h-[319.62px]  rounded-lg ru bg-slate-300'>
           <div className=' w-full h-14 bg-black bg-opacity-80 flex items-center justify-center absolute bottom-0'>
            <p className='text-2xl text-white font-bold'>Action</p>
           </div>
      </div>
       <div id='c2' className='relative w-32 md:w-48 h-44 md:h-64 lg:w-[267.84px] lg:h-[319.62px]  rounded-lg ru bg-slate-300'>
           <div className='w-full h-14 bg-black bg-opacity-80 flex items-center justify-center absolute bottom-0'>
           <p className='text-2xl text-white font-bold'>Drama</p>

           </div>
      </div>
       <div id='c3' className='relative w-32 md:w-48 h-44 md:h-64 lg:w-[267.84px] lg:h-[319.62px]  rounded-lg ru bg-slate-300'>
           <div className='w-full h-14 bg-black bg-opacity-80 flex items-center justify-center absolute bottom-0'>
             <p className='text-2xl text-white font-bold'>Comedy</p>
           </div>
      </div>
       <div id='c4' className='relative w-32 md:w-48 h-44 md:h-64 lg:w-[267.84px] lg:h-[319.62px]  rounded-lg  bg-slate-300'>
           <div className='w-full h-14 bg-black bg-opacity-80 flex items-center justify-center absolute bottom-0'>
           <p className='text-2xl text-white font-bold'>Family</p>
           </div>
      </div>
       <div id='c5' className='relative w-32 md:w-48 h-44 md:h-64 lg:w-[267.84px] lg:h-[319.62px]  rounded-lg ru bg-slate-300'>
           <div className='w-full h-14 bg-black bg-opacity-80 flex items-center justify-center absolute bottom-0'>
           <p className='text-2xl text-white font-bold'>Horror</p>
           </div>
      </div>
       <div id='c6' className='relative w-32 md:w-48 h-44 md:h-64 lg:w-[267.84px] lg:h-[319.62px]  rounded-lg ru bg-slate-300'>
           <div className='w-full h-14 bg-black bg-opacity-80 flex items-center justify-center absolute bottom-0'>
           <p className='text-2xl text-white font-bold'>Romantic</p>
           </div>
      </div>
       <div id='c7' className='relative w-32 md:w-48 h-44 md:h-64 lg:w-[267.84px] lg:h-[319.62px]  rounded-lg ru bg-slate-300'>
           <div className='w-full h-14 bg-black bg-opacity-80 flex items-center justify-center absolute bottom-0'>
           <p className='text-2xl text-white font-bold'>Crime</p>
           </div>
      </div>
       <div id='c8' className='relative w-32 md:w-48 h-44 md:h-64 lg:w-[267.84px] lg:h-[319.62px]  rounded-lg ru bg-slate-300'>
           <div className='w-full h-14 bg-black bg-opacity-80 flex items-center justify-center absolute bottom-0'>
           <p className='text-2xl text-white font-bold'>Anime</p>
           </div>
      </div>
    </div>
      
    </div>
  )
}

export default Genres
