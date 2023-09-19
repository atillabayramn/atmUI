import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import * as React from 'react';
import UserSummary from '../components/UserSummary';


const linkStyle = {
  textDecoration: "none",
  boxShadow: "none",
  color: "black",
};

function User() {

  const {userId} = useParams();

  return (
    <body style={{
      background: "#126FB8", height: '100vh',
      minHeight: '100vh'
    }}>

      <br />
      <br />
      <br />
      <div style={{
        textAlign: "start",
        color: "#575757",
        marginLeft: "33%",
        marginRight: "33%",
        marginBottom: "2%",
        background: "#FF4747",
        borderRadius: "10px",
      }}>
        <br />
        <div style={{ fontSize: "1.2em", marginLeft: "3%", fontWeight: "bold" }}>
          Hesap ID: <label style={{ color: "#FFFFFF" }}>{localStorage.getItem("currentUser")}</label>
        </div>
        <div style={{ fontSize: "1.2em", marginLeft: "3%", fontWeight: "bold" }}>
          Ad-Soyad: <label style={{ color: "#FFFFFF" }}>{localStorage.getItem("username")}</label>
        </div>
        <div style={{ fontSize: "1.2em", marginLeft: "3%", fontWeight: "bold" }}>
          Bakiye: <label style={{ color: "#FFFFFF" }}>{localStorage.getItem("balance")}</label>
        </div>
        <br />
      </div>

      <Link to="/" style={linkStyle}>
        <Button
          variant='contained'
          style={{
            marginLeft: "33%",
            marginRight: "33%",
            marginBottom: "3%",
            background: "#FF4747",
            borderRadius: "0px",
            fontWeight: "bold",
            fontSize: "1.2em",
            width: "25%"
          }}>Ana Menü</Button>
      </Link>
  
      <UserSummary userId = {localStorage.getItem("currentUser")}/>

    </body>
  );
}

export default User;

