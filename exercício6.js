// Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

const dividendo = Number(prompt("Digite o dividendo: "))
const divisor = Number(prompt("Digite o divisor: "))

const quociente = dividendo/divisor
const resto = dividendo%divisor

alert("O quociente da divisão de " + dividendo + " por " + divisor + " é: " + quociente)
alert("O resto da divisão de " + dividendo + " por " + divisor + " é: " + resto)
