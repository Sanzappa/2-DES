var a = 4;
var b = 7;
var c = 4;

if(a == b && a == c && b == c) {console.log("equilatero")}
else if (a != b && a != c && b != c) {console.log("escaleno")}
else {console.log("isósceles")}


//ex. 2
// let salarios = [3200, 2500, 4000];

// salarios.forEach(salario => {
//     if(salario < 1903.98){
//         console.log("Está isento de taxa")
//     }else if(salario < 2826.65) {
//         var r1 = salario + (salario * 7.5 / 100)
//         console.log(`Terá que pagar uma taxa de 7,50% ${r1}`)
//     }else if(salario < 3751.06){
//         var r2 = salario + (salario * 15 / 100)
//         console.log(`Terá que pagar uma taxa de 15% ${r2}`)
//     }else if(salario < 4664,68){
//         var r3 = salario + (salario * 22.5 / 100)
//         console.log(`Terá que pagar uma taxa de 22,50% ${r3}`)
//     }else{
//         var r4 = salario + (salario * 27.5 / 100)
//         console.log(`Terá que pagar uma taxa de 27,50% ${r4}`)      
//     }
// })