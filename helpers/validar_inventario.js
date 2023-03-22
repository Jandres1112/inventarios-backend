const validarInventario = (req) => {
    const validation = [];

    if (!req.body.serial){
        validation.push('Serial Requerido');
    }

    if (!req.body.modelo){
        validation.push('Modelo Requerido');
    }
    if (!req.body.descripcion){
        validation.push('Descripción Requerido');
    }

    if (!req.body.color){
        validation.push('Color Requerido');
    }

    if (!req.body.fechacompra){
        validation.push('fechacompra Requerido');
    }
    if (!req.body.foto){
        validation.push('Foto Requerido');
    }

    if (!req.body.precio){
        validation.push('Precio Requerido');
    }

    if (!req.body.usuario){
        validation.push('Usuario Requerido');
    }
    
    if (!req.body.marca){
        validation.push('Marca Requerido');
    }

    if (!req.body.tipoEquipo){
        validation.push('TipoEquipo Requerido');
    }

    if (!req.body.EstadoEquipo){
        validation.push('EstadoEquipo Requerido');
    }

     return validation;
}








module.exports = {
    validarInventario
}