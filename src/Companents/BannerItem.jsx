 import React from "react";





export default function BannerItem({ title, desc, link, img }) {

  return (
    <div
      className="relative z-0 banner-img w-full h-40"
      style={{
        background: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>
      <div className="detail flex flex-col justify-center  h-full p-16">
        <h2 className="text-5xl text-white font-bold my-4">{title}</h2>
        <p className="text-white font-bold my-2 text-xl">{desc}</p>
        <div className="buttons flex justify-between w-80 my-4">
          <div className="fragman px-4 py-2 bg-white rounded font-bold items-center"  style={{color:"#000"}}>
            <i className="fas fa-play mx-2"></i>
            <a href={link} target="_blank "  style={{ fontSize:"14px"}}>
              Play Trailer
            </a>
          </div>
          <div className="movie-details flex items-center px-4 py-2 bg-gray-300 bg-opacity-40 rounded font-bold">
            <i className="fas fa-exclamation-circle mx-2 text-white"></i>
            <h3 className="text-white text-lg" style={{ fontSize:"14px"}}>More details</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
