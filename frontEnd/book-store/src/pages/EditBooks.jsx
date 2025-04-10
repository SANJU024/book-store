import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditBooks(){
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [publishYear,setPublishYear]=useState('');
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:5000/books/book/${id}`)
        .then((res)=>{
            setTitle(res.data.title);
            setAuthor(res.data.author);
            setPublishYear(res.data.publishYear)
            setLoading(false);
        }).catch((err)=>{
            alert("An error occured check console");
            console.log(err);
        })
    },[id])
    function handleEditBook(){
        const data={
            title,author,publishYear
        };
        setLoading(true);
        axios.put(`http://localhost:5000/books/update/${id}`,data)
        .then(()=>{
            setLoading(false);
            navigate('/');
        })
        .catch((err)=>{
            setLoading(false);
            alert(err)
            console.log(err);
            
        })
    }
    return (
        <div>
            <BackButton/>
            <h1>Edit Book</h1>
            {loading?(<p>loading...</p>):
            (
                <div>
                    <div>
                        <label>Title</label> 
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value
                        )}/>
                    </div>
                    <div>
                        <label>Author</label> 
                        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value
                        )}/>
                    </div>
                    <div>
                        <label>Publish Year</label> 
                        <input type="text" value={publishYear} onChange={(e)=>setPublishYear(e.target.value
                        )}/>
                    </div>
                </div>
            )}
            <button onClick={handleEditBook}>Save</button>
        </div>
    )
}

export default EditBooks;