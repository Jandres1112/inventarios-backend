const {Schema, model} = require('mongoose');

const inventarioSchema = Schema ({
  Serial: {
    type: String,
    required: true,
    unique:true,
  },
  modelo: {
    type: String,
    //required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  fechacompra: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuario',
    required: false,
  },
  marca: {
    type: Schema.Types.ObjectId,
    ref: 'marca',
    required: true,
  },
  TipoEquipo: {
    type: Schema.Types.ObjectId,
    ref: 'TipoEquipo',
    required: true,
  },
  EstadoEquipo: {
    type: Schema.Types.ObjectId,
    ref: 'EstadoEquipo',
    required: true,
  },
  fechaCreacion: {
    type: Date,
    required: true,
  },
  fechaActualizacion: {
    type: Date,
    required: true,
  },
  

});

module.exports = model('Inventario', inventarioSchema);