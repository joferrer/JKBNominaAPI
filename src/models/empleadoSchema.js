const mongoose = require('mongoose');

const empleadoSchema = mongoose.Schema({
    id:{
        type: Number,
        require: true 
    },
    cedula:{
        type:    Number,
        require: true,
        unique:  true
    },
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require: true
    },
    correo:{
        type: String,
        require: false
    },
    celular:{
        type: String,
        require: false
    },
    puesto:{
        type: Number,
        require: true
    },
},
{
    timestamps:true
}
);
module.exports = empleadoSchema;
