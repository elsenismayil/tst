import React, {useContext} from "react";
import Dark from '../Context'
import okeyPhoto from "..//..//Images/download.png";

function Step1({onClick}) {
  const DarkMood= useContext(Dark)
  return (
    <div>
  
      <hr />
      <div style={{height: '87vh'}} className="flex justify-center items-center flex-col text-white font-medium">
        <img src={okeyPhoto} alt="" />
        <h4 style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}}>STEP 1 OF 3</h4>
        <h2 style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}} className="my-2">Choose Your Plan.</h2> 
        <p style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}}>
          Choose from any of our three plans, and you won't be charged until
          after your free month ends.
        </p>
        <button onClick={onClick} className="px-6 py-2 my-3 bg-red-600 font-bold rounded ">See The Plans</button>
      </div>
      <hr  />

    </div>
  );
}

export default Step1;