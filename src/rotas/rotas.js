const geraPaginaTodo = require('../view/todo_app');
let tarefas = [{
    "titulo": "dormir",
    "descricao": "9 as 21"
},{
    "titulo": "tomar remedio",
    "descricao": "12"
}];

    module.exports  = (app)=>{
        app.get('/',(req,res)=>{
            res.send(geraPaginaTodo(tarefas)); /*exibir no html*/
        });        
    };/*exportando a var app para a view pode visualizar*/ 

const TarefasController = require("../controller/TarefasController");

const rotas = (app)=>{
    app.get('/tarefas', TarefasController.buscandoTarefas() );

    app.post('/tarefas/:idtarefa', TarefasController.inserindoTarefa());

    app.put('/tarefas/:idtarefa',TarefasController.modificandoTarefa());

    app.delete('/tarefas/:idtarefa', TarefasController.deletandoTarefa());
    
};

module.exports = rotas; /* exportou a função para usar no servidor */