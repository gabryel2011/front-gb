import { FormaGeometrica } from "./FormasGeometricas";

export class circulo extends FormaGeometrica {
  private raio: number;


  construtor(nome: string, raio: number){
    super(nome);
    this.raio = raio;
  }

  prublic calcularArea(): number{
    return Math.PI * this.raio * this.raio;
  }
  public getRaio(): number{
    returnthis.raio
  }
  public exibirInfos(): string {
    return ´${super.exibirInfos()} É um circulo com raio ${this.raio}´;
  }
}