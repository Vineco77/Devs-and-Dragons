import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem{
    forca
    static descricao = 'Você será esmagado pela fúria do Guerreiro!'
    static tipo = 'Guerreiro'

    constructor(nome, forca){
        super(nome)
        this.forca = forca
    }
    insignia(){
        if (this.level >= 7 && this.forca >= 5) {
            return 'Guerreiro furioso'
        }
        return super.insignia()
    }
}