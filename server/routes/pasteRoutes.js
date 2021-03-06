const express = require("express");
const {
  getPastes,
  createPaste,
  getPasteByID,
  updatePaste,
  deletePaste,
} = require("../controllers/pasteControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getPastes);

router.route("/create").post(protect, createPaste);
router
  .route("/:id")
  .get(protect, getPasteByID)
  .put(protect, updatePaste)
  .delete(protect, deletePaste);

module.exports = router;
