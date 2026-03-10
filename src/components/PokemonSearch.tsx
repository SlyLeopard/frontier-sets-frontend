import { useState } from "react"
import { getPokemonSet } from "../api/ApiConnector"
import { PokemonSet } from "../types/PokemonSet"
import type { Page } from "../types/Page"

interface Props {
  onResult: (data: Page<PokemonSet>) => void
}

export default function PokemonSearch({ onResult }: Props) {

  const [species, setSpecies] = useState("")
  const [rank, setRank] = useState("")

  const handleSearch = async () => {
    const result = await getPokemonSet(species, Number(rank))
    onResult(result)
  }

  return (
    <div>
      <input
        placeholder="Pokemon Species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      />

      <input
        placeholder="Rank"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}