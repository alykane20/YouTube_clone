// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubeHomePage from "./pages/YouTubeHomePage/YouTubeHomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import RelatedVideos from "./components/RelatedVideos/RelatedVideos";
import {KEY} from './localKey';


// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from "react";




function App() {
const [searchResults, setSearchResults]= useState([]);
const [videoId, setVideoId] = useState([]);
const [title, setTitle] = useState([]);
const [description, setDescription] = useState([]);


    useEffect(() => {
      getSearchResults()
      }, [])
  
  async function getSearchResults(searchTerm = 'soccer'){
  
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}&part=snippet&type=video&maxResults=4`);
        // console.log(response.data.items)
        setSearchResults(response.data.items)
        setVideoId(response.data.items[0].id.videoId)
        setTitle(response.data.items[0].snippet.title)
        setDescription(response.data.items[0].snippet.description)
      }
    

  return (
    <div>
      <Navbar />
      {/* <SearchPage getSearchResults={getSearchResults} searchTerm={searchTerm} setSearchTerm={setSearchTerm} videoId={videoId} title={title} description={description}/> */}
      <SearchPage getSearchResults={getSearchResults}  videoId={videoId} title={title} description={description}/>
      <RelatedVideos videoId={videoId} title={title} description={description} setVideoId={setVideoId} setTitle={setTitle} setDescription={setDescription}/>
        <Routes>
        <Route path="/" element={<YouTubeHomePage/>}/>        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/comments"
          element={
            <PrivateRoute>
            <Comment/>
            </PrivateRoute>
          }
        /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
