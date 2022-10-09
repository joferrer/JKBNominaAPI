require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();


const port = process.env.PORT || 9000; //Puerto por variable env.
const URI = process.env.MONGODB_URI; //Conexión con la db

app.use(express.json());//Para usar JSON en las respuestas y peticiones.
app.use(express.urlencoded({extended: false}));

/**
 * 
 */
const empleadoRouters = require('./routers/empleadoRoute');


app.use('/api/empleados',empleadoRouters);




app.listen(port, ()=> console.log('server listening on port '+port)); // Servidor escuchando peticiones. 

/**
 * Conexión con la base de datos MongoDB atlas.
 */
//mongoose.set('useCreateIndex',true);
const conectar = ()=>{
    mongoose.connect(URI).then(()=>{
        console.log('Conected with mongodb atlas')
    }).catch(err=>console.error('Fail conection: '+ err))
}

conectar(); //Iniciar conexión con la DB

/**
 * const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jkbnomina-user:<password>@jkbnomina.gfn5ls2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 */
