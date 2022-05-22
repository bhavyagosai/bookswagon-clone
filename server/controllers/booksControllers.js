const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});

const addBook = asyncHandler(async (req, res) => {
  const { bookName, authorName, description, bookIcon, price } = req.body;
  // console.log(req);
  if (!bookName || !authorName || !description || !bookIcon || !price) {
    res.status(400);
    throw new Error("Please provide all the required fields");
  } else {
    const book = await Book.create({
      bookName,
      authorName,
      description,
      bookIcon,
      price,
    });
    if (book) {
      res.status(201).json(book);
    } else {
      res.status(400);
      throw new Error("Error Occured");
    }
  }
});

const getBookByID = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// const updatePost = asyncHandler(async (req, res) => {
//   const { caption, encryptedCode, lang } = req.body;

//   const post = await Post.findById(req.params.id);
//   if (post.username !== req.user.username) {
//     res.status(401);
//     throw new Error("You can't perform this action!");
//   }

//   if (post) {
//     post.caption = caption;
//     post.encryptedCode = encryptedCode;
//     post.lang = lang;

//     const updatedPost = await post.save();
//     res.json(updatedPost);
//   } else {
//     res.status(401);
//     throw new Error("Post not found!");
//   }
// });

// const deletePost = asyncHandler(async (req, res) => {
//   const post = await Post.findById(req.params.id);
//   if (post.username !== req.user.username) {
//     res.status(401);
//     throw new Error("You can't perform this action!");
//   }

//   if (post) {
//     await post.remove();
//     res.json({ message: "Post deleted successfully!" });
//   } else {
//     res.status(401);
//     throw new Error("Post not found!");
//   }
// });

module.exports = {
  getBooks,
  addBook,
  getBookByID,
  //   updatePost,
  //   deletePost,
};
