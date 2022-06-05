import React, { useState, useEffect, useContext } from "react";
import "..//Css/MovieList.css";
import Dark from "./Context";
import SingleMovie from "./SingleMovie";
import shortid from "shortid";
import {Link} from "react-router-dom"

const style = {
  width: "1200px",
};

export default function Movie({ name, results, list_id }) {
 
  const [value, setValue] = useState(0);
  const [length, setLength] = useState();
  const DarkMood = useContext(Dark);

  useEffect(() => {
    if (results) {
      setLength(results.length);
    }
  }, [results]);


 

  //Slider
  const nextSlider = () => {
    if (value > -((length - (length % 4)) * 200)) {
      console.log(value);
      setValue(value - parseFloat(style.width.replace(/\D/g, "")));
    }
  };

  const prevSlider = () => {
    if (value + parseFloat(style.width.replace(/\D/g, "")) <= 0) {
      setValue(value + parseFloat(style.width.replace(/\D/g, "")));
    }
  };



  return (
    <div className="movies-section">
      <div className=" box-border	overflow-hidden">
        <div className="py-2 flex items-center">
          <h2
            className="text-gray-50 text-2xl font-bold my-3"
            style={
              DarkMood.dark === true ? { color: "white" } : { color: "black" }
            }
          >
            {name}
          </h2>
          <Link to={{
            pathname: "/CategoryEdit",
            state: { list_id: list_id }
            }}>
          <div className=" text-red-600 mx-4">
          <i className="far fa-edit"></i>
          </div>
          </Link>
         
        
        </div>
        <div
          style={{
            left: `${value}px`,
          }}
          className="movies inline-flex flex-nowrap relative transition-all	"
        >
          {results.map((item, index)=>{
          
            return(
              <SingleMovie key={shortid.generate()} list_id={list_id} {...item} />
            )
          })}
        
        </div>
      </div>
      <div className="buttons">
        <button className="next" onClick={nextSlider}>
          <i className="fas fa-chevron-right text-gray-50"></i>
        </button>
        <button className="prev" onClick={prevSlider}>
          <i className="fas fa-chevron-left text-gray-50"></i>
        </button>
      </div>
    </div>
  );
}
