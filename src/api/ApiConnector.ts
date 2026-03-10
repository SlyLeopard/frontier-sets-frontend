import type { Page } from "../types/Page";
import { PokemonSet } from "../types/PokemonSet"

export async function getPokemonSet(
    species: string,
    rank: number
): Promise<Page<PokemonSet>> {

    const searchParameters = {
        rank: rank,
        species: species
    }

    const response = await fetch(`http://localhost:8080/pokemon-set/search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(searchParameters)
    });

    if (!response.ok) {
        throw new Error("Failed to fetch PokemonSets")
    }

    console.log('Response: ', response)
    return response.json()
}