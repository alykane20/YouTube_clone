import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";
import SearchBar from "../SearchBar/SearchBar";
import VideoPage from "../VideoPage/VideoPage";




const SearchPage = (props) => {
    



    return (
        <div>
            <SearchBar/>
            <div>
            <div>{props.videoId}</div> 
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


