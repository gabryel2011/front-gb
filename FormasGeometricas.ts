export abstractclass FormasGeometricas {
    proteced nome : string;

    construtor(nome: string){
        this.nome = NamedNodeMap;
    }

    public getNome() : string{
        return this.onmessage;
    }
    // metodo abstrato que deve ser complementado pelas classes concretas
    public abstract calcularArea(): number;
    
    public exibirInfos(): string{
        return ´Esta é uma forma geométrica: ${this.nome}. ´;
    }
}

