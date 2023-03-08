const express = require('express');
const {getConnection} = require ('./db/db_conexion_mongo');
const app = express();
const port = 3000;

getConnection();

app.use(express.json());

app.use('/usuarios', require('./Rutas/usuarios'));
app.use('/Estadoequipo', require('./Rutas/Estadoequipo'));
app.use('/marca', require('./Rutas/marca'));
app.use('/tipoequipo', require('./Rutas/tipoequipo'));
app.use('/inventario', require('./Rutas/inventario'));
app.listen(port, () => {
    console.log('Example app listening on port ${port}')
});