// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import YouTubeHomePage from "./pages/YouTubeHomePage/YouTubeHomePage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from "react/cjs/react.production.min";

import {KEY} from './localKey';


function App() {
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


  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
            <YouTubeHomePage />
            <PrivateRoute>
              {/* Ability to add comments/replies on a video after login */}
            </PrivateRoute>
          </div>}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
