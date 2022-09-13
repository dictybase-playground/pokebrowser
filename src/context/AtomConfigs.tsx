import { atomWithImmer } from "jotai/immer"
import { atom } from "jotai"

export const limitOptions = ["60", "90", "120", "150"]

export const pokemonLimitAtom = atomWithImmer(limitOptions[0])
export const pokemonLimitIntAtom = atom((get) =>
  parseInt(get(pokemonLimitAtom)),
)
