import React, { useState } from "react";
import "./SessionForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from "react-bootstrap/Alert";

const SessionForm = ({ setModal }) => {
    const [date, setDate] = useState("");   
    const [location, setLocation] = useState("");
    const [chosenBook, setChosenBook] = useState("")
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [alert, setAlert] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const onHandleChangeDate = (event) => {
        event.preventDefault();
        setDate(event.target.value)
    }

    const onHandleChangeLocation = (event) => {
        event.preventDefault();
        setLocation(event.target.value)
        console.log("location:", location)    }

    const onHandleChangeChosenBook = (event) => {
        event.preventDefault();
        setChosenBook(event.target.value)
    }

    async function fetchBookDetails() {
        const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${chosenBook}`
        let response = await fetch(url);
        response = await response.json()
        const authors_details = response.items[0].volumeInfo.authors;
        const title_details = response.items[0].volumeInfo.title;
        const year_details = response.items[0].volumeInfo.publishedDate;
       const photo_details = `https://covers.openlibrary.org/b/isbn/${chosenBook}-M.jpg`;
       const details_object = {
        authors_details: authors_details,
        title_details: title_details,
        year_details: year_details,
        photo_details: photo_details
       }
       return details_object
    } 

    const onClickButtonClose = () => {
        console.log("Close button clicked");
        setModal(false);
    }

    const handleSubmitSession = async (event) => {
        event.preventDefault(); 
        console.log("date:", date)
        console.log("location:", location)
        console.log("chosenBook:", chosenBook)
        
        const bookDetails = await fetchBookDetails();
        console.log(bookDetails.title_details);
        console.log(bookDetails.authors_details);
        console.log(bookDetails.year_details);
        console.log(bookDetails.photo_details);

        if (token) {
            fetch("/books", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                authors: bookDetails.authors_details,
                title: bookDetails.title_details,
                year_published: bookDetails.year_details,
                cover_photo: bookDetails.photo_details
              }),  
            })
            .then((response) => {
                if (response.status === 201) {
                    console.log("Book successfully added"); 
                    return response.json();      
                } else {
                    console.log("Book not successfully added");
                }
            })
            .then((data) =>{
                console.log(data);
                // setBookObject(data.book);
                // console.log(bookObject);
                // update sessions array with new post
                /* prevSessions is a parameter for the anonymous function. It represents 
                the current state of sessions at the time the function is executed. */
                window.localStorage.setItem("token", data.token);
                setToken(window.localStorage.getItem("token"));
                // setAuthors([]);
                // setTitle("");
                // setYearPublished("");
                // setCoverPhoto("");

                fetch("/sessions", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        date: date,
                        location: location,
                        chosen_book: data.book._id
                    
        
                      }),  
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
                        setButtonClicked(true);
                        setAlert(true);

                    });

                
            });
        } else {
            console.log("No token");
            setAlert(false);
        }
        

    };

// This return section is the JSX that gets rendered on the webpage 
if (buttonClicked) {
return (
    <div className="session-container">
        <div className="session-box">
        <button type="button" className="btn-close session-btn-close" aria-label="Close" onClick={onClickButtonClose}></button>
            <div className="session-inner-box">
                <div className="session-heading">Create A Bookclub Session</div>
                <form className="session-form">
                    <input className="session-input" type="date" value={date} placeholder="Date" onChange={onHandleChangeDate}></input>
                    <textarea className="session-input" type="input" value={location} placeholder="Location" onChange={onHandleChangeLocation}></textarea>
                    <textarea className="session-input" type="input" value={chosenBook} placeholder="Chosen Book ISBN" onChange={onHandleChangeChosenBook}></textarea>
                    <button className="session-btn" onClick={handleSubmitSession}>Create Session</button>
                    { alert ? (<Alert variant="success">Success! your session has been added.😍</Alert>): <Alert variant="warning">Error: session not successfully added🥲</Alert> }
                </form>
            </div>
        </div>
    </div>
);
} else {
    return (
        <div className="session-container">
            <div className="session-box">
            <button type="button" className="btn-close session-btn-close" aria-label="Close" onClick={onClickButtonClose}></button>
                <div className="session-inner-box">
                    <div className="session-heading">Create A Bookclub Session</div>
                    <form className="session-form">
                        <input className="session-input" type="date" value={date} placeholder="Date" onChange={onHandleChangeDate}></input>
                        <textarea className="session-input" type="input" value={location} placeholder="Location" onChange={onHandleChangeLocation}></textarea>
                        <textarea className="session-input" type="input" value={chosenBook} placeholder="Chosen Book ISBN" onChange={onHandleChangeChosenBook}></textarea>
                        <button className="session-btn" onClick={handleSubmitSession}>Create Session</button>
                    </form>
                </div>
            </div>
        </div>
    );

}
}

export default SessionForm;
