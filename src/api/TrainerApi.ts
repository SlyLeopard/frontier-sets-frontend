import { Trainer } from "../types/Trainer"

export async function getTrainers(
    generation: number
): Promise<Trainer> {

    const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL

    const response = await fetch(`${VITE_API_BASE_URL}/trainer/getTrainers?generation=${generation}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch trainers")
    }

    return response.json()
}