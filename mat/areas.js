module.exports.areaQuadrado = function quadrado (lado) { return lado * lado } 
module.exports.areaRetangulo = function retangulo (altura, base) { return base * altura } 
module.exports.areaTriangulo = function triangulo (altura, base) { return (base * altura) / 2 } 
module.exports.areaCirculo = function circulo (raio) { const pi = 3.1415; return pi * raio * raio } 

//IMPORTANTE:
//esse arquivo não está rodando, tem algum erro e não encontrei ate o momento
//anteriormente na função areaQuadrado eu tinha digitado lado + lado, mas ao perceber o erro e alterar o sinal para *
//ao rodar no terminal do node ele nao atualizou mais e continuava fazendo a soma mesmo depois de atualizado para *
//foi feito varios testes com com npm update, salvei o arquivo manualmente, mas continuava o erro
//foi feita uma alteração da posição da função da area do quadrado, que estava em primeiro e coloquei para o 2 lugar
// ao fazer isso e dar um npm update aparece uma mensagemde que a função area quadrado nao é uma função
//todas as outras funçoes deixaram de funcionar, e na tela do terminal do node aparece isso:
//11 vulnerabilities (3 low, 2 moderate, 6 high)