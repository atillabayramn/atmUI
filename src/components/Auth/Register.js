import { FormControl, Input, InputLabel, Button} from '@mui/material'
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const linkStyle= {
    textDecoration: "none",
    boxShadow: "none",
    color: "black",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Register() {

  const[userId, SetUserId] = useState("");
  const[username, SetUsername] = useState("");
  const[password, SetPassword] = useState("");
  const[balance, SetBalance] = useState("");
  const [isSent, setIsSent] = useState(false);


  const handleUserId = (value) => {
    SetUserId(value);
    setIsSent(false);
  }

  const handleUsername = (value) => {
    SetUsername(value);
    setIsSent(false);
  }

  const handlePassword = (value) => {
    SetPassword(value);
    setIsSent(false);
  }

  const handleBalance = (value) => {
    SetBalance(value);
    setIsSent(false);
  }

  const sendRequest = (path) => {
    fetch("/auth/" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        username: username,
        password: password,
        balance: balance,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }

  

  const handleRegister = () => {

    if(username === "" || password === "" || balance === "" || userId === "") {
      return false;
    }

    sendRequest("register");
    setIsSent(true);
    SetUserId("");
    SetUsername("");
    SetPassword("");
    SetBalance("");
    window.location.reload();
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
        setIsSent(false);
    };

  return (
    
    <FormControl style={{width:"100%", background: "#126FB8", height: '100vh',
    minHeight : '100vh' }}>
      <div>
      <Snackbar open={isSent} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Hesap Oluşturuldu! Giriş Yapabilirsiniz!
        </Alert>
      </Snackbar>
      </div>

        <InputLabel style={{width:"33%", marginTop: "1%", marginLeft: "32%", marginRight: "33%", textAlign:"left", color:"white"}}>HesapID</InputLabel>
        <Input style={{width:"33%", marginTop: "3%", marginLeft: "33%", marginRight: "33%", color:"white"}}
        onChange = {(i) => handleUserId(i.target.value)}/>
        <InputLabel style={{width:"33%",marginTop: "6%", marginLeft: "32%", marginRight: "33%", textAlign:"left", color:"white"}}>Ad-Soyad</InputLabel>
        <Input style={{width:"33%",marginTop: "3%", marginLeft: "33%", marginRight: "33%", color:"white"}}
        onChange = {(i) => handleUsername(i.target.value)}/>
        <InputLabel style={{width:"33%",marginTop: "11%", marginLeft: "32%", marginRight: "33%", textAlign:"left", color:"white"}}>Password</InputLabel>
        <Input style={{width:"33%",marginTop: "3%", marginLeft: "33%", marginRight: "33%", color:"white"}}
        onChange = {(i) => handlePassword(i.target.value)}
        type = "password"/>
        <InputLabel style={{width:"33%",marginTop: "16%", marginLeft: "32%", marginRight: "33%", textAlign:"left", color:"white"}}>Bakiye</InputLabel>
        <Input style={{width:"33%",marginTop: "3%", marginLeft: "33%", marginRight: "33%", color:"white"}}
        onChange = {(i) => handleBalance(i.target.value)}/>
       
        <Button variant='contained'
        style={{marginTop: 60, 
        marginLeft: "33%", 
        marginRight: "33%",
        background:"#FF4747", 
        borderColor:"#CC807C", 
        borderRadius:"0px", 
        fontSize:"1.3em",
        width:"33%",
        fontWeight: "bold"}}
        onClick={() => handleRegister()}>Hesap Aç</Button>

        <Link to="/auth" style={linkStyle}>
        <Button variant='contained'
        style={{marginTop: 10, 
        marginLeft: "32%", 
        marginRight: "33%",
        background:"#FF4747", 
        borderColor:"#CC807C", 
        borderRadius:"0px", 
        fontSize:"1.3em",
        width:"33%",
        fontWeight: "bold"}}>Anasayfa</Button>
        </Link>
    </FormControl>
 )
}

export default Register
