import { Operacao } from "./operacoes/Operacao";

export class Calculadora {
  calcular(operacao: Operacao): number {
    return operacao.calcular();
  }
}
