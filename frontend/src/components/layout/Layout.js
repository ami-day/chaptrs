import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import UpcomingEvents from "../upcomingevents/UpcomingEvents";
import PastEvents from "../pastevents/PastEvents";
import SessionForm from "../session/SessionForm";
import React, { useState } from "react";
import "./layout.css";

const Layout = () => {

  const [modal, setModal] = useState(false) 
  return (
    <div>
    <Navbar></Navbar>
      {modal && (<SessionForm setModal={setModal}> </SessionForm>)}
      <div className={`${modal ? "blur" : ""}`}>
      <Header setModal={setModal}></Header>
      <UpcomingEvents></UpcomingEvents>
      <PastEvents></PastEvents>
      </div>
    </div>

  );
};

export default Layout;