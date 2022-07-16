import React from 'react'
import godfather from './godfather.jpg'
import './book.css'
import Sidebar from "../sidebar/sidebar";
import { useState } from 'react'
import axios from "axios";

export default function Book() {
  const [text, setText] = useState([]);
  
  function getQuote() {
      axios.get("http://localhost:5000/book",  { crossdomain: true }).then(response => {
        setText(response.data[0])
      }).catch((error)=>{
        console.log("Error",error);
      });
  }

  getQuote()

  return (
    <div class="BookDes">
        <img class="BookPic" src={godfather} alt="Godfather" ></img>
        <div class="Des">
          <span class="Title">{text.title}</span>
          <span class="Author">Author: {text.author}</span>
          <span class="Description">{text.description}</span>   
          <div class="rateStar">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
          <div class="Fav">    
            <button class="FavBut">Favorite</button>
            <button class="FavBut">Wishlist</button>
          </div>   
        </div>
        <Sidebar /> 
    </div>
  )
}
