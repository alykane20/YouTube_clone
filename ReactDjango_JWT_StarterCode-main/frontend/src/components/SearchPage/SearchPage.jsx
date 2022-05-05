import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import VideoPage from "../VideoPage/VideoPage";
import RelatedVideos from "../RelatedVideos/RelatedVideos"


const SearchPage = (props) => {

    return (
        <div>
            <SearchBar getSearchResults={props.getSearchResults} setSearchTerm={props.setSearchTerm} searchTerm={props.searchTerm}/>
            <div>
        
                <div>
                    <VideoPage videoId={props.videoId}/>
                    <div>{props.title} </div>
                    <div>{props.description}</div>
                </div>
                
            </div>

        </div>
    )
}

 
export default SearchPage;


