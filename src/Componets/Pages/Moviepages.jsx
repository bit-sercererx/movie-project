import React from "react";
import { useSelector } from "react-redux";

function MovesPages() {
  const allmovie = useSelector((state) => state.allmovieReduser.allmovie);

  console.log(allmovie);
  return (
    <div className="w-full h-auto flex flex-col bg-gray-700">
      <div className="flex items-center justify-start h-14  pb-14">
        <p className="pt-8 pl-6 md:pl-10 lg:pl-16 xl:pl-14 text-xl text-white">
          moves page
        </p>
      </div>

      <div className=" pb-6 mx-auto flex items-center justify-center flex-wrap gap-4 lg:gap-x-6 lg:gap-y-28 w-[95%] lg:w-[95%] h-auto">
        {allmovie.map((movie) => (
          <div className="w-56 h-72 sm:w-36 md:w-28">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              className="w-48  md:w-64  rounded-lg"
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
      <div className=" w-full h-14 flex items-center justify-center mt-20 mb-9">
        <button className="bg-red px-4 py-1 rounded-xl text-white font-bold ">
          See more
        </button>
      </div>
    </div>
  );
}

export default MovesPages;
