import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import UpcomingEvents from "../upcomingevents/UpcomingEvents";
import PastEvents from "../pastevents/PastEvents";
import SessionForm from "../session/SessionForm";
import React, { useState, useEffect } from "react";
import "./layout.css";

const Layout = ({ navigate }) => {
  const [token] = useState(window.localStorage.getItem("token"));
  const [modal, setModal] = useState(false) 

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  if(token) {
    return (
      <>
      <div>
      <Navbar currentPage="homepage"></Navbar>
        {modal && (<SessionForm setModal={setModal}> </SessionForm>)}
        <div className={`${modal ? "blur" : ""}`}>
        <Header setModal={setModal}></Header>
        <UpcomingEvents></UpcomingEvents>
        <PastEvents></PastEvents>
        </div>
      </div>
      </>
    );
  }

};

export default Layout;