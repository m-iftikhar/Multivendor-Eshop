import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/sign-up' element={<SignUpPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
