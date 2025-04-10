import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

import { Link } from "react-router-dom";
import {AiOutlineEdit} from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import {MdOutlineAddBox, MdOutlineDelete} from "react-icons/md"
function Home(){
    const [books,setBooks]=useState([])
    const [loading, setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        axios.get('http://localhost:5000/books/get')
        .then((res)=>{
            setBooks(res.data.books);
            console.log(res.data);
            setLoading(false);
        })
    },[]);

    return (
        <div>
            <div>
            <h1>Book List</h1>
            <Link to='/books/create'>
                <MdOutlineAddBox />
            </Link>
        </div>
        {loading?(
            <p>loading...</p>
        ):(
            <table border="1" width="70%" cellPadding="10" cellSpacing="0" style={{width:"70%",alignContent:"center"}}>
                <thead>
                    <tr>
                        <th>SlNo</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publish Year</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book,index)=>(
                        <tr key={book._id}>
                            <td>{index+1}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.publishYear}</td>
                            <td>
                                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                                    <Link to={`/books/details/${book._id}`}>
                                        <BsInfoCircle/>
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit/>
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete/>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
        </div>
    )
}
export default Home;