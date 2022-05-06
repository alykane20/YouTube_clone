import { useEffect, useState } from "react"
import {KEY} from "../../localKey"
import axios from "axios";

const RelatedVideos  = (props) => {
    const[relatedVideos, setRelatedVideos] = useState([]);
    //const currentVideoID = props.videoId
   
    useEffect(() => {
        getRelatedVideos()
        }, [props.videoId])

    async function getRelatedVideos(){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&key=${KEY}&part=snippet&type=video`);
    console.log(response.data.items);
    setRelatedVideos(response.data.items);
    }
    const handleClick = (event, id, title, description) => {
        event.preventDefault();
        props.setVideoId(id);
        props.setTitle(title);
        props.setDescription(description);
        // getRelatedVideos();
    }
    return (  
        <div>
        {relatedVideos.map((video) => {
            
            // const videoSnippet = video.snippet.thumbnails.medium.url
            // {video.snippet && <img src={video.snippet.thumbnails.medium.url} alt={"no thumbnail available"} onClick={(event)=>handleClick(event, video.id.videoId, video.snippet.title, video.snippet.description)} />}
            // {!video.snippet && <p>No thumbnail:(</p>}
             
            // {value ? this value is return if true : this value is returned if false}
            if(video.snippet){
                return(
                    <img src={video.snippet.thumbnails.medium.url} alt={"no thumbnail available"} onClick={(event)=>handleClick(event, video.id.videoId, video.snippet.title, video.snippet.description)} />
                )
            }else{
                return (<p>NO thumbnail</p>)
        }
        })}
        </div>  
    );
}



export default RelatedVideos ;