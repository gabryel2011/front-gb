import { Cliente } from "./Cliente";
import { Produto } from "./Produto";

export class Pedido {
    private id: string;
    private cliente: Cliente;
    private produtos: Produto[];
    private dataPedido: Date;

    constructor(id: string, cliente: Cliente) {
        this.id = id;
        this.cliente = cliente;
        this.produtos = [];
        this.dataPedido = new Date();
    }
    public adicionaProduto(produto: Produto): void {
        this.produtos.push(produto);
    }
    public getTotal(): number {
        return this.produtos.reduce((total, produto) => total + produto.getPreco(), 0);
    }
    public exibirDetalhes(): string {
        let detalhesProdutos = this.produtos.map(p => ${p.getNome()} (R$${p.getPreco().toFixed(2)})).join("\n");
        return `
Pedido ID: ${this.id}
Cliente: ${this.cliente.getNome()} (${this.cliente.getEmail()})
Data do Pedido: ${this.dataPedido.toLocaleDateString()}
Produtos:
${detalhesProdutos}
Total: R$${this.getTotal().toFixed(2)}
`;
    }
}