// Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um
//valor de temperatura em Fahrenheit e exibi-lo em Celsius

const tempF = Number(prompt("Digite a temperatura em Fahrenheit: "))

const tempC = 5/9*(tempF - 32)

alert("A temperatura convertida em Celsius é de " + tempC + "°")