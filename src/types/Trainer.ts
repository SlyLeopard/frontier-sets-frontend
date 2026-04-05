export class Trainer {
    name: string
    trainerClass: string
    rank: number

    constructor(name: string, trainerClass: string, rank: number) {
        this.name = name
        this.trainerClass = trainerClass
        this.rank = rank
    }
}