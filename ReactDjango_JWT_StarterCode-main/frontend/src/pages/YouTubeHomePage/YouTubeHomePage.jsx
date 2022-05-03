import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const YouTubeHomePage = () => {
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/api/videos/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
            setVideos(response.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchVideos();
      }, [token]);
      return (
        <div >
          <h1>Home Page for {user.username}!</h1>
        </div>
      );
    };

 
export default YouTubeHomePage;