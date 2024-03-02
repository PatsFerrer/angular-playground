type Hero = {
    nome: string;
    vulgo: string;
    telefone: string;
};

function ligarPara(heroi: Hero): string {
    return "ligando para: " + heroi.telefone;
}

ligarPara({
    nome: 'Patricia',
    vulgo: 'Capitã Marvel',
    telefone: '11 317845778'
})