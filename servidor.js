const express = require('express');/*importando */
const rotas = require('./src/rotas/rotas');/*importando o arquivo rotas*/
const app = express();/*executando o metodo*/
const porta = 3000;/*porta*/
rotas(app);/*exxecutando a função anonima   */
app.listen(porta,console.log("BUUU VAQUINHA"));
module.exports  = app;/*exportando a var app*/ 