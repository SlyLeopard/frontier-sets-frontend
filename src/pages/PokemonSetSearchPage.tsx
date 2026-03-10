import { useState } from "react"
import PokemonSearch from "../components/PokemonSearch"
import PokemonSetList from "../components/PokemonSetList"
import PaginationControls from "../components/PaginationControls"
import type { Page } from "../types/Page"
import { PokemonSet } from "../types/PokemonSet"
import { searchPokemonSets } from "../api/PokemonSetApi"

export default function PokemonSetSearchPage() {

  const [pageData, setPageData] = useState<Page<PokemonSet> | null>(null)
  const [species, setSpecies] = useState("")
  const [rank, setRank] = useState(0)
  const [page, setPage] = useState(0)

  const runSearch = async (speciesValue: string, rankValue: number) => {

    setSpecies(speciesValue)
    setRank(rankValue)

    const result = await searchPokemonSets(speciesValue, rankValue, 0)

    setPage(0)
    setPageData(result)
  }

  const changePage = async (newPage: number) => {

    const result = await searchPokemonSets(species, rank, newPage)

    setPage(newPage)
    setPageData(result)
  }

  return (
    <div>

      <PokemonSearch onSearch={runSearch} />

      {pageData && (
        <>
          <PokemonSetList sets={pageData.content} />

          <PaginationControls
            page={page}
            totalPages={pageData.totalPages}
            onPageChange={changePage}
          />
        </>
      )}

    </div>
  )
}