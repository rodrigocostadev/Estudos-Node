/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// PRIMEIRO SERVIDOR DE PAGINAS COM NODE //////////////////////////////////////////////////

const http = require('http') //http é um modulo do node.js

// const { json } = require('stream/consumers')
const url = require('url')
const fs = require('fs')

// createserver é um metodo do http para criar um servidor
//ele recebe uma função com 2 parametros, requisição e resposta (request , response)
http.createServer((request, response) => {

// AULA 1 MODULO HTTP:  (Primeira aula) /////////////////////////////////////////////////////////////////////////////////////////////

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




    

// AULA 2 PRIMEIRO SERVIDOR DE PAGINAS COM NODE:  (SEGUNDA aula) /////////////////////////////////////////////////////////////////////

    //Ao digitar no vscode:

    // (descomentar abaixo para testar)
    // console.log(url.parse (request.url)) //aqui estou pegando a requisição e a url dela

    // digitar ( node index ) no terminal do cmder sem os parenteses.
    // no navegador digitar localhost:3000 e colocar (  /teste ) no final ou qualquer outro nome:      localhost:3000/teste
    // no terminal aparecera as seguintes informações:
    
            // Url {
            //     protocol: null,
            //     slashes: null,
            //     auth: null,
            //     host: null,
            //     port: null,
            //     hostname: null,
            //     hash: null,
            //     search: null,
            //     query: null,
            //     pathname: '/teste',
            //     path: '/teste',
            //     href: '/teste'
            // }

    //como o navegador fica atualizando direto, ele está aguardando por uma resposta, então colocaremos response.end 
    // (descomentar abaixo para testar)
    // response.end()


    //nao preciso mais mostrar na tela com o console.log as informações do meu url, mas preciso pegar o url
    // então simplificando:
    let path = url.parse(request.url).pathname //aqui estou pegando a requisição e a url dela, 
    // o .pathname é a propriedade do "objeto" url que foi mostrado anteriormente:
        // Url {
                //     protocol: null,
                //     slashes: null,
                //     auth: null,
                //     host: null,
                //     port: null,
                //     hostname: null,
                //     hash: null,
                //     search: null,
                //     query: null,
                //     pathname: '/teste',
                //     path: '/teste',
                //     href: '/teste'
                // }

    // como eu quero abrir meus arquivos index.html e sobre.html requisitando pelo navegador, 
    // para abrir os arquivos eu vou precisar do filesystem, ou a const fs = require('fs') que ja foi declarado la acima anteriormente

    if(path == "" || path == "/"){
        path = "/index.html"
    }

    let filename = "." + path //como os arquivos estão na mesma pasta foi criado essa variavel filename, 
    // que é a concatenação do ponto pra dizer que esta na mesma pasta, mais o pathname

    //agora o que eu preciso fazer é abrir o arquivo, então eu faço:
    fs.readFile(filename, (err, data) =>{
        if(err){
            response.writeHead(404, {"Content-Type":"text/html; charset=utf-8"})//o charset é para as letras não ficarem "esquisitas"
            response.end("<h1>Página Não Encontrada</h1>") //se der erro mostrar pagina nao encontrada
        }else{
            response.writeHead(200, {"Content-Type":"text/html"})
            response.write(data) //se estiver tudo ok, pega o data que é o conteudo do meu arquivo e coloca na resposta
            response.end()//envia a resposta e encerra a requisição
        }

    // feito isso, com o terminal cmder rodando o node index, no navegador  
    // ao digitar: localhost:3000/teste   aparecerá pagina não encontrada
    // ao digitar: localhost:3000/index.html   aparecerá Pagina Principal
    // ao digitar: localhost:3000/sobre.html   aparecerá Sobre

    // ao digitar: localhost:3000/ ou localhost:3000  aparecerá pagina não encontrada, 
    // para solucionar isso foi feito a checagem do path acima, no qual se o path for igual a vazio ou igual a barra, recebe index.html
    })

    // response.end()

}).listen(3000, (err) =>{ 

    //se acontecer algum erro com o meu servidor, ou ele não for criado direito:
    if (err) {
        console.log(err)
    }else{
        console.log("Servidor Rodando na Porta 3000")
    }
})
