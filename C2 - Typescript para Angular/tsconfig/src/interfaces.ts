// interface (type vs interface)
type robot = {
    readonly id: number | string; // pode fazer isso tb
    name: string;
};


//interface
interface robot2 {
    readonly id: number | string; // pode fazer isso tb
    name: string
    sayHello(): string;
}

// variavel com type
const bot1: robot = {
    id: 1,
    name: 'megaman'
};


// variavel com interface
const bot2: robot2 = {
    id: 1,
    name: 'megaman',

    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};


class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string) {
        this.id = id;
        this.name = name;
    }
    
    sayHello(): string {
        return `hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, 'gutsman');
console.log(p.sayHello())