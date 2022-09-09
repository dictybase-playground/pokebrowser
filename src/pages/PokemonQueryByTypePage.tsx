import React, { useState } from "react"
import { PokemonQueryByType } from "../components/PokemonQueryByType"
import { Selector } from "../components/Selector"

interface PokemonQueryByTypePageProps {
  limitOptions: Array<string>
  typeOptions: Array<string>
}

export const PokemonQueryByTypePage = ({
  limitOptions,
  typeOptions,
}: PokemonQueryByTypePageProps) => {
  const [limit, setLimit] = useState("60")
  const [type, setType] = useState("")

  return (
    <>
      <Selector
        label="Limit"
        values={limitOptions}
        initialValue={limitOptions[0]}
        setSelected={setLimit}
      />
      <Selector
        label="Type"
        values={typeOptions}
        initialValue={typeOptions[0]}
        setSelected={setType}
      />
      <br />
      <PokemonQueryByType
        limit={limit}
        type={type}
      />
    </>
  )
}
