import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");

  const  handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    axios.post('http://localhost:2015/login',{ username, code })
      .then((response)=>{
        console.log('response.data :>> ', response.data);
        if(response.data.success === true){
          alert(response.data.msg)
          localStorage.setItem('token', response.data.token); // Save token to local storage
          window.location.href="/profile"
        }else{
          alert(response.data.msg)
        }
      })
  }
  return (
    <div className="container">
      <div className="input-container">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          value={username} 
          onChange={(event) => setUsername(event.target.value)} 
          placeholder="Enter Username" 
          required 
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          value={code} 
          onChange={(event) => setCode(event.target.value)} 
          placeholder="Enter Password" 
          required 
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
