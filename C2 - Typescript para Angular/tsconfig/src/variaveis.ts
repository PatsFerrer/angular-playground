// Tipo primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = 'Irineu';
let idade: number = 25;
let altura: number =1.72;

//tipo especiais: null e undefined
let nulo: null = null;

let indefinido: undefined = undefined;

//tipos abrangentes: any e void
let retornoView: any = 'qualquer coisa'

let retorno: void

//objeto - sem previsibilidade
let produto:object = {
    name: "Irineu",
    cidade: "Vice City",
    idade: 25
}

// objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5
};

// arrays
let dados: string[] = ["Patricia", "Irineu", "Ana"];
let dados2: Array<string> = ["Patricia", "Irineu", "Ana"];

let infos: (string | number)[] = ["Irineu", 30, "Ana", 40];

// Tupla
let boleto:[boolean, string, number] = [false, "conta de água", 150.85]

//datas
let aniversario: Date = new Date("2024-02-18 05:00");
console.log(aniversario.toString());