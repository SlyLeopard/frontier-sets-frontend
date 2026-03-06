export abstract class Set {
    name: string
    species: string
    evs: Array<number>
    moves: Array<string>
    nature: string
    item: string
    rank: number

    constructor(
        name: string,
        species: string,
        evs: Array<number>,
        moves: Array<string>,
        nature: string,
        item: string,
        rank: number

    ) {
        this.name = name
        this.species = species
        this.evs = evs
        this.moves = moves
        this.nature = nature
        this.item = item
        this.rank = rank
    }
}