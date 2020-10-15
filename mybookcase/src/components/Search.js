import React, {useState} from 'react';


function Search (props) {
    
console.log(props)

    function handleSubmit (event) {
        event.preventDefault();
        props.findBooks(props.keyword);
    }
    

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" value={props.keyword} onChange={(event) => props.setKeyword(event.target.value)}/>
            <button>Search</button>
       
        </form>
        
    );
}


export default Search;


