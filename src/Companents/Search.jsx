import React, { useContext } from 'react'
import { SearchItem } from '../App'
import Dark from './Context'




const Search = () => {
    const DarkMood= useContext(Dark)
    const { inputValue, handleChange, setInputValue } = useContext(SearchItem)
    return <>
        <div className="input-group rounded flex" style={{ position: 'inherit', padding:"5px" }}>
            <input type="search" className="form-control py-1 px-2  rounded" style={ DarkMood.dark===false? {background:"rgb(34, 40, 49)", color:'white'}:{background:"white", color:'black'}} value={inputValue} placeholder="Search" aria-label="Search"
                aria-describedby="search-addon"  onChange={(e) => {
                    handleChange()
                    setInputValue(e.target.value)
                }} />
       
        </div>
    </>
}

export default Search