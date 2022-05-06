import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = (props) => {
   const [commentList, setCommentList]= useState('')

   useEffect(()=> {
    DisplayCommentList();
  }, [])

    async function DisplayCommentList(){
    
        let response = await axios.get(`http://127.0.0.1:8000/api/video/${props.videoId}`)
        debugger
        if(props.videoId == response.data.video_id){
            setCommentList(response.data);
        }
        
}
    return (  
        <div></div>
    );
}
 
export default CommentList;


