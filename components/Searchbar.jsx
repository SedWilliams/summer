'use client';

import '../styles/Searchbar.css';

export default function Searchbar({ inputHandler, placeholder }) {
    return (
        <div className="searchbar">
            <input type="text" id="search" onChange={(e) => inputHandler(e)} placeholder={placeholder}/>
        </div>
    );
}

