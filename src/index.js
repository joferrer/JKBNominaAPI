require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const empleadoRouters = require('./routers/empleadoRoute');

const app = express();

//VARIABLES DE ENTORNO.
const port = process.env.PORT || 9000; //Puerto por variable env.
const URI = process.env.MONGODB_URI; //Conexión con la db



app.use(express.json());//Para usar JSON en las respuestas y peticiones.
app.use(express.urlencoded({extended: false}));



/**
 * RUTAS
 */
app.use('/api/empleados',empleadoRouters);




app.listen(port, ()=> console.log('server listening on port '+port)); // Servidor escuchando peticiones. 

/**
 * Conexión con la base de datos MongoDB atlas.
 */
const conectar = ()=>{
    mongoose.connect(URI).then(()=>{
        console.log('Conected with mongodb atlas')
    }).catch(err=>console.error('Fail conection: '+ err))
}

conectar(); //Iniciar conexión con la DB


