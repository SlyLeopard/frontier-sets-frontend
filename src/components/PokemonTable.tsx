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
          
          
        </TableRow>
      </TableHead>

      <TableBody>
        {sets.map((pokemon) => (
          <TableRow key={pokemon.name}>
            <TableCell><img src={pokemon.iconUrl} width="50"></img></TableCell>
            <TableCell>{pokemon.name}</TableCell>
            <TableCell>{pokemon.species}</TableCell>
            <TableCell>{pokemon.item}</TableCell>
            <TableCell>{pokemon.nature}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}