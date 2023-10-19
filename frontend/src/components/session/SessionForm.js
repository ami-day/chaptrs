
import React, { useState } from "react";


const SessionForm = ({ token, setSessions }) => {
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [chosenBook, setChosenBook] = useState("")
}


// setSessions still needs defining 


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

            setSessions(())
        })
    }
}



