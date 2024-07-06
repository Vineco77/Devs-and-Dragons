import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    destreza
    static descricao = 'Você tem o meu arco!'
    static tipo =  'Arqueiro'


    constructor(nome, destreza){
        super(nome)
        this.destreza = destreza
    }


    insignia(){
         if (this.destreza >= 5) {
            return `
               Dominador de Flechas
            `
         }
         return super.insignia()
    }

}