import React, { useEffect, useState } from "react";
import  {signInWithEmailAndPassword ,signOut,createUserWithEmailAndPassword,onAuthStateChanged,auth } from "../config/firebase";
//import { useAuth } from '../context/AuthUserProvider'

const Profile = () => {
  //const user = useAuth();

  

  const [emailIn, setEmailIn] = useState(" ");
  const [passwordIn, setPasswordIn] = useState(" ");
  const [emailUp, setEmailUp] = useState(" ");
  const [passwordUp, setPasswordUp] = useState(" ");
  const [repasswordUp, setRePasswordUp] = useState(" ");

  const [user,setUser] = useState(false);

  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState(" ");

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user){
        console.log("user:",user.uid);
        setUser(true);
        
      } else console.log("user not found");
    })
    
  },[])  
  
  const handleSignUp = (e) => {
    e.preventDefault();
    if(repasswordUp !== passwordUp){
        setMessage("Password and Re-Password do not match");
    } else {
    setLoading(true);
    createUserWithEmailAndPassword(auth,emailUp,passwordUp).then(res => {console.log(res);setLoading(false)}).catch(e => {setMessage(e.message);setLoading(false)})
  }
  };

  const handleSignIn = () => {
    
    if(!user)
    setLoading(true);
    
    signInWithEmailAndPassword(auth,emailUp,passwordUp).then(res =>{console.log(res);setLoading(false)}).catch(e => {setMessage(e.message);setLoading(false)} )
  }

  const handleSignOut = () => {
    signOut(auth).then(res => {console.log(res)}).catch(e => console.log(e.message));
  }
  
  return (
    <div>
      <div style={{ height: "30vh", padding: "50px" }}>Profile
      {user? <button onClick={handleSignOut}>Sign Out</button> : <h2>Pls Sign In</h2>}
      </div>
      <div style={{ height: "30vh", padding: "50px" }}>
        Sign in
        <form>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              setEmailIn(e.target.value);
            }}
            type="email"
            required
            id="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setPasswordIn(e.target.value);
              console.log(passwordIn);
            }}
            type="password"
            required
            id="password"
          />
          <br />
          <button onClick={handleSignIn} disabled={loading}>Log in</button>
        </form>
      </div>
      <div style={{ height: "30vh", padding: "50px" }}>
        Sign up
        <form>
          <h3>{message}</h3>
          <label htmlFor="email">Email</label>
          <input
            value={emailUp}
            onChange={(e) => {
              setEmailUp(e.target.value);
            }}
            type="email"
            required
            id="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            value={passwordUp}
            onChange={(e) => {
              setPasswordUp(e.target.value);
            }}
            type="password"
            required
            id="password"
          />
          <br />
          <label htmlFor="password">Re-enter Password</label>
          <input
            value={repasswordUp}
            onChange={(e) => {
              setRePasswordUp(e.target.value);
            }}
            type="password"
            required
            id="password"
          />
          <br />
          <button onClick={handleSignUp} disabled={loading}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
