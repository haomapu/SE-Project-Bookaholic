import React from 'react'
import "./comment.css"
import Ava from './heof.jpg'
import AllComments from '../allComments/allComments'

export default function comment() {
  return (
    <div class="all">
      <div class="comment">
        <img class="ava" src={Ava} alt=""></img>
        <input class="cmt" placeholder="Write the comment..."></input>
        <button class="postBut">Post</button>
      </div>
        <AllComments />
        <AllComments />
        <AllComments />
    </div>
  )
}
