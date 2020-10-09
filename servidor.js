const express = require('express');/*importando express*/
const rotas = require('./src/rotas/rotas');/*importando o arquivo rotas*/
const app = express();/*executando o metodo*/
const porta = 3000;/*porta*/
rotas(app);/*executando a função anonima   */
app.listen(porta);
module.exports  = app;/*exportando a var app*/ 