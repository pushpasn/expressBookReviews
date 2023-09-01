const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


 
  

// Get the book list available in the shop
// Get the book list available in the shop
public_users.get('/',function (req, res) {
    res.send(JSON.stringify(books,null,4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  let book = [];

    res.send(books[isbn])
  

});

public_users.delete("/auth/delete/:isbn", (req, res) => {
 const isbn = req.params.isbn;
    if (isbn){
        delete books[isbn]
    }
    res.send(books[isbn]);
  });

  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const authorName = req.params.author; 
//let filtered_users =   books.author.value === "Hans Christian Andersen");

 
if (books[1].author === authorName )
{ res.send(books[1])}
else if (books[2].author === authorName ) 
{res.send(books[2])}
else if (books[3].author === authorName ) 
{res.send(books[3])}
else if (books[4].author === authorName ) 
{res.send(books[4])}
else if (books[5].author === authorName ) 
{res.send(books[5])}
else if (books[6].author === authorName ) 
{res.send(books[6])}
else if (books[7].author === authorName ) 
{res.send(books[7])}
else if (books[8].author === authorName ) 
{res.send(books[8])}
else if (books[9].author === authorName ) 
{res.send(books[9])}
else if (books[10].author === authorName ) 
{res.send(books[10])} 
else { res.send("error")}
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const titleName = req.params.title;
   
if (books[1].title === titleName )
{ res.send(books[1])}
else if (books[2].title === titleName ) 
{res.send(books[2])}
else if (books[3].title === titleName ) 
{res.send(books[3])}
else if (books[4].title === titleName ) 
{res.send(books[4])}
else if (books[5].title === titleName ) 
{res.send(books[5])}
else if (books[6].title === titleName ) 
{res.send(books[6])}
else if (books[7].title === titleName ) 
{res.send(books[7])}
else if (books[8].title === titleName ) 
{res.send(books[8])}
else if (books[9].title === titleName ) 
{res.send(books[9])}
else if (books[10].title === titleName ) 
{res.send(books[10])} 
else { res.send("error")}
});
 

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  let book = [];

    res.send(books[isbn].reviews)
});


public_users.put('/reviews/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    let book = books[isbn]
    //console.log(books[isbn].reviews);
    if (book) { //Check is friend exists
        let rev = req.body.reviews;
        //Add similarly for firstName
        //Add similarly for lastName

        //if DOB the DOB has been changed, update the DOB 
        if(rev) {
            book["reviews"] = rev
        }
        //Add similarly for firstName
        //Add similarly for lastName
        books[isbn]=book;
        res.send(` updated.`);
    }
    else{
        res.send("Unable to find friend!");
    }
  });

module.exports.general = public_users;
