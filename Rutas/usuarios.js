const {Router} = require('express');
const router = Router();
const Usuario = require('../modelos/Usuario');
const {validar_usuario, validarusuario } = require ('../helpers/validar_usuario')
router.post('/', async function(req, res){
    try{
        const validacion = validarusuario(req);

        if (validacion.length >0){
           return res.status(400).send(validacion);
        }

        const usuarioexiste = await Usuario.findOne({email: req.body.email});
        console.log('usuario ya existe');
         if(usuarioexiste){
            return res.send('Email ya existe ');
         }
        let usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();
    
        usuario = await usuario.save();
        res.send(usuario);

    } catch(error){
        console.log(error);
        res.send('Error creando el usuario');
    }
   
});

router.get('/', async function(req, res){
    try {
        const usuarios = await Usuario.find();
        res.send(usuarios);
        
    } catch (error) {
        console.log(error);
        res.send('ocurrio un error consultando Usuario');
    }
    

});

router.put('/:usuarioId', async function(req, res){
    try{
        console.log('objeto recibido', req.body, req.params);
        let usuario = await Usuario.findById(req.params.usuarioId);
        if(!usuario){
            return res.send('Usuario no Existe');
        }
        
        const existeusuario = await Usuario
        .findOne({email: req.body.email, _id:{$ne: usuario._id}});
        console.log(' usuario ya existe', existeusuario);
         if(existeusuario){
            return res.send('Email ya existe ');
         }
        usuario.email = req.body.email;
        usuario.nombre = req.body.nombre;
        usuario.estado = req.body.estado;
        usuario.fechaActualizacion = new Date();
    
        usuario = await usuario.save();
        res.send(usuario);

    } catch(error){
        console.log(error);
        res.send('Error Actualizando Usuario');
    }

});

module.exports = router;