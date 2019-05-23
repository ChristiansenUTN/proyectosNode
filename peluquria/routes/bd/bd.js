var mysql = require('mysql');



var conexion = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password:'',
    database:'peluqueria',
    port: 3306,

});

conexion.connect(
    (err) => { 
     
        
        if (err == null) {

                   console.log('conectado');
    
                } else {

                    console.log('no conectado', err);
                        };

             });

module.exports = conexion;