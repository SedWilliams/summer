'use client';

import '../styles/Search.css';
import Searchbar from './Searchbar';
import { useState } from 'react';
import { data } from '../data/data.js';
import SearchResult from './SearchResult';

export default function Search() {

    let [result, setResult] = useState("");
    let [searchResults, setSearchResults] = useState(data);

    function handleSearch(event) {
        setResult(event.target.value);
    }

    function executeSearch() {

    }

    return(
        <div className="search">
            <h2 className="section-heading" id="search-heading">Search Events</h2> 
            <Searchbar inputHandler={handleSearch} placeholder={result}/>
            <SearchResult result={searchResults}/>
        </div>
    );
}
