import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../utils/endPoint";
import Loader from '../loader/Loader'

const Hero = () => {
  // Handle All State
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const [loading, setLoading] = useState(false);

  // fetching data
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(requests.requestPopular);
        setMovies(data?.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  //Trunce String Overview Value
  const trunceStringValue = (str, num) => {
    if (str?.length > num) return `${str.slice(0, num)}...`;
    else return str;
  };

  return (
    <>
     {loading ? <Loader /> : (
       <div className="w-full h-[550px] text-white">
       <div className="w-full h-full relative">
         {/* Overlay Gradient Color */}
         <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
         {/* Banner Image */}
         <img
           className="w-full h-full object-cover"
           src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
           alt={movie?.title}
         />
         {/* Banner Info */}
         <div className="absolute w-full top-[20%] p-4 md:p-8">
           <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
           {/* Banner Button */}
           <div className="my-4">
             <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
               Play
             </button>
             <button className="border text-white border-gray-300 py-2 px-5 ml-4">
               Watch Later
             </button>
           </div>
           <p className="text-gray-400 text-sm">
             Released: {movie?.release_date}
           </p>
           <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
             {trunceStringValue(movie?.overview, 150)}
           </p>
         </div>
       </div>
     </div>
     )}
    </>
  );
};

export default Hero;
