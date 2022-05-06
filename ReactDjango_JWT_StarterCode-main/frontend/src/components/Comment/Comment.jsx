import React, {useState, useEffect} from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import useAuth from "../../hooks/useAuth";


const CreateComment = (props) => {
    const[text, setText] = useState('');
    const[comment, setComment] = useState('')
    const [user, token] = useAuth();

    useEffect(() => {
        const fetchComments = async () => {
          try {
            debugger
            let response = await axios.get(`http://127.0.0.1:8000/api/video/${props.currentVideo.id.videoId}/`, {
              headers: {
                Authorization: "Bearer " + token,
              },
            }); 
            setComment(response.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchComments();
      }, [props.currentVideo]);


    async function newComment(){
        let newComment = {
            text: text,
            likes: 0,
            dislikes: 0,
            };
        let response = await axios.post(`http://127.0.0.1:8000/api/video/${props.currentVideo}`, newComment)
        if(response.status === 201){
            await props.getSearchResults();
        }console.log(props.currentVideo.id.videoId)}


    return (  
        <div>
        <CommentList currentVideo={props.currentVideo}/>
        <CommentForm text={text} setText={setText} newComment={newComment}/>
        </div>
    );
}
 
export default CreateComment;