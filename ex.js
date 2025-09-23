let nota = parseFloat(prompt("digite sua nota"));

if (nota < 5) {
    console.log("reprovado");
} else if (nota >= 5 && nota <= 6.9) {
    console.log("recuperação");
} else if (nota >= 7 && nota <= 10) {
    console.log("aprovado");
}