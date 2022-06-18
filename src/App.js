import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import Button from './component/button';
import Login from './component/login'
import Line from './component/line'
import Text from './component/text'
function App() {
 
  document.body.style.overflow = "hidden";
  return (
    <>
    <Line />
    
    <Text />
    <br></br>
    <Button />
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Login/>} />
    </Routes>
    </BrowserRouter>
    <div className="body"/>
    </>
  );
}
  
export default App;
