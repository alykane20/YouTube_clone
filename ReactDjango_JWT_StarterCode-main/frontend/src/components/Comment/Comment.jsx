import React, {useState, useEffect} from "react";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import useAuth from "../../hooks/useAuth";


const CreateComment = (props) => {
    const[text, setText] = useState('');
    const[comment, setComment] = useState('')
    const [user, token] = useAuth();

    useEffect(() => {
        const fetchComments = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/api/video/{props.video.Id}/", {
              headers: {
                Authorization: "Bearer " + token,
              },
            }); 
            setComment(response.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        console.log(comment)
        fetchComments();
      }, [token]);


    async function newComment(){
        let newComment = {
            text: text,
            likes: 0,
            dislikes: 0,
            };
        let response = await axios.post('http://127.0.0.1:8000/api/video/{props.video.Id}', newComment)
        if(response.status === 201){
            await props.getSearchResults();
        }}


    return (  
        
        <CommentForm text={text} setText={setText} newComment={newComment}/>
      
    );
}
 
export default CreateComment;