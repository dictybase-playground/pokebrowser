import { atomWithImmer } from "jotai/immer"
import { atom } from "jotai"

export const pokemonLimitOptions = ["60", "90", "120", "150"]

export const pokemonTypeOptions = [
  "all",
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
]

export const pokemonLimitAtom = atom(
  pokemonLimitOptions[0],
  (get, set, update) => {
    set(pokemonLimitAtom, update)
    set(currentPageAtom, 1)
  },
)
export const pokemonLimitIntAtom = atom((get) =>
  parseInt(get(pokemonLimitAtom)),
)

export const pokemonTypeAtom = atomWithImmer(pokemonTypeOptions[0])

export const currentPageAtom = atomWithImmer(1)
