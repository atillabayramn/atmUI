

import { Link } from 'react-router-dom';
import * as React from 'react';
import { Box, Button } from '@mui/material';



const linkStyle = {
  textDecoration: "none",
  boxShadow: "none",
  color: "black",

};

function Auth() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{
        background: "#126FB8", height: '100vh',
        minHeight: '100vh'
      }}>

        <div style={{
          fontSize: "5em",
          background: "#126FB8",
          fontWeight: "bold",
          color: "white"
        }}>
          <br />
          ATM BANK
          <br />
          <br />
          <Link to="./login" style={linkStyle}>
            <Button variant='contained'
              style={{
                marginTop: 10,
                marginRight: 5,
                background: "#FF4747",
                borderColor: "#CC807C",
                borderRadius: "0px",
                fontWeight: "bold",
                fontSize: "0.3em",
                width: "25%"
              }}>Giriş Yap</Button>
          </Link>

          <Link to="./register" style={linkStyle}>
            <Button variant='contained'
              style={{
                marginTop: 10,
                marginLeft: 5,
                background: "#FF4747",
                borderColor: "#CC807C",
                borderRadius: "0px",
                fontWeight: "bold",
                fontSize: "0.3em",
                width: "25%"
              }}>Hesap Oluştur</Button>
          </Link>

        </div>
      </Box>
    </div>
  )
}

export default Auth
