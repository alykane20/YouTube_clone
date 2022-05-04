import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.production.min";


const SearchPage = (props) => {

    console.log(props)

    const handleClick = (event, id, title, description) => {
        event.preventDefault();
    }

    return (
        <div>
            <div>
                {props.videos.map(video => (
                <input type="image"
                onClick={(event)=> handleClick(event, video.id.videoId, video.snippet.title, video.snippet.description)}
                src={video.snippet.thumbnails.medium.url}
                />
                ))}
            </div>

        </div>
    )
}

 
export default SearchPage;


