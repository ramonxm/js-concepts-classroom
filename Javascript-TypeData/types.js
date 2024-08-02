
// Scope Global
// Boolean

let aluno = "Luan"
let avaliacao1 = 8
let ehAprovado = true

console.log(avaliacao1 >= 6)
console.log(ehAprovado, typeof ehAprovado)

// FALSY
// 0 false undefined null NaN "" 

// -> ! Negação
console.log(!aluno) 

// Sugar syntax (Açucar sintático)
console.log(!!'nudhw')

// Undefined e Null
let contador;

console.log(typeof contador == 'undefined')

console.log(6 == '6') // Verifica apenas o valor
console.log(6 === '6') // Verifica o valor e o tipo (É PREFERÍVEL UTILIZAR DESTA FORMA)

let carro = null;

console.log(carro)


// OBJECT

// É uma criação de um objeto literal
const usuario = {
  // Nome é uma propriedade ou chave, "Ramon" é o valor dessa chave/propriedade
  nome: "Ramon",
  idade: 23,
  ehEstudante: false,
  ehProfessor: true,
  profissao: 'Desenvolvedor',
  // Objetos alinhados
  endereco: {
    bairro: 'Parque Paulista',
    cep: '23728372',
    cidade: 'Duque de Caxias'
  },
  // Anonymous Function
  verificaSeEhMaiorDeIdade: function () {
    return this.idade >= 18
  },
  // Arrow Function = >
  log: () => {
    // this.nome será undefined pq estou acessando o this no escopo global
    return `Usuário se chama ${this.nome}`
  }
}

console.log(usuario)
console.log(usuario.nome)
console.log(usuario.endereco.bairro)
console.log(usuario.log())

console.log(usuario.verificaSeEhMaiorDeIdade())

// ARRAY
// No JS um array pode ser uma lista de qualquer coisa, qualquer tipo de dado.
const listaDeCompras = [
  'banana',
  10,
  { valor: true },
  'feijão',
  'frango'
]

// 0....N
console.log(listaDeCompras[listaDeCompras.length - 1])

console.log(typeof listaDeCompras) // object 
console.log(Array.isArray(listaDeCompras)) // Para verificar se esse tipo de dado é um Array utilizar esse método
console.log(listaDeCompras)
console.log(listaDeCompras.length) // Capturo o tamanho do array

// Function
// criando uma função, definindo uma função (lavarLouça) -> { 
// criando um escopo de função }
// Function Expression (Named Function) -> Função nomeada
function log(valor) {
  console.log(valor)
  return valor
}

console.log(somar(10, 5))


function somar(x,y) {
  return x + y
}

function verificaSeEhMaiorDeIdade(idade) {
  return idade >= 18
}

console.log('Ele é maior ou menor de idade?', verificaSeEhMaiorDeIdade(15))

console.log(somar(10, 5))

log('lorena')

// Anonymous Function -> Função sem nome que precisa ser atribuída a uma variável, não consegue acessar antes de criar
const sayMyName = function () {
  console.log("Ramon");
};

sayMyName()

// Arrow Function (Função flecha), o this assume baseado no escopo que a função foi criada, não consegue acessar antes de criar
const fazerAndar = () => {
  // console.log(this)
}

console.log('arrow function', fazerAndar())

let increment = 0;

console.log(increment++); // 0
console.log(increment) // 1
console.log(++increment) // 1


let cont = 0

cont += 2
cont += 2

console.log(cont)

let pao = true;
let queijo = false;

// AND && - verdadeiro se todos forem verdadeiros
console.log(pao && queijo); // saída false

// OR || - verdadeiro se pelo menos um for verdadeiro
console.log(pao || queijo); // saída true

// NOT ! - negação
console.log(!pao); // saída false


// Se eu acordar 10h da manhã então eu vou jogar futebol, senão eu não volto.
// SE condição ENTAO faço alguma coisa OU minha mãe me acordou ENTAO faço alguma coisa SENAO faço outra coisa 

const horaDeAcordar = 10
const horaQueEuAcordei = 11


// If ... else
if (horaQueEuAcordei <= horaDeAcordar) {
  console.log('Boa, posso ir jogar futebol')
} else {
  console.log('Não vou poder ir jogar futebol')
}

function checarTemperatura(temperatura) {
  if (temperatura >= 37.5) {
     // Com o return eu to dizendo pro JS que eu quero parar a execução dessa função
    return "Febre alta"
  
  }

  if (temperatura < 37.5 && temperatura >= 37) {
    return "Febre moderada"
  }

  return 'Saudável'
}

console.log(checarTemperatura(36))

// Switch
function calculadora(numero1, operador, numero2) {
  let resultado;

  switch (operador) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
      console.log("não implementado");
      break;
  }

  return resultado;
}

console.log("+" === "+")
console.log(calculadora(4, "+", 8));


// Looping
let array = ['', '', '']
for (let inicializador = 0; inicializador <= array.length; inicializador++) {
  console.log(inicializador)
}

// Pega todas as posições
let nomes = ['João', 'Paulo', 'Pedro']
for (let nome of nomes){
  console.log(nome)
}

for (let indice in nomes){
  console.log(indice)
}

// ENQUANTO eu estiver na sala ENTAO eu nao vou dormir 

// While
let i = 0
while (i <= 10) {
  console.log('Ainda estou na sala')

  if (i === 10) {
    console.log('Finalmente vou dormir')
  }

  i++
}
