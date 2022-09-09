import React, { createContext } from "react"

const defaultQueryOptions = {
  limit: 60,
  type: "none",
}

const queryOptionsContext = createContext(defaultQueryOptions)

const QueryOptionsProvider = () => {
  return <div>QueryOptionsProvider</div>
}

export default QueryOptionsProvider
