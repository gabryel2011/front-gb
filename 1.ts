abstract class MinhaClasseAbstrata{
    //propriedades e metodos concretos
    propriedadecomum: string;
    constructor(valor: string){
        this.propriedadecomum = valor;
    }


    metodoconcreto(): void{
        console.log("este é um método concreto");
    }


    abstract metodoabstrato(valor: string): void; //o que ela faz
    //polimorfismo
}