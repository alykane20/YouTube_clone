import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const SearchPage = () => {
const[]


async function videoSearch(){
    let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=soccer&key=AIzaSyABXiDhKWUWUuqkgrLUQ4fEq6bTI5A1C9M&part=snippet&type=video&maxResults=4')
}


    return ( 

     );
}
 
export default SearchPage;