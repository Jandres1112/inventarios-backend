const validarmarca = (req ) => {
    const validar = [];

    if (!req.body.nombre){
        validar.push('Nombre Requerido');
     }

     if (!req.body.estado){
        validar.push('Estado Requerido');
     }
     
     if (!req.body.fechaCreacion){
        validar.push('fecha de creación Requerido');
     }

     return validar;

}

module.exports = {
    validarmarca
}