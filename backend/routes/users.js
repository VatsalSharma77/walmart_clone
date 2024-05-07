const express = require("express");
const router = express.Router();

const authController = require("../controllers/users");
const validate = require("../middlewares/validate");
const { signupSchema, loginSchema } = require("../validators/userValidator");

router.route("/").get(authController.get);
router.route("/register").post(validate(signupSchema), authController.register);
router.route("/login").post(validate(loginSchema), authController.login);

module.exports = router;
