console.log("Hello World")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// PROMISES, FETCH, ASYNC ////////////////////////////////////////////////////////////////

// fetch('https://api.github.com/users/rodrigocostadev')
//     .then( response => { 
//         return response.json() 
//     })
//     .then( body => {
//         console.log(body)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("Executou a Promise independente de sucesso ou erro")
//     })

async function buscadadosnogithub () {
    try{
        const response = await fetch ("https://api.github.com/users/rodrigocostadev")
        const body = await response.json()
        // return body.name
        console.log(body.name)
        // console.log(body)
    }catch(err){
        console.log(err)
    }finally{
        console.log(" executou a promise da função async")
    }
}

buscadadosnogithub()

// buscadadosnogithub().then(name => {
//     console.log(name)
// })



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// INSERINDO ARGUMENTOS //////////////////////////////////////////////////

// NO NODE DIGITAR =         node script.js sum 10 10     (EXEMPLO)
// Ao digitar (node script.js sum 10 10) eu tenho 5 argumentos
//node é o 1 argumento
//script.js é o 2 argumento
//sum é o 3 argumento
//10 é o 4 argumento
//10 é o 5 argumento
//O 3 argumento é a operação. pode ser = sum, mult, div, sub

//preciso somente dos 3 ultimos argumentos que é a letra que identifica a operação e os numeros

let args = process.argv.slice(2)//corta os 2 primeiros argumentos que não são uteis ( node, script.js)


let divi = require("./divi") //exemplo de modulos
let calc = require("./calc") //exemplo de modulos

let a = Number(args[1])
let b = Number(args[2])
let c = ""

console.log(c)

if (args[0] == "sum"){
    c = sum(a,b)
}else if(args[0] == "mult"){
    c = mult(a,b)
}else if(args[0] == "div"){
    c = divi(a,b)
}else if(args[0] == "sub"){ //exemplo de modulos
    c = calc.sub(a,b)
}else{
    c = "Operação Invalida"
}

function sum(x,y){
    return x + y
}

function mult(x,y){
    return x * y
}

console.log(c)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////       MODULOS        //////////////////////////////////////////////////

//os exemplos de modulos estão acima, não deu pra colocar aqui abaixo se não o programa não roda.
//mas basicamente modulos são arquivos separados e especificos para alguma utilização.

//Require é utilizado para importar os modulos:
// let divi = require("./divi")
// let calc = require("./calc")

// else if(args[0] == "sub"){
//     c = calc.sub(a,b)
// }




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////  TRABALHANDO COM ARQUIVOS EM NODE  //////////////////////////////////////////////////

//importando o modulo fs (File Sistem, traduzindo: sistema de arquivos)
//como o modulo é original do node, (não é um aruquivo separado) nao precisa usar . ou / para "referenciar", ex:
// let fs = require('./fs')

let fs = require('fs')

//criando arquivo com node:
//o metodo writefile tem 3 argumentos
//o 1 argumento é o nome e tipo do arquivo que eu quero, ex: teste.txt
//o 2 argumento é o que a gente quer escrever, ex: Ola Mundo!
//o 3 argumento é um callback

// NO NODE DIGITAR = node script.js  
// descomentar as sessoes desejadas

//CRIAR ARQUIVO

// fs.writeFile("teste.txt", "Hello World", function(error){
//     if(error){throw error}
//     console.log("Arquivo CRIADO com Sucesso")
// })

//CONCATENAR CONTEUDO DE ARQUIVO
// se eu apagasse o 2 argumento que é hello world, e escrevesse outra coisa no lugar, ele apenas substituiria.
// caso eu quisesse concatenar/ adicionar algo ao queja esta escrito, tenho que utilizar o metodo appendfile

// fs.appendFile("teste.txt", " - Ola Mundo", function(error){
//     if(error){throw error}
//     console.log("Arquivo ATUALIZADO com Sucesso")
// })

//append vai concatenar e write vai sobrescrever

//APAGAR ARQUIVO
//para apagar usar o unlink
//no unlink nao recebe o 2 argumento como era feito anteriormente(ex: ola mundo)

// fs.unlink("teste.txt", function(error){
//     if(error){throw error}
//     console.log("Arquivo APAGADO com Sucesso")
// })

//LER ARQUIVO
//ler o conteudo que esta no arquivo e mostrar na tela do node
// o que muda é que não tem o 2 argumento como era usado anteriormente(ex: ola mundo), 
//mas sim o formato do conteudo que quero apresentar
// tambem muda a função que recebe outro argumento como callback, que são os dados do arquivo, no caso data

// fs.readFile("teste.txt","utf-8", function(error,data){
//     if(error){throw error}
//     console.log("Arquivo LIDO com Sucesso")
//     console.log(data)
// })

//RENOMEAR ARQUIVO
//o 1 argumento é o nome atual do arquivo, o 2 argumento é o novo nome do arquivo

// fs.rename("teste.txt", "NovoNome.txt", function(error){
//     if(error){throw error}
//     console.log("Arquivo RENOMEADO com Sucesso")
// })



