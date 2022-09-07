import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/home/Home"
import Login from './pages/home/login/Login';
import Register from './pages/home/register/Register';
import React, { Suspense } from 'react';
import Profile from './pages/home/profile/Profile';




function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
      <Route exact path="/" element={<Navigate to="/login" />} />
     

          <Route path="/signup" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
    </Suspense>

    </Router>
  )
}

export default App;
