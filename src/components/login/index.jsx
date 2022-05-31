import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import "./index.css"


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const getValueEmail = (e) => {
    let valueEmail = e.target.value
    setEmail(valueEmail)
  }
  const getValuePassword = (e) => {
    let valuePassword = e.target.value
    setPassword(valuePassword)
  }
  const getToken = () => {
    let data = {
      email: email,
      password: password
    }
    axios.post("https://62913677665ea71fe142a512.mockapi.io/api/v1/login/", data).then((res)=>{
      let token = res.data.token
      localStorage.setItem("token", token)
  
      let status = res.status
      if(status === 201){
          /**
           * num endpoint normal de login é retornado
           * o status 200. Como está sendo utilizado 
           * MOCK API, o status está sendo 201.
           */
        navigate("/profile/")
      }
    })
    
  }
  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token !== null){
      navigate("/profile/")
    }
  },[])

  return (
    <div className="Login">
      <h1 className="titulo">Login</h1>
      <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        margin="normal"
        type="email"
        onChange={getValueEmail}
        value={email}
      />
      <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        margin="normal"
        onChange={getValuePassword}
        value={password}
        type="password"
      />
      <Button
       variant="contained"
       onClick={getToken}
       >Login
       </Button>
    </div>
  );
}

export default Login;