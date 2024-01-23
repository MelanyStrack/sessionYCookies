var express = require('express');
var router = express.Router();
const {login, processLogin, forgetColor} = require("../controllers/usersController");
const loginValidate = require("../validations/loginValidate");

/* GET users listing. */
router.get('/login', login);
router.post("/login", loginValidate, processLogin);

router.get("/forgetColor", forgetColor)

module.exports = router;
