// 3- Agora inverta o lado do triângulo.

valor = 5
let trianguloInverso = ""
let espaco = " "
for (let i = 1; i <= valor; i += 1) {
    trianguloInverso = trianguloInverso + " ";
}
console.log(trianguloInverso);

for (let i = 1; i <= valor; i += 1) {
    trianguloInverso.substring(1) + "*";
    console.log(trianguloInverso);
}