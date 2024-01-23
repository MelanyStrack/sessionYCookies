const {body} = require("express-validator");

const loginValidate=[
    body("name").notEmpty().withMessage("Este campo es obligatorio").isLength({min:4, max:15}).withMessage("Debe ingresar un mínimo de 4 caracteres y un máximo de 15"),
    body("email").notEmpty().withMessage("Este campo es obligatorio").bail().isEmail().withMessage("Debe ingresar un email válido"),
    body("colors").notEmpty().withMessage("Este campo es obligatorio").bail(),
    body("age").notEmpty().withMessage("Este campo es obligatorio").bail().isInt().withMessage("Debe ingresar un número")
]

module.exports = loginValidate;