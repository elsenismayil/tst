import React, { useState, useEffect, useContext, useCallback } from "react";
import profil from "../Images/pp-img.png";
import logo from "../Images/logo.png";
import "../Css/Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Dark from './Context'
import Search from "./Search"

function Navbar() {
  const [local, setLocal] = useState(null);
  const [status, setStatus] = useState(false);
  const location = useLocation();
  const DarkMood= useContext(Dark)


  const LogOut = useCallback(() => {
    if (local !== null) {
      window.localStorage.removeItem("data");
      console.log("WTH?")
    }
}, [local])


useEffect(() => {
    const locals = JSON.parse(localStorage.getItem("data"));
    setLocal(locals)
}, [location.pathname])

  return (
    <div className="fixed w-full navbar z-50">
      <div className="flex container mx-auto py-4 px-6 place-items-center justify-between" style={{width:"1200px"}}>
        <div className="navbar-left">
          <div className="logo z-40" style={{ width: "70%" }}>
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
        </div>

        <div className="navbar-right flex items-center justify-between ">
<Search></Search>
          <div className="pointer mx-1">
          <Link to={"/CreateList"} className="text-red-600 font-bold">
          Create List
          </Link>
          </div>
          <div className="flex w-32 justify-between">
          <div  onClick={() => DarkMood.dark===false? DarkMood.setDark(true): DarkMood.setDark(false)} style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}} className="text-center w-32 text-xl">
            <i className="fas fa-moon"></i>
          </div>
          <div 
            onClick={() =>
              status === false ? setStatus(true) : setStatus(false)
            }
          >
            <Link
              to={{
                pathname: `${local == null ? "/registeration" : "/"}`,
              }}
              className="text-red-600 font-bold"
            >
              <span>{local === null ? "Register" : null}</span>
            </Link>
           
            {local !== null ? (
              <div className="dropdown">
                <div className="prof-img flex items-center relative">
                  <img src={profil} alt="profilphoto" className="rounded" />
                  <i className="navbar-pic-arrow fas fa-caret-down  text-gray-50 flex items-center px-4"></i>
                </div>
                <div
                  className="m-modal rounded"
                  onClick
                  style={
                    status !== false
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <ul className="flex flex-col text-gray-100 ">
                    <li className="py2 px-1">
                      <h2 className="text-base">
                        {local !== null
                          ? `${local.name + " " + local.lastName}`
                          : " "}
                      </h2>
                    </li>
                    <li className="my-2 text-base cursor-pointer">
                      <Link to={"/CreateList"}>Add List</Link>
                    </li>
                    <li className="logOut text-base cursor-pointer "> 
                  {LogOut}  Log Out
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
