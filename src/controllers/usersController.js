const {validationResult} = require('express-validator');

const usersController ={
    login: (req, res) => {
        
        res.render('login', { title: 'Ingresar', user: req.session.user });
      },
    processLogin:(req,res)=>{
        const errors = validationResult(req);
        console.log(errors);
        console.log(req.body);
        if (!errors.isEmpty()) {
            console.log("Holaaaaaaaaaaaaa");
            res.render("login", {title:"Ingresar", errors: errors.mapped(), old: req.body});
        }else{
            console.log("controller todo ok");
            const {name, email, colors, age, rememberColor} = req.body;
            let color
            switch (colors) {
                case "rosa":
                    color = "pink"
                    break;
                case "gris":
                    color = "grey";
                    break;
                case "azul":
                    color = "blue";
                    break;
                case "blanco":
                    color = "white";
                    break;
            }
        const message = `Hola ${name}, elegiste el color: ${colors}, tu email es: ${email} y tu edad es: ${age}`;
        console.log(message);
        const user = {
            name,
            email,
            color,
            age
        }
        req.session.user = user;
        console.log(req.session.user);
        console.log("esta es la session", req.session.user);
        if (rememberColor) {
            res.cookie('chosenColor', color, {maxAge: 1000 * 60 * 15 })
            res.cookie("user", user, {maxAge: 1000 * 60 * 15 })
        }
        console.log("esta es la cookie", req.cookies);
        res.render("login", {title:"Ingresar", message: message, user:req.session.user})
        }
    },
    forgetColor:(req, res)=>{
        res.clearCookie("chosenColor");
        delete req.session.user.color
        res.redirect('/');
    }
}

module.exports = usersController;