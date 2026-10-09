export class Bhaskara {
  constructor(
    private a: number,
    private b: number,
    private c: number
  ) {}

  calcular(): void {
    const delta = this.b ** 2 - 4 * this.a * this.c;

    if (delta < 0) {
      console.log("A equação não possui raízes reais.");
      return;
    }

    const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
    const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);

    console.log(`Delta: ${delta}`);
    console.log(`x1: ${x1}`);
    console.log(`x2: ${x2}`);
  }
}
