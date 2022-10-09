const {Router}= require('express');
const router = Router();
const empleadoSchema = require('../models');

//registrar un empleado.
router.post('/registrar',(req,res)=>{
    console.log('registrar')
    console.log(req.body);
    const empleado =empleadoSchema(req.body);
    

    empleado
        .save()
        .then((data)=>{res.json(data)})
        .catch(err =>{
            const msg = err.code === 11000 ? 'Ya existe un empleado con esa cedula registrado' : err;
            res.status(409).json({message: msg})
        });

        
})
router.get('/empleados', (req,res)=>{
    console.log('dar empleados');
    empleadoSchema
        .find()
        .then((data)=>{res.json(data)})
        .catch(err =>{
            //const msg = err.code === 11000 ? 'Ya existe un empleado con esa cedula registrado' : err;
            res.status(409).json({message: err})
        });

   
})


module.exports = router;