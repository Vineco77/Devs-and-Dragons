import { Arqueiro } from "./arqueiro.js"
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMagico
    static descricao = 'Detentor de lancas e flechas mágicas!'
    static tipo =  "ArqueiroMago"

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome);
        this.ladoArqueiro = new Arqueiro(nome, destreza)
        this.ladoMagico = new Mago(nome, elementoMagico, levelMagico, inteligencia)
    }

    insignia(){
        return `${this.ladoArqueiro.insignia()} e ${this.ladoMagico.insignia()} `
    }
}

