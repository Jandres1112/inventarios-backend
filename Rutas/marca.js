const { Router } = require('express');
const router = Router();
const Marca = require('../modelos/Marca');
const {validar_marca, validarmarca} = require ('../helpers/validar_marca')
router.get ('/', async function(req, res){
    try {
        
        const marcas = await Marca.find();
         res.send(marcas);
    } catch (error) {
        console.log(error);
        res.send('ocurrio un error');
    }
});

router.post ('/', async function(req, res){
    try {
        const validacion = validarmarca(req);

         if (validacion.length >0){
            return res.status(400).send(validacion);
         }
        let marca = new Marca();
        marca.nombre = req.body.nombre;
        marca.estado = req.body.estado;
        marca.fechaCreacion = new Date();
        marca.fechaActualizacion = new Date();
        marca = await marca.save();
        res.send(marca);
    } catch (error) {
        console.log(error);
        res.send('ocurrio un error');
    }
});

router.put ('/:marcaId', async function(req, res){
    try {
        let marca = await Marca.findById(req.params.marcaId);
        if(!marca){
            return res.send('Marca inexistente')
        }
        marca.nombre = req.body.nombre;
        marca.estado = req.body.estado;
        marca.fechaActualizacion = new Date();
        marca = await marca.save();
        res.send(marca);
    } catch (error) {
        console.log(error);
        res.send('ocurrio un error');
    }
});

module.exports = router;