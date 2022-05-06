// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubeHomePage from "./pages/YouTubeHomePage/YouTubeHomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import CreateComment from "./components/Comment/Comment";
import CommentList from "./components/CommentList/CommentList";
import {KEY} from './localKey';


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from "react";




function App() {
const [searchResults, setSearchResults]= useState([]);
const [currentVideo, setCurrentVideo] = useState({});



    useEffect(() => {
      getSearchResults()
      }, [])
  
  async function getSearchResults(searchTerm = 'soccer'){
  
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=4`);
        console.log(response.data.items)
        setSearchResults(response.data.items)
        setCurrentVideo(response.data.items[0])
      }
    

  return (
    <div>
      <Navbar />
      <SearchPage getSearchResults={getSearchResults} currentVideo={currentVideo}/> 
      <CreateComment currentVideo={currentVideo}/>
    
      <Link to="/login">To comment, please login!</Link>
      
      <RelatedVideos currentVideo={currentVideo} setCurrentVideo={setCurrentVideo}/>
        <Routes>
        <Route path="/" element={<YouTubeHomePage/>}/>        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/comments"
          element={
            <PrivateRoute>
            <Comment videoId={videoId}/>
            </PrivateRoute>
          }
        /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
