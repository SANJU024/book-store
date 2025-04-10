import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DeleteBooks(){
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();

    function handleDeleteBook(){
        setLoading(true);
        axios.delete(`http://localhost:5000/books/delete/${id}`)
        .then(()=>{
            setLoading(false);
            navigate('/');
        }).catch((err)=>{
            alert('An error happened.  Please check console')
            console.log(err);
        });
    };
    return (
        <div>
            <BackButton/>
            <h1>Delete Book</h1>
            {loading?(
                <p>loading...</p>
            ):(
                " "
            )}
            <div>
                <h3>Are you sure you want to delete this book?</h3>
                <button onClick={handleDeleteBook}>yes,Delete it</button>
            </div>
        </div>
    )
}
export default DeleteBooks;