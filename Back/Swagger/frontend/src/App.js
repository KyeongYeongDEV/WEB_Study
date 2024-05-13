// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import NavBar from './components/NavBar'; 

import Main from './pages/main';
import Login from './pages/login';
import Signup from './pages/signUp';
import SignIn from  './pages/signIn'




const App = () => {
  return (
    <>
    <Router>
    <NavBar></NavBar>
      <Routes>
        <Route exact path ='/' Component={Main}></Route>
        <Route exact path ='/login' Component={Login}></Route>
        <Route exact path ='/signup' Component={Signup}></Route>
        <Route exact path = '/singIn'Component={SignIn}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
