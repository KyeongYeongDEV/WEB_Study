import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Nevbar';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
