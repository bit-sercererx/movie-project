import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Actors() {
  const actors = useSelector((state) => state.ActorsReduser.Actors);
  console.log(actors);

  return (
    <Link to="/Actorinfo">
      <div className="mx-auto bg-green-400 flex flex-wrap items-center justify-center h-auto gap-4 xl:space-x-10 w-[98%] py-2 mt-[80px]  mb-6">
        {actors.map((movie) => (
          <div className="w-32 h-48 md:w-44 md:h-60 lg:w-52 lg:h-72 bg-slate-600 flex flex-col items-center justify-center rounded-xl cursor-pointer ">
            <div className="mt-2 w-[90%] h-[70%] rounded-xl bg-yellow-300">
              {" "}
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.profile_path}`}
                alt=""
              />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-1xl text-white font-serif h-[30%] w-full flex items-center justify-center">
              {movie.name}
            </p>
          </div>
        ))}
      </div>
    </Link>
  );
}
export default Actors;
