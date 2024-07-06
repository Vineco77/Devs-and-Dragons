import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";


const magoAntonio = new Mago('Antonio', 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 'Gelo', 7, 10)
const arqueiroVinicius = new Arqueiro('Vinicius', 8)
const arqueiroMagoTata = new ArqueiroMago('Tata', 10, 11, 'Cerveja', 10, 10)
const guerreiroLouco = new Guerreiro('Louco', 7)


const personagens = [magoAntonio, arqueiroVinicius, arqueiroMagoTata, guerreiroLouco, magaJulia]

new PersonagemView(personagens).render()




