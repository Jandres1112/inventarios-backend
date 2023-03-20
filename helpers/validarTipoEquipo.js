const validartipo = (req) => {
    const validar = [];

    if (!req.body.nombre){
        validar.push('Nombre Requerido');
     }

     if (!req.body.estado){
        validar.push('Estado Requerido');
     }
    
     if (!req.body.fechaCreacion){
        validar.push('Fecha Creacion Requerido');
     }
    
    return validar;
}


module.exports = {
    validartipo
}