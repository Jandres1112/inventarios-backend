const { Router } =require('express');
const Inventario = require('../modelos/Inventario');

const router = Router();

router.get ('/', async function(req, res){
    try {
        const inventarios = await Inventario.find().populate([
            {
             path:'usuario'
            },
            {
             path: 'marca'
            },
            {
             path: 'TipoEquipo'
             
            },
            {
             path: 'EstadoEquipo'
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
        const existeXserial = await Inventario.findOne({Serial: req.body.Serial});
        if(existeXserial){
            return res.send('Ya existe el serial para otro equipo');
            
        }

        let inventario = new Inventario();
        inventario.Serial = req.body.Serial;
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

        inventario = await inventario.save();

        res.send(inventario);
        
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error al consultar inventario')
    }
});

router.put ('/:inventarioId', async function(req, res){
    try {
        let inventario = await Inventario.findById(req.params.inventarioId);
        if(!inventario){
            return res.send('Inventario no existe');
            
        }
         const existeInventario =await Inventario
                 .findOne({Serial: req.body.Serial, _id: {$ne: inventario._id}});
         
         if(existeInventario){
            return res.send('ya existe el serial para otro equipo');
         }
        inventario.Serial = req.body.Serial;
        inventario.modelo = req.body.modelo;
        inventario.descripcion = req.body.descripcion;
        inventario.foto = req.body.foto;
        inventario.color = req.body.color;
        inventario.fechacompra = req.body.fechacompra;
        inventario.precio = req.body.precio;
        inventario.usuario = req.body.usuario._id;
        inventario.marca = req.body.marca._id;
        inventario.tipoEquipo = req.body.TipoEquipo._id;
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