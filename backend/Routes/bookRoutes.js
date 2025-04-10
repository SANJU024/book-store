import {Book} from "../models/bookModel.js";
import express from "express"

const bookRouter = express.Router();

bookRouter.post("/create", async(req,res)=>{
    try{
        if(!req.body.title||!req.body.author||!req.body.publishYear){
            return res.status(404).json({msg:"Some inputs are missing"})
        }

        const newBook= {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        };
        const book = await  Book.create(newBook);
        res.status(201).json({book});

    }catch(err){
        res.status(500).json({msg:err.message})
    }
})

bookRouter.get("/get", async(req,res)=>{
    try{
        const books= await Book.find({});
        return res.status(201).json({
            count:books.length,
            books});
    }catch(err){
        res.status(500).json({msg:err.message})
    }
})

// to get book by id

bookRouter.get("/book/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const book= await Book.findById(id);
        if(!book){
            return res.status(404).json({msg:"Book not found"})
        }
        return res.status(200).json({
            data:book
        });
    }catch(err){
        res.status(500).json({msg:err.message});
    }
})

bookRouter.put("/update/:id", async(req,res)=>{
    try{

        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(403).json({msg:"Invalid book info"})
        }
        const {id}= req.params
        const result= await Book.findByIdAndUpdate(id,req.body);
        
        if(!result){
            return res.status(404).json({msg:"Book not found"})
        }
        return res.status(200).json({msg:"Book Updated Successfully"})
    }catch(err){
        res.status(500).json({msg:err.message});
    }
})

bookRouter.delete("/delete/:id", async(req,res)=>{
    try{
        const {id}=req.params;
        const result= await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json({msg:"Book not found"})
        }
        return res.status(200).json({msg:"Book Deleted Successfully"})
    }catch(err){
        res.status(500).json({msg:err.message});
    }
})

export default bookRouter;