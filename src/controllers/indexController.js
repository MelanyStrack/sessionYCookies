const indexController = {
    index: (req,res)=>{
        
        res.render('index', { title: 'Express', user: req.session.user})
    },
    thanks:(req,res)=>{
        
        res.render("thanks", {title: `Gracias`, user : req.session.user})
    }
}

module.exports = indexController;