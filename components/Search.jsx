'use client';

import '../styles/Search.css';
import Searchbar from './Searchbar';
import { useState } from 'react';

export default function Search() {

    let [result, setResult] = useState("");
    
    function handleSearch(event) {
        setResult(event.target.value);
    }

    function executeSearch() {
        // search logic here
    }

    return(
        <div className="search">
            <h2 className="section-heading" id="search-heading">Search Events</h2> 
            <Searchbar inputHandler={handleSearch} placeholder={result}/>
            <p>{result}</p>
        </div>
    );
}
