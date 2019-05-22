var express = require('express');
var router = express.Router();

/* GET users listing. */
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Bienvenido' });
     




  });



  router.post('/usuario', function(req,res,next){

    console.log(req);

    var usuario = req.body.usuario;
    var password = req.body.password;

    console.log(usuario);

    if(usuario == 'andres' && password == '1234'){

        var informacion = {

            curso: 'PWI',
            dias: 'lu-mi',
            alumnos: [

                {nombre: 'andres', edad: 42, foto:'1.png'},
                {nombre: 'franco', edad: 24, foto:'1.png'},
                {nombre: 'flor', edad: 25, foto:'2.png'},
                {nombre: 'andres', edad: 42, foto:'1.png'},
                {nombre: 'franco', edad: 24, foto:'1.png'},
                {nombre: 'flor', edad: 25, foto:'2.png'},


            ]

        };

        res.render('panel', informacion);
    } else {

    // si no se cumple la condicion
 
        res.redirect('/'); 
    }




  });

module.exports = router;