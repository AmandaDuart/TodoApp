class TarefasDAO {
    constructor(db){
        this._db = db
    }
    buscarTarefas(){
        return new Promise((resolve,reject)=>{
         this._db.all(`SELECT * FROM TAREFAS`, (err, rows)=>{
            if (err){
                reject(`Tarefa não encontrada ${err}`) /* tratando o erro */
            }
            resolve(rows)
         })
        })
    }
    inserirTarefa(id){
        return new Promise((resolve,reject)=>{
         this._db.run(`INSERT INTO TAREFAS (titulo, decricao)  VALUES(?,?)`, [req.body.titulo, req.body.desricao], (err)=>{
            if (err){
                reject(`Tarefa não inserida ${err}`) /* tratando o erro */
            }
            resolve(`Inserido com sucesso!`)
         })
        })
    }

    modificarTarefa(id){
        return new Promise((resolve,reject)=>{
         this._db.run(`UPDATE TAREFAS SET titulo =?, descricao =? WHERE id=?`, [req.body.titulo, req.body.desricao], (err)=>{
            if (err){
                reject(`Tarefa não modificada ${err}`) /* tratando o erro */
            }
            resolve(`Modificado com sucesso!`)
         })
        })
    }

    deletarTarefa(id){
        return new Promise((resolve,reject)=>{
         this._db.run(`DELETE FROM TAREFAS where id=?`,[id],(err)=>{
            if (err){
            reject(`Tarefa não deletada ${err}`) /* tratando o erro */
            }
            resolve('Tarefa deletada com sucesso')
         })
        })
    }
}