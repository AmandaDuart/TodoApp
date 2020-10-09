const TarefasDAO = require('../../config/DAO/TarefasDAO');
const db = require('../../config/database/database');

const tarefasDAO = new TarefasDAO(db);/* instancia do dão*/


class TarefasModel{
    static buscarTarefas(){
        return tarefasDAO.buscarTarefas();
    }
    static inserirTarefa(req){
        return tarefasDAO.inserirTarefa(req);
    }
    static modificarTarefa(id){
        return tarefasDAO.modificarTarefa(id);
    }
    static deletarTarefa(req){
        return tarefasDAO.deletarTarefa(req);
    }
}
module.exports = TarefasModel
}