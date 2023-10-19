import React, { useState } from "react";
import "./sessionform.css";

const SessionForm = ({ token, setSessions }) => {
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [chosenBook, setChosenBook] = useState("")

// setSessions still needs defining (Session.js or Feed.js?)

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

// This return session is what gets rendered on the feed
    return (
        <form className="session-form-box">
        <h1 id="test_title">Sessions</h1> 
        <textarea className="new-session-form">
            
        </textarea>
        </form>
    )

}
export default SessionForm;
