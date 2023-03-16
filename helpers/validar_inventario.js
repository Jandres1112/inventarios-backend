const validarInventario = (req) => {
    const validacion = [];

    if (!req.body.serial){
        validacion.push('Serial Requerido');
    }

    if (!req.body.modelo){
        validacion.push('Modelo Requerido');
    }
    if (!req.body.descripcion){
        validacion.push('Descripción Requerido');
    }

    if (!req.body.color){
        validacion.push('Color Requerido');
    }

    if (!req.body.fechacompra){
        validacion.push('fechacompra Requerido');
    }
    if (!req.body.foto){
        validacion.push('Foto Requerido');
    }

    if (!req.body.precio){
        validacion.push('Precio Requerido');
    }

    if (!req.body.usuario){
        validacion.push('Usuario Requerido');
    }

    if (!req.body.tipoEquipo){
        validacion.push('TipoEquipo Requerido');
    }

    if (!req.body.EstadoEquipo){
        validacion.push('EstadoEquipo Requerido');
    }

     return validacion;
}








module.exports = {
    validarInventario
}