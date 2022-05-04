import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";
import SearchBar from "../SearchBar/SearchBar";
import {KEY} from './localKey';



const SearchPage = (props) => {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
    getSearchResults()
    }, [])

async function getSearchResults(searchTerm="Soccer"){
  try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=4`);
      console.log(response.data.items)
      setSearchResults(response.data.items)}
  catch(ex) {
        console.log ('Error');}}
    console.log(props)

    const handleClick = (event, id, title, description) => {
        event.preventDefault();
    }

    return (
        <div>
            <SearchBar/>
            <div>
                {searchResults.map(video => (
                <div key={index}>
                    <input type="image"
                    onClick={(event)=> handleClick(event, video.id.videoId, video.snippet.title, video.snippet.description)}
                    src={video.snippet.thumbnails.medium.url}
                />
                </div>
                ))}
            </div>

        </div>
    )
}

 
export default SearchPage;


