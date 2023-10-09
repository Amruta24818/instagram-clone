import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'

function Post() {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar>A</Avatar>
            __amupatil__. <span>12h</span>
        </div>
        <div className="post__image"></div>
        <div className="post__footer"></div>
    </div>
  )
}

export default Post