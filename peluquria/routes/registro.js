var express = require('express');
var router = express.Router();
var bd = require('./bd/bd');
var md5 = require('md5');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Bienvenido a la Pelu' });
});


router.post('/', (req,res,next) => {


    var uss = req.body.usuario;
    var pass = md5(req.body.password);

var dato = {

    usuario: req.body.usuario,
    password: req.body.password,
    confirmados: 0

}

bd.query("insert into usuarios set ?", dato, (err,rows) =>{

    if(err) {

        console.log(err);
    } else {

        res.render('registro', {mensaje: 'registro ok'});
    }



})



//     bd.query("insert into usuarios (usuario,password,confirmados) values ('"+uss+"','"+pass+"',0)", 
// (err,rows) => {
//     if(err){
//         console.log('ERROR QUERY', err);
//     } else {
//         res.render('registro', {mensaje: 'Registro exitoso'});
//     };


// }   );



});

    


module.exports = router;
