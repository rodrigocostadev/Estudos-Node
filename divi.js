module.exports = function divi (x,y){
    return x / y;
}


// Se tivesse outra função para exportar abaixo, por exemplo uma multiplicação, ao tentar utilizar a função acima
//não daria certo( ela seria anulada pela função abaixo,), pois só aceita um Module.exports por arquivo, 
//então SO FUNCIONARIA A FUNÇÃO ABAIXO MESMO TENTANDO PUXAR A OPERAÇÃO DE DIVISAO NO ARQUIVO PRINCIPAL 

// module.exports = function divi (x,y){
//     return x * y;
// }



//IMPORTANTE : para poder usar varias funções em um arquivo veja como foi feito no arquivo calc.js 