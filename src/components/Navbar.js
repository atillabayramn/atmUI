
import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const linkStyle = {
  textDecoration: "none",
  boxShadow: "none",
  color: "white",
  fontWeight: "bold",
};

function Navbar() {

  let history = useNavigate();

  const onClick = () => {
    localStorage.removeItem("tokenKey")
    localStorage.removeItem("refreshKey")
    localStorage.removeItem("currentUser")
    localStorage.removeItem("username")
    localStorage.removeItem("balance")
    history("/auth")
    window.location.reload()
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "red" }}>
          <Toolbar>

            <Typography variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }}>
              <Link to="/" style={linkStyle}>ATMBANK</Link>
            </Typography>
            <Typography variant="h6">
              {localStorage.getItem("currentUser") == null ? <Link style={linkStyle} to={{ pathname: '/auth' }}>Giriş/Kayıt Ol</Link> :
                <div>
                  <Link style={linkStyle} to={{ pathname: '/users/' + localStorage.getItem("currentUser") }}>{localStorage.getItem("username")}</Link>
                  <IconButton style={linkStyle} onClick={onClick}><LockOpenOutlinedIcon></LockOpenOutlinedIcon></IconButton>

                </div>}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;