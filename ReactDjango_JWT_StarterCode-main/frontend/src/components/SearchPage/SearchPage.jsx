import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";



const SearchPage = () => {
const[video, setVideo] = useState([{ }])
 useEffect(() => {
     videoSearch();
 },[])
    async function videoSearch(){
    try{
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=soccer&key=AIzaSyABXiDhKWUWUuqkgrLUQ4fEq6bTI5A1C9M&part=snippet&type=video&maxResults=4');
        console.log(response.data)
        setVideo(response.data)
} catch(ex) {
    console.log ('Error');
  }
}


    return 

}

 
export default SearchPage;


