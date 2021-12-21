import React,{useState} from "react";

function Comments({comments}){
    const[commentText, setCommentText]= useState("Hide Comments")

    function handleShowComments(){
        if(commentText === "Hide Comments"){
            setCommentText("Show Comments")
        }
        else{
            
            setCommentText("Hide Comments")
        }
    }
    return <div>
        <button onClick={handleShowComments}>{commentText}</button>
        <hr></hr>
        <h1>{comments.length + " Comments"}</h1>
        <ul className="comments" style={{display:commentText === "Hide Comments"?'block':'none'}} >
            {commentText === "Hide Comments"? comments.map((comment)=>{
            return <div key={comment.id} >
                        <h1>{comment.user}</h1>
                        <p>{comment.comment}</p>
                    </div> 
            }) : null 
            }
        </ul>
    </div>
}

export default Comments