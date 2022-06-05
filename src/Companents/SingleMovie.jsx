import React from 'react'
import { Link } from "react-router-dom";
import SDK from "./Sdk";

export default function SingleMovie({list_id, id, backdrop_path, original_name, original_title, vote_average, release_date, first_air_date, media_type}) {
    
    const sdk = new SDK();
    const removeItems = async (e) => {
        e.preventDefault();
        const data = {
            items: [
                {
                    media_type: media_type,
                    media_id: id
                }
            ]
        }

        try {
            await sdk.removeItem(list_id, data);
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <>
            
            <Link
              to={`film-detail/${id}/${media_type}`}
              className="movie-link w-64 h-48  mx-1.5"
            >
              <div className="movie-item h-full">
                <img
                  src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                  alt="movies"
                  className="h-full w-full  object-cover"
                />
<div className="relative"
             onClick={removeItems}
              style={{bottom:"95%", left: "90%" }} >
              <i
                className="fas fa-minus-circle"
                style={{ fontSize: "22px" }}
              ></i>
            </div>
                <div className="movieInfo absolute bottom-2 left-4 text-gray-50 font-medium  text-sm">
                  <h2>
                  
                    Name :
                    {
                      original_name ||
                      original_title}
                  </h2>
                  <h3> Time : {release_date || first_air_date}</h3>
                  <span>Stars: {vote_average}</span>
                </div>
              </div>
            </Link>
          </>
  )
}
