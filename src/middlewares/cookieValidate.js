const cookieValidate = (req,res,next) =>{
    if (req.cookies.chosenColor && req.cookies.user) {
        req.session.usuario = req.cookies.user
    }
    next();

}
module.exports = cookieValidate;