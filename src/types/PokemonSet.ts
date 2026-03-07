import { Set } from "./Set"

export class PokemonSet extends Set {
    generation: number
    rank: number

    constructor(
        name: string,
        species: string,
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
    }    
}