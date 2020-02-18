// configurando servidor
const express = require('express');
const server =  express()

// configurar server para apresentar arquivos extra
server.use(express.static('public'))

// configurando template engione
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express : server
})

// configurando a apresentaçõa da pagina
server.get("/", function (req,res) {

  return res.render("index.html")

})


// ligar o servidor e permitir o acesso a porta 3000
server.listen(3000, function (){
    console.log('rodando na porta : ')

})

