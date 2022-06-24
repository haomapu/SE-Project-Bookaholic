import React from 'react'
import godfather from './godfather.jpg'
import './book.css'
export default function Book() {
  return (
    <div class="BookDes">
        <img class="BookPic" src={godfather} alt="Godfather" ></img>
        <div>
          <span class="Title">The Godfather</span>
          <span class="Author">Author: Mario Puzo</span>
        </div>
        <div><span class="Description">The Godfather by Mario Puzo (Author), Illustrated by Robert Carter, Introduced by Jonathan Freedland. Mario Puzo’s brilliant and brutal story of Mafia feuds and retribution in post-war New York is published in a sensational new illustrated Folio Society edition, introduced...</span></div>
    </div>
  )
}
