

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////  REDIMENSIONANDO UMA IMAGEM //////////////////////////////////////////////////


// const sharp = require("sharp") //importando o sharp

// let path = process.argv[2] //process.argv pega a "informação" da linha de comando, 
// //path é "o caminho do arquivo", no caso vai ser o nome do arquivo da minha foto
// let width = Number(process.argv[3]) //process.argv pega a "informação" da linha de comando referente a largura

// // console.log(path, width)

// function resize (path,width){
//     //passando o endereço do meu arquivo para o sharp
//     // sharp(path) 
//     //para modificarmos o tamanho da imagem utilizamos o metodo resize, que espera um argumento, 
//     //esse argumento pode ser um objeto que tem largura e altura, mas nos vamos utilizar somente a largura
//     // sharp(path).resize({width: width})
//     // metodo toFile serve para mostrar o caminho para salvar
//     //temp é a pasta que vai salvar depois de redimensionar a imagem.
//     //output_resize.jpg é o nome do arquivo a ser salvo 
//     // sharp(path).resize({width: width}).toFile("./temp/output_resize.jpg"
//     sharp(path).resize({width: width}).toFile("./temp/output_resize.jpg", (err)=>{
//         if (err){
//             console.log(err)
//         }else{
//             console.log("Imagem Redimensionada com sucesso")
//         }
//     })
// }

// resize(path,width)

// para redimensionar a imagem, digitar no terminal do node:
//node, app.js, nome da imagem a ser redimensionada, tamanho desejado.
//ex:
//node app.js image.jpg 600



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////  COMPRIMINDO UMA IMAGEM E REDIMENSIONANDO //////////////////////////////////////////////////

//comprimindo uma imagem e redimensionando ela.
//para fazer isso comentar os codigos anteriores de REDIMENSIONANDO IMAGEM.

const sharp = require("sharp") //importando o sharp
const compress_images = require('compress-images')
const fs = require("fs")// pacote File System, vai ser utilizado para apagar o arquivo redimensionado depois que ele for comprimido

let path = process.argv[2] //process.argv pega a "informação" da linha de comando, 
//path é "o caminho do arquivo", no caso vai ser o nome do arquivo da minha foto
let width = Number(process.argv[3]) //process.argv pega a "informação" da linha de comando referente a largura

// console.log(path, width)

function resize (inputPath,outputPath,width){
    //passando o endereço do meu arquivo para o sharp
    // sharp(path) 
    //para modificarmos o tamanho da imagem utilizamos o metodo resize, que espera um argumento, 
    //esse argumento pode ser um objeto que tem largura e altura, mas nos vamos utilizar somente a largura
    // sharp(path).resize({width: width})
    // metodo toFile serve para mostrar o caminho para salvar
    //temp é a pasta que vai salvar depois de redimensionar a imagem.
    //output_resize.jpg é o nome do arquivo a ser salvo 
    // sharp(path).resize({width: width}).toFile("./temp/output_resize.jpg"
    sharp(inputPath).resize({width: width}).toFile(outputPath, (err)=>{
        if (err){
            console.log(err)
        }else{
            console.log("Imagem Redimensionada com sucesso")
            compress (outputPath,"./compressed/" )
            //se deu certo o redimensionamento da imagem, vai chamar a função compress, que recebe como input o output do resize
            // o output do resize é a pasta destino, no qual foi salvo depois de redimensionada a imagem
            //a pasta compressed é o local no qual eu quero salvar o meu arquivo comprimido
        }
    })
}

function compress (pathInput, outputPath ){

// o codigo abaixo que esta nesta função foi copiado da documentação e foi substituido alguns argumentos

    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");
        });


        // vai ser utilizado para apagar o arquivo redimensionado depois que ele for comprimido
        fs.unlink(pathInput, (err) => {
            if (err){
                console.log (err)
            }
            else{
                console.log(pathInput, "Apagado")
            }
        })
}

resize( path, './temp/output_resize.jpg', width)


// para redimensionar e comprimir a imagem, digitar no terminal do node:
//node, app.js, nome da imagem a ser redimensionada, tamanho desejado.
//ex:
//node app.js image.jpg 600


////////  NAO ESTA COMPRIMINDO A IMAGEM   /////////////






