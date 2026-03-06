import { Set } from "./Set"

export class CustomSet extends Set {
    ivs: Array<number>

    constructor(
        name: string,
        species: string,
        evs: Array<number>,
        moves: Array<string>,
        nature: string,
        item: string,
        rank: number,
        ivs: Array<number>
    ) {
        super(name, species, evs, moves, nature, item, rank)
        this.ivs = ivs
    }
}