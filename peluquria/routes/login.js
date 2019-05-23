var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

// router.post('/', (req,res,next) => {


//   var uss = req.body.usuario;
//   var pass = md5(req.body.password);


//   bd.query("select usuario, password from usuarios where ", 
// (err,rows) => {
//   if(err){
//       console.log('ERROR QUERY', err);
//   } else {
//       res.render('login', {mensaje: 'Logueo exitoso'});
//   };


// }   );



module.exports = router;