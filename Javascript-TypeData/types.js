// Boolean

let aluno = "Luan"
let avaliacao1 = 8
let ehAprovado = true

console.log(avaliacao1 >= 6)
console.log(ehAprovado, typeof ehAprovado)

// FALSY
// 0 false undefined null "" NaN 

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
    return usuario.idade >= 18
  },
  // Arrow Function = >
  log: () => {
    return `Usuário se chama ${usuario.nome}`
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

// Function Expression (Named Function)
function log(valor) {

  console.log(valor)
  return valor
}

function somar(x,y) {
  return x + y
}


function verificaSeEhMaiorDeIdade(idade) {
  return idade >= 18
}

console.log('Ele é maior ou menor de idade?', verificaSeEhMaiorDeIdade(15))

console.log(somar(10, 5))

log('lorena')
// console.log(lavarLouca('prato do almoço'))
