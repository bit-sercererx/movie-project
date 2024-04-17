import { IoMdStar } from "react-icons/io";
import move from "../../assest/imgs/mortal.jpg";
import poster from "../../assest/imgs/poster.jpg";
import { FaRegBookmark } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const Home = () => {
  const popularMove = useSelector(
    (state) => state.popularMovieReduser.popularMovie
  );
  const isLoading = useSelector((state) => state.loading);
  const TopRated = useSelector((state) => state.TopRatedReduser.TopRated);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    vertical: false,
  };
  // console.log(popularMove);
  return (
    <div>
      <div className="relative">
        {/* <div className="w-[80%] h-[100%] absolute top-0 left-0 z-10"></div> */}

        <div className="flex w-screen">
          <Slider {...settings} className="w-screen h-">
            {popularMove.map((movie) => (
              <div className=" top-0 flex  items-end h-52 justify-end w-full md:h-64 lg:h-80 z-20">
                <div className="w-screen z-30">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    className="w-full lg:blur-sm"
                  />

                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    className=" hidden lg:inline lg:absolute lg:w-[90px] lg:top-[10%]  "
                  />
                  <VscDebugStart className="text-4xl border-solid border-[3px] border-white rounded-full p-1 absolute top-[37%] ml-[70%] md:top-[40%] md:text-6xl md:ml-[60%] " />

                  <div className="w-[40%] left-5 ml-[20px] md:ml-[25px] ">
                    <h1 className="font-bold pb-2 absolute top-[20%] w-96 md:text-3xl md:w-[80%] lg:text-4xl">
                      {movie.title}
                    </h1>
                    <p className="w-44 text-justify text-[7px] absolute top-[32%] md:text-[10px] md:w-56 md:mt-3">
                      {movie.overview}
                    </p>
                    <IoMdStar className="inline text-[#FFD700] text-[12px] absolute top-[65%] md:mt-9" />
                    <p className="w-28 text-justify text-[7px] inline absolute top-[65%] ml-[12px] mt-[1px] md:text-[10px] md:mt-9">
                      9.0
                    </p>
                    <div>
                      {" "}
                      <button className="bg-red text-sm px-1 rounded-md mt-3 pb-1 inline mr-3 absolute top-[67%] md:text-[16px] md:mt-[60px]">
                        watch
                      </button>
                      <FaRegBookmark className="inline absolute top-[67%] ml-[50px] mt-[15px] md:mt-16" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Popular Movies */}
      <div>
        <h1 className="text-lg pl-6 pt-2">Popular Movies</h1>
        <MovieList movies={popularMove} />
      </div>
      {/* Trending Movies */}
      <div className="mt-6">
        <h1 className="text-lg pl-6 pt-2">Trending Movies</h1>
        <MovieList movies={TopRated} />
      </div>
    </div>
  );
};
export default Home;
