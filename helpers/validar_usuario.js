const validarusuario = (req)=>{
   const validar = [];

   if (!req.body.nombre){
    validar.push('Nombre Requerido');
 }

 if (!req.body.email){
    validar.push('email Requerido');
 }
 if (!req.body.estado){
    validar.push('estado Requerido');
 }
 if (!req.body.fechaCreacion){
    validar.push('fechaCreacion Requerido');
 }
return validar;
}



module.exports = {
    validarusuario
}