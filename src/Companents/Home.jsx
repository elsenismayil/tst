import React, {useState, useContext, useEffect} from 'react';
import Banner from './Banner'
import Modal from './Modal'
import MovieList from './MovieList'
import SearchPosts from './SearchPosts';
import {SearchItem} from '../App'
import {useInView} from 'react-intersection-observer'
import shortid from "shortid";
import loadingGif from '../Images/loading.gif'



export default function Home() {
    //movie datas 
    const [addData, setAddData]=useState([]);
    const [datas, setDatas]=useState([]) 
//search input 
    const { inputValue, searchResults, setCurrentIndex,loading, currentIndex, handleChange } = useContext(SearchItem)
    // infinity view 
    const { inView, ref } = useInView({
        threshold: 0,
    }) 

    //Modal
    const [visible, setVisible] = useState(false)
    const [modalData, setModalData] = useState()


    useEffect(() => {
        if (inView) {
            setCurrentIndex(currentIndex + 1)
        }
    }, [inView])

    useEffect(() => {
        if (currentIndex > 1) {
            handleChange(true)
        }
    }, [currentIndex])

    //Modal datas
    const isOpen = (index) => {
      const searchData = searchResults[index]
      setModalData(searchData)
      setVisible(true)
  }


  return <>
     {visible && <Modal {...modalData} closeModal={setVisible} addData={addData} />}
{inputValue === ''?
<>
  <Banner/>
  <MovieList addData={addData} datas={datas}  setAddData={setAddData} setData={setDatas}/>
  </>
  :
 <div className=" relative grid grid-cols-3 gap-5 py-20 m-auto" style={{width:"1000px"}}>
    {    loading ? <img className='w-20 h-20 absolute top-10 left-1/2' src={loadingGif} alt="loading img"/> : searchResults.map((e, index)=>{
    const obj ={};
    if (index === searchResults.length - 1) {
      obj.ref = ref;
  }
  return <div  {...obj}> <SearchPosts onClick={() => { isOpen(index) }} key={shortid.generate()} {...e} ></SearchPosts></div>

  }) 
}
 </div>
  }


    
     
  </>
  ;
}
