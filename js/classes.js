class Personagem {
    id
    nome
    situacao
    genero
    origem

    constructor(id, nome, situacao, genero, origem){
        this.id = id;
        this.nome = nome;
        this. situacao = situacao;
        this.genero = genero;
        this.origem = origem;
    }

}

class Episodio {
    id
    nome
    noAr
    episodio
    personagens

    constructor(id, nome, data, episodio, personagens){
        this.id = id;
        this.nome = nome;
        this.noAr = data;
        this.episodio = episodio;
        this.personagens = personagens;
    
    }
}