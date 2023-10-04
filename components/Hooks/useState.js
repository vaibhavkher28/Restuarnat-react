import React from 'react'
// import "./style.css"
import { useState } from 'react'

const UseState = () => {
    const initialData=10;
    const[myNum,setMyNum]=useState(initialData)
  return (
    <>
    <div className="center_div">
        <p>{myNum} </p>
        <div class= "button2" onClick={()=>setMyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           INCR
        </div>
        <div class= "button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          DEcr
        </div>
    </div>
      
    </>
  )
}

export default UseState
