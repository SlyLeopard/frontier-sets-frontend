import type { Pokemon } from "./Pokemon"
import { Set } from "./Set"

export class PokemonSet extends Set {
    pokemon: Pokemon
    generation: number
    rank: number

    constructor(
        name: string,
        species: string,
        pokemon: Pokemon,
        evs: Array<number>,
        moves: Array<string>,
        nature: string,
        item: string,
        generation: number,
        rank: number
    ) {
        super(name, species, evs, moves, nature, item)
        this.generation = generation
        this.rank = rank
        this.pokemon = pokemon
    }    
}