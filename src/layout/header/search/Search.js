import React from 'react'
import './Search.css'
import { FaSearch } from "react-icons/fa"

const Search = () => {
    return <div className='header--search'>
        <form onSubmit={(event) => { event.preventDefault() }}>
            <input type="text" placeholder="Искать здесь..." className='header--input-search' />
            <button type="submit" className='btn' ><FaSearch className="iconBtn" /></button>
        </form>
    </div>
}

export default Search