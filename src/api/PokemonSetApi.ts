import type { Page } from "../types/Page";
import { PokemonSet } from "../types/PokemonSet"

export async function searchPokemonSets(
    species: string,
    rank: number,
    page: number
): Promise<Page<PokemonSet>> {

    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const searchParameters = {
        rank: rank,
        species: species,
    }

    const response = await fetch(`${VITE_API_BASE_URL}/pokemon-set/search?page=${page}&pageSize=20`, {
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

    return response.json()
}