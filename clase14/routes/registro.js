var express = require('express');
var router = express.Router();

/* GET users listing. */
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('registro', { title: 'Bienvenido' });
     
  });


  router.post('/usuario', function(req,res,next){

    var pass = req.body.inputPassword;
    console.log('pass', pass);



    var registroNuevoUsuario = {


        name: req.body.inputName,
        email: req.body.inputEmail,
        password: req.body.inputPassword,
        password2: req.body.inputPassword2,
        adress: req.body.inputAdress,
        adress2: req.body.inputAdress2,
        city: req.body.inputCity,
        state: req.body.inputState,
        zip: req.body.inputZip,
        imagePerfil: req.body.inputImagenPerfil,



    };

    console.log('Registro', registroNuevoUsuario);
    
    if( registroNuevoUsuario.password == registroNuevoUsuario.password2  && registroNuevoUsuario.password.length  > 3){

    

    res.render('login', {title: 'Usuario registrado - ingrese '});

} else {

    res.render('registro', {errorpassword: 'Pasword no coincide'})
}





  });


  module.exports = router;
