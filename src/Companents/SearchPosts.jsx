import React from 'react'
import {Link } from 'react-router-dom'



const SearchPost = ({id, release_date, media_type, vote_average, original_name, original_title, first_air_date, backdrop_path, onClick}) => {

    return(
        <div className=" mx-auto  relative" style={{width:"300px"}}>
              <Link  to={{
                pathname: `film-detail/${id}/${media_type}`
            }}>
            <div className=" d-block relative border-gray-500" >
                <img src={'https://image.tmdb.org/t/p/original/' + backdrop_path} alt="" /> 
                <div className="absolute top-8 left-8">
                <p className=" text-2xl my-2">{original_name || original_title}</p>
                <p className=" text-lg">
                    <span className="green">{release_date || first_air_date}</span>
                    <span className="rate">{vote_average}</span>
                </p>
                </div>
                
            </div>
            </Link>
            <div className=" absolute right-0  top-0 m-2 pointer" onClick={onClick}>
                <i  className="fas fa-plus-circle" style={{fontSize:"22px"}} ></i>
            </div>

        </div>


     )   
    
}

export default SearchPost
