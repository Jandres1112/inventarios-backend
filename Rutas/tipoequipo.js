const { Router } = require('express');
const TipoEquipo = require('../modelos/TipoEquipo');
const router = Router();
const {validarTipoEquipo, validartipo } = require ('../helpers/validarTipoEquipo');
router.get ('/', async function(req, res){
    try {
        const tipos = await TipoEquipo.find();
        res.send(tipos);
    } catch (error) {
       console.error(error);
       res.send('Error al consultar el tipo equipo') 
    }
});

router.post ('/', async function(req, res){
      
    const validacion = validartipo(req);

    if (validacion.length >0){
       return res.status(400).send(validacion);
    }

    try {
        let tipoEquipo = new TipoEquipo();
        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaCreacion = new Date();
        tipoEquipo.fechaActualizacion = new Date();
        tipoEquipo = await tipoEquipo.save();
        res.send(tipoEquipo);
    } catch (error) {
        console.log(error);
        res.send('Error al crear el tipo de Equipo')
    }
});

router.put ('/:tipoEquipoId', async function(req, res){
    try {
        let tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoId);
        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaActualizacion = new Date();
        tipoEquipo = await tipoEquipo.save();
        res.send(tipoEquipo);
    } catch (error) {
        console.log(error);
        res.send('Error al actualizar el tipo de Equipo')
    }
});
 
module.exports = router;