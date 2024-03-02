// generics
function concatArray<T>(...itens: T[]): T[]{ // ...spread faz com qua a função receba mais de um argumento
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stringArray = concatArray<string[]>(['Patricia', 'Goku'], [ 'Vegeta'])

console.log(numArray)
console.log(stringArray)