import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Button, Input } from '@mui/material';

const transferStyle = {
  paddingTop: "2%",
  justifyContent: "center",
  alignItems: "center",
  background: "#126FB8",
  height: '100vh',
  minHeight: '100vh'

};

const linkStyle = {
  textDecoration: "none",
  boxShadow: "none",
  color: "black",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Transfer() {

  const [amount, setAmount] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [getMoneyUserId, setGetMoneyUserId] = useState("");


  const saveTransfers = () => {
    fetch("/transfers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("tokenKey"),
        },
        body: JSON.stringify({
          name: "T",
          userId: localStorage.getItem("currentUser"),
          getMoneyUserId: getMoneyUserId,
          amount: amount,
        }),
      })
      .then((res) => res.json())
      .then((result) => { localStorage.setItem("balance", result.balance) })
      .catch((err) => console.log("error"))
  }

  const handleSubmit = () => {
    if(amount === "" || getMoneyUserId === "") {
      return false;
    }
    saveTransfers();
    setIsSent(true);
    setAmount("");
    setGetMoneyUserId("");

  }

  const handleAmount = (value) => {
    setAmount(value);
    setIsSent(false);
  }

  const handleId = (value) => {
    setGetMoneyUserId(value);
    setIsSent(false);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsSent(false);
  };


  return (


    <div style={transferStyle}>

      <Snackbar open={isSent} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          İşlem Başarılı!!
        </Alert>
      </Snackbar>

      <div style={{
        textAlign: "start",
        color: "#575757",
        marginLeft: "33%",
        marginRight: "33%",
        marginBottom: "5%",
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

      <div style={{ fontWeight: "inherit", textAlign: "center", fontSize: "1.2em", color: "white" }}>

        <label>
          Göndermek istediğiniz Hesap ID:
        </label> <br />
        <Input
          style={{
            margin: "5px",
            outline: "none",
            border: "none",
            background: "#D3EAF7",
            width: "25%",
            height: "40px"
          }}
          placeholder="ID"
          onChange={(i) => handleId(i.target.value)}
          value={getMoneyUserId}></Input><br />
        <label>
          Göndermek istediğiniz tutar:
        </label> <br />
        <Input
          style={{
            margin: "5px",
            outline: "none",
            border: "none",
            background: "#D3EAF7",
            width: "25%",
            height: "40px"
          }}
          placeholder="Tutar"
          onChange={(i) => handleAmount(i.target.value)}
          value={amount}></Input>
        <div>
          <Button
            variant='contained'
            style={{
              marginTop: 10,
              marginLeft: "33%",
              marginRight: "33%",
              background: "#FF4747",
              borderRadius: "0px",
              fontWeight: "bold",
              fontSize: "1.2em",
              width: "25%"
            }}
            onClick={handleSubmit}>Gönder</Button>

          <Link to="/" style={linkStyle}>
            <Button
              variant='contained'
              style={{
                marginTop: 10,
                marginLeft: "33%",
                marginRight: "33%",
                background: "#FF4747",
                borderRadius: "0px",
                fontWeight: "bold",
                fontSize: "1.2em",
                width: "25%"
              }}>Ana Menü</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Transfer;

