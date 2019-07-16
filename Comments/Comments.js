import React from 'react';
import './comments.css';

const Comments = () => {
    return ( 
        
        <div className="comment-container">
            
            <img src ="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
            className="responsive-image-coment"></img>
            <div className="comment-info-container">
                <span className="main-coment-info">stars of the week in high force grid-day mission, the design of new projects iteration june</span>
                <span className="comment-time">2 days ago</span>
            </div>
          
        </div>
     );
}
 
export default Comments;