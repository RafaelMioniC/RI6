import * as readline from "node:readline";
import { Calculadora } from "./calculadora";
import { Soma } from "./operacoes/Soma";
import { Subtracao } from "./operacoes/Subtracao";
import { Divisao } from "./operacoes/Divisao";
import { Potenciacao } from "./operacoes/Potenciacao";
import { Radiciacao } from "./operacoes/Radiciacao";
import { Bhaskara } from "./operacoes/Bhaskara";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculadora = new Calculadora();

function perguntar(texto: string): Promise<string> {
  return new Promise((resolve) => rl.question(texto, resolve));
}

async function numero(texto: string): Promise<number> {
  return Number(await perguntar(texto));
}

async function calcularDoisNumeros(opcao: string): Promise<void> {
  const n1 = await numero("Primeiro número: ");
  const n2 = await numero("Segundo número: ");

  let operacao;

  switch (opcao) {
    case "1":
      operacao = new Soma(n1, n2);
      break;
    case "2":
      operacao = new Subtracao(n1, n2);
      break;
    case "3":
      operacao = new Divisao(n1, n2);
      break;
    case "4":
      operacao = new Potenciacao(n1, n2);
      break;
    case "5":
      operacao = new Radiciacao(n1, n2);
      break;
    default:
      console.log("Não é opção, não escolher >:^");
      return;
  }

  console.log("Resultado:", calculadora.calcular(operacao));
}

async function menu(): Promise<void> {
  let opcao = "";

  while (opcao !== "0") {
    console.log("\n=== CALCULADORA PAYSANDU ===");
    console.log("1) - Soma");
    console.log("2) - Subtração");
    console.log("3) - Divisão");
    console.log("4) - Potenciação");
    console.log("5) - Radiciação");
    console.log("6) - Equação 2 Grau");
    console.log("0) - Sair");

    opcao = (await perguntar("Escolha: ")).trim();

    switch (opcao) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
        await calcularDoisNumeros(opcao);
        break;

      case "6": {
        const a = await numero("Coeficiente a: ");
        const b = await numero("Coeficiente b: ");
        const c = await numero("Coeficiente c: ");

        new Bhaskara(a, b, c).calcular();
        break;
      }

      case "0":
        console.log("Encerrando a calculadora...");
        break;

      default:
        console.log("Não é opção, não escolher >:^");
    }
  }

  rl.close();
}

menu();