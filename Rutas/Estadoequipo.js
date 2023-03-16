const { Router } = require('express');
const EstadoEquipo = require('../modelos/EstadoEquipo');

const router = Router();

router.get('/', async function(req, res){
    try {
        const tipos = await EstadoEquipo.find();
        res.send(tipos);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error inesperado')
    }
});

router.post('/', async function(req, res){
    try {
        let estadoEquipo = new EstadoEquipo();
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaCreacion = new Date();
        estadoEquipo.fechaActualizacion = new Date();
        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error inesperado');
    }
});

router.put('/:EstadoEquipoId', async function(req, res){
    try {
        let estadoEquipo = await EstadoEquipo.findById(req.params.EstadoEquipoId);
        if(!estadoEquipo){
            return res.send('No existe');
        }
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaActualizacion = new Date();
        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo);
    } catch (error) {
        console.log(error);
        res.send('Ocurrio un error inesperado');
    }
});

module.exports = router;