import React, { useEffect, useState } from 'react'

function About() {
     
    const [completed,setCompleted] = useState("");
    const [id,setID] = useState("");
    const [title,setTitle] = useState("");
    const [userId,setuserId] = useState("");
    const [number,setNumber] = useState(1); 
    const clicked = () =>{
      setNumber(number++);
    }
    useEffect(() => {
      fetch('https://wad2021.herokuapp.com/contact')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        
      })
  },[]) 
    return (
    <>
    <div>ID: {id}</div>
    <div>Title: {title}</div>
    <div>UserID: {userId}</div>
    <div>Completed: {completed? "true":"false"}</div>
    <div>Number : {number}</div>
    <button onClick={clicked}>click</button>
    </>
  )
}
export default About;
