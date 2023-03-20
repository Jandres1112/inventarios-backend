const validarEsequipo = (req) => {
    validar = [];
   
    if (!req.body.nombre){
        validar.push('nombre Requerido');

     }

     if (!req.body.estado){
        validar.push('Estado Requerido');
     }

    if (!req.body.fechaCreacion){
        validar.push('fecha Creacion Requerido');
     }

     return validar;
     
   
}

module.exports = {
    validarEsequipo
}
