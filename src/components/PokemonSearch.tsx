import { useState } from "react"

interface Props {
  onSearch: (species: string, rank: number) => void
}

export default function PokemonSearch({ onSearch }: Props) {

  const [species, setSpecies] = useState("")
  const [rank, setRank] = useState("")

  const handleSearch = () => {
    onSearch(species, Number(rank))
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