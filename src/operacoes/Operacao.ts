export abstract class Operacao {
  constructor(
    protected numero1: number,
    protected numero2: number
  ) {}

  abstract calcular(): number;
}
