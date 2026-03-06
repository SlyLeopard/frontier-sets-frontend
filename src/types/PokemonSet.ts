export interface PokemonSet {
    name: string
    species: string
    hpEv: number
    atkEv: number
    defEV: number
    spaEv: number
    spdEv: number
    speEV: number
    moves: Array<string>
    nature: string
    item: string
    rank: number
    generation: number
    isCustom: boolean
}