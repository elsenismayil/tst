import React, {useEffect} from "react";
import "../Css/MovieList.css";
import Movie from "./Movie";
import SDK from './Sdk'
import shortid from "shortid";


export default function MovieList({ datas,  setAddData, setData}) {
  const sdk = new SDK();
  const apiData=async()=>{
  const data=await sdk.getListsFromAccount()
  setAddData(data)
  const lists = data?.results.map(w=>w.id)
  Promise.all(lists.map(w=>sdk.getList(w))).then(w=>{
    setData(w)
    })
  }

  useEffect(() => {
    apiData()
  }, []);


  return (
    <div className="container mx-auto px-4">
{datas!==null? 
 datas.map((e) =>{
  return(
  <Movie key = {shortid.generate()} {...e} list_id={e.id} />
    )
 }
)
 :null}  

    </div>
  );
}
