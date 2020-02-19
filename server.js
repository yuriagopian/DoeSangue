




// configurando servidor
const express = require("express");
const server =  express()

// configurar server para apresentar arquivos extra midd
server.use(express.static('public'))

// habilitar body do form midd
server.use(express.urlencoded({extended:true}))


// configurando template engione
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express : server,
    noCache: true,
})

// lista de doadores : array
const donors = [
  {
    name : "diego Fernanes",
    blood :"AB+"
  },
  {
    name : "Kamila",
    blood : "O+"
  },
  {
    name : "Minasse",
    blood : "B+"
  },
  {
    name : "Tito ",
    blood : "A+"
  }
]

// configurando a apresentaçõa da pagina
server.get("/", function (req,res) {

  return res.render("index.html", { donors })

})


server.post("/", function (req, res) {
  const name =req.body.name
  const email = req.body.email
  const blood = req.body.blood 
  

  //color valores dentro do array
  donors.push({
    name:name,
    blood: blood,
  })

  return res.redirect("/")
})


// ligar o servidor e permitir o acesso a porta 3000
server.listen(3000, function (){
    console.log('rodando na porta : ')

})