//PEGANDO TUDO O QUE VEMOS ATÉ AQUI E CRIANDO ALGO INTERESSANTE:
//Vamos transformar o conteudo de um arquivo txt ja existente, de letras em tamanho normal para maiusculas
//só funciona se ja tiver um arquivo existente com o nome NovoNome.txt, ou for definido com outro nome anteriormente

//   argumentos       1arg  2arg    3arg
// NO NODE DIGITAR = node script.js NovoNome.txt

//vai seer criado outro arquivo com o nome NovoNome.txt_Uppercase com o conteudo alterado para letras maiusculas

let fs2 = require('fs')
let args2 = process.argv.slice(2)//corta os 2 primeiros argumentos que não são uteis ( node, script.js)

let fileName = args2 [0]

fs2.readFile(fileName, "UTF8", (error, data) =>{
    if (error) throw error;

    fs2.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error) =>{
        if (error) throw error;

        console.log("Arquivo gerado com sucesso")
    } )
})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////         PACOTES          //////////////////////////////////////////////////

//Pacotes é o conjunto de 1 ou mais modulos
//pegamos varios modulos juntamos tudo e damos um nome, isso é um pacote
//quando criamos um pacote, podemos utilizar esse codigo que a gente criou em outros programas, 
//basta instalar esse pacote no nosso programa.
//Esse pacote pode ser um pacote que a gente criou ou pode ser de outra pessoa.
//quando uma pessoa disponibiliza um pacote nos não precisamos saber qual algoritmo ela usou pra resolver o problema,
//mas sim qual problema esse pacote resolve , e como chamamos a função que resolve o tal problema

// const operacoesBasicas = require("./operacoesBasicas")
// const areas = require("./areas")

// module.exports = {...operacoesBasicas, ...areas}

//tenho os arquivos areas.js e operacoesBasicas.js e quero transformalas em pacote.
//quando instalamos o nodeJS instalamos tambem o NPM (Node Package Manager, ou Gerenciador de Pacotes do Node)
// atraves dele fica muito facil de criar ou instalar um pacote





//Para criar um pacote, na tela do node digitar = npm init
//vai criar um arquivo package.json
//esse arquivo json tem um objeto json que vai definir todas as caracteristicas do pacote
// a 1 pergunta vai pedir qual nome escolher para o pacote
//a 2 é a versao
//3 descrição
//4 entry point ///// IMPORTANTE //// entry point é o arquivo onde estou juntando tudo, ou o arquivo principal
//5 test comand
//6 git repository
//7 keywords
//8 autor 
//9 licensa




//para instalar um pacote,  na tela do node digitar = npm install
//IMPORTANTE: para instalar um pacote é necessario que ja exista algum pacote criado, para depois instalar outro pacote
//então: 1 criar pacote, 2 instalar pacote
//na tela do node, instalar pacote, use as aspas para referenciar a pasta do pacote a ser instalado
//veja o exemplo: npm install "C:\Users\Rodrigo\Desktop\Programador BR\Estudos-Node\mat"
//no pacote novo que voce criou, depois de fazer npm install, verificar as dependencias pra garantir que o pacote foi instalado
//sempre que voce instalar um pacote seu mesmo ou de outro dev, ele vai instalar dentro da pasta node_modules, 
//e vai colocar como dependencia no arquivo package.json

//no arquivo index.js foi escrito o seguinte codigo:
        // let calc = require("mat")
        // console.log(calc)
//

//no node, ir para o diretorio C:\Users\Rodrigo\Desktop\Programador BR\Estudos-Node\meu programa que é onde
//esta o programa raiz, o que está recebendo o novo pacote instalado e digitar = node index.js
// logo vai aparecer todos os metodos ( da minha variavel calc / do novo pacote instalado )

        // C:\Users\Rodrigo\Desktop\Programador BR\Estudos-Node\meu programa (main -> origin) (meu-programa@1.0.0)
        // λ node index.js
        // {
        //   soma: [Function: soma],
        //   subtracao: [Function: subtracao],
        //   divisao: [Function: divisao],
        //   multiplicacao: [Function: multiplicacao],
        //   areaQuadrado: [Function: quadrado],
        //   areaRetangulo: [Function: retangulo],
        //   areaTriangulo: [Function: triangulo],
        //   areaCirculo: [Function: circulo]
        // }

//então para calcular a area de um quadrado por exemplo, basta adicionar o metodo do pacote na variavel calc 
//como a area do quadrado é lado vezes lado, e essa formula esta descrita no arquivo areas.js, basta colocar o valor 
//do lado do quadrado entre parenteses. ex:

        // let calc = require("mat")
        // console.log(calc.areaQuadrado(5))





//explicando o funcionamento de um pacote: nao é preciso saber como os pacotes resolvem os problemas, só é preciso saber
//quais ferramentas ele me oferece pra eu poder utilizar, então so preciso saber como utilizar e não como o algoritmo
//funciona. isso é otimo pois não é preciso recriar algo ou reinventar a roda


//se por acaso eu apagar o pacote, é só instalar ele novamente que ele retorna ao seu estado original, e 
// reinstala todas as suas dependencias do projeto