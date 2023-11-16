import React, { useState } from 'react'
import data from "../database.js";
import "../index.css";

export default function List() {

   const [list, setList] = useState(data);
   const [count, setCount] = useState(0);

   function goNext() {
      setCount(prev => prev + 1);
    }

   function goPrev() {
      setCount(prev => prev - 1);
   }
  
  return (
    <div className='card w-100 m-auto text-bg-dark rounded'>
      <img src={list[count].url} alt="a Star Wars character" className='card-img-top rounded' />
      <div className="card-body">
      <h3 className='card-title'>{list[count].name}</h3>
      <p className='card-text'>{list[count].kind}</p>
      <button className={`btn btn-success ${count === 0 ? "disabled" : ""}`} onClick={goPrev}>Previous</button>
      <button className={`btn btn-success ms-3 ${count === (list.length - 1) ? "disabled" : ""}`} onClick={goNext}>Next</button>
      </div>
    </div>
  )
}

