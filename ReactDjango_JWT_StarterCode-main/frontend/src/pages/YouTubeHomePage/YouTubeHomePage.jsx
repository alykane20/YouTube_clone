import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

const YouTubeHomePage = (props) => {
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        const fetchVideos = async (searchTerm="Soccer") => {
          try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=4`)        
            setVideos(response.data);}            
           
          catch (error) {
            console.log(error.message);
          }}
        
        fetchVideos();
        });
    
    
      return (
        <div >
          {/* <SearchBar/>   */}
          <h1>Home Page for {user.username}!</h1>
          
        </div>
      );
    };

 
export default YouTubeHomePage;