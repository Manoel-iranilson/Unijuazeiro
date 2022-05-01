const prompt = require("prompt-sync")();

let nome: any[] = []
let idade: any[] = []
let peso: any[] = []
let altura: any[] = []
let cont = 0
let controlador = 0
let função 



function Cadastra(){
                nome.push( prompt("Digite seu nome"))
                idade.push(prompt("Digite sua idade"))
                peso.push(prompt("Digite seu peso"))
                altura.push(prompt("Digite sua altura"))
                console.log("--------------")
            }

function Remover(){
    console.log("remover")
    let remov = nome.indexOf(prompt("Digite o nome para remover"));

    nome.splice(remov, 1);
    idade.splice(remov, 1);
    peso.splice(remov, 1);
    altura.splice(remov, 1);
    console.log("--------------")
}

function Buscar(){
    console.log("Buscar")
    let busc = nome.indexOf(prompt("Digite o nome para buscar"));
    console.log(nome[busc])
    console.log(idade[busc])
    console.log(peso[busc])
    console.log(altura[busc])
    console.log("--------------")

}

function Imc(){
    console.log("IMC")
    let busc = nome.indexOf(prompt("Digite o nome para buscar"));
    let imc = peso[busc] / altura[busc]
    console.log(`seu imc é ${imc}`)
    
}

function Mostrar(){
    for (let i = 0; i < nome.length; i++) {
        console.log(nome[i])
        console.log(idade[i])
        console.log(peso[i])
        console.log(altura[i])
        console.log("--------------")
    }
}
function controle(){
    if (cont < 20){
    Cadastra()
}else{
    console.log("numeros de usuarios esgotados")
}
    cont =+ 1
}


do {
    função = prompt("cadastrar | remover | buscar | imc | mostrar")
    switch (função) {
        case "cadastrar":
             controle()
            break;
        case "remover":
                Remover()
                break;
        case "buscar":
                Buscar() 
            break;
        case "imc":
                Imc()
            break;
        case "mostrar":
            Mostrar()
            break;

        default:
            console.log("Erro!")
            break;
    }
  
    controlador =+ 1
} while (controlador > 20);


