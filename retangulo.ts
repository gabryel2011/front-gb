import { FormaGeometrica } from "./FormasGeometricas";

export class retangulo extends FormaGeometrica {
  private largura: number;
  private altura: number;

  constructor (nome: string, largura: number, largura: number) {
    super(nome);
    this.largura = largura;
    this.altura = altura;
  }
  public calcularArea(): number{
    return this.largura * this.altura;
  }
  
}