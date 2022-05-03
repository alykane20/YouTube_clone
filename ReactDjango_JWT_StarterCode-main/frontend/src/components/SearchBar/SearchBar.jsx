import React, {useState} from "react";


const SearchBar = (props) => {
    const [searchField, setSearchField] = useState("")
    const [searchResults, setSearchResults] = useState([]) 

    function findSong(event){
        event.preventDefault();
        let response = props.songs.filter((el) => {}

    return (  

    );
}
 
export default SearchBar;