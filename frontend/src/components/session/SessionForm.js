import React, { useState } from "react";
import "./SessionForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const SessionForm = ({ setModal }) => {
    const [date, setDate] = useState("");   
    const [location, setLocation] = useState("");
    const [chosenBook, setChosenBook] = useState("")
    const [token, setToken] = useState(window.localStorage.getItem("token"));
    const [sessions, setSessions] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [title, setTitle] = useState("");
    const [yearPublished, setYearPublished] = useState("");
    const [coverPhoto, setCoverPhoto] = useState("");


    console.log("hello");

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
        const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:9780008334840"
        let response = await fetch(url);
        response = await response.json()
        setAuthors(response.items[0].volumeInfo.authors);
        setTitle(response.items[0].volumeInfo.title);
        setYearPublished(response.items[0].volumeInfo.publishedDate);
        setCoverPhoto(response.items[0].volumeInfo.imageLinks.smallThumbnail);
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

        fetchBookDetails();
        console.log(title);
        console.log("year pub", yearPublished);

        if (token) {
            fetch("/books", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                authors: authors,
                title: title,
                year_published: yearPublished,
                cover_photo: coverPhoto

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
                // update sessions array with new post
                /* prevSessions is a parameter for the anonymous function. It represents 
                the current state of sessions at the time the function is executed. */
                window.localStorage.setItem("token", data.token);
                setToken(window.localStorage.getItem("token"));
                setAuthors([]);
                setTitle("");
                setYearPublished("");
                setCoverPhoto("");
            });
        } else {
            console.log("No token");
        }


    };

// This return section is the JSX that gets rendered on the webpage 
return (
    <div className="session-container">
        <div className="session-box">
        <button type="button" className="btn-close session-btn-close" aria-label="Close" onClick={onClickButtonClose}></button>
            <div className="session-inner-box">
                <div className="session-heading">Create A Bookclub Session</div>
                <form className="session-form">
                    <textarea className="session-input" type="input" value={date} placeholder="Date" onChange={onHandleChangeDate}></textarea>
                    <textarea className="session-input" type="input" value={location} placeholder="Location" onChange={onHandleChangeLocation}></textarea>
                    <textarea className="session-input" type="input" value={chosenBook} placeholder="Chosen Book ISBN" onChange={onHandleChangeChosenBook}></textarea>
                    <button className="session-btn" onClick={handleSubmitSession}>Create Session</button>
                </form>
            </div>
        </div>
    </div>
);
}

export default SessionForm;
