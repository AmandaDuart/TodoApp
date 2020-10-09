const TarefasModel= require('../Model/TarefasModel');//import class

class TarefasController{
    constructor(){
        throw ('erro')
    }
    
    static buscandoTarefas(){
        return function(req,res){
            TarefasModel.buscarTarefas()
            .then(tarefa =>{
                res.send(tarefa)
        })
        .catch(err => console.log(err));
    }
}

    static inserindoTarefa(){
        return function(req,res){
            TarefasModel.inserirTarefa(req)
            .then(tarefa =>{
               console.log(tarefa);
        })
        .catch(err => console.log(err));
    }
}

    static deletandoTarefa(){
        return function(req,res){
            TarefasDAO.deletarTarefa(req)
            .then(tarefa =>{
               console.log(tarefa);
        })
        .catch(err => console.log(err));
    }

}
    static modificandoTarefa(){
        return function(req,res){
            TarefasModel.modificarTarefa(req)
            .then(tarefa =>{
            console.log(tarefa);
        })
        .catch(err => console.log(err));
    }   

}

}

module.exports = TarefasController;
