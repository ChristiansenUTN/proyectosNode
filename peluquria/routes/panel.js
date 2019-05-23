var express = require('express');
var router = express.Router();
var bd = require('./bd/bd');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('panel', { title: 'Express' });

  bd.query("SELECT * FROM USUARIOS", (err,rows) =>{
    if(err) {
      console.log(err)
    } else {
      console.log('rows', rows);
      res.render('panel', {dato: rows});
    };
  
   }
  
  );

});




module.exports = router;