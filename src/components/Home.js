
import {React} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const linkStyle = {
    textDecoration: "none",
    boxShadow: "none",
    color: "black",
};

function Home() {
   
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

            <Link to="./withdraws" style={linkStyle}>
                <div>
                    <Button variant='contained'
                        style={{
                            marginTop: 10,
                            marginLeft: "33%",
                            marginRight: "33%",
                            background: "#FF4747",
                            borderColor: "#CC807C",
                            borderRadius: "0px",
                            fontWeight: "bold",
                            fontSize: "1.2em",
                            width: "25%"
                        }}>Para Çekme</Button>
                </div>
            </Link>
            <Link to="/deposits" style={linkStyle}>
                <div>
                    <Button variant='contained'
                        style={{
                            marginTop: 10,
                            marginLeft: "33%",
                            marginRight: "33%",
                            background: "#FF4747",
                            borderColor: "#CC807C",
                            borderRadius: "0px",
                            fontWeight: "bold",
                            fontSize: "1.2em",
                            width: "25%"
                        }}>Para Yatırma</Button>
                </div>
            </Link>
            <Link to="/transfers" style={linkStyle}>
                <div>
                    <Button variant='contained'
                        style={{
                            marginTop: 10,
                            marginLeft: "33%",
                            marginRight: "33%",
                            background: "#FF4747",
                            borderColor: "#CC807C",
                            borderRadius: "0px",
                            fontWeight: "bold",
                            fontSize: "1.2em",
                            width: "25%"
                        }}>Havale/EFT</Button>
                </div>
            </Link>
            <Link to="/users/:userId" style={linkStyle}>
                <div>
                    <Button variant='contained'
                        style={{
                            marginTop: 10,
                            marginLeft: "33%",
                            marginRight: "33%",
                            background: "#FF4747",
                            borderColor: "#CC807C",
                            borderRadius: "0px",
                            fontWeight: "bold",
                            fontSize: "1.2em",
                            width: "25%"
                        }}>Hesap Özeti</Button>
                </div>
            </Link>
        </body>

    );
}

export default Home;