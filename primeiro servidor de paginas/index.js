/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// PRIMEIRO SERVIDOR DE PAGINAS COM NODE //////////////////////////////////////////////////

const http = require('http')
const url = require('url')

http.createServer((request, response) => {

    console.log(url.parse (request.url))
    
}).listen(3000, (err) =>{
    if (err) {
        console.log(err)
    }else{
        console.log("Servidor Rodando na Porta 3000")
    }
})
