const { Router } =require('express');
const Inventario = require('../modelos/Inventario');
const {validar_inventario, validarInventario} = require('../helpers/validar_inventario');

const router = Router();

router.get ('/', async function(req, res){
    try {
        const inventarios = await Inventario.find().populate([
            {
             path:'usuario', select:'nombre email estado'
            },
            {
             path: 'marca', select:'nombre estado'
            },
            {
             path: 'tipoEquipo', select:'nombre estado'
             
            },
            {
             path: 'EstadoEquipo', select:'nombre estado'
            }
        ]);
        res.send(inventarios);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error al consultar inventario')
    }
});

router.post ('/', async function(req, res){
    try {
            const validation = validarInventario(req);
            const existeXserial = await Inventario.findOne({serial: req.body.serial});
        if(existeXserial){
            return res.send('Ya existe el serial para otro equipo');
            
        }

         if (validation.length >0){
            return res.status(400).send(validation);
         }
         
        

        let inventario = new Inventario();
        inventario.serial = req.body.serial;
        inventario.modelo = req.body.modelo;
        inventario.descripcion = req.body.descripcion;
        inventario.foto = req.body.foto;
        inventario.color = req.body.color;
        inventario.fechacompra = req.body.fechacompra;
        inventario.precio = req.body.precio;
        inventario.usuario = req.body.usuario._id;
        inventario.marca = req.body.marca._id;
        inventario.tipoEquipo = req.body.tipoEquipo._id;
        inventario.EstadoEquipo = req.body.EstadoEquipo._id;
        inventario.fechaCreacion = new Date();
        inventario.fechaActualizacion = new Date();
        console.log(inventario);
        inventario = await inventario.save();
        
        console.log(inventario);
        res.send(inventario);
        
        
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error al consultar inventario 4')
    }
});

router.put ('/:inventarioId', async function(req, res){
    try {
        let inventario = await Inventario.findById(req.params.inventarioId);
        if(!inventario){
            return res.send('Inventario no existe');
            
        }
         const existeInventario =await Inventario
                 .findOne({serial: req.body.serial, _id: {$ne: inventario._id}});
         
         if(existeInventario){
            return res.send('ya existe el serial para otro equipo');
         }
        inventario.serial = req.body.serial;
        inventario.modelo = req.body.modelo;
        inventario.descripcion = req.body.descripcion;
        inventario.foto = req.body.foto;
        inventario.color = req.body.color;
        inventario.fechacompra = req.body.fechacompra;
        inventario.precio = req.body.precio;
        inventario.usuario = req.body.usuario._id;
        inventario.marca = req.body.marca._id;
        inventario.tipoEquipo = req.body.tipoEquipo._id;
        inventario.EstadoEquipo = req.body.EstadoEquipo._id;
        inventario.fechaActualizacion = new Date();

        inventario = await inventario.save();

        res.send(inventario);
        
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error al consultar inventario')
    }
});

module.exports = router;