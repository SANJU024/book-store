import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useParams } from "react-router-dom";



function ShowBooks(){
    const [book,setBook]=useState({});
    const [loading,setLoading]=useState(false);
    const {id}=useParams();
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5000/books/book/${id}`)
        .then((res)=>{
            setBook(res.data.data);
            console.log(res.data.data);
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    },[id])
    return (
        <div>
            <style>{`
                .show-book{
                    display: flex;;
                    justify-content: space-between;
                    width: 100%;
                    max-width: 600px;
                    font-size: 18px;
                    margin-bottom: 10px;
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 5px ; 
                }
            `}</style>
           <BackButton />
           <h1>Show Book</h1>
           {loading?(
            <p>loading...</p>
           ):(
            <div>
                <div className="show-book">
                    <span>Id</span>
                    <span>{book._id}</span>
                </div>
                <div className="show-book">
                    <span>title</span>
                    <span>{book.title}</span>
                </div>
                <div className="show-book">
                    <span>Author</span>
                    <span>{book.author}</span>
                </div>
                <div className="show-book">
                    <span>Publish Year</span>
                    <span>{book.publishYear}</span>
                </div>
                <div className="show-book">
                    <span>Create Item</span>
                    <span>{new Date (book.createdAt).toString()}</span>
                </div>
                <div className="show-book">
                    <span>Last Updated Time</span>
                    <span>{new Date (book.updatedAt).toString()}</span>
                </div>
            </div>
           )}
        </div>
    )
}
export default ShowBooks;