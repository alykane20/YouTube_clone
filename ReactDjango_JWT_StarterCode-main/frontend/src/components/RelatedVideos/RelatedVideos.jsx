import { useEffect, useState } from "react"
import {KEY} from "../../localKey"
import axios from "axios";

const RelatedVideos  = (props) => {
    const[relatedVideos, setRelatedVideos] = useState([]);
    //const currentVideoID = props.videoId
   
    useEffect(() => {
        getRelatedVideos()
        }, [props.currentVideo.id.videoId])

    async function getRelatedVideos(){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.currentVideo.id.videoId}&key=${KEY}&part=snippet&type=video`);
    console.log(response.data.items);
    setRelatedVideos(response.data.items);
    }
    const handleClick = (event, video) => {
        event.preventDefault();
        props.setCurrentVideo(video)
        // getRelatedVideos();
    }
    return (  
        <div>
        {relatedVideos.map((video) => {
            if(video.snippet){
                return(
                    <img src={video.snippet.thumbnails.medium.url} alt={"no thumbnail available"} onClick={(event)=>handleClick(event, video)} />
                )
            }else{
                return (<p>NO thumbnail</p>)
        }
        })}
        </div>  
    );
}

export default RelatedVideos ;