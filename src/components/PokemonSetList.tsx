import { PokemonSet } from "../types/PokemonSet"

interface Props {
  sets: PokemonSet[]
}

export default function PokemonSetList({ sets }: Props) {

  return (
    <div>
      {sets.map((set) => (
        <div key={set.name}>
          <h3>{set.species}</h3>
          <p>Nature: {set.nature}</p>
          <p>Rank: {set.rank}</p>
          <p>Item: {set.item}</p>
        </div>
      ))}
    </div>
  )
}