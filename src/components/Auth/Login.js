import { FormControl, Input, InputLabel, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const linkStyle = {
  textDecoration: "none",
  boxShadow: "none",
  color: "black",
};


function Login() {

  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");

  const handleUsername = (value) => {
    SetUsername(value);
  }

  const handlePassword = (value) => {
    SetPassword(value);
  }


  const sendRequest = (path) => {
    fetch("/auth/" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
                        localStorage.setItem("tokenKey", result.accessToken);
                        localStorage.setItem("refreshKey", result.refreshToken);
                        localStorage.setItem("currentUser", result.userId);
                        localStorage.setItem("balance", result.balance);
                        localStorage.setItem("username", username)})
      .catch((err) => console.log(err))
    }


  const handleLogin = () => {
    if(username === "" || password === "") {
      return false;
    }

    sendRequest("login");
    window.history.go("/auth");
  }

  return (
    <FormControl style={{
      width: "100%", background: "#126FB8", height: '100vh',
      minHeight: '100vh'
    }}>
      <InputLabel style={{ marginTop: "7%", marginLeft: "32%", marginRight: "33%", textAlign: "left", width: "33%", color: "white" }}>Kullanıcı Adı</InputLabel>
      <Input style={{ width: "33%", marginTop: "8%", marginLeft: "33%", marginRight: "33%", color: "white" }}
        onChange={(i) => handleUsername(i.target.value)} />
      <InputLabel style={{ width: "33%", marginTop: "14%", marginLeft: "32%", textAlign: "left", marginRight: "33%", color: "white" }}>Şifre</InputLabel>
      <Input style={{ width: "33%", marginTop: "5%", marginLeft: "33%", marginRight: "33%", color: "white" }}
        onChange={(i) => handlePassword(i.target.value)}
        type="password" />

      <Button variant='contained'
        style={{
          marginTop: 60,
          marginLeft: "33%",
          marginRight: "33%",
          background: "#FF4747",
          borderColor: "#CC807C",
          borderRadius: "0px",
          fontSize: "1.3em",
          width: "33%",
          fontWeight: "bold"
        }}
        onClick={() => handleLogin()}>Giriş</Button>

      <Link to="/auth" style={linkStyle}>
        <Button variant='contained'
          style={{
            marginTop: 10,
            marginLeft: "32%",
            marginRight: "33%",
            background: "#FF4747",
            borderColor: "#CC807C",
            borderRadius: "0px",
            fontSize: "1.3em",
            width: "33%",
            fontWeight: "bold"
          }}>Anasayfa</Button>
      </Link>
    </FormControl>
  )
}

export default Login;
