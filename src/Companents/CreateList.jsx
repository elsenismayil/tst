import React, {useRef, useContext} from 'react'
import SDK from './Sdk'
import Dark from './Context'

export default function CreateList() {
    const DarkMood= useContext(Dark)
    const sdk = new SDK();
    const inputRef= useRef(null)
    const descRef=useRef(null)

const addList=async(e) =>{
e.preventDefault()
   const myList={
        name: inputRef.current.value,
        desc: descRef.current.value,
        iso_639_1: "en"
    
   }
   if(myList){
    try{
        await sdk.postList(myList)
    }
    catch(error){
        console.log(error)
    }
    if(myList){
        alert("List added")
    }

}}


return (
    <div style={{height:"87vh"}} className="flex justify-center items-center">
<div className="w-72 ">
<form action="" onSubmit={addList}>
    <div className="flex flex-col ">
        <label style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}} className="my-3 mx-auto font-medium text-xl">List Name</label>
        <input style={DarkMood.dark===false? {background: "#222831",color:'white'}:{background: "#fff",color:'#222831'}} ref={inputRef} type="text" placeholder="Enter list name" className="p-2 rounded outline-none text-gray-800 font-semibold" />
    </div>
    <div className="flex flex-col ">
        <label style={DarkMood.dark===false? {color: "#222831"}:{color: "#fff"}} className="my-3 mx-auto font-medium text- xl">Description</label>
      <textarea style={DarkMood.dark===false? {background: "#222831",color:'white'}:{background: "#fff",color:'#222831'}} ref={descRef} name="" id="" cols="20" rows="4" placeholder="Enter description" className="p-2 rounded outline-none text-gray-800 font-semibold"></textarea>
    </div>
    <div>
        
        <button className="bg-red-600 p-2 rounded outline-none my-3 mx-auto w-full" > Add List</button>
    </div>
</form>
</div>
    </div>
  )
}
