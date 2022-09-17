// Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
//seu raio e sua altura.

const alturaLataOleo = Number(prompt("Qual é a altura da lata de óleo ? "))
const raioLataOleo = Number(prompt("Qual é o raio da lata de óleo ? "))

const volumeLataOleo = 3.14 * raioLataOleo * raioLataOleo * alturaLataOleo

alert("O volume da lata de óleo é de " + volumeLataOleo + "m³")