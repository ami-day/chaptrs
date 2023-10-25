import './App.css';
import React from 'react';
import Layout from '../layout/Layout'
import SignUpForm from "../user/SignUpForm";
import SessionForm from '../session/SessionForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from '../auth/LoginForm';

import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
          
          <Route path="/login" element={<LoginForm navigate={useNavigate()}/>}/>
          <Route path='/'  element={<Layout navigate={ useNavigate() }/>}/>
          <Route
          path="/signup"
          element={<SignUpForm navigate={useNavigate()} />}
          />
          <Route path='/sessions'  element={<SessionForm navigate={ useNavigate() }/>}/>
        </Routes>
    );
}

export default App;
