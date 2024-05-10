import express from "express";
import BookModel from "../models/bookmodel.js";

const router = express.Router();



// post a book
router.post("/", async (req, res) => {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        )
        return res.status(400).send("All fields are required")
        const NewBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const Book = await BookModel.create(NewBook)
        return res.status(200).send( Book )
    
    } catch (error) {
        console.log(error);
    }
    
    })
    //get all books
router.get("/", async (req, res) => {
        try {
            const books = await BookModel.find();
            return res.status(200).send({
                count: books.length,
                data: books
            })
        } catch (error) {
            console.log(error);
        }
    })
      
//get one book by id   
router.get("/:id", async (req, res) => {
        try {
            const {id} = req.params;
            const book = await BookModel.findById(id);
            return res.status(200).send(book)
        } catch (error) {
            console.log(error);
        }
})

//update a book
router.put("/:id", async (req, res) => {
        try {
            if(
                !req.body.title||
                !req.body.author||
                !req.body.publishYear
            )
            return res.status(400).send("All fields are required")
            const {id} = req.params;
            const book = await BookModel.findByIdAndUpdate(id, req.body)
            if(!book){
                return res.status(404).send("Book not found")
            }
            return res.status(200).send("Book updated")
        } catch (error) {
            console.log(error);
        }
})

//delete a book
router.delete("/:id", async (req, res) => {
        try {
            const {id} = req.params;
            const book = await BookModel.findByIdAndDelete(id);
            if(!book){
                return res.status(404).send("Book not found")
            }
            return res.status(200).send("Book deleted")
        } catch (error) {
            console.log(error);
        }
    })
    
    export default router