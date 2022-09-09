import React, { useState } from "react"
import { PokemonQuery } from "../components/PokemonQuery"
import { Selector } from "../components/Selector"

interface PokemonQueryPageProps {
  limitOptions: Array<string>
}

export const PokemonQueryPage = ({ limitOptions }: PokemonQueryPageProps) => {
  const [limit, setLimit] = useState("60")

  return (
    <>
      <Selector
        label="Limit"
        values={limitOptions}
        initialValue={limitOptions[0]}
        setSelected={setLimit}
      />
      <br />
      <PokemonQuery limit={limit} />
    </>
  )
}
