import './App.css';
import {BrowserRouter as Router}  from "react-router-dom"
import Header from './components/header';
import Join from './pages/join';

function App() {
  return (
    <>
      <Header></Header>
      <Join></Join>
    </>

  );
}

export default App;
