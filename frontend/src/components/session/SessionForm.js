import React, { useState } from "react";
import "./sessionform.css";

const SessionForm = ({ token, setSessions }) => {
    const [date, setDate] = useState("");   
    const [location, setLocation] = useState("");
    const [chosenBook, setChosenBook] = useState("")

    const onHandleChangeDate = (event) => {
        setDate(event.target.value)
    }

    const onHandleChangeLocation = (event) => {
        setLocation(event.target.value)
    }

    const onHandleChangeChosenBook = (event) => {
        setChosenBook(event.target.value)
    }


    const handleSubmitSession = async (event) => {
        event.preventDefault(); 
        const  formData = new FormData(); 
        formData.append("date", date);
        formData.append("location", location);
        formData.append("chosenBook", chosenBook);

        if (token) {
            fetch("/sessions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,  
            })
            .then((response) => {
                if (response.status === 201) {
                    console.log("Session successfully added"); 
                    return response.json();      
                } else {
                    console.log("Session not successfully added");
                }
            })
            .then((data) =>{
                console.log(data);
                // update sessions array with new post
                /* prevSessions is a parameter for the anonymous function. It represents 
                the current state of sessions at the time the function is executed. */
                setSessions((prevSessions) => [data.session, ...prevSessions]);
                setDate("");
                setLocation("");
                setChosenBook("");
            });
        } else {
            console.log("No token");
        }
    };

// This return section is the JSX that gets rendered on the webpage 
return (
    <div className="container">
        <div className="session-box">
            <div className="session-inner-box">
                <div className="session-heading">Create A Bookclub Session</div>
                <form className="session-form">
                    <textarea className="session-input" placeholder="Date" onChange={onHandleChangeDate}></textarea>
                    <textarea className="session-input" placeholder="Location" onChange={onHandleChangeLocation}></textarea>
                    <textarea className="session-input" placeholder="Chosen Book ISBN" onChange={onHandleChangeChosenBook}></textarea>
                    <button className="session-btn" onClick={handleSubmitSession}>Create Session</button>
                </form>
            </div>
        </div>
    </div>
);
}

export default SessionForm;
