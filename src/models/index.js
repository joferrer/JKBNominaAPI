const mongoose = require('mongoose');

//ESQUEMAS
const empleadoSchema = require( './empleadoSchema');

//MODELOS
module.exports = mongoose.model('Empleado', empleadoSchema);