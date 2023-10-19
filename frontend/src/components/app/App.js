import './App.css';
import React from 'react';
import Layout from '../layout/Layout'
import SignUpForm from "../user/SignUpForm";
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
          <Route path='/'  element={<Layout navigate={ useNavigate() }/>}/>
          <Route
          path="/signup"
          element={<SignUpForm navigate={useNavigate()} />}
        />
        </Routes>
    );
}

export default App;
