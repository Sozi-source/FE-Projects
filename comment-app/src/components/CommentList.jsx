import React, { useEffect, useState } from 'react'
import data from '../Data/data.json'



function Comment() {

  const [comments, setComments] = useState([])
  const [currentUser, setCurrentUser] =useState(null)

  useEffect(()=>{
    setComments(data.comments)
    setCurrentUser(data.currentUser)
  },[])
    
  
  
  
    return (
    <div>
     {comments.map((comment)=>(
      <div key={comment.id}>
        <div>
          <img src= {comment.user.image.png} 
          alt="" 
          width="20"
          height= "20" 
          />
          <strong>{comment.user.username}</strong>
        </div>
        <p>{comment.content} </p>
        <small>
          Posted: {comment.createdAt} |Score:{comment.score}
        </small>
       
       {/* Replies */}
       {comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply)=>(
            <div key={reply.id}>
              <div>
                <img src={reply.user.image.png} 
                alt= {reply.user.username}
                width= '20'
                height='20' />
              </div>

            </div>
         ) )}
        </div>
       )}

        </div>
       ))}

     {currentUser && (
      <div>
        <h3>{currentUser.username} </h3>
        <img src={currentUser.image.png}
        alt={currentUser.username}
         />
      </div>
     )}
    </div>
  )
}

export default Comment;


