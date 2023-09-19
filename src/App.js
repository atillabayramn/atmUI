import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import User from './components/User';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Transfer from './components/Transfer';
import Auth from './components/Auth/Auth';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={localStorage.getItem("currentUser") != null ? <Home /> : <Navigate replace to="/auth" />} />
          <Route exact path="/users/:userId" element={localStorage.getItem("currentUser") != null ? <User /> : <Navigate replace to="/auth" />} />
          <Route exact path="/withdraws" element={localStorage.getItem("currentUser") != null ? <Withdraw /> : <Navigate replace to="/auth" />} />
          <Route exact path="/deposits" element={localStorage.getItem("currentUser") != null ? <Deposit /> : <Navigate replace to="/auth" />} />
          <Route exact path="/transfers" element={localStorage.getItem("currentUser") != null ? <Transfer /> : <Navigate replace to="/auth" />} />
          <Route exact path="/auth" element={localStorage.getItem("currentUser") != null ? <Home /> : <Auth />} />
          <Route exact path="/auth/login" element={localStorage.getItem("currentUser") != null ? <Navigate replace to="/" /> : <Login />} />
          <Route exact path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
