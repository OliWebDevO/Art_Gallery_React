import './post.scss'
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    return (
        <div className="post">
            <div className="post-head">
                <img className='user-img' src={post.profilePic} alt="" />
                <div className="user-infos">
                    <div className="user-info">
                        <Link className='user-link' to={`/profile/${post.userId}`}>
                        <span>{post.name}</span>
                        </Link>
                        <p className='small'>a few seconds ago</p>
                    </div>
                    <div className="user-infos-icon">
                        <MoreHorizIcon className='icon'/>
                    </div>
                </div>
            </div>
            <div className="post-content">
                <p>{post.desc}</p>
                <img src={post.img} alt="" />
                <div className="post-reactions">
                    <div className="post-like">
                        <FavoriteBorderIcon className='icon'/>
                        <a href="">Like</a>
                    </div>
                    <div className="post-like">
                        <CommentIcon className='icon'/>
                        <a href="">Comment</a>
                    </div>
                    <div className="post-like">
                        <ShareIcon className='icon'/>
                        <a href="">Share</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Post