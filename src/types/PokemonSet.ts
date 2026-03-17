import type { Pokemon } from "./Pokemon"
import { Set } from "./Set"

export class PokemonSet extends Set {
    pokemon: Pokemon
    generation: number
    rank: number
    ivsDefault: Array<number>
    ivsFactory: Array<number>
    statsDefault: Array<number>
    statsFactory: Array<number>
    iconUrl: string

    constructor(
        name: string,
        species: string,
        pokemon: Pokemon,
        evs: Array<number>,
        ivsDefault: Array<number>,
        ivsFactory: Array<number>,
        statsDefault: Array<number>,
        statsFactory: Array<number>,
        iconUrl: string,
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
        this.iconUrl = iconUrl
        this.ivsDefault = ivsDefault
        this.ivsFactory = ivsFactory
        this.statsDefault = statsDefault
        this.statsFactory = statsFactory
    }    
}