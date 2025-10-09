import { cliente } from "./cliente";
import { produto } from "./produto";
import { pedido } from "./pedido";

//criando clientes
const cliente1 = new cliente("c001", "maria jose", "mariajose@gmail.com")
const cliente1 = new cliente("c002", "jose maria", "josemaria@gmail.com")

//criando produtos
const produto = new produto("c001", "notebook dell g15", 7000.00)
const produto = new produto("c002", "mouse logitech simples", 150.00)

//criando pedido
const pedido1 = nwe pedido("PE001", cliente1);
pedido1.adicionarproduto(produto);

console.log(pedido1.exibirdetalhes());
console.log(pedido1.getTotal1);



