import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import {KEY} from '../../localKey';


import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

const YouTubeHomePage = (props) => {
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);
    
   
    
    
      return (
        <div >
          
          <h1>Home Page videos!</h1>
          
        </div>
      );
    };

 
export default YouTubeHomePage;