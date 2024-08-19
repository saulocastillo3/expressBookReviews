const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;  
  return res.send(JSON.stringify(books[isbn], null, 4)); 
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
     
    newBook ={}; 
    const author = req.params.author; 
    let i = 1; 
    for (let isbn in books){
        if(books[isbn].author===author){
            newBook[i++] = books[isbn]; 
        }
    
    }
    res.send(JSON.stringify(newBook, null, 5));
    
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
    newBook ={}; 
    const title = req.params.title; 
    let i = 1; 
    for (let isbn in books){
        if(books[isbn].title===title){
            newBook[i++] = books[isbn]; 
        }
    
    }
    res.send(JSON.stringify(newBook, null, 5));
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn; 
  const reviews  = books[isbn].reviews 
  return res.send(JSON.stringify(reviews, null, 4)); 
});

module.exports.general = public_users;
