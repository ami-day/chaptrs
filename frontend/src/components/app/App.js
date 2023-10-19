import './App.css';
import React, { useState } from 'react';
import Layout from '../layout/Layout.js'
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
          <Route path='/'  element={<Layout navigate={ useNavigate() }/>}/>
        </Routes>
    );
}

export default App;
