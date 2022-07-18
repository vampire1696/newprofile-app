import React from 'react'
import {db} from '/config/firebase'
import {collection,addDoc} from "firebase/firestore"

import {useState} from "react"


const profile = () => {
  const dbRef = collection(db, "users");
  const user = {username:"sdf",id:3};
  
  const [loading,setLoading] = useState(false);
  function addUser(){
      setLoading(true);
      addDoc(dbRef,user).then(sdf => {
          setLoading(false);
          console.log("user added successfully")}).catch(error => {console.log(error);
          setLoading(false)})
  }
  return (
    <div>profile
    <button onClick={addUser} disabled={loading}>Click Add</button></div>
    
  )
}

export default profile