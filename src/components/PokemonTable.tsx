import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import type { PokemonSet } from "../types/PokemonSet";

interface Props {
  sets: PokemonSet[]
}

export default function PokemonTable({ sets }: Props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Icon</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Species</TableCell>
          <TableCell>Item</TableCell>
          <TableCell>Nature</TableCell>
          <TableCell>HP</TableCell>
          <TableCell>Atk</TableCell>
          <TableCell>Def</TableCell>
          <TableCell>SpA</TableCell>
          <TableCell>SpD</TableCell>
          <TableCell>SpE</TableCell>
          <TableCell>Move 1</TableCell>
          <TableCell>Move 2</TableCell>
          <TableCell>Move 3</TableCell>
          <TableCell>Move 4</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {sets.map((set) => (
          <TableRow key={set.name}>
            <TableCell><img src={set.iconUrl} width="50"></img></TableCell>
            <TableCell>{set.name}</TableCell>
            <TableCell>{set.species}</TableCell>
            <TableCell>{set.item}</TableCell>
            <TableCell>{set.nature}</TableCell>
            <TableCell>{set.pokemon.stats[0]}</TableCell>
            <TableCell>{set.pokemon.stats[1]}</TableCell>
            <TableCell>{set.pokemon.stats[2]}</TableCell>
            <TableCell>{set.pokemon.stats[3]}</TableCell>
            <TableCell>{set.pokemon.stats[4]}</TableCell>
            <TableCell>{set.pokemon.stats[5]}</TableCell>
            <TableCell>{set.moves[0]}</TableCell>
            <TableCell>{set.moves[1]}</TableCell>
            <TableCell>{set.moves[2]}</TableCell>
            <TableCell>{set.moves[3]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}