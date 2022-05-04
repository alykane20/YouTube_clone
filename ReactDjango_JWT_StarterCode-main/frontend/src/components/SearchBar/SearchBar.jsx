import React, {useState} from "react";
import { Link } from "react-router-dom";


const SearchBar = (props) => {
    const [searchField, setSearchField] = useState("")
    

    

    return (  
        <form>
            <input type="text" placeholder="Search" value={searchField} onClick={(event) =>{setSearchField(event.target.value)}}/>
            <Link to={`/search/${searchField}`}>
            <button>Search</button>
            </Link>
        </form>
    );
}
 
export default SearchBar;