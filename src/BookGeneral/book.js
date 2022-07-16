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
    <div className="BookDes">
        <img className="BookPic" src={godfather} alt="Godfather" ></img>
        <div className="Des">
          <span className="Title">{text.title}</span>
          <span className="Author">Author: {text.author}</span>
          <span className="Description">{text.description}</span>   
          <div className="rateStar">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="Fav">    
            <button className="FavBut">Favorite</button>
            <button className="FavBut">Wishlist</button>
          </div>   
        </div>
        <Sidebar /> 
    </div>
  )
}
