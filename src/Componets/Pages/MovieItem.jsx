import React from "react";
import { VscDebugStart } from "react-icons/vsc";

export const MovieItem = ({ movie }) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-[100px] m-3 relative md:w-[150px] lg:w-[200px]">
          <h3 className=" text-[8px] absolute mt-[100%] ml-[20%] ">
            {movie.title}
          </h3>
          <div className="hidden hover:inline z-20 w-10 h-20 flex"></div>
          <VscDebugStart className="absolute mt-[50%] ml-[34%] border-2 border-white border-solid rounded-full text-3xl" />
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            className="hover:opacity-25"
          />
        </div>
      </div>
    </>
  );
};
