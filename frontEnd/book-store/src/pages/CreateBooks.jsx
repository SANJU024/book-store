import React, { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateBooks(){
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [publishYear,setPublishYear]=useState('');
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    function handleSaveBook(){
        const data={
            title,author,publishYear
        };
        setLoading(true);
        axios.post('http://localhost:5000/books/create',data)
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
            <h1>Create Book</h1>
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
            <button onClick={handleSaveBook}>Save</button>
        </div>
    )
}

export default CreateBooks;