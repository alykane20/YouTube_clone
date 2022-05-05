import { useEffect, useState } from "react"
import {KEY} from "../../localKey"
import axios from "axios";

const RelatedVideos  = (props) => {
    const[relatedVideos, setRelatedVideos] = useState([]);

    
    useEffect(() => {
        getRelatedVideos()
        }, [])

    async function getRelatedVideos(){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=${KEY}`);
    console.log(response.data)
    setRelatedVideos(response.data)
    }
    return (  
        <div>Video?</div>
        
    );
}



export default RelatedVideos ;