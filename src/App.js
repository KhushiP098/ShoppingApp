import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Navbar} from './style/CompStyle';

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Navbar>
        
          <p>Home</p>
          <p>Orders</p>
          <p>Cart</p>
          <p>About Us</p>
          <p>Contact us</p>
          
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
