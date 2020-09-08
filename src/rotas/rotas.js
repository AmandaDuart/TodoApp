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