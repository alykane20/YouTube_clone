import { useEffect, useState } from "react"
import {KEY} from "../../localKey"
import axios from "axios";

const RelatedVideos  = (props) => {
    const[relatedVideos, setRelatedVideos] = useState([]);

    
    useEffect(() => {
        getRelatedVideos()
        }, [])

    async function getRelatedVideos(){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&type=video&key=${KEY}&part=snippet`);
    console.log(response.data.items);
    setRelatedVideos(response.data.items);
    }
    
    return (  
        <div>
        {relatedVideos.map((video) => {
            const videoSnippet = video.snippet.thumbnails.medium.url
            return(
                
                <img src={videoSnippet}/>
                
            )
        })}
        </div>  
    );
}



export default RelatedVideos ;