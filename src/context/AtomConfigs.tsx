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

export const currentPageAtom = atomWithImmer(1)

export const pokemonLimitAtom = atom(
  pokemonLimitOptions[0],
  (get, set, update) => {
    set(pokemonLimitAtom, update)
    set(currentPageAtom, 1)
  },
)
export const pokemonLimitIntAtom = atom((get) =>
  Number.parseInt(get(pokemonLimitAtom), 10),
)

export const pokemonTypeAtom = atom(
  pokemonTypeOptions[0],
  (get, set, update) => {
    set(pokemonTypeAtom, update)
    set(currentPageAtom, 1)
  },
)

export const pokemonOffsetAtom = atom(
  (get) => get(pokemonLimitIntAtom) * (get(currentPageAtom) - 1),
)
