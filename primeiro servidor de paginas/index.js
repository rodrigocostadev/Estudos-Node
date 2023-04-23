/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// PRIMEIRO SERVIDOR DE PAGINAS COM NODE //////////////////////////////////////////////////

const http = require('http') //http é um modulo do node.js

const { json } = require('stream/consumers')
const url = require('url')
const fs = require('fs')

// createserver é um metodo do http para criar um servidor
//ele recebe uma função com 2 parametros, requisição e resposta (request , response)
http.createServer((request, response) => {

// AULA 1 MODULO HTTP:  (Primeira aula)

    //toda resposta precisa ter um cabeçalho, pra isso usa-se o metodo writehead, ele especifica o tipo da informação da resposta
    //200 é o codigo do status da requisição que diz que esta OK, para ver outros codigos pesquisar sobre codigos de status http

    // (descomentar abaixo para testar)
    // response.writeHead(200,{'Content-Type': 'text/plain'})             
    //o metodo .end vai retornar o que queremos enviar como resposta

    // IMPORTANTE: EM QUALQUER MODIFICAÇÃO FEITA, É PRECISO FAZER O CTRL C NO TERMINAL PARA FECHAR O DIRETORIO, E EM SEGUIDA 
    //ABRIR/INICIAR NOVAMENTE (digitar node index no terminal)
    // (descomentar abaixo para testar)
    // response.end("Hello World")

        //Outros tipos de cabeçalhos:   (descomentar para testar)
            // TEXT/HTML:
            // response.writeHead(200,{'Content-Type': 'text/html'})
            // response.end("<h1>Hello World<h1>")

            //APPLICATION/JSON
            // response.writeHead(200,{'Content-Type': 'application/json'})
            // response.end(JSON.stringify({texto: "<h1>Hello World<h1>", mensagem:"Esse é o meu objeto JSON"}))

    
    //quando definimos um servidortemos varias portas que podem ser acessadas pela internet, 
    //então precisamos definir qual porta a gente quer ficar "ESCUTANDO" pra quando ter uma requisição por essa porta, 
    //podermos processar e responder
    //normalmente a porta padrão de requisição web é a porta 80 ou 8080, nesse exemplo utilizamos a porta 3000

// AULA 2 PRIMEIRO SERVIDOR DE PAGINAS COM NODE:  (SEGUNDA aula)

    let path = url.parse(request.url).pathname

    response.end()

    console.log(url.parse (request.url))

}).listen(3000, (err) =>{ 

    //se acontecer algum erro com o meu servidor, ou ele não for criado direito:
    if (err) {
        console.log(err)
    }else{
        console.log("Servidor Rodando na Porta 3000")
    }
})
