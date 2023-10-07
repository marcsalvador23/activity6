"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function Counter(){
  const[count,setCOunt]=useState(0);
  
  const increment =()=>{
    setCOunt(count +1);

  }
  const decrement =()=>{
    setCOunt(count -1)
  }
  return(
    <center><div>
      <h1>COUNTER</h1>
      <p>COUNT : {count}</p>
      <button class="increment" onClick={increment}>INCREMENT</button>
      <button class="decrement" onClick={decrement}>DECREMENT</button>
    </div></center>
  )
}