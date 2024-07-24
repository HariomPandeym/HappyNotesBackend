const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  updateUserProfile,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(updateUserProfile);
module.exports = router;
