const express = require('express');

// Inclua as rotas para empresas e usuarios
const empresasRoutes = require('./routes/empresas');
const usuariosRoutes = require('./routes/usuarios');

const app = express();

const port = 3000;

app.use('/empresas', empresasRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
