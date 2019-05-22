var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:nombre/:edad/:foto', function(req, res, next) {

// Se crea el objeto con las variables pasadas por parametro desde la url 
var datos = {

    nombre: req.params.nombre,
    edad: req.params.edad,
    foto: req.params.foto,



};

// renderizamos el objeto

res.render('persona', datos);


  
});

module.exports = router;
