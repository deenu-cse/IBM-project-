import React from 'react';
import "../../Styles/Searchbar.css"

function SearchBar() {
    return (
        <div className="search-bar">
            <img
                loading="lazy"
                src="https://img.icons8.com/?size=100&id=131&format=png&color=000000 "
                alt=""
                className="search-icon"
            />
            <input type="text" placeholder="Search here ..." className="search-input" />
        </div>
    );
};

export default SearchBar;
