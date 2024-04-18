import React from "react";

import actorimg from "../images/c2.jpg";
import actormove from "../images/c1.jpg";
import key from "../../assest/imgs/ke.jpg";
import { Link } from "react-router-dom";

function Actorinfo() {
  return (
    <div className=" h-auto w-full bg-slate-800 flex items-center justify-center pb-22 mb-5">
      <div className=" md:hidden flex flex-col items-center  w-full  h-full pt-16">
        <div className="w-[70%] h-72 mt-2 rounded-xl ">
          <img className="w-full h-full rounded-xl" src={key} alt="" />
        </div>

        <div className="flex flex-col w-[80%] h-[25%] bg--900 mt-5  text-white">
          <h3 className="w-full text-start text-xl  h-[20%] ">Actor</h3>
          <h1 className="w-full text-start  text-4xl font-mono pt-2 h-[40%] 0 py-3">
            keanu reeves
          </h1>

          <div className="flex items-center justify-center w-full text-start h-[40%] py-3  font-medium">
            <p className="w-[45%] text-xl">Gender: Man</p>
            <p className="w-[55%] text-xl">Popularity: 75%</p>
          </div>
        </div>

        <div className="w-[80%] h-[25%] pt-2 text-white text-lg text-justify pb-5">
          Keanu Charles Reeves, whose first name means "cool breeze over the
          mountains" in Hawaiian, was born September 2, 1964 in Beirut, Lebanon.
          He is the son of Patric Reeves, a showgirl and costume designer, and
          Samuel Nowlin Reeves, a geologist. Keanu's father was born in Hawaii,
          of British, Portuguese, Native Hawaiian, and Chinese ancestry, and
          Keanu's mother is originally from Essex England. After his parents'
          marriage dissolved
        </div>

        <div className="w-full h-auto  flex items-center justify-center gap-4 flex-wrap ">
          <div className="h-[80%] w-[20%]  ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>
          <div className="h-[80%] w-[20%]  ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>
          <div className="h-[80%] w-[20%]  ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>
          <div className="h-[80%] w-[20%]  ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden md:relative md:w-full  md:flex md:flex-col ">
        <div className="md:h-[65vh] lg:h-[100vh] w-full flex">
          <div className="h-full w-[50%] ">
            <img className="w-full h-full" src={key} alt="" />
          </div>
          <div
            id="backgroundActor"
            className="absolute right-0   flex flex-col md:h-[65vh] lg:h-[100vh]   w-[75%]"
          >
            <div className="flex flex-col md:w-[85%] h-[85%]  ml-auto mx-2 mt-auto md:space-y-4 lg:space-y-6">
              <h3 className=" w-full text-start md:text-2xl lg:text-4xl  md:h-[5%]  ">
                Actor
              </h3>
              <h1 className=" w-full text-start  md:text-6xl lg:text-7xl font-mono pt-2 h-[15%] ">
                keanu reeves
              </h1>
              <div className="flex items-center justify-center w-full text-start h-[10%]  ">
                <p className="w-[45%] md:text-xl lg:text-3xl">Gender: Man</p>
                <p className="w-[55%] md:text-xl lg:text-3xl">
                  Popularity: 75%
                </p>
              </div>
              <div className="w-[90%] h-[25%] pt-2 text-white md:text-sm lg:text-xl lg:leading-normal text-justify pb-5">
                Keanu Charles Reeves, whose first name means "cool breeze over
                the mountains" in Hawaiian, was born September 2, 1964 in
                Beirut, Lebanon. He is the son of Patric Reeves, a showgirl and
                costume designer, and Samuel Nowlin Reeves, a geologist. Keanu's
                father was born in Hawaii, of British, Portuguese, Native
                Hawaiian, and Chinese ancestry, and Keanu's mother is originally
                from Essex England. After his parents' marriage dissolved
              </div>
            </div>
          </div>
        </div>

        <div className="h-24 w-full bg-darkBlue text-white py-5 text-center font-medium text-3xl z-10 ">
          Actor movie
        </div>

        <div className="w-[95%]   flex items-center justify-center  md:gap-8 lg:gap-20 flex-wrap pb-24 ">
          <div className="h-40 w-32  xl:h-60 xl:w-44  ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>

          <div className="h-40 w-32  xl:h-60 xl:w-44 ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>

          <div className="h-40 w-32 xl:h-60 xl:w-44  ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>

          <div className="h-40 w-32  xl:h-60 xl:w-44 ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>

          <div className="h-40 w-32  xl:h-60 xl:w-44 ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>
          <div className="h-40 w-32  xl:h-60 xl:w-44 ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>
          <div className="h-40 w-32  xl:h-60 xl:w-44 ">
            <img className="w-full h-full rounded-lg" src={actormove} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actorinfo;
