




// configurando servidor
const express = require("express");
const server =  express()

// configurar server para apresentar arquivos extra midd
server.use(express.static('public'))

// habilitar body do form midd
server.use(express.urlencoded({extended:true}))

// configurar conexão banco
const Pool  = require('pg').Pool;
const db =  new Pool({
  user :'postgres',
  password: '0000',
  host: '172.17.0.4',
  port: 5432,
  database: "DOE"

});


// configurando template engione
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express : server,
    noCache: true,
})

// lista de doadores : array

// configurando a apresentaçõa da pagina
server.get("/", function (req,res) {

  return res.render("index.html", { donors })

})


server.post("/", function (req, res) {
  const name =req.body.name
  const email = req.body.email
  const blood = req.body.blood 
  
if (name =="" || email == "" || blood == ""){
   return res.send("Todos os campos são obrigatórios") 
}
  //color valores dentro do banco de dados
  const query = `insert into donors ("name", "email", "blood") 
  values($1, $2 ,$3)`

  const values = [name, email, blood]

  db.query(query, values, function (err){
    if (err) return res.send("Erro no banco de dados.")
    
    return res.redirect("/")
  })

 
})


// ligar o servidor e permitir o acesso a porta 3000
server.listen(3000, function (){
    console.log('rodando na porta : ')

})

