import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navabar from './component/Navabar';
import ImgList from './features/cart/ImgList';

function App() {
  return (
    <div >
      <div className="container">
        <Navabar/>
      </div>
      <div className="container">
        <ImgList/>
      </div>
      
    </div>
  );
}

export default App;
