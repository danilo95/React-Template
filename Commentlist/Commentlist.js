import React from 'react';
import Comments from '../Comments/Comments';

import './commentlist.css';

const Commentlist = () => {
    return (
        <div className="comment-list-container">
            <div className="header-comment">
                <span>Dynamic</span>
            </div>
            <div className="comment-list">
            
                <Comments />
                <hr></hr>
                <Comments />
                <hr></hr>
                <Comments />
                <hr></hr>
                <Comments /> 
                <hr></hr>
                <Comments />
                <hr></hr>
                <Comments />
            </div>
        </div>
    );
}

export default Commentlist;