const sqlite3= require('sqlite3').verbose()
const db= new sqlite3.Database('./ws.db')

db.serialize(function(){

    
    // Criar a tabela 
        db.run(`CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
        );`);
        
        //Inserir dados na tabela 
/*        
      const query= `
        INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
        ) VALUES(?,?,?,?,?);
    `
    
    db.run(query, [
        "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        "Karaokê",
        "Programa em Família",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint amet qui officia quam ad tenetur, nobis totam dignissimos",   
        "https://rocketseat.com.br" 
    ], function(err){
        if(err) return console.log(err)
        console.log(this)
    }) */
      
    
     // Deletar todos os dadoa da tabela 
     /*  db.run("DELETE FROM ideas",function(err,rows){
        if (err) return console.log(err)
        console.log("DELETEI", this)

     })  */


    // Cosultar dados na tabela 
  /*    db.all(`SELECT * FROM ideas`, function(err, rows){
      if(err) return console.log(err)

       console.log(rows);
     });
 */
  
    
})

module.exports=db