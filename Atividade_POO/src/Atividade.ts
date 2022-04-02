const prompt = require("prompt-sync")();

let questao = prompt("Digite qual questão que vê : 1 | 2 | 3 | 4 | 5 :");

switch (questao) {
  case "1":
    let nota1 = prompt("Digite a nota 1: ");
    let nota2 = prompt("Digite a nota 2: ");
    let nota3 = prompt("Digite a nota 3: ");

    let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

    if (media < 5) {
      console.log(`Media: ${media}, Conceito E`);
    } else if (media >= 5 && media < 6) {
      console.log(`Media: ${media}, Conceito D`);
    } else if (media >= 6 && media < 7) {
      console.log(`Media: ${media}, Conceito C`);
    } else if (media >= 7 && media < 8) {
      console.log(`Media: ${media}, Conceito B`);
    } else if (media >= 9 && media <= 10) {
      console.log(`Media: ${media}, Conceito A`);
    }
    break;
  case "2":
    let numeros = [];
    for (let i = 0; i < 3; i++) {
      numeros[i] = parseInt(prompt("Digite um numero"));
    }
    console.log(numeros.sort((a, b) => a - b));
    break;
  case "3":
    let nu = [];
    nu[0] = parseInt(prompt("Digite o numero 1: "));

    for (let i = 1; i < 3; i++) {
      do {
        nu[i] = parseInt(prompt(`Digite o numero ${i + 1}: `));
      } while (nu[i] < nu[i - 1]);
    }

    nu[3] = parseInt(prompt("Digite o numero 4: "));
    console.log(nu.sort((a, b) => a - b));
    break;
  case "4":
    let cargos = ["escrituario", "secretario", "caixa", "gerente", "Diretor"];
    let salarios = [];
    let aumento = [];
    let novos = [];
    for (let i = 0; i < 5; i++) {
      salarios[i] = parseInt(prompt(`Digite o salario do ${cargos[i]}: `));
      if (cargos[i] == "escrituario") {
        aumento[i] = salarios[i] * 0.5;
      } else if (cargos[i] == "secretario") {
        aumento[i] = salarios[i] * 0.35;
      } else if (cargos[i] == "caixa") {
        aumento[i] = salarios[i] * 0.2;
      } else if (cargos[i] == "gerente") {
        aumento[i] = salarios[i] * 0.1;
      } else if (cargos[i] == "Diretor") {
        aumento[i] = 0;
      }
    }

    for (let i = 0; i < 5; i++) {
      novos[i] = aumento[i] + salarios[i];
    }

    console.log("\n");
    for (let i = 0; i < 5; i++) {
      console.log(
        `${cargos[i]} || Aumento: ${aumento[i]} || Novo Salario: ${novos[i]}`
      );
    }
    break;
  case "5":
    let valor = [];
    let ndigita: number;
    let soma = 0;
    let medi = 0;
    let par = [];
    let mediapar = 0;
    let impar = [];
    let porcetagem = 0;

    do {
      do {
        ndigita = parseInt(prompt("Digite um numero"));
      } while (isNaN(ndigita));
      if (ndigita != 30000) {
        valor.push(ndigita);
      }
    } while (ndigita != 30000);

    for (let i = 0; i < valor.length; i++) {
      soma = valor[i] + soma;
      medi = soma / valor.length;

      if (valor[i] % 2 == 0) {
        par.push(valor[i]);
      }

      if (valor[i] % 2 != 0) {
        impar.push(valor[i]);
        porcetagem = impar.length * valor.length;
      }
    }

    for (let i = 0; i < par.length; i++) {
      let somapar = 0;
      somapar = par[i] + somapar;
      mediapar = somapar / par.length;
    }

    let max = Math.max(...valor);
    let min = Math.min(...valor);

    console.log("Soma dos valores ", soma);
    console.log("Numeros digitador ", valor.length);
    console.log("Media dos valores ", soma);
    console.log("Maior numero digitado ", max);
    console.log("Menor numero digitado ", min);
    console.log("media do numeros pares ", mediapar);
    console.log("Porcentagem de numero impares ", porcetagem, "%");

    break;
  default:
    console.log("Numero da questão não existe");
    break;
}
