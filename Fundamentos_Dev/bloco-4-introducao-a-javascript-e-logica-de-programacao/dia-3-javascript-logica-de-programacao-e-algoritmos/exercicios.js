// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let valor = 5
let quadrado = ""
for (let i = 1; i <= valor; i += 1) {
    quadrado = quadrado + "*";
}
for (let i = 1; i <= valor; i += 1) {
    console.log(quadrado);
}