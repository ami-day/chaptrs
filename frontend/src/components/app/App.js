import './App.css';
import React, { useState } from 'react';
import Layout from '../layout/Layout'
import SessionForm from '../session/SessionForm';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
          <Route path='/'  element={<Layout navigate={ useNavigate() }/>}/>
          <Route path='/sessions'  element={<SessionForm navigate={ useNavigate() }/>}/>
        </Routes>
    );
}

export default App;
