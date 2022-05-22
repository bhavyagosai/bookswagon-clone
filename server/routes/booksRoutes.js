const express = require("express");
const { getBooks, addBook } = require("../controllers/booksControllers");
const router = express.Router();

router.route("/allbooks").get(getBooks);

router.route("/add").post(addBook);

module.exports = router;
