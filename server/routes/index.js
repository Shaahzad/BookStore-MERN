import express from "express";
import BookModel from "../models/bookmodel.js";

const router = express.Router();



// post a book
router.post("/", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send("All fields are required");
        }
        const NewBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };
        const Book = await BookModel.create(NewBook);
        return res.status(201).send(Book); // Created status
    } catch (error) {
        console.error(error); // Log error to console
        return res.status(500).send("Internal Server Error"); // Respond with 500 status
    }
});

// get all books
router.get("/", async (req, res) => {
    try {
        const books = await BookModel.find();
        return res.status(200).send({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.error(error); // Log error to console
        return res.status(500).send("Internal Server Error"); // Respond with 500 status
    }
});

// get one book by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await BookModel.findById(id);
        if (!book) {
            return res.status(404).send("Book not found"); // Handle not found
        }
        return res.status(200).send(book);
    } catch (error) {
        console.error(error); // Log error to console
        return res.status(500).send("Internal Server Error"); // Respond with 500 status
    }
});

// update a book
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send("All fields are required");
        }
        const { id } = req.params;
        const book = await BookModel.findByIdAndUpdate(id, req.body, { new: true }); // Return updated document
        if (!book) {
            return res.status(404).send("Book not found");
        }
        return res.status(200).send("Book updated");
    } catch (error) {
        console.error(error); // Log error to console
        return res.status(500).send("Internal Server Error"); // Respond with 500 status
    }
});

// delete a book
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await BookModel.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).send("Book not found");
        }
        return res.status(200).send("Book deleted");
    } catch (error) {
        console.error(error); // Log error to console
        return res.status(500).send("Internal Server Error"); // Respond with 500 status
    }
});

export default router;
