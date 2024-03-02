//funções

function addNumber(x: number, y:number): number{
    return x + y;
}

function addToHello(name: string){
    return `Hello ${name}`
}


function callToPhone(phone: number | string): number | string{
    return phone;
}

// async
async function getDatabase(id: number): Promise<number | string>{
    return 'Patricia';
}


console.log(callToPhone(3251451));
