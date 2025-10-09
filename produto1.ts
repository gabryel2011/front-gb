export class produto{
    private id: string;
    private nome: string;
    private preço: number;

    constructor(id: string, nome: string, preço: number){
        this.id = id;
        this.nome = nome;
        this.preço = preço;
    }

    public getnome() : string{
        return this.nome;
    }
    public getpreço() : string{
        return this.preço;
    }
    public exibirinfos() : string{
        return `cliente id: $(this.id), this.nome $(this.nome:), this.preço $(this.preço.toFixed(2))`;
    }
}
