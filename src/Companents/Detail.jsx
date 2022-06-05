import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import SDK from "./Sdk"
import Dark from './Context'



export default function Detail() {
  const [movie, setMovie] = useState();
   let {id,  type } = useParams();
const DarkMood = useContext(Dark)
   const sdk = new SDK();


  const apiData = async () => {
    const movieData = await sdk.getPost(type, id)
    setMovie(movieData)
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div>
      <div
        className="movie-item flex flex-row pt-20 px-20 "
        style={{ height: "87vh" }}
      >
        <div className="text-black font-medium w-1/2 px-10 text-sm" style={DarkMood.dark ===true ?{color:"white"} :{color:"black"}}>
          <h2 className="text-4xl tracking-widest pb-2"> {movie?.name ?? movie?.title}</h2>
          <h3 className="text-lg  py-1">
        
            Time : {movie?.release_date || movie?.first_air_date}
          </h3>
          <h3 className="text-lg py-1">Duration:{movie?.vote_average}</h3>
          {/* <span className="text-lg py-1">Stars: {movie?.stars}</span> */}
          <p className="text-lg py-1">Description: {movie?.overview}</p>

         
        </div>
        <div className="img w-1/2">
            <img
              src={"https://image.tmdb.org/t/p/original" + movie?.poster_path}
              alt="movies"
              className="h-full w-full  object-cover"
            />
          </div>
      </div>
    </div>
  );
}
